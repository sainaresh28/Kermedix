"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import stepClick from "@/assets/step-click.mp3";

/* ================= DATA ================= */

const keyDifferentiators = [
  "Centralized digital health database",
  "Real-time updates",
  "Strict privacy control",
  "Chronic health tracking",
  "ERP & HRMS Integration",
  "Powerful analytics & reports",
];

const ROW_HEIGHT = 44;

/* ================= COMPONENT ================= */

const DigitalHealthSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lastIndexRef = useRef<number>(-1);

  /* ---------- HAPTIC CONTROL ---------- */
  const hasUserInteractedRef = useRef(false);
  const isMobileRef = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [pillY, setPillY] = useState(0);

  /* ---------- DEVICE DETECTION ---------- */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    const isMobileUA = /Android|iPhone|iPad|iPod/i.test(
      navigator.userAgent
    );

    isMobileRef.current = isTouch && isMobileUA;
  }, []);

  /* ---------- USER INTERACTION UNLOCK ---------- */
  useEffect(() => {
    const unlock = () => {
      hasUserInteractedRef.current = true;

      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("wheel", unlock);
    };

    window.addEventListener("click", unlock);
    window.addEventListener("touchstart", unlock);
    window.addEventListener("keydown", unlock);
    window.addEventListener("wheel", unlock);

    return () => {
      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("wheel", unlock);
    };
  }, []);

  /* ---------- SAFE HAPTIC TRIGGER ---------- */
  const triggerHaptic = (pattern: number | number[]) => {
    if (
      isMobileRef.current &&
      hasUserInteractedRef.current &&
      typeof navigator !== "undefined" &&
      "vibrate" in navigator &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      navigator.vibrate(pattern);
    }
  };

  /* ---------- INIT SOUND ---------- */
  useEffect(() => {
    const audio = new Audio(stepClick);
    audio.volume = 0.35;
    audioRef.current = audio;
  }, []);

  /* ---------- RESET ON LEAVE ---------- */
  useEffect(() => {
    if (!sectionRef.current) return;

    const resetObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          lastIndexRef.current = -1;
          setActiveIndex(0);
          setPillY(0);
        }
      },
      { threshold: 0 }
    );

    resetObserver.observe(sectionRef.current);
    return () => resetObserver.disconnect();
  }, []);

  /* ---------- STEP ENGINE ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      () => {
        const centerY = window.innerHeight * 0.45;
        let closestIndex = lastIndexRef.current;
        let minDistance = Infinity;

        itemRefs.current.forEach((el, index) => {
          if (!el) return;

          const rect = el.getBoundingClientRect();
          const elCenter = rect.top + rect.height / 2;
          const distance = Math.abs(elCenter - centerY) * 0.7;

          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        });

        if (closestIndex !== lastIndexRef.current) {
          lastIndexRef.current = closestIndex;
          setActiveIndex(closestIndex);

          const el = itemRefs.current[closestIndex];
          if (el) setPillY(el.offsetTop);

          audioRef.current?.play().catch(() => {});
          triggerHaptic([40, 60, 40]);
        }
      },
      {
        rootMargin: "-36% 0px -36% 0px",
        threshold: 0,
      }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ---------- RENDER ---------- */
  return (
    <div className="space-y-6">
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-black">
        Digital Health Records
      </h2>

      {/* DESCRIPTION */}
      <div className="mt-8 space-y-4 text-[16.5px] leading-relaxed text-black/65">
        <span
          style={{ fontFamily: "Kalam, 'Comic Sans MS', cursive" }}
          className="block text-[18px] text-black/60"
        >
          <p>
            KerMedix&apos;s Digital Health Records service enables institutions to
            securely maintain and analyze worker medical data in real time.
          </p>
          <br />
          <p>
            The platform supports emergency response, compliance audits, and
            long-term health trend insights.
          </p>
        </span>
      </div>

      {/* DIFFERENTIATORS */}
      <div ref={sectionRef}>
        <h3 className="text-sm tracking-[0.7em] font-bold text-black/60 mb-4">
          KEY DIFFERENTIATORS
        </h3>

        <div className="relative pl-5">
          {/* GLASS PILL */}
          <motion.div
            animate={{ y: pillY, scale: 1.035 }}
            transition={{
              type: "spring",
              stiffness: 340,
              damping: 18,
              mass: 0.35,
            }}
            className="
              absolute left-0
              w-[95%] h-[44px]
              rounded-full
              backdrop-blur-2xl
              bg-white/45
              border border-white/60
              shadow-[0_10px_24px_rgba(0,0,0,0.18)]
              pointer-events-none
            "
          />

          {/* TEXT ROWS */}
          {keyDifferentiators.map((text, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              style={{ height: ROW_HEIGHT }}
              className="relative flex items-center"
            >
              <motion.p
                animate={{
                  opacity: activeIndex === index ? 1 : 0.3,
                  scale: activeIndex === index ? 1.07 : 0.96,
                }}
                transition={{
                  duration: 0.085,
                  ease: "easeOut",
                }}
                className="text-lg font-medium tracking-[-0.01em] text-black"
              >
                {text}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalHealthSection;
