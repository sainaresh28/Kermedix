import {
  Stethoscope,
  Heart,
  Activity,
  Eye,
  Shield,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

const Screening = () => {
  return (
    <>
      {/* FONT + TYPOGRAPHY */}
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

      {/* PAGE */}
      <section className="saas min-h-screen bg-[#FFFDF5] pt-24 sm:pt-32 pb-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

          {/* HERO */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl mb-24"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-black/60 mb-4">
              Preventive healthcare
            </p>

            <h1 className="saas-h1 text-[40px] sm:text-[56px] text-black mb-6">
              Health screening,
              <br />
              designed for early action.
            </h1>

            <p className="saas-body text-[16px] sm:text-[18px] text-black/70">
              Comprehensive screening programs focused on early detection,
              workplace safety, and long-term health outcomes.
            </p>
          </motion.div>

          {/* CORE SCREENINGS */}
          <div className="grid sm:grid-cols-2 gap-8 mb-28">
            {[
              {
                icon: Stethoscope,
                title: "General health checkup",
                desc: "Physical examination covering vitals, BMI, and baseline health indicators.",
              },
              {
                icon: Heart,
                title: "Cardiovascular screening",
                desc: "Blood pressure, ECG, and cardiac risk profiling for early heart disease detection.",
              },
              {
                icon: Activity,
                title: "Diabetes screening",
                desc: "Blood glucose, HbA1c monitoring, and metabolic risk assessment.",
              },
              {
                icon: Eye,
                title: "Vision & hearing tests",
                desc: "Clinical eye and hearing evaluations to ensure sensory well-being.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="
                    group rounded-2xl
                    bg-[#FFF7D6]
                    border border-black/10
                    p-8
                    transition-all duration-300
                    hover:-translate-y-[2px]
                    hover:shadow-[0_14px_32px_rgba(0,0,0,0.08)]
                    hover:ring-2 hover:ring-[#402EE6]/20
                  "
                >
                  {/* ICON */}
                  <div
                    className="
                      h-12 w-12 rounded-xl
                      bg-[#FFCC33]
                      flex items-center justify-center
                      mb-6
                    "
                  >
                    <Icon className="h-6 w-6 text-black" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-[#402EE6] transition">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="saas-body text-black/70">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* PROGRAMS SECTION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="
              rounded-2xl
              bg-[#000000]
              text-white
              px-8 sm:px-12 py-16
            "
          >
            <div className="flex items-center gap-4 mb-12">
              <Shield className="h-7 w-7 text-[#FFCC33]" />
              <h2 className="saas-h2 text-[26px] sm:text-[32px]">
                Screening programs
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: FileText,
                  title: "Annual health checkup",
                  desc: "Comprehensive yearly evaluation covering essential health metrics.",
                },
                {
                  icon: Shield,
                  title: "Occupational health screening",
                  desc: "Role-specific medical assessments for industrial workers.",
                },
                {
                  icon: Activity,
                  title: "Infectious disease screening",
                  desc: "Testing for TB, Hepatitis, HIV, and other communicable diseases.",
                },
                {
                  icon: Heart,
                  title: "Mental health assessment",
                  desc: "Psychological screening, stress evaluation, and counseling support.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="
                      flex gap-4 p-6 rounded-xl
                      bg-white/5 border border-white/15
                      hover:bg-white/10 transition-all
                    "
                  >
                    <Icon className="h-6 w-6 flex-shrink-0 mt-1 text-[#FFCC33]" />

                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="saas-body text-white/70">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Screening;
