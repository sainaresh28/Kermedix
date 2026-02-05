import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, Shield, Clock, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Image from "@/assets/ehr-1476525_1280.png";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

const HealthRecordsService = () => {
  return (
    <>
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap");

          .saas-root {
            font-family: "Montserrat", system-ui, -apple-system,
              BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          .saas-eyebrow {
            font-size: 13px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            font-weight: 600;
          }

          .saas-h1 {
            letter-spacing: -0.03em;
            line-height: 1.05;
            font-weight: 800;
          }

          .saas-h2 {
            letter-spacing: -0.02em;
            font-weight: 700;
          }

          .saas-body {
            line-height: 1.75;
            font-weight: 500;
          }

          .saas-metric {
            font-variant-numeric: tabular-nums;
            letter-spacing: -0.02em;
            font-weight: 700;
          }
        `}
      </style>

      <section className="saas-root pt-24 sm:pt-32 pb-20 sm:pb-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

          {/* HERO */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 sm:mb-32"
          >
            <motion.div variants={fadeUp} className="max-w-2xl">
              <p className="saas-eyebrow text-black/70 mb-5">
                Healthcare infrastructure
              </p>

              <h1 className="saas-h1 text-[38px] sm:text-[56px] xl:text-[64px] text-black mb-8">
                Health records that follow
                <br />
                the person —  not the place.
              </h1>

              <p className="saas-body text-[16px] sm:text-[18px] text-black/65 mb-10 max-w-xl">
                KerMedix is a secure digital health record system built for
                migrant workers and healthcare providers operating across
                locations, institutions, and care networks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <Link
                  to="/register"
                  className="inline-flex justify-center
                  px-7 py-3.5 text-sm font-semibold rounded-md
                  bg-[#402EE6] text-white shadow-md
                  hover:bg-[#402EE6]/90 transition
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-[#402EE6]/40"
                >
                  Get started
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex justify-center
                  px-7 py-3.5 text-sm font-semibold rounded-md
                  border border-black/20 text-black/75
                  hover:text-black hover:bg-black/5 transition"
                >
                  Talk to us
                </Link>
              </div>
            </motion.div>

            {/* PRODUCT IMAGE */}
            <motion.div variants={fadeUp} className="w-full">
              <img
                src={Image}
                alt="Health Records System"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>

          {/* TRUST METRICS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-2 sm:grid-cols-4 gap-10
            border-t border-b border-black/15 py-12 mb-24 sm:mb-32"
          >
            {[
              ["100K+", "records secured"],
              ["25K+", "active users"],
              ["120+", "health partners"],
              ["99.9%", "system uptime"],
            ].map(([value, label], i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="saas-metric text-3xl sm:text-4xl text-black">
                  {value}
                </div>
                <div className="text-sm font-medium text-black/60 mt-1">
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* FEATURES */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={container}
            className="mb-24 sm:mb-32"
          >
            <motion.h2
              variants={fadeUp}
              className="saas-h2 text-[22px] sm:text-[28px] text-black mb-14 max-w-xl"
            >
              A single system designed for continuity, trust, and access.
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
              {[
                {
                  icon: FileText,
                  title: "Unified records",
                  desc: "Medical history, prescriptions, and reports stored as a single source of truth.",
                },
                {
                  icon: Shield,
                  title: "Security by default",
                  desc: "Encryption, access control, and auditability built into the system.",
                },
                {
                  icon: Clock,
                  title: "Always available",
                  desc: "Access health data across locations and devices without dependency.",
                },
                {
                  icon: Download,
                  title: "Portable by design",
                  desc: "Share or export records securely whenever care is needed.",
                },
              ].map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div key={i} variants={fadeUp}>
                    <Card
                      className="relative bg-white border border-black/15 rounded-xl
                      transition-all duration-200
                      hover:shadow-lg hover:-translate-y-[3px]"
                    >
                      <div className="absolute top-0 left-0 h-[4px] w-full bg-[#FFCC33]/50 rounded-t-xl" />

                      <CardHeader className="space-y-5 pt-7">
                        <div className="h-11 w-11 flex items-center justify-center rounded-md bg-[#FFCC33]/20">
                          <Icon className="h-5 w-5 text-black" />
                        </div>

                        <CardTitle className="text-[16px] font-semibold text-black">
                          {f.title}
                        </CardTitle>

                        <CardDescription className="text-[14px] text-black/65 leading-relaxed">
                          {f.desc}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* FULL CTA */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative mt-24 sm:mt-32"
          >
            <div className="grid grid-cols-[minmax(0,520px)_1fr] items-center gap-20">
              <div className="relative z-10">
                <h3 className="saas-h2 text-[22px] sm:text-[28px] text-black mb-4">
                  Built for scale. Designed for people.
                </h3>

                <p className="saas-body text-black/65 mb-6">
                  KerMedix supports long-term healthcare continuity for mobile
                  populations without increasing complexity for providers.
                </p>

                <Link
                  to="/register"
                  className="inline-flex items-center text-sm font-semibold
                  text-[#402EE6] hover:underline"
                >
                  Create an account →
                </Link>
              </div>

              <div className="hidden md:block relative overflow-hidden h-[200px]">
                <motion.div
                  className="absolute left-0 top-1/2 -translate-y-1/2 flex"
                  animate={{ x: ["-50%", "0%"] }}   
                  transition={{
                    repeat: Infinity,
                    duration: 7,
                    ease: "linear",
                  }}
                  style={{ width: "200%" }}
                >
                  
                  <div className="flex items-center gap-24 w-1/2">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={`a-${i}`} className="chevron-left" />
                    ))}
                  </div>

                  <div className="flex items-center gap-24 w-1/2">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={`b-${i}`} className="chevron-left" />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <style>
              {`
                .chevron-left {
                  position: relative;
                  width: 90px;
                  height: 48px;
                }

                .chevron-left::before,
                .chevron-left::after {
                  content: "";
                  position: absolute;
                  width: 52px;
                  height: 6px;
                  background: #FFCC33;
                  top: 50%;
                  right: 0;             
                }

                .chevron-left::before {
                  transform: translateY(-50%) rotate(-35deg);
                  transform-origin: right center;
                }

                .chevron-left::after {
                  transform: translateY(-50%) rotate(35deg);
                  transform-origin: right center;
                }
              `}
            </style>
          </motion.section>

        </div>
      </section>
    </>
  );
};

export default HealthRecordsService;
