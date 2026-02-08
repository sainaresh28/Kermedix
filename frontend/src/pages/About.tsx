import { motion } from "framer-motion";
import {
  Shield,
  Users,
  HeartPulse,
  Scale,
  ArrowRight,
  Check,
  Globe,
  Target,
  Zap,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

/* ---------------- animations ---------------- */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const scaleFade = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

/* ---------------- image sources ---------------- */
const desktopImages = [
  "/screens/desktop1.jpeg",
  "/screens/desktop2.jpeg",
  "/screens/desktop3.jpeg",
  "/screens/desktop4.jpeg",
  "/screens/desktop5.jpeg",
  "/screens/desktop6.png",
];

const mobileImages = [
  "/screens/mobile1.jpeg",
  "/screens/mobile2.jpeg",
  "/screens/mobile3.jpeg",
  "/screens/mobile4.jpeg",
  "/screens/mobile5.jpeg",
  "/screens/mobile6.png",
];

/* ---------------- scrolling images ---------------- */
const ScrollingImages = ({
  images,
  height,
  duration,
}: {
  images: string[];
  height: number;
  duration: number;
}) => (
  <div className="relative overflow-hidden w-full" style={{ height }}>
    <motion.div
      className="absolute top-0 left-0 w-full"
      animate={{ y: ["0%", "-50%"] }}
      transition={{ duration, ease: "linear", repeat: Infinity }}
    >
      {[...images, ...images].map((src, i) => (
        <img
          key={i}
          src={src}
          className="w-full mb-4 rounded-lg object-cover"
          draggable={false}
          alt=""
        />
      ))}
    </motion.div>
  </div>
);

/* ---------------- Stats Counter ---------------- */
const StatCounter = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="text-center p-4">
      <div className="text-3xl md:text-4xl font-black text-black mb-2">
        {value}
      </div>
      <div className="text-sm text-black/60">{label}</div>
    </div>
  );
};

