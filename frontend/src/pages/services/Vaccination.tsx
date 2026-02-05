import {
  Syringe,
  Shield,
  Calendar,
  Bell,
  CheckCircle,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

/* ---------------- MOTION VARIANTS ---------------- */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// Desktop / tablet
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

// Mobile only (left → right)
const slideInMobile = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const Vaccination = () => {
  const { scrollYProgress } = useScroll();

  const accentY = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3], [0.15, 0.4]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  return (
    <>
      {/* FONT */}
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap");

          .saas {
            font-family: "Montserrat", system-ui, -apple-system,
              BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          }

          .saas-h1 {
            font-weight: 800;
            letter-spacing: -0.03em;
            line-height: 1.05;
          }

          .saas-h2 {
            font-weight: 700;
            letter-spacing: -0.02em;
          }

          .saas-body {
            font-weight: 500;
            line-height: 1.7;
          }
        `}
      </style>

      <section className="saas relative min-h-screen bg-transparent pt-20 sm:pt-32 pb-24 overflow-hidden">

        {/* Scroll accent */}
        <motion.div
          style={{ y: accentY }}
          className="hidden lg:block absolute left-8 top-0 w-[2px] h-[140px]
          bg-gradient-to-b from-[#FFCC33]/0 via-[#FFCC33] to-[#FFCC33]/0"
        />

        {/* Glow */}
        <motion.div
          style={{ opacity: glowOpacity, scale: glowScale }}
          className="absolute -top-48 -right-48
          h-[360px] w-[360px] sm:h-[420px] sm:w-[420px]
          rounded-full bg-[#FFCC33]/30 blur-[140px]"
        />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6">

          {/* ================= HERO ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-xl sm:max-w-3xl mb-20 sm:mb-24"
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] sm:text-xs uppercase tracking-[0.28em]
              text-black/60 mb-4"
            >
              Immunization infrastructure
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="saas-h1 text-[34px] sm:text-[56px] text-black mb-5"
            >
              Vaccination programs,
              <br />
              built for continuity & trust.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="saas-body text-[15px] sm:text-[18px] text-black/70"
            >
              Comprehensive immunization services designed to protect migrant
              workers from preventable diseases — consistently and reliably.
            </motion.p>
          </motion.div>

          {/* ================= CORE FEATURES ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-5 sm:gap-8 mb-24"
          >
            {[
              {
                icon: Syringe,
                title: "Essential vaccinations",
                desc: "WHO-recommended vaccines including COVID-19, Hepatitis B, and Tetanus.",
              },
              {
                icon: Shield,
                title: "Protection record",
                desc: "Digitally stored certificates and lifelong immunization history.",
              },
              {
                icon: Calendar,
                title: "Scheduled camps",
                desc: "On-site vaccination camps near worker accommodations.",
              },
              {
                icon: Bell,
                title: "Dose reminders",
                desc: "Automated alerts for booster and follow-up doses.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: {
                      ...(slideInMobile.hidden),
                      ...(fadeUp.hidden),
                    },
                    visible: {
                      ...(slideInMobile.visible),
                      ...(fadeUp.visible),
                    },
                  }}
                  className="rounded-2xl bg-[#FFF7D6]
                  border border-black/10 p-5 sm:p-6
                  active:scale-[0.98] transition-transform"
                >
                  <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-[#FFCC33]
                  flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-black" />
                  </div>

                  <h3 className="font-semibold text-black mb-2">
                    {item.title}
                  </h3>

                  <p className="saas-body text-black/65 text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ================= AVAILABLE VACCINES ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-24"
          >
            <motion.h2
              variants={fadeUp}
              className="saas-h2 text-[24px] sm:text-[32px] text-black mb-8"
            >
              Available vaccines
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {[
                ["COVID-19", "Primary doses and booster shots"],
                ["Hepatitis B", "Three-dose liver protection series"],
                ["Tetanus", "Booster every 10 years"],
                ["Influenza", "Annual flu vaccination"],
                ["Typhoid", "Protection against typhoid fever"],
                ["MMR", "Measles, mumps, rubella for adults"],
              ].map(([title, desc], i) => (
                <motion.div
                  key={i}
                  variants={slideInMobile}
                  className="rounded-xl bg-[#402EE6]/5
                  border border-black/10 p-4 sm:p-5"
                >
                  <h3 className="font-semibold text-black mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-black/65">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================= FREE PROGRAM ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-3xl bg-black px-6 sm:px-14 py-12 sm:py-16"
          >
            <h2 className="saas-h2 text-[24px] sm:text-[32px] text-white mb-5">
              Free vaccination program
            </h2>

            <p className="saas-body text-white/80 max-w-2xl mb-8">
              All essential vaccinations are provided free of cost to registered
              migrant workers under government-supported health initiatives.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                "No charges for approved vaccines",
                "Instant digital vaccination certificate",
                "Camp locations near worker housing",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#FFCC33] mt-1" />
                  <p className="saas-body text-white/85 text-sm sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Vaccination;
