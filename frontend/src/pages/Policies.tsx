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

      <section className="saas min-h-screen bg-transparent pt-24 sm:pt-32 pb-32">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

          {/* ================= HERO + ILLUSTRATION ================= */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">

            {/* TEXT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={container}
            >
              <motion.p
                variants={reveal}
                className="text-xs uppercase tracking-[0.28em] text-black/60 mb-4"
              >
                Governance & compliance
              </motion.p>

              <motion.h1
                variants={reveal}
                className="saas-h1 text-[38px] sm:text-[56px] text-black mb-6"
              >
                Health policies
                <br />for migrant worker welfare
              </motion.h1>

              <motion.p
                variants={reveal}
                className="saas-body text-[16px] sm:text-[18px] text-black/70 max-w-xl"
              >
                Government-backed health policies ensuring protection,
                accessibility, and dignity for migrant workers across regions.
              </motion.p>
            </motion.div>

            {/* ILLUSTRATION: POLICY DOCUMENT STACK */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={visualSlide}
              className="relative"
            >
              <div className="relative w-full max-w-[440px] mx-auto">

                {/* BACK CARD */}
                <div className="absolute top-8 left-8 w-full h-[270px]
                rounded-2xl bg-[#FFF2B8] border border-black/10" />

                {/* MID CARD */}
                <div className="absolute top-4 left-4 w-full h-[270px]
                rounded-2xl bg-[#FFE08A] border border-black/10" />

                {/* TOP CARD */}
                <div className="relative w-full h-[270px]
                rounded-2xl bg-white border border-black/10
                shadow-[0_30px_60px_rgba(0,0,0,0.15)]
                p-6 flex flex-col justify-between">

                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-[#FFCC33]
                    flex items-center justify-center">
                      <FileText className="h-5 w-5 text-black" />
                    </div>
                    <span className="font-semibold text-black">
                      Official Policy Document
                    </span>
                  </div>

                  {/* DOCUMENT CONTENT */}
                  <div className="space-y-2">
                    <div className="h-3 w-4/5 bg-black/10 rounded" />
                    <div className="h-3 w-3/5 bg-black/10 rounded" />
                    <div className="h-3 w-2/5 bg-black/10 rounded" />
                  </div>

                  <div className="flex justify-between text-xs text-black/60">
                    <span>Issued: 2026</span>
                    <span>Govt. of India</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================= POLICY CARDS ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="space-y-6 mb-28"
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
                    relative rounded-2xl bg-[#FFF7D6]
                    border border-black/10
                    px-6 sm:px-8 py-7
                    hover:shadow-[0_22px_48px_rgba(0,0,0,0.12)]
                    transition-all
                  "
                >
                  {/* LEFT ACCENT */}
                  <div className="absolute left-0 top-0 h-full w-[4px]
                  bg-[#FFCC33] rounded-l-2xl" />

                  <div className="flex items-start gap-5">
                    <div className="h-12 w-12 rounded-xl bg-[#FFCC33]
                    flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-black" />
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
                        {item.title}
                      </h3>
                      <p className="saas-body text-black/65">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ================= IMPLEMENTATION ================= */}
          <div className="rounded-3xl bg-black px-8 sm:px-14 py-16">
            <div className="flex items-center gap-4 mb-6">
              <BookOpen className="h-7 w-7 text-[#FFCC33]" />
              <h2 className="saas-h2 text-[26px] sm:text-[32px] text-white">
                Policy implementation
              </h2>
            </div>

            <p className="saas-body text-white/80 max-w-3xl mb-10">
              These policies are implemented collaboratively by central and
              state authorities to ensure consistency, accountability, and
              long-term healthcare continuity.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                "Continuous monitoring & evaluation",
                "Grievance redressal mechanisms",
                "Periodic updates for emerging challenges",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl
                  bg-white/5 border border-white/15 p-6"
                >
                  <CheckCircle className="h-6 w-6 text-[#FFCC33] mt-1" />
                  <p className="saas-body text-white/85">
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
