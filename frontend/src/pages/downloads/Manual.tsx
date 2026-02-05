import { BookOpen, Download, PlayCircle, Layers } from "lucide-react";
import { motion } from "framer-motion";
import ManualImage from "@/assets/ehr-1476525_1280.png";

const manuals = [
  {
    title: "Migrant Worker Portal",
    desc: "Access health records, appointments, vaccinations, and personal profile features.",
    tags: ["English", "हिंदी", "മലയാളം"],
  },
  {
    title: "Doctor Portal",
    desc: "Manage patients, prescriptions, consultations, and medical records.",
    tags: ["English"],
  },
  {
    title: "Admin Dashboard",
    desc: "System configuration, analytics, user control, and reporting tools.",
    tags: ["English"],
  },
  {
    title: "Mobile App Guide",
    desc: "Step-by-step guide for using KerMedix on mobile devices.",
    tags: ["Android", "iOS"],
  },
];

export default function Manual() {
  return (
    <section className="min-h-screen bg-transparent pt-24 sm:pt-32 pb-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid lg:grid-cols-2 gap-20 items-center mb-32"
        >
          {/* LEFT */}
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 rounded-xl bg-[#FFCC33]/40 flex items-center justify-center">
                <BookOpen className="h-7 w-7 text-black" />
              </div>
              <span className="uppercase tracking-[0.32em] text-xs text-black/60">
                Documentation
              </span>
            </div>

            <h1 className="text-[44px] sm:text-[60px] font-extrabold tracking-tight text-black mb-6">
              User manuals
              <br />
              built for clarity
            </h1>

            <p className="text-black/65 text-[16px] sm:text-[18px] leading-relaxed">
              Official KerMedix guides structured like government workflows,
              delivered with modern SaaS clarity.
            </p>
          </div>

          {/* RIGHT — ILLUSTRATION */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-[380px] sm:h-[440px]"
          >
            {/* OUTER YELLOW */}
            <div className="absolute inset-0 rounded-[28px] bg-[#FFF6CC] border border-black/10" />

            {/* INNER PAPER */}
            <div className="absolute inset-6 rounded-2xl bg-white border border-black/10" />

            {/* INNER CANVAS */}
            <div className="absolute inset-10 rounded-xl bg-[#FFF7D6] border border-black/10 overflow-hidden flex items-center justify-center">
              <img
                src={ManualImage}
                alt="Manual preview"
                className="w-full h-full object-contain p-6"
              />
            </div>

            {/* FLOATING LABEL */}
            <div className="absolute top-4 left-8 px-4 py-2 rounded-lg bg-white border border-black/10 shadow-sm flex items-center gap-2">
              <Layers className="h-4 w-4 text-black" />
              <span className="text-xs font-semibold text-black">
                Manual
              </span>
            </div>

            {/* FLOATING INFO */}
            <div className="absolute bottom-6 right-8 w-56 rounded-xl bg-white border border-black/10 shadow-sm p-4">
              <div className="h-3 w-full bg-black/10 rounded mb-2" />
              <div className="h-3 w-3/4 bg-black/10 rounded mb-2" />
              <div className="h-3 w-1/2 bg-black/10 rounded" />
            </div>
          </motion.div>
        </motion.div>

        {/* ================= MANUAL CARDS ================= */}
        <div className="grid sm:grid-cols-2 gap-16 mb-32">
          {manuals.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative group"
            >
              {/* DEPTH */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-[#FFCC33]/40 border border-black/10 -z-10" />

              <div className="rounded-2xl bg-white border border-black/10 p-8
                transition-all duration-300
                group-hover:-translate-y-[4px]
                group-hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-black mb-3">
                  {m.title}
                </h3>

                <p className="text-black/65 text-sm leading-relaxed mb-6">
                  {m.desc}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {m.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-black/5 text-black"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold text-[#402EE6] hover:underline"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download manual (PDF)
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= FOOTER / VIDEO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl bg-black px-10 sm:px-20 py-24 overflow-hidden"
        >
          {/* SUBTLE GRID */}
          <div className="absolute inset-0 opacity-10 grid grid-cols-12 gap-px">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="bg-white/10" />
            ))}
          </div>

          <div className="relative max-w-3xl text-white">
            <h2 className="text-[28px] sm:text-[34px] font-bold mb-4">
              Video walkthroughs
            </h2>

            <p className="text-white/70 mb-8 leading-relaxed">
              Step-by-step visual guides covering registration, telemedicine,
              prescriptions, dashboards, and administrative workflows.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-3 bg-[#402EE6] text-white px-7 py-3 rounded-md font-semibold hover:bg-[#402EE6]/90 transition"
            >
              <PlayCircle className="h-5 w-5" />
              Watch tutorials
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
