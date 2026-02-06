import { motion } from "framer-motion";
import {
  Shield,
  Users,
  HeartPulse,
  Scale,
  Activity,
  Database,
  Network,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

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

      <section className="saas-root relative overflow-hidden bg-[#FFFDF5] pt-32 pb-36">
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6">

          {/* ================= HERO (TEXT + PREVIEW) ================= */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-36">

            {/* LEFT TEXT */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              className="max-w-3xl"
            >
              <motion.p variants={fadeUp} className="saas-eyebrow text-black/70 mb-5">
                About KerMedix
              </motion.p>

              <motion.h1 variants={fadeUp} className="saas-h1 text-[46px] sm:text-[62px] xl:text-[70px] text-black mb-8">
                Healthcare records
                <br />built for mobility.
              </motion.h1>

              <motion.p variants={fadeUp} className="saas-body text-black/65 max-w-2xl mb-12">
                KerMedix is a secure digital health record infrastructure that
                enables continuity of care for migrant workers across regions,
                providers, and institutions.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="px-8 py-4 text-center text-sm font-bold rounded-md bg-[#402EE6] text-white shadow-xl hover:bg-[#402EE6]/90 transition"
                >
                  Get started
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 text-center text-sm font-semibold rounded-md border border-black/20 hover:bg-black/5 transition"
                >
                  Talk to us
                </Link>
              </motion.div>
            </motion.div>

  {/* ================= RIGHT HERO PREVIEW  ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* ================= DESKTOP ================= */}
            <div className="absolute right-[-50px] bottom-[-180px] z-10 mx-auto w-[650px]">

              <div className="
                relative
                rounded-[18px]
                bg-[#0a0a0a]
                p-[6px]
                border border-black/30
               
              ">
                
                <div className="
                  absolute top-[6px] left-1/2 -translate-x-1/2
                  w-[120px] h-[10px]
                  bg-[#0a0a0a]
                  rounded-b-xl
                  z-20
                " />

                <div className="relative rounded-[12px] bg-white overflow-hidden">
                  <ScrollingImages
                    images={desktopImages}
                    height={380}
                    duration={22}
                  />
                </div>
              </div>

              <div className="
                mx-auto mt-[-8px]
                h-[16px] w-[92%]
                rounded-b-[28px]
                bg-gradient-to-b from-[#d7d7d7] to-[#bdbdbd]
                
              " />
            </div>

            {/* ================= PHONE ================= */}
            <div className="
              absolute right-[-120px] bottom-[-260px]
              z-20
              w-[200px]
              rounded-[42px]
              bg-[#0a0a0a]
              p-[6px]
              border border-black/40
              
            ">
              <div className="
                absolute top-[6px] left-1/2 -translate-x-1/2
                w-[90px] h-[12px]
                bg-[#0a0a0a]
                rounded-b-xl
                z-30
              " />

              <div className="
                absolute top-[12px] left-1/2 -translate-x-1/2
                w-[36px] h-[4px]
                bg-black/50
                rounded-full
                z-40
              " />

              <div className="relative rounded-[34px] bg-white overflow-hidden">
                <ScrollingImages
                  images={mobileImages}
                  height={300}
                  duration={16}
                />
              </div>
            </div>

          </motion.div>

          {/* ================= HERO PREVIEW (MOBILE ONLY) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center mt-2 lg:hidden"
          >
            <div className="relative scale-[0.9] origin-top w-full flex justify-center">

              {/* ================= DESKTOP  ================= */}
              <div
                className="
                  relative
                  mx-auto
                  w-[90vw]
                  max-w-[520px]
                "
              >
                <div className="relative rounded-[18px] bg-[#0a0a0a] p-[6px] border border-black/30 ">
                  <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[110px] h-[10px] bg-[#0a0a0a] rounded-b-xl z-20" />

                  <div className="relative rounded-[12px] bg-white overflow-hidden">
                    <ScrollingImages
                      images={desktopImages}
                      height={300}
                      duration={22}
                    />
                  </div>
                </div>

                <div className="mx-auto mt-[-8px] h-[14px] w-[92%] rounded-b-[26px] " />
              </div>

              {/* ================= PHONE ================= */}
              <div
                className="
                  absolute
                  right-[-20px]     
                  bottom-[-120px]    
                  z-20
                  w-[160px]
                  rounded-[38px]
                  bg-[#0a0a0a]
                  p-[6px]
                  border border-black/40
                  
                "
              >
                <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[80px] h-[12px] bg-[#0a0a0a] rounded-b-xl z-30" />
                <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[34px] h-[4px] bg-black/50 rounded-full z-40" />

                <div className="relative rounded-[30px] bg-white overflow-hidden">
                  <ScrollingImages
                    images={mobileImages}
                    height={240}
                    duration={16}
                  />
                </div>
              </div>

            </div>
          </motion.div>


          </div>

         {/* ---------------- IMPACT STRIP ---------------- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-36 border-y border-black/10 py-16"
          >
            {[
              ["From Fragmentation", "Scattered paper-based records"],
              ["To Continuity", "Unified digital health history"],
              ["Across Providers", "Care without repetition"],
              ["With Confidence", "Secure by design"],
            ].map(([title, subtitle], i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="text-xl sm:text-2xl font-extrabold text-black">
                  {title}
                </div>
                <div className="text-sm text-black/60 mt-2">
                  {subtitle}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ---------------- CORE PILLARS ---------------- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="mb-36"
          >
            <motion.h2 variants={fadeUp} className="saas-h2 text-[28px] mb-16">
              Designed for continuity, trust, and inclusion.
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: HeartPulse,
                  title: "Continuity of care",
                  desc: "Persistent medical history across providers.",
                },
                {
                  icon: Shield,
                  title: "Security by default",
                  desc: "Encryption and access control at every layer.",
                },
                {
                  icon: Users,
                  title: "Inclusive access",
                  desc: "Healthcare continuity for migrant populations.",
                },
                {
                  icon: Scale,
                  title: "Institutional trust",
                  desc: "Transparent records enabling governance.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={i} variants={scaleFade} whileHover={{ y: -8 }}>
                    <Card className="bg-white border border-black/10 rounded-2xl hover:shadow-2xl transition">
                      <div className="h-[4px] w-full bg-[#FFCC33]/70 rounded-t-2xl" />
                      <CardHeader className="pt-8 space-y-5">
                        <div className="h-12 w-12 rounded-lg bg-[#FFCC33]/20 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-black" />
                        </div>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.desc}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ---------------- SDG ALIGNMENT ---------------- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="mb-36"
          >
            <motion.h2 variants={fadeUp} className="saas-h2 text-[28px] mb-16">
              Alignment with UN Sustainable Development Goals
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "SDG 3",
                  subtitle: "Good Health & Well-Being",
                  desc: "Improving healthcare continuity and access.",
                },
                {
                  title: "SDG 10",
                  subtitle: "Reduced Inequalities",
                  desc: "Equal healthcare access for migrant workers.",
                },
                {
                  title: "SDG 16",
                  subtitle: "Strong Institutions",
                  desc: "Transparent and accountable healthcare systems.",
                },
              ].map((sdg, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="bg-white border border-black/10 rounded-2xl hover:shadow-xl transition">
                    <CardHeader>
                      <div className="text-3xl font-extrabold text-black">
                        {sdg.title}
                      </div>
                      <div className="text-sm font-semibold text-[#402EE6]">
                        {sdg.subtitle}
                      </div>
                      <p className="text-sm text-black/65">{sdg.desc}</p>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ---------------- FINAL CTA ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center border-t border-black/15 pt-24"
          >
            <h3 className="saas-h2 text-[30px] mb-6">
              Infrastructure that moves with people.
            </h3>
            <p className="saas-body text-black/65 max-w-xl mx-auto mb-12">
              KerMedix enables long-term healthcare continuity for mobile
              populations without increasing complexity.
            </p>
            <Link
              to="/gallery"
              className="inline-flex px-24 py-4 text-sm font-extrabold rounded-md bg-[#402EE6] text-white shadow-xl hover:bg-[#402EE6]/90 transition"
            >
              View Gallery
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default About;
