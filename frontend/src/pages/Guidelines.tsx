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

      <section className="saas min-h-screen bg-transparent pt-24 sm:pt-32 pb-32">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

          {/* ================= HERO ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-28"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-black/60 mb-4">
              Health & safety guidance
            </p>

            <h1 className="h1 text-[38px] sm:text-[56px] text-black mb-6">
              Practical health guidelines
              <br />for everyday safety
            </h1>

            <p className="body text-black/70 max-w-2xl">
              Clear, actionable guidance designed to help migrant workers stay
              healthy at home, at work, and in public environments.
            </p>
          </motion.div>

          {/* ================= HYGIENE — CHECKLIST + VISUAL ================= */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-28"
          >
            <div className="flex items-center gap-4 mb-10">
              <BookOpen className="h-7 w-7 text-[#FFCC33]" />
              <h2 className="h2 text-2xl text-black">
                General health & hygiene
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-14 items-start">

              {/* LEFT — CHECKLIST RAIL */}
              <div className="relative pl-8 space-y-4">
                <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-[#FFCC33]" />

                {[
                  "Maintain personal hygiene with regular hand washing",
                  "Drink clean water and eat hygienic food",
                  "Ensure ventilation in living spaces",
                  "Prevent mosquito breeding",
                  "Use clean clothing and towels",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FFCC33] mt-1" />
                    <p className="body text-black/70">{item}</p>
                  </div>
                ))}
              </div>

              {/* RIGHT — HYGIENE VISUAL */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                <div
                  className="
                    relative rounded-2xl
                    bg-[#FFF7D6]
                    border border-black/10
                    p-4 sm:p-6
                  "
                >
                  {/* subtle depth layer */}
                  <div
                    className="
                      absolute inset-0 translate-x-3 translate-y-3
                      rounded-2xl bg-[#FFE08A]
                      border border-black/10
                      -z-10
                    "
                  />

                  <img
                    src={HygieneImg}
                    alt="Personal hygiene practices"
                    className="
                      w-full h-auto
                      rounded-xl
                      object-cover
                    "
                  />

                  {/* caption */}
                  <p className="mt-4 text-sm text-black/60">
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
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-28"
          >
            <div className="flex items-center gap-4 mb-8">
              <ClipboardCheck className="h-7 w-7 text-[#FFCC33]" />
              <h2 className="h2 text-2xl text-black">
                Regular health checkups
              </h2>
            </div>

            <div className="grid sm:grid-cols-5 gap-6">
              {[
                "Annual screening",
                "Vaccinations",
                "BP & sugar monitoring",
                "Early reporting",
                "Record updates",
              ].map((step, i) => (
                <div
                  key={i}
                  className="relative rounded-xl bg-[#FFF7D6]
                  border border-black/10 px-4 py-5 text-center"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2
                  h-6 w-6 rounded-full bg-[#FFCC33]
                  text-black text-xs font-semibold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <p className="body text-black/70 text-sm mt-3">
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
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-28"
          >
            <div className="flex items-center gap-4 mb-8">
              <ShieldAlert className="h-7 w-7 text-[#FFCC33]" />
              <h2 className="h2 text-2xl text-black">
                Workplace safety
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Use PPE at all times",
                "Follow machinery safety rules",
                "Report hazards immediately",
                "Avoid fatigue & heat stress",
                "Know emergency exits",
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white
                  border border-black/10 px-6 py-6
                  hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)]
                  transition"
                >
                  <AlertTriangle className="h-6 w-6 text-[#FFCC33] mb-3" />
                  <p className="body text-black/70">{item}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ================= INFECTIOUS DISEASE — ALERT PANELS ================= */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-28"
          >
            <div className="flex items-center gap-4 mb-8">
              <Info className="h-7 w-7 text-[#FFCC33]" />
              <h2 className="h2 text-2xl text-black">
                Infectious disease prevention
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Wear masks in crowded places",
                "Maintain physical distancing",
                "Cover coughs and sneezes",
                "Stay home when unwell",
                "Complete vaccinations",
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative rounded-xl bg-[#FFF7D6]
                  border border-black/10 px-6 py-5"
                >
                  <div className="absolute top-0 left-0 h-full w-[4px]
                  bg-[#FFCC33] rounded-l-xl" />
                  <p className="body text-black/70">{item}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ================= EMERGENCY CONTACTS ================= */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-3xl bg-black px-8 sm:px-14 py-16"
          >
            <div className="flex items-center gap-4 mb-10">
              <Phone className="h-7 w-7 text-[#FFCC33]" />
              <h2 className="h2 text-[26px] sm:text-[32px] text-white">
                Emergency contacts
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                ["Health Helpline", "104"],
                ["Ambulance", "108"],
                ["Labour Welfare", "1800-425-1234"],
                ["Mental Health", "1800-599-0019"],
              ].map(([label, value], i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white/5
                  border border-white/15 px-6 py-6"
                >
                  <p className="text-sm text-white/70 mb-1">
                    {label}
                  </p>
                  <p className="text-2xl font-semibold text-white">
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
