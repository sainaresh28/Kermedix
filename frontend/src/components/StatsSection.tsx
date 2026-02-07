import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1100, label: "Registered Workers", img: "/images/facility1.webp", plus: true },
  { value: 80, label: "Healthcare Providers", img: "/images/facility2.webp", plus: true  },
  { value: 2400, label: "Digital Health Records", img: "/images/facility3.webp", plus: true },
  { value: 750, label: "Vaccinations Tracked", img: "/images/facility4.webp", plus: true },
  { value: 14, label: "Districts Covered", img: "/images/facility5.webp", plus: true  },
  { value: 500, label: "Emergency Accesses", img: "/images/facility6.webp", plus: true },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const card = {
  hidden: { scale: 1.08, opacity: 0, y: 70 },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const imageReveal = {
  hidden: { clipPath: "polygon(0% 100%,100% 100%,100% 100%,0% 100%)" },
  show: {
    clipPath: "polygon(0% 100%,100% 100%,100% 0%,0% 0%)",
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

function CountUp({
  value,
  plus,
  trigger,
}: {
  value: number;
  plus?: boolean;
  trigger: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    const start = performance.now();
    const duration = 1600;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [trigger, value]);

  return (
    <span>
      {count.toLocaleString()}
      {plus ? "+" : ""}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.35 });
  const controls = useAnimation();

  const textSectionRef = useRef(null);
const { scrollYProgress } = useScroll({
  target: textSectionRef,
  offset: ["start 100%", "end -20%"]
});

  
  const xLine1 = useTransform(scrollYProgress, [0, 0.5, 1], ["100%", "0%", "-50%"]);
  const yLine2 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["100%", "100%", "0%", "-20%"]);
  const opacityLine1 = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 1, 1, 0.3]);
  const opacityLine2 = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [0, 0, 1, 1]);

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden"); 
    }
  }, [inView, controls]);

  return (
    <section ref={ref} className="stats-section">
      <style>{css}</style>

      {/* Intro */}
      <motion.div
        className="top-text"
        animate={controls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <h2>Making Healthcare Accessible</h2>
        <p>Our platform has empowered thousands of migrant workers with digital health records, ensuring healthcare continuity across Kerala.</p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="items"
        variants={container}
        initial="hidden"
        animate={controls}
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="stat-card"
            variants={card}
            whileHover={{ scale: 1.03 }}
          >
            <motion.img
              src={s.img}
              alt={`${s.label} illustration`}
              variants={imageReveal}
            />

            <div className="stat-overlay">
              <p className="stat-number">
                <CountUp
                  value={s.value}
                  plus={s.plus}
                  trigger={inView}
                />
              </p>
              <p>{s.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll-Based Text Animation */}
      <div ref={textSectionRef} className="text-animation-section">
        <div className="text-wrapper">
          
          <motion.div 
            className="text-line line-1"
            style={{ 
              x: xLine1,
              opacity: opacityLine1
            }}
          >
            <span className="text-content">
              OUR STATISTICS REFLECT NOT JUST SCALE, BUT TRUST, ACCESS, AND CONTINUITY OF CARE • OUR STATISTICS REFLECT NOT JUST SCALE, BUT TRUST, ACCESS, AND CONTINUITY OF CARE
            </span>
          </motion.div>

          <motion.div 
            className="text-line line-2"
            style={{ 
              y: yLine2,
              opacity: opacityLine2
            }}
          >
            <span className="text-content">
              OUR STATS
            </span>
        
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================= CSS ================= */
const css = `
.stats-section{
  background:#FFFDF5;
  padding:0;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  overflow:hidden;
  position:relative;
}



.top-text{
  text-align:center;
  margin-bottom:1.2rem;
}

.top-text h2{
  font-size:2.5rem;
  font-weight:700;
  color:#1a1a1a;
  margin-bottom:0.8rem;
}

.top-text p{
  max-width:640px;
  margin:.5rem auto;
  color:#555;
  font-size:1.1rem;
  line-height:1.6;
}

.items{
  display:flex;
  gap:1.4rem;
  padding:0 1.4rem;
  margin-bottom:1rem;
}

.stat-card{
  position:relative;
  flex:1;
  height:320px;
  border-radius:22px;
  overflow:hidden;
  cursor:pointer;
}

.stat-card img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.stat-overlay{
  position:absolute;
  inset:0;
  padding:1.3rem;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  background:linear-gradient(
    to top,
    rgba(0,0,0,.58),
    rgba(0,0,0,.28),
    transparent
  );
}

.stat-number{
  font-size:2.4rem;
  font-weight:800;
  color:white;
  text-shadow:0 2px 10px rgba(0,0,0,.4);
  margin-bottom:0.3rem;
}

.stat-overlay p:last-child{
  font-size:1.05rem;
  font-weight:600;
  color:#f0f0f0;
  text-shadow:0 1px 6px rgba(0,0,0,.35);
}

/* Text Animation Section */
.text-animation-section{
  width:100%;
  height:600px;
  position:relative;
  overflow:hidden;
  background:#FFFDF5;
  display:flex;
  align-items:center;
  justify-content:center;
}

.text-wrapper{
  position:relative;
  width:100%;
  height:180%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}

.text-line{
  position:absolute;
  width:max-content;
  white-space:nowrap;
  display:flex;
  will-change:transform;
}

.line-1{
  top:20%;
  transform:translateY(-50%);
}

.line-2{
  top:50%;
  transform:translateY(-50%);
}

.text-content{
  font-size:clamp(96px, 14vw, 220px);
  font-weight:900;
  font-style:normal;
  color:#2f18ff;
  letter-spacing:-0.03em;
  word-spacing: 0.2em;
  text-transform:uppercase;
  padding:5vw;
  line-height:1;
  user-select:none;
  -webkit-text-stroke:1.5px rgba(0,0,0,0.08);
}

.text-content[aria-hidden="true"]{
  padding-left:4vw;
}

/* MOBILE RESPONSIVE */
@media (max-width:768px){
  .top-text h2{
    font-size:2.8rem;
  }
  
  .top-text p{
    font-size:0.95rem;
    padding:0 2rem;
  }
  
  .items{
    overflow-x:auto;
    scroll-snap-type:x mandatory;
    -webkit-overflow-scrolling:touch;
    scrollbar-width:none;
  }
  
  .items::-webkit-scrollbar{
    display:none;
  }
  
  .stat-card{
    flex:0 0 85%;
    scroll-snap-align:center;
    height:260px;
  }
  
  
  .text-animation-section{
    height:400px;
  }
  
  .text-content{
    font-size:clamp(96px, 14vw, 220px);
    padding:2vw;
  }
}

@media (max-width:480px){
  .top-text h2{
    font-size:2.5rem;
  }
  
  .stat-number{
    font-size:2rem;
  }
  
  .stat-overlay p:last-child{
    font-size:0.9rem;
  }
  
  .stat-card{
    flex:0 0 90%;
    height:240px;
  }
  
  .text-animation-section{
    height:200px;
  }
  
  .text-content{
    font-size:clamp(66px, 10vw, 140px);
  }

  @media (max-width: 768px){
  .line-2{
    transform: translateY(40%) !important;
    will-change: auto;
  }
}

}

}
`;
