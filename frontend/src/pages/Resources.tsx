import {
  Play,
  Download,
  ExternalLink,
  BookOpen,
  Globe,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

/* ---------------- MOTION ---------------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Resources() {
  return (
    <>
      {/* FONT */}
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap");

          .saas { font-family: "Montserrat", system-ui, sans-serif; }
          .h1 { font-weight: 800; letter-spacing: -0.03em; line-height: 1.05; }
          .h2 { font-weight: 700; letter-spacing: -0.02em; }
          .body { font-weight: 500; line-height: 1.7; }
        `}
      </style>

      <section className="saas min-h-screen bg-transparent pt-24 sm:pt-32 pb-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

          {/* ================= HERO ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-28"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-black/60 mb-4">
              Knowledge hub
            </p>

            <h1 className="h1 text-[42px] sm:text-[62px] text-black mb-6">
              Health resources
              <br />for everyday decisions
            </h1>

            <p className="body text-black/70 max-w-2xl">
              Verified videos, practical guides, and official portals —
              curated for migrant worker health and wellbeing.
            </p>
          </motion.div>

          {/* ================= VIDEO LEARNING ================= */}
          <section className="mb-28">
            <h2 className="h2 text-2xl text-black mb-10">
              Video learning
            </h2>

            <div className="space-y-16">
              {[
                {
                  title: "Personal hygiene basics (WHO)",
                  url: "https://www.youtube.com/watch?v=Y-4_5m3L6LQ",
                },
                {
                  title: "Workplace safety essentials (ILO)",
                  url: "https://www.youtube.com/watch?v=3Jq7k7dKjXQ",
                },
                {
                  title: "Why vaccination matters (WHO)",
                  url: "https://www.youtube.com/watch?v=R6nCjvK2jI8",
                },
                {
                  title: "Mental health awareness (WHO)",
                  url: "https://www.youtube.com/watch?v=Qy7f3nFZyS4",
                },
              ].map((video, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  {/* SMALLER MEDIA ILLUSTRATION */}
                  <div className="relative">
                    <div
                      className="
                        relative h-[170px] sm:h-[200px]
                        rounded-2xl bg-[#FFF7D6]
                        border border-black/10
                        flex items-center justify-center
                      "
                    >
                      <div
                        className="
                          absolute inset-4 rounded-xl
                          bg-white border border-black/10
                        "
                      />
                      <div
                        className="
                          relative z-10 h-12 w-12
                          rounded-full bg-[#FFCC33]
                          flex items-center justify-center
                        "
                      >
                        <Play className="h-5 w-5 text-black" />
                      </div>
                    </div>
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">
                      {video.title}
                    </h3>
                    <p className="body text-black/65 mb-4 max-w-md">
                      Short, trusted educational video in simple language.
                    </p>

                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#402EE6] font-semibold"
                    >
                      Watch video <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ================= PRINTABLE GUIDES ================= */}
          <section className="mb-28">
            <h2 className="h2 text-2xl text-black mb-10">
              Printable guides
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                {
                  title: "Common health issues",
                  pdf: "https://www.nhp.gov.in/health-topics",
                },
                {
                  title: "Nutrition & diet",
                  pdf: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
                },
                {
                  title: "First aid manual",
                  pdf: "https://www.redcross.org.uk/first-aid",
                },
                {
                  title: "Rights & benefits (PMJAY)",
                  pdf: "https://pmjay.gov.in",
                },
              ].map((doc, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative"
                >
                  <div
                    className="
                      relative h-[230px]
                      rounded-2xl bg-[#FFF7D6]
                      border border-black/10
                      p-6 flex flex-col justify-between
                    "
                  >
                    <div
                      className="
                        absolute left-0 top-0 h-full w-[7px]
                        bg-[#FFCC33] rounded-l-2xl
                      "
                    />

                    <BookOpen className="h-7 w-7 text-black" />

                    <div>
                      <h3 className="font-semibold text-black mb-2">
                        {doc.title}
                      </h3>
                      <a
                        href={doc.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-[#402EE6]"
                      >
                        View / Download <Download className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ================= OFFICIAL PORTALS ================= */}
          <section className="rounded-3xl bg-black px-10 sm:px-16 py-20">
            <div className="flex items-center gap-4 mb-12">
              <Globe className="h-7 w-7 text-[#FFCC33]" />
              <h2 className="h2 text-[28px] sm:text-[34px] text-white">
                Official health portals
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                ["National Health Portal", "https://abdm.gov.in/"],
                ["Ministry of Health & Family Welfare", "https://www.mohfw.gov.in"],
                ["Ayushman Bharat – PMJAY", "https://pmjay.gov.in"],
              ].map(([label, url], i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    relative rounded-2xl bg-white/5
                    border border-white/15 p-6
                    hover:bg-white/10 transition
                  "
                >

                  <p className="text-lg font-semibold text-white mb-1">
                    {label}
                  </p>
                  <span className="text-sm text-white/70 inline-flex items-center">
                    Visit portal <ExternalLink className="ml-2 h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </section>

        </div>
      </section>
    </>
  );
}
