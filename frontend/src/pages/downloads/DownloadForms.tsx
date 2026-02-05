"use client";

import { Download, FileText, CheckSquare } from "lucide-react";
import { motion, type Variants } from "framer-motion";

/* ---------------- PDF IMPORTS ---------------- */
import workerRegistration from "@/assets/forms/worker-registration.pdf";
import healthInsurance from "@/assets/forms/health-insurance.pdf";
import medicalReimbursement from "@/assets/forms/medical-reimbursement.pdf";
import healthCheckup from "@/assets/forms/health-checkup-request.pdf";
import vaccinationCert from "@/assets/forms/vaccination-certificate.pdf";
import medicalLeave from "@/assets/forms/medical-leave.pdf";
import grievance from "@/assets/forms/grievance.pdf";
import emergencyContact from "@/assets/forms/emergency-contact.pdf";

/* ---------------- MOTION ---------------- */
const reveal: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fileAnim: Variants = {
  initial: { y: 28, opacity: 0 },
  animate: (i: number) => ({
    y: [28, -10, 0],
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 1.4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 4,
    },
  }),
};

/* ---------------- FORMS DATA ---------------- */
const FORMS = [
  { title: "Worker registration", file: workerRegistration },
  { title: "Health insurance application", file: healthInsurance },
  { title: "Medical reimbursement claim", file: medicalReimbursement },
  { title: "Health checkup request", file: healthCheckup },
  { title: "Vaccination certificate request", file: vaccinationCert },
  { title: "Medical leave application", file: medicalLeave },
  { title: "Grievance / complaint", file: grievance },
  { title: "Emergency contact update", file: emergencyContact },
];

export default function Forms() {
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

      <section className="saas min-h-screen bg-transparent pt-28 pb-32">
        <div className="max-w-[1440px] mx-auto px-6">

          
        {/* ================= HERO ================= */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">

            {/* LEFT TEXT */}
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-black/60 mb-4">
                Official documentation
              </p>

              <h1 className="h1 text-[44px] sm:text-[64px] text-black mb-6">
                Health forms,
                <br />designed to be completed
              </h1>

              <p className="body text-black/70">
                Download official PDF forms required for registration, claims,
                certificates, and healthcare requests.
              </p>
            </motion.div>

            {/* RIGHT ILLUSTRATION */}
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative w-full h-[420px] flex items-center justify-center"
            >
              {/* FILES */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fileAnim}
                  initial="initial"
                  animate="animate"
                  className="absolute w-[260px] h-[170px] rounded-xl bg-[#FFFDF8] border border-black/10 shadow-md"
                  style={{
                    top: 40 + i * 14,
                    left: 10 + i * 12,
                    zIndex: 30 - i,
                  }}
                >
                  <div className="p-5 space-y-3">
                    <div className="h-3 w-2/3 bg-black/10 rounded" />
                       <div className="flex items-center gap-2 text-black/60 text-sm">
                        <CheckSquare className="h-4 w-4" />
                        Documents
                      </div>
                    <div className="h-3 w-full bg-black/10 rounded" />
                    <div className="h-3 w-5/6 bg-black/10 rounded" />
                  </div>
                </motion.div>
              ))}

              {/* FOLDER TAB */}
              <div className="absolute bottom-[225px] left-[calc(50%-120px)] w-[160px] h-[42px] rounded-t-xl bg-[#FFB703] border border-black/15 z-10" />

              {/* FOLDER BACK */}
              <div className="absolute bottom-10 w-[340px] h-[220px] rounded-2xl bg-[#FFD166] border border-black/15 shadow-xl z-0" />

              {/* FOLDER FRONT */}
              <div className="absolute bottom-10 w-[340px] h-[190px] rounded-2xl bg-[#FB8500] border border-black/20 shadow-2xl z-40" />
            </motion.div>
          </div>

          {/* ================= FORMS GRID ================= */}
          <section>
            <h2 className="h2 text-2xl text-black mb-12">
              Available applications
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-12">

              {FORMS.map((form, i) => (
                <motion.div
                  key={i}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="rounded-2xl bg-[#FFF7D6] border border-black/10 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition">
                    <div className="px-5 py-4 bg-[#FFCC33] flex items-center gap-3">
                      <FileText className="h-5 w-5" />
                       <h3 className="font-semibold text-xs sm:text-sm uppercase tracking-wide">
                        {form.title}
                     </h3>
                    </div>

                    <div className="px-5 py-6 space-y-3">
                      <div className="h-3 bg-black/10 rounded w-full" />
                      <div className="h-3 bg-black/10 rounded w-5/6" />
                      <div className="h-3 bg-black/10 rounded w-2/3" />
                    </div>

                    <div className="px-4 sm:px-5 py-4 border-t border-black/10  flex flex-col sm:flex-row gap-2 sm:gap-0 sm:items-center sm:justify-between">
                      <div className="flex items-center gap-2 text-black/60 text-sm">
                        <CheckSquare className="h-4 w-4" />
                        PDF document
                      </div>

                      <a
                        href={form.file}
                        download
                        className="inline-flex items-center text-sm font-semibold text-[#402EE6] hover:underline"
                      >
                        Download
                        <Download className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

        </div>
      </section>
    </>
  );
}
