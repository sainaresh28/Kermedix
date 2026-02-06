import {
  FileText,
  Shield,
  Users,
  Heart,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

/* ---------------- MOTION ---------------- */
const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const visualSlide: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Policies() {
  return (
    <>
      {/* FONT */}
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap");

          .saas {
            font-family: "Montserrat", system-ui, -apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto, sans-serif;
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

      <section className="saas min-h-screen bg-transparent pt-20 sm:pt-32 pb-20 sm:pb-32">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* ================= HERO + ILLUSTRATION ================= */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-28">

            {/* TEXT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={container}
              className="text-center lg:text-left"
            >
              <motion.p
                variants={reveal}
                className="text-xs uppercase tracking-[0.28em] text-black/60 mb-4"
              >
                Governance & compliance
              </motion.p>

              <motion.h1
                variants={reveal}
                className="saas-h1 text-3xl xs:text-4xl sm:text-[48px] lg:text-[56px] text-black mb-4 sm:mb-6"
              >
                Health policies
                <br className="hidden sm:block" /> for migrant worker welfare
              </motion.h1>

              <motion.p
                variants={reveal}
                className="saas-body text-sm sm:text-[16px] lg:text-[18px] text-black/70 max-w-xl mx-auto lg:mx-0"
              >
                Government-backed health policies ensuring protection,
                accessibility, and dignity for migrant workers across regions.
              </motion.p>
            </motion.div>

            {/* ILLUSTRATION: POLICY DOCUMENT STACK */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={visualSlide}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px] mx-auto">

                {/* BACK CARD */}
                <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-full h-[200px] sm:h-[240px] lg:h-[270px]
                rounded-xl lg:rounded-2xl bg-[#FFF2B8] border border-black/10" />

                {/* MID CARD */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-full h-[200px] sm:h-[240px] lg:h-[270px]
                rounded-xl lg:rounded-2xl bg-[#FFE08A] border border-black/10" />

                {/* TOP CARD */}
                <div className="relative w-full h-[200px] sm:h-[240px] lg:h-[270px]
                rounded-xl lg:rounded-2xl bg-white border border-black/10
                shadow-[0_20px_40px_rgba(0,0,0,0.12)] sm:shadow-[0_30px_60px_rgba(0,0,0,0.15)]
                p-4 sm:p-6 flex flex-col justify-between">

                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-[#FFCC33]
                    flex items-center justify-center">
                      <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                    </div>
                    <span className="font-semibold text-black text-sm sm:text-base">
                      Official Policy Document
                    </span>
                  </div>

                  {/* DOCUMENT CONTENT */}
                  <div className="space-y-2">
                    <div className="h-2 sm:h-3 w-4/5 bg-black/10 rounded" />
                    <div className="h-2 sm:h-3 w-3/5 bg-black/10 rounded" />
                    <div className="h-2 sm:h-3 w-2/5 bg-black/10 rounded" />
                  </div>

                  <div className="flex justify-between text-xs text-black/60">
                    <span className="text-xs">Issued: 2026</span>
                    <span className="text-xs">Govt. of India</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================= POLICY CARDS ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={container}
            className="space-y-4 sm:space-y-6 mb-20 lg:mb-28"
          >
            {[
              {
                icon: FileText,
                title: "Interstate Migrant Workers Health Policy 2024",
                desc: "Ensures nationwide access to emergency care, routine checkups, and occupational health services.",
              },
              {
                icon: Shield,
                title: "Health Insurance and Benefits Scheme",
                desc: "Coverage under Ayushman Bharat, state health schemes, and special benefits for families.",
              },
              {
                icon: Users,
                title: "Occupational Health & Safety Standards",
                desc: "Mandatory workplace health and safety compliance for employers across industries.",
              },
              {
                icon: Heart,
                title: "Mental Health & Wellbeing Policy",
                desc: "Counseling, stress management, and psychological support frameworks for workers.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={reveal}
                  className="
                    relative rounded-xl lg:rounded-2xl bg-[#FFF7D6]
                    border border-black/10
                    px-4 sm:px-6 lg:px-8 py-5 sm:py-7
                    hover:shadow-[0_22px_48px_rgba(0,0,0,0.12)]
                    transition-all duration-300
                  "
                >
                  {/* LEFT ACCENT */}
                  <div className="absolute left-0 top-0 h-full w-[3px] sm:w-[4px]
                  bg-[#FFCC33] rounded-l-xl lg:rounded-l-2xl" />

                  <div className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-[#FFCC33]
                    flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black mb-1 sm:mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="saas-body text-black/65 text-sm sm:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ================= IMPLEMENTATION ================= */}
          <div className="rounded-2xl lg:rounded-3xl bg-black px-5 sm:px-8 lg:px-14 py-10 sm:py-12 lg:py-16">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <BookOpen className="h-6 w-6 sm:h-7 sm:w-7 text-[#FFCC33]" />
              <h2 className="saas-h2 text-xl sm:text-2xl lg:text-[32px] text-white">
                Policy implementation
              </h2>
            </div>

            <p className="saas-body text-white/80 text-sm sm:text-base mb-6 sm:mb-8 lg:mb-10">
              These policies are implemented collaboratively by central and
              state authorities to ensure consistency, accountability, and
              long-term healthcare continuity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                "Continuous monitoring & evaluation",
                "Grievance redressal mechanisms",
                "Periodic updates for emerging challenges",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 sm:gap-3 rounded-lg sm:rounded-xl
                  bg-white/5 border border-white/15 p-4 sm:p-5 lg:p-6"
                >
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#FFCC33] mt-0.5 sm:mt-1 flex-shrink-0" />
                  <p className="saas-body text-white/85 text-sm sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
