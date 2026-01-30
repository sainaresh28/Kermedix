import { useEffect, useRef, useCallback } from "react";
import "./ScrollStack.css";

/* =========================
   ScrollStack Item
========================= */
export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>
    {children}
  </div>
);

/* =========================
   ScrollStack
========================= */
const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}) => {
  const scrollerRef = useRef(null);
  const cardsRef = useRef([]);
  const rafRef = useRef(null);

  const smoothScrollRef = useRef(0);
  const targetScrollRef = useRef(0);
  const lastScrollRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);

  const stackCompletedRef = useRef(false);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);

  const cachedValuesRef = useRef({
    stackPositionPx: 0,
    scaleEndPositionPx: 0,
    containerHeight: 0,
    endElementTop: 0,
    cardPositions: [],
  });

  /* ---------------- Utilities ---------------- */

  const parsePercentage = useCallback((value, height) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * height;
    }
    return parseFloat(value);
  }, []);

  const calculateProgress = (scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  };

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: smoothScrollRef.current,
        containerHeight: window.innerHeight,
      };
    }
    const scroller = scrollerRef.current;
    if (!scroller) return { scrollTop: 0, containerHeight: 0 };
    return {
      scrollTop: smoothScrollRef.current,
      containerHeight: scroller.clientHeight,
    };
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (el) => {
      if (!el) return 0;
      if (useWindowScroll) {
        const rect = el.getBoundingClientRect();
        return rect.top + window.scrollY;
      }
      return el.offsetTop;
    },
    [useWindowScroll]
  );

  /* ---------------- Cache geometry ---------------- */

  const updateCachedValues = useCallback(() => {
    const { containerHeight } = getScrollData();

    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(
      scaleEndPosition,
      containerHeight
    );

    const endEl = useWindowScroll
      ? document.querySelector(".scroll-stack-end")
      : scrollerRef.current?.querySelector(".scroll-stack-end");

    const endElementTop = endEl ? getElementOffset(endEl) : 0;

    const cardPositions = cardsRef.current.map((c) =>
      c ? getElementOffset(c) : 0
    );

    cachedValuesRef.current = {
      stackPositionPx,
      scaleEndPositionPx,
      containerHeight,
      endElementTop,
      cardPositions,
    };
  }, [
    getScrollData,
    parsePercentage,
    stackPosition,
    scaleEndPosition,
    useWindowScroll,
    getElementOffset,
  ]);

  /* ---------------- Card transforms ---------------- */

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;
    isUpdatingRef.current = true;

    const { scrollTop } = getScrollData();
    const {
      stackPositionPx,
      scaleEndPositionPx,
      containerHeight,
      endElementTop,
      cardPositions,
    } = cachedValuesRef.current;

    let topCardIndex = 0;
    if (blurAmount) {
      for (let i = 0; i < cardsRef.current.length; i++) {
        const trigger =
          cardPositions[i] - stackPositionPx - itemStackDistance * i;
        if (scrollTop >= trigger) topCardIndex = i;
      }
    }

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = cardPositions[i];
      const triggerStart =
        cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(
        scrollTop,
        triggerStart,
        triggerEnd
      );

      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount
        ? i * rotationAmount * scaleProgress
        : 0;

      let blur = 0;
      if (blurAmount && i < topCardIndex) {
        blur = (topCardIndex - i) * blurAmount;
      }

      let translateY = 0;
      if (scrollTop >= triggerStart && scrollTop <= pinEnd) {
        translateY =
          scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY =
          pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const transform = {
        y: Math.round(translateY * 100) / 100,
        s: Math.round(scale * 1000) / 1000,
        r: Math.round(rotation * 100) / 100,
        b: Math.round(blur * 100) / 100,
      };

      const last = lastTransformsRef.current.get(i);
      if (
        !last ||
        Math.abs(last.y - transform.y) > 0.1 ||
        Math.abs(last.s - transform.s) > 0.001 ||
        Math.abs(last.r - transform.r) > 0.1 ||
        Math.abs(last.b - transform.b) > 0.1
      ) {
        card.style.transform = `translate3d(0, ${transform.y}px, 0) scale(${transform.s})${
          rotation ? ` rotate(${transform.r}deg)` : ""
        }`;
        card.style.filter = transform.b
          ? `blur(${transform.b}px)`
          : "none";

        lastTransformsRef.current.set(i, transform);
      }

      if (i === cardsRef.current.length - 1) {
        const inView = scrollTop >= triggerStart && scrollTop <= pinEnd;
        if (inView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        }
        if (!inView) stackCompletedRef.current = false;
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    getScrollData,
  ]);

  /* ---------------- RAF with Mobile Fix ---------------- */

  const startRAF = useCallback(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;

    const baseEase = isMobile ? 0.18 : 0.08;
    const snapEase = isMobile ? 0.35 : 0.18;

    const loop = (time) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = Math.min(64, time - lastTimeRef.current);
      lastTimeRef.current = time;

      const realScroll = useWindowScroll
        ? window.scrollY
        : scrollerRef.current?.scrollTop || 0;

      velocityRef.current = realScroll - lastScrollRef.current;
      lastScrollRef.current = realScroll;

      targetScrollRef.current = realScroll;

      const reversing =
        Math.sign(velocityRef.current) !==
        Math.sign(targetScrollRef.current - smoothScrollRef.current);

      const ease = reversing ? snapEase : baseEase;

      smoothScrollRef.current +=
        (targetScrollRef.current - smoothScrollRef.current) *
        (1 - Math.pow(1 - ease, delta / 16));

      if (Math.abs(targetScrollRef.current - smoothScrollRef.current) < 0.5) {
        smoothScrollRef.current = targetScrollRef.current;
      }

      updateCardTransforms();
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
  }, [updateCardTransforms, useWindowScroll]);

  /* ---------------- Effect ---------------- */

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scroller = scrollerRef.current;
    if (!scroller && !useWindowScroll) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-card")
        : scroller.querySelectorAll(".scroll-stack-card")
    );

    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = "transform, filter";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
    });

    updateCachedValues();
    startRAF();

    const onResize = () => {
      updateCachedValues();
      updateCardTransforms();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafRef.current);
      cardsRef.current = [];
      lastTransformsRef.current.clear();
    };
  }, [
    itemDistance,
    useWindowScroll,
    startRAF,
    updateCachedValues,
    updateCardTransforms,
  ]);

  return (
    <div
      ref={scrollerRef}
      className={`scroll-stack-scroller ${className}`.trim()}
    >
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" style={{ height: "50vh" }} />
      </div>
    </div>
  );
};

export default ScrollStack;
