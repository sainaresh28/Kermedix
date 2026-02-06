import {
  BookOpen,
  ClipboardCheck,
  AlertTriangle,
  Info,
  Phone,
  CheckCircle,
  ShieldAlert,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import HygieneImg from "@/assets/Guideline.jpg";

/* ---------------- MOTION ---------------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Guidelines() {
  return (
    <>
      {/* FONT */}
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap");

          .saas {
            font-family: "Montserrat", system-ui, sans-serif;
          }

          .h1 {
            font-weight: 800;
            letter-spacing: -0.03em;
            line-height: 1.05;
          }

          .h2 {
            font-weight: 700;
            letter-spacing: -0.02em;
          }

          .body {
            font-weight: 500;
            line-height: 1.7;
          }
        `}
      </style>

      <section className="saas min-h-screen bg-transparent pt-20 sm:pt-28 md:pt-32 pb-20 sm:pb-24 md:pb-32">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* ================= HERO ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16 sm:mb-20 md:mb-28"
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-black/60 mb-3 sm:mb-4">
              Health & safety guidance
            </p>

            <h1 className="h1 text-3xl xs:text-[34px] sm:text-[42px] md:text-[56px] text-black mb-4 sm:mb-6">
              Practical health guidelines
              <br className="hidden sm:block" /> for everyday safety
            </h1>

            <p className="body text-black/70 text-sm sm:text-base max-w-2xl">
              Clear, actionable guidance designed to help migrant workers stay
              healthy at home, at work, and in public environments.
            </p>
          </motion.div>

          {/* ================= HYGIENE — CHECKLIST + VISUAL ================= */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="mb-16 sm:mb-20 md:mb-28"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <BookOpen className="h-6 w-6 sm:h-7 sm:w-7 text-[#FFCC33]" />
              <h2 className="h2 text-xl sm:text-2xl md:text-2xl text-black">
                General health & hygiene
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start">

              {/* LEFT — CHECKLIST RAIL */}
              <div className="relative pl-7 sm:pl-8 space-y-3 sm:space-y-4">
                <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-[#FFCC33]" />

                {[
                  "Maintain personal hygiene with regular hand washing",
                  "Drink clean water and eat hygienic food",
                  "Ensure ventilation in living spaces",
                  "Prevent mosquito breeding",
                  "Use clean clothing and towels",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#FFCC33] mt-1 flex-shrink-0" />
                    <p className="body text-black/70 text-sm sm:text-base">{item}</p>
                  </div>
                ))}
              </div>

              {/* RIGHT — HYGIENE VISUAL */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative mt-8 lg:mt-0"
              >
                <div
                  className="
                    relative rounded-xl sm:rounded-2xl
                    bg-[#FFF7D6]
                    border border-black/10
                    p-3 sm:p-4 md:p-6
                  "
                >
                  {/* subtle depth layer */}
                  <div
                    className="
                      absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3
                      rounded-xl sm:rounded-2xl bg-[#FFE08A]
                      border border-black/10
                      -z-10
                    "
                  />

                  <img
                    src={HygieneImg}
                    alt="Personal hygiene practices"
                    className="
                      w-full h-auto
                      rounded-lg sm:rounded-xl
                      object-cover
                    "
                  />

                  {/* caption */}
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-black/60">
                    Simple hygiene practices significantly reduce illness and infection.
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.section>

          {/* ================= HEALTH CHECKUPS — TIMELINE ================= */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="mb-16 sm:mb-20 md:mb-28"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <ClipboardCheck className="h-6 w-6 sm:h-7 sm:w-7 text-[#FFCC33]" />
              <h2 className="h2 text-xl sm:text-2xl md:text-2xl text-black">
                Regular health checkups
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
              {[
                "Annual screening",
                "Vaccinations",
                "BP & sugar monitoring",
                "Early reporting",
                "Record updates",
              ].map((step, i) => (
                <div
                  key={i}
                  className="relative rounded-lg sm:rounded-xl bg-[#FFF7D6]
                  border border-black/10 px-3 sm:px-4 py-4 sm:py-5 text-center"
                >
                  <div className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2
                  h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#FFCC33]
                  text-black text-xs font-semibold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <p className="body text-black/70 text-xs sm:text-sm mt-2 sm:mt-3">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ================= WORKPLACE SAFETY — HAZARD TILES ================= */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="mb-16 sm:mb-20 md:mb-28"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <ShieldAlert className="h-6 w-6 sm:h-7 sm:w-7 text-[#FFCC33]" />
              <h2 className="h2 text-xl sm:text-2xl md:text-2xl text-black">
                Workplace safety
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                "Use PPE at all times",
                "Follow machinery safety rules",
                "Report hazards immediately",
                "Avoid fatigue & heat stress",
                "Know emergency exits",
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg sm:rounded-xl bg-white
                  border border-black/10 px-4 sm:px-6 py-4 sm:py-6
                  hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)]
                  transition"
                >
                  <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-[#FFCC33] mb-2 sm:mb-3" />
                  <p className="body text-black/70 text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ================= INFECTIOUS DISEASE — ALERT PANELS ================= */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="mb-16 sm:mb-20 md:mb-28"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Info className="h-6 w-6 sm:h-7 sm:w-7 text-[#FFCC33]" />
              <h2 className="h2 text-xl sm:text-2xl md:text-2xl text-black">
                Infectious disease prevention
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                "Wear masks in crowded places",
                "Maintain physical distancing",
                "Cover coughs and sneezes",
                "Stay home when unwell",
                "Complete vaccinations",
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative rounded-lg sm:rounded-xl bg-[#FFF7D6]
                  border border-black/10 px-4 sm:px-6 py-4 sm:py-5"
                >
                  <div className="absolute top-0 left-0 h-full w-[3px] sm:w-[4px]
                  bg-[#FFCC33] rounded-l-lg sm:rounded-l-xl" />
                  <p className="body text-black/70 text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ================= EMERGENCY CONTACTS ================= */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="rounded-xl sm:rounded-2xl md:rounded-3xl bg-black px-5 sm:px-8 md:px-14 py-10 sm:py-12 md:py-16"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-[#FFCC33]" />
              <h2 className="h2 text-xl sm:text-2xl md:text-[32px] text-white">
                Emergency contacts
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                ["Disha Health Helpline", "1056"],
                ["Ambulance", "108"],
                ["Centralized helpline ", "112"],
                ["Labour Welfare", "0471- 2463769"]               
              ].map(([label, value], i) => (
                <div
                  key={i}
                  className="rounded-lg sm:rounded-xl bg-white/5
                  border border-white/15 px-4 sm:px-6 py-4 sm:py-6"
                >
                  <p className="text-xs sm:text-sm text-white/70 mb-1">
                    {label}
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

        </div>
      </section>
    </>
  );
}