/* ---------------- Timeline Item ---------------- */
const TimelineItem = ({ 
  year, 
  title, 
  description,
  isLast = false 
}: { 
  year: string; 
  title: string; 
  description: string;
  isLast?: boolean;
}) => (
  <div className="relative pl-8 pb-8 md:pb-12">
    {!isLast && (
      <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-black/10" />
    )}
    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white border-4 border-[#402EE6] flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-[#402EE6]" />
    </div>
    <div className="space-y-2">
      <div className="text-sm font-semibold text-[#402EE6]">{year}</div>
      <h3 className="text-lg font-bold text-black">{title}</h3>
      <p className="text-black/60 text-sm">{description}</p>
    </div>
  </div>
);

/* ---------------- component ---------------- */
const About = () => {
  return (
    <>
      {/* FONT SYSTEM */}
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap");
        .saas-root { font-family: "Montserrat", system-ui, sans-serif; }
        .saas-eyebrow { font-size:13px; letter-spacing:.18em; text-transform:uppercase; font-weight:600; }
        .saas-h1 { letter-spacing:-.035em; line-height:1.05; font-weight:800; }
        .saas-h2 { letter-spacing:-.02em; font-weight:700; }
        .saas-body { line-height:1.75; font-weight:500; }
      `}</style>

      <section className="saas-root relative bg-transparent min-h-screen">
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-16">

          {/* ================= HERO SECTION ================= */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 pt-4 sm:pt-8">

            {/* LEFT TEXT */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              className="max-w-3xl order-2 lg:order-1"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4 sm:mb-5">
                <div className="w-2 h-2 bg-[#402EE6]" />
                <span className="saas-eyebrow text-[#402EE6]">
                  About KerMedix
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="saas-h1 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] text-black mb-6 leading-tight">
                Healthcare records
                <br />
                <span className="text-[#402EE6]">built for mobility</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="saas-body text-black/65 max-w-2xl mb-8 sm:mb-10 text-base">
                KerMedix is a secure digital health record infrastructure that
                enables continuity of care for migrant workers across regions,
                providers, and institutions.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/register"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 text-center text-sm font-bold bg-[#402EE6] text-white hover:bg-[#402EE6]/90 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
                >
                  <span className="relative flex items-center justify-center gap-2">
                    Get started free
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="group px-6 sm:px-8 py-3 sm:py-4 text-center text-sm font-bold bg-white border-2 border-[#f7cd14] text-black hover:bg-[#f7cd14]/10 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
                >
                  <span className="relative flex items-center justify-center gap-2">
                    Talk to our team
                    <Users className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT HERO PREVIEW */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative h-[240px] sm:h-[320px] md:h-[400px] lg:h-[480px] flex items-center justify-center order-1 lg:order-2"
            >
              {/* MACBOOK */}
              <div className="absolute left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 sm:-right-4 lg:-right-8 top-10 z-10 w-[80%] sm:w-[85%] lg:w-[640px] max-w-[320px] sm:max-w-none">
                <div className="relative">
                  <div className="relative rounded-[10px] sm:rounded-[12px] bg-black p-[4px] sm:p-[6px]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] sm:w-[110px] h-[16px] sm:h-[18px] bg-black rounded-b-[8px] sm:rounded-b-[10px] z-30">
                      <div className="absolute top-[6px] sm:top-[7px] left-1/2 -translate-x-1/2 w-[3px] sm:w-[3.5px] h-[3px] sm:h-[3.5px] bg-white rounded-full" />
                    </div>
                    <div className="relative rounded-[8px] sm:rounded-[10px] bg-white overflow-hidden">
                      <ScrollingImages
                        images={desktopImages}
                        height={typeof window !== 'undefined' ? (window.innerWidth < 640 ? 180 : window.innerWidth < 1024 ? 300 : 360) : 360}
                        duration={22}
                      />
                    </div>
                  </div>
                  <div className="relative h-[12px] sm:h-[14px] w-[101%] -ml-[0.5%] rounded-b-[14px] sm:rounded-b-[16px] bg-black shadow-lg" />
                </div>
              </div>

              {/* IPHONE */}
              <div className="absolute right-[15px] sm:right-[-20px] lg:right-[-100px] top-[140px] sm:top-[140px] lg:top-[220px] z-20 w-[90px] sm:w-[140px] lg:w-[180px]">
                <div className="relative rounded-[28px] sm:rounded-[36px] bg-black p-[2px] sm:p-[3px] shadow-lg">
                  <div className="absolute left-[-1px] top-[50px] sm:top-[70px] w-[1px] h-[16px] sm:h-[20px] rounded-l-full bg-black" />
                  <div className="absolute left-[-1px] top-[70px] sm:top-[94px] w-[1px] h-[16px] sm:h-[20px] rounded-l-full bg-black" />
                  <div className="absolute left-[-1px] top-[90px] sm:top-[118px] w-[1px] h-[30px] sm:h-[40px] rounded-l-full bg-black" />
                  <div className="absolute right-[-1px] top-[80px] sm:top-[108px] w-[1px] h-[40px] sm:h-[50px] rounded-r-full bg-black" />

                  <div className="relative rounded-[26px] sm:rounded-[34px] bg-black p-[3px] sm:p-[4px] overflow-hidden">
                    <div className="absolute top-[5px] sm:top-[6px] left-1/2 -translate-x-1/2 w-[50px] sm:w-[65px] h-[14px] sm:h-[17px] bg-black rounded-[12px] sm:rounded-[15px] z-30">
                      <div className="absolute top-1/2 left-[20px] sm:left-[24px] -translate-x-1/2 -translate-y-1/2 w-[2.5px] sm:w-[3px] h-[2.5px] sm:h-[3px] bg-white rounded-full" />
                      <div className="absolute top-1/2 right-[18px] sm:right-[22px] -translate-y-1/2 w-[12px] sm:w-[16px] h-[6px] sm:h-[7px] bg-black/90 rounded-full" />
                    </div>
                    <div className="relative rounded-[24px] sm:rounded-[32px] bg-white overflow-hidden">
                      <ScrollingImages
                        images={mobileImages}
                        height={typeof window !== 'undefined' ? (window.innerWidth < 640 ? 150 : window.innerWidth < 1024 ? 220 : 280) : 280}
                        duration={32}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>



          {/* ================= MISSION SECTION ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <motion.div variants={slideIn} className="md:col-span-2">
                <h2 className="saas-h2 text-2xl sm:text-3xl text-black mb-4 sm:mb-6">
                  Our Mission: <span className="text-[#402EE6]">Health is a habit, not a highlight</span>
                </h2>
                <div className="space-y-4 text-black/65">
                  <p>
                    Migrant workers often face fragmented healthcare due to scattered medical records across countries and institutions. 
                    This leads to redundant tests, delayed diagnoses, and compromised care quality.
                  </p>
                  <p>
                    KerMedix solves this by creating a unified, secure digital health record that travels with the individual, 
                    ensuring continuity of care regardless of location or healthcare provider.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={scaleFade} className="bg-[#f7cd14]/10 border border-[#f7cd14]/20 rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Target className="h-6 w-6 text-[#f7cd14]" />
                  <h3 className="text-lg font-bold text-black">Our Vision</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Global healthcare continuity",
                    "Zero data fragmentation",
                    "Universal access for migrants",
                    "Trust through transparency"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#402EE6]" />
                      <span className="text-black/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>


          {/* ================= CORE PILLARS ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <motion.div variants={fadeUp} className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-[#f7cd14]/10 rounded-full">
                <div className="w-2 h-2 bg-[#0e12ed]" />
                <span className="text-sm font-semibold text-black">
                  Core Principles
                </span>
              </div>
              <h2 className="saas-h2 text-2xl sm:text-3xl text-black mb-4">
                Built on Four Foundational Pillars
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: HeartPulse,
                  title: "Continuity",
                  description: "Persistent medical history across providers and borders",
                  color: "bg-[#402EE6]",
                },
                {
                  icon: Shield,
                  title: "Security",
                  description: "End-to-end encryption with zero-trust architecture",
                  color: "bg-black",
                },
                {
                  icon: Users,
                  title: "Inclusion",
                  description: "Healthcare continuity for migrant populations",
                  color: "bg-[#402EE6]",
                },
                {
                  icon: Scale,
                  title: "Trust",
                  description: "Transparent, auditable records enabling governance",
                  color: "bg-black",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={scaleFade} whileHover={{ y: -4 }}>
                  <Card className="bg-[#f5db66] border border-black/10 rounded-xl hover:shadow-lg transition-all duration-300 h-full">
                    <CardHeader className="p-4 sm:p-6">
                      <div className={`h-10 w-10 sm:h-12 sm:w-12 ${item.color} rounded-lg flex items-center justify-center mb-3 sm:mb-4`}>
                        <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <CardTitle className="text-base sm:text-lg font-bold mb-1 sm:mb-2">{item.title}</CardTitle>
                      <CardDescription className="text-black/60 text-xs sm:text-sm">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================= TIMELINE SECTION ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <motion.div variants={fadeUp} className="text-center mb-8 sm:mb-10">
              <h2 className="saas-h2 text-2xl sm:text-3xl text-black mb-4">
                Our Journey to Impact
              </h2>
              <p className="text-black/60 max-w-2xl mx-auto text-sm sm:text-base">
                From concept to trusted healthcare infrastructure
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {[
                {
                  year: "2025",
                  title: "Research & Discovery",
                  description: "Identified fragmented healthcare access as a major challenge faced by migrant workers in Kerala."
                },
                {
                  year: "2025",
                  title: "Platform Development",
                  description: "Designed and built the core digital health infrastructure, focusing on secure records, scalability, and multilingual accessibility."
                },
                {
                  year: "2026",
                  title: "Prototype Pilot Launch",
                  description: "Developed and tested early platform prototypes through user research, feedback loops, and real-world healthcare workflows."
                },
                {
                  year: "2026",
                  title: "Product Readiness & Expansion Planning",
                  description: "Strengthened system reliability, refined features, and prepared the platform for pilot deployment and ecosystem integrations.",
                  isLast: true
                }
              ].map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
          </motion.div>

          {/* ================= SDG ALIGNMENT ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="mb-12 sm:mb-16"
          >
            <motion.div variants={fadeUp} className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-black/5 rounded-full">
                <Globe className="h-4 w-4 text-black" />
                <span className="text-sm font-semibold text-black">
                  Global Impact
                </span>
              </div>
              <h2 className="saas-h2 text-2xl sm:text-3xl text-black mb-4">
                Aligned with UN Sustainable Development Goals
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  number: "SDG 3",
                  title: "Good Health & Well-Being",
                  description: "Improving healthcare continuity and access for all",
                  
                },
                {
                  number: "SDG 10",
                  title: "Reduced Inequalities",
                  description: "Equal healthcare access for migrant workers",
                  
                },
                {
                  number: "SDG 16",
                  title: "Strong Institutions",
                  description: "Transparent and accountable healthcare systems",
                  
                },
              ].map((sdg, index) => (
                <motion.div key={index} variants={scaleFade}>
                  <Card className="bg-[#d4ff47] border border-black/10 rounded-xl hover:shadow-lg transition-all duration-300 h-full">
                    <CardHeader className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-black text-black">{sdg.number}</div>
                       
                      </div>
                      <CardTitle className="text-lg font-bold mb-2">{sdg.title}</CardTitle>
                      <CardDescription className="text-black/60 text-sm">
                        {sdg.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          
        </div>
      </section>
    </>
  );
};

export default About;
