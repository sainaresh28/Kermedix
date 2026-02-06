import { Award, ShieldCheck, Download, FileText } from "lucide-react";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Vaccination Certificate",
    desc: "Digitally signed vaccination history including dose dates and batch numbers",
    meta: "PDF • Digitally Signed",
  },
  {
    title: "Medical Fitness Certificate",
    desc: "Medical fitness clearance issued after government health screening",
    meta: "PDF • Valid for 1 Year",
  },
  {
    title: "Health Insurance Certificate",
    desc: "Proof of enrolment under government health insurance schemes",
    meta: "PDF • Annual Renewal",
  },
  {
    title: "COVID-19 Recovery Certificate",
    desc: "Issued after verified recovery with lab confirmation",
    meta: "PDF • Valid for 6 Months",
  },
  {
    title: "Health Checkup Certificate",
    desc: "Comprehensive medical examination record with test summaries",
    meta: "PDF • Includes Lab Results",
  },
  {
    title: "TB Screening Certificate",
    desc: "Tuberculosis screening certificate with authorised validation",
    meta: "PDF • Valid for 6 Months",
  },
];

export default function Certificates() {
  return (
    <section className="relative min-h-screen bg-transparent pt-28 pb-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20">

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-xl bg-[#FFCC33]/50 flex items-center justify-center">
              <Award className="h-7 w-7 text-black" />
            </div>
            <span className="uppercase tracking-[0.32em] text-xs text-black/60">
              Official Records
            </span>
          </div>

          <h1 className="text-[46px] sm:text-[62px] font-extrabold tracking-tight text-black mb-6 leading-tight">
            Health certificates,
            <br />secure & verifiable
          </h1>

          <p className="text-black/65 text-[16px] sm:text-[18px] leading-relaxed">
            Government-issued medical certificates stored securely and made
            available for verification, employment, and official use.
          </p>
        </motion.div>

        {/* ================= ACCESS NOTICE ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative"
        >
          {/* STATIC FILE BACK */}
          <div className="absolute inset-0 translate-y-2 rounded-2xl bg-[#FFF1C2] border border-black/10 -z-10" />

          {/* CONTENT */}
          <div className="rounded-2xl bg-white border border-black/10 p-8 flex gap-5">
            <ShieldCheck className="h-6 w-6 text-black mt-1" />
            <div>
              <h3 className="font-semibold text-black mb-2">
                Secure access required
              </h3>
              <p className="text-black/65 text-sm leading-relaxed">
                Certificates are personal medical records. Login is required to
                view, download, or verify documents. All certificates are
                digitally signed and tamper-proof.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= CERTIFICATE REGISTRY ================= */}
        <div className="space-y-12">
          {certificates.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* FILE DEPTH (STATIC) */}
              <div className="absolute inset-0 translate-y-2 rounded-2xl bg-[#FFF1C2] border border-black/10 -z-10" />

              {/* RECORD */}
              <div className="rounded-2xl bg-white border border-black/10 px-8 py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                {/* LEFT */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[#FFCC33]/40 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">
                      {c.title}
                    </h3>
                    <p className="text-sm text-black/60 leading-relaxed">
                      {c.desc}
                    </p>
                    <span className="text-xs text-black/45 block mt-1">
                      {c.meta}
                    </span>
                  </div>
                </div>

                {/* ACTION */}
                <button
                  className="
                    inline-flex items-center justify-center
                    px-7 py-3 rounded-lg
                    text-sm font-semibold
                    text-white bg-[#6C63FF]
                    hover:bg-[#6C63FF]/95
                    transition
                    whitespace-nowrap
                  "
                >
                  <Download className="h-4 w-4 mr-2" />
                  View / Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= VERIFICATION ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative mt-20"
        >
          <div className="absolute inset-0 translate-y-2 rounded-2xl bg-[#FFF1C2] border border-black/10 -z-10" />
          <div className="rounded-2xl bg-white border border-black/10 p-8">
            <h2 className="text-xl font-bold text-black mb-4">
              Certificate verification
            </h2>
            <p className="text-black/65 text-sm leading-relaxed mb-4">
              Each certificate includes a unique verification ID and QR code
              enabling instant authenticity checks through official systems.
            </p>
            <ul className="space-y-2 text-sm text-black/65">
              <li>• Unique certificate identification number</li>
              <li>• QR-based online verification</li>
              <li>• Legally valid for employment and official use</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
