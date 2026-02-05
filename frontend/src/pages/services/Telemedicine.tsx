import {
  Video,
  Phone,
  MessageSquare,
  Calendar,
  Globe,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import TeleImage from "@/assets/3784074.jpg";

const Telemedicine = () => {
  return (
    <>
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

      <section className="saas min-h-screen bg-transparent pt-24 sm:pt-36 pb-32">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">

          {/* ---------------- HERO ---------------- */}
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-28">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-black/60 mb-5">
                Telemedicine platform
              </p>

              <h1 className="saas-h1 text-[36px] sm:text-[52px] xl:text-[64px] text-black mb-6">
                Care delivery,
                <br />
                redesigned for distance.
              </h1>

              <p className="saas-body text-[15px] sm:text-[18px] text-black/70 mb-8 max-w-xl">
                Secure, multilingual remote consultations across video,
                phone, and chat — built for scale and trust.
              </p>
            </div>

            <div className="relative h-[460px] w-[420px] sm:h-[420px] sm:w-[420px] rounded-3xl bg-[#FFF7D6] border border-[#000000] overflow-hidden">

              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
                <div className="w-full max-w-[560px] sm:max-w-[640px] rounded-2xl p-3 sm:p-4">
                  <img
                    src={TeleImage}
                    alt="Telemedicine interface"
                    className="w-full h-auto rounded-xl object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- CARDS ---------------- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-28"
          >
            {[
              { icon: Video, title: "Video consultations", desc: "Secure video care." },
              { icon: Phone, title: "Phone consultations", desc: "Quick voice care." },
              { icon: MessageSquare, title: "Chat-based care", desc: "Async messaging." },
              { icon: Calendar, title: "Smart scheduling", desc: "Flexible bookings." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: i * 0.08, duration: 0.4 },
                    },
                  }}
                  className="rounded-2xl bg-[#FFF7D6] border border-black/10 p-6 hover:-translate-y-[3px] transition"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#402EE6] flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-black" />
                  </div>
                  <h3 className="font-semibold text-black mb-1">
                    {item.title}
                  </h3>
                  <p className="saas-body text-black/65 text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ---------------- WORKFLOW  ---------------- */}
          <div className="rounded-3xl bg-black text-white px-6 sm:px-14 py-16 mb-28">
            
            <h2 className="saas-h2 text-[24px] sm:text-[32px] mb-12">
              How remote care works
            </h2>

            {/* DESKTOP FLOW */}
            <div className="relative hidden sm:block max-w-5xl mx-auto">

           
              <div className="absolute top-[26px] left-0 right-0 h-[2px] bg-white/20" />

              {/* ANIMATED LINE  */}
              <motion.div
                className="absolute top-[26px] left-0 h-[4px] bg-[#FFCC33]"
                animate={{
                  width: [
                    "0%",    
                    "33.33%",
                    "66.66%",
                    "100%",  
                    "100%",  
                    "0%",   
                  ],
                }}
                transition={{
                  duration: 10,
                  times: [0, 0.25, 0.5, 0.75, 0.9, 1],
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />

              <div className="grid grid-cols-5 gap-14 relative">
                {["Book", "Confirm", "Consult", "Prescription", "Follow-up"].map((label, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <div className="h-12 w-12 rounded-full bg-[#FFCC33] text-black font-semibold flex items-center justify-center">
                      {i + 1}
                    </div>
                    <p className="saas-body text-white/80">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* MOBILE FLOW */}
            <div className="sm:hidden relative mt-10 h-[390px]">
              <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-white/20" />

              <motion.div
                className="absolute left-[19px] top-0 w-[2px] bg-[#FFCC33]"
                animate={{
                  height: [
                    "0%",
                    "25%",
                    "50%",
                    "75%",
                    "100%",
                    "100%",
                    "0%",
                  ],
                }}
                transition={{
                  duration: 10,
                  times: [0, 0.25, 0.5, 0.75, 0.85, 0.95, 1],
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />

              <div className="space-y-14 relative">
                {[
                  "Book appointment",
                  "Get confirmation",
                  "Join consultation",
                  "Receive prescription",
                  "Follow-up",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-6">
                    <div className="relative z-10">
                      <div className="h-10 w-10 rounded-full bg-[#FFCC33] text-black flex items-center justify-center font-semibold">
                        {i + 1}
                      </div>
                    </div>
                    <p className="saas-body text-white/85 pt-1">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Telemedicine;