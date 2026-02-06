import { Download, BarChart, FileText } from "lucide-react";
import { motion } from "framer-motion";

const reports = {
  annual: [
    {
      title: "Annual Health Report 2024",
      desc: "Comprehensive health statistics for migrant workers",
      date: "Jan 2024",
      size: "2.4 MB",
    },
    {
      title: "Annual Health Report 2023",
      desc: "Previous year health data and trends",
      date: "Jan 2023",
      size: "2.1 MB",
    },
    {
      title: "Vaccination Coverage Report 2024",
      desc: "Immunization statistics and coverage analysis",
      date: "Dec 2023",
      size: "1.8 MB",
    },
  ],
  surveillance: [
    {
      title: "Communicable Disease Trends – Q1 2024",
      desc: "Quarterly infectious disease analysis",
      date: "Mar 2024",
      size: "890 KB",
    },
    {
      title: "TB Control Program Report",
      desc: "Treatment and prevention outcomes",
      date: "Dec 2023",
      size: "1.2 MB",
    },
    {
      title: "COVID-19 Impact Assessment",
      desc: "Pandemic impact on migrant health",
      date: "Nov 2023",
      size: "1.5 MB",
    },
  ],
  research: [
    {
      title: "Occupational Health Guidelines",
      desc: "Safety standards for migrant workers",
      date: "Feb 2024",
      size: "650 KB",
    },
    {
      title: "Mental Health Support Framework",
      desc: "Policy document on counselling services",
      date: "Jan 2024",
      size: "780 KB",
    },
    {
      title: "Telemedicine Implementation Study",
      desc: "Research on digital health adoption",
      date: "Dec 2023",
      size: "1.1 MB",
    },
  ],
};

export default function Reports() {
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
                <BarChart className="h-7 w-7 text-black" />
              </div>
              <span className="uppercase tracking-[0.32em] text-xs text-black/60">
                Analytics & Reports
              </span>
            </div>

            <h1 className="text-[44px] sm:text-[60px] font-extrabold tracking-tight text-black mb-6">
              Health reports
              <br />
              & public statistics
            </h1>

            <p className="text-black/65 text-[16px] sm:text-[18px] leading-relaxed">
              Official health reports, surveillance data, and policy research
              published by government health authorities.
            </p>
          </div>

          {/* RIGHT — VISUAL CANVAS */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-[380px] sm:h-[440px]"
          >
            {/* OUTER */}
            <div className="absolute inset-0 rounded-[28px] bg-[#FFF6CC] border border-black/10" />
            <div className="absolute inset-6 rounded-2xl bg-white border border-black/10" />
            <div className="absolute inset-10 rounded-xl bg-[#FFF7D6] border border-black/10 p-6">

              {/* FAKE CHART BARS */}
              <div className="h-full grid grid-cols-6 items-end gap-4">
                {[40, 70, 55, 85, 60, 75].map((h, i) => (
                  <div key={i} className="h-full flex items-end">
                    <div
                      className="w-full rounded bg-[#402EE6]/80"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* LABEL */}
            <div className="absolute top-4 left-8 px-4 py-2 rounded-lg bg-white border border-black/10 shadow-sm flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="text-xs font-semibold">Public reports</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= REPORT SECTIONS ================= */}
        {[
          { title: "Annual Health Reports", data: reports.annual },
          { title: "Disease Surveillance Reports", data: reports.surveillance },
          { title: "Research & Policy Documents", data: reports.research },
        ].map((section, idx) => (
          <section key={idx} className="mb-28">
            <h2 className="text-2xl font-bold text-black mb-10">
              {section.title}
            </h2>

            <div className="space-y-8">
              {section.data.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="relative group"
                >
                  {/* DEPTH */}
                  <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-[#FFCC33]/30 border border-black/10 -z-10" />

                  <div className="rounded-2xl bg-white border border-black/10 p-8
                    transition-all duration-300
                    group-hover:-translate-y-[3px]
                    group-hover:shadow-xl"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-black mb-2">
                          {r.title}
                        </h3>
                        <p className="text-black/65 text-sm leading-relaxed">
                          {r.desc}
                        </p>
                        <span className="block mt-2 text-xs text-black/45">
                          {r.date} • {r.size}
                        </span>
                      </div>

                      <a
                        href="#"
                        className="inline-flex items-center justify-center
                          px-6 py-3 rounded-md
                          text-sm font-semibold
                          text-white bg-[#402EE6]
                          hover:bg-[#402EE6]/90
                          transition"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}

      </div>
    </section>
  );
}
