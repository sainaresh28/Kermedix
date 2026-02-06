import {
  Video,
  Phone,
  MessageSquare,
  Calendar,
  CheckCircle,
  FileText,
  Users,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import TeleImage from "@/assets/3784074.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Telemedicine = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progressPosition, setProgressPosition] = useState(0);
  
  const steps = [
    { label: "Book", icon: Calendar, desc: "Schedule your appointment in seconds" },
    { label: "Confirm", icon: CheckCircle, desc: "Instant confirmation & reminders" },
    { label: "Consult", icon: Users, desc: "Secure video/audio consultation" },
    { label: "Prescription", icon: FileText, desc: "Digital prescriptions sent instantly" },
    { label: "Follow-up", icon: Clock, desc: "Automated follow-up care" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const nextStep = prev === steps.length - 1 ? 0 : prev + 1;
        const position = (nextStep / (steps.length - 1)) * 100;
        setProgressPosition(position);
        return nextStep;
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const position = (activeStep / (steps.length - 1)) * 100;
    setProgressPosition(position);
  }, [activeStep]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    const position = (index / (steps.length - 1)) * 100;
    setProgressPosition(position);
  };

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

          @keyframes pulse-glow {
            0%, 100% { 
              box-shadow: 0 0 10px rgba(255, 204, 51, 0.5); 
            }
            50% { 
              box-shadow: 0 0 20px rgba(255, 204, 51, 0.8), 0 0 30px rgba(255, 204, 51, 0.4); 
            }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }

          @keyframes icon-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.15); }
          }

          .step-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }

          .float-animation {
            animation: float 3s ease-in-out infinite;
          }

          .icon-pulse {
            animation: icon-pulse 1.5s ease-in-out infinite;
          }
        `}
      </style>

      <section className="saas min-h-screen bg-transparent pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8">

          {/* ---------------- HERO ---------------- */}
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center mb-16 sm:mb-20 md:mb-28">
            <div className="order-2 lg:order-1">
              <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-black/60 mb-4 sm:mb-5">
                Telemedicine platform
              </p>

              <h1 className="saas-h1 text-[28px] xs:text-[32px] sm:text-[42px] md:text-[52px] xl:text-[64px] text-black mb-4 sm:mb-6">
                Care delivery,
                <br />
                redesigned for distance.
              </h1>

              <p className="saas-body text-[14px] sm:text-[16px] md:text-[18px] text-black/70 mb-6 sm:mb-8 max-w-xl">
                Secure, multilingual remote consultations across video,
                phone, and chat — built for scale and trust.
              </p>
            </div>

            <div className="relative order-1 lg:order-2 h-[280px] xs:h-[320px] sm:h-[360px] md:h-[420px] w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] md:max-w-[420px] mx-auto lg:mx-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#FFF7D6] to-[#FFE999] border border-[#000000] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 md:p-6">
                <motion.div 
                  className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] md:max-w-[560px] lg:max-w-[640px] rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 bg-white"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={TeleImage}
                    alt="Telemedicine interface"
                    className="w-full h-auto rounded-lg md:rounded-xl object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* ---------------- WORKFLOW ---------------- */}
          <div className="rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-5 sm:px-8 md:px-14 py-10 sm:py-12 md:py-16 mb-16 sm:mb-20 md:mb-28 relative overflow-hidden">

            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFCC33]/5 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#402EE6]/5 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>

            <div className="relative z-10">
              <motion.h2 
                className="saas-h2 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] mb-8 sm:mb-10 md:mb-12"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                How remote care works
              </motion.h2>

              {/* DESKTOP FLOW */}
              <div className="hidden sm:block max-w-6xl mx-auto">
              
                <div className="relative h-2 bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16 mt-8 rounded-full overflow-hidden">
            
                  <div className="absolute inset-0 bg-white/5"></div>
           
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FFCC33] via-[#FF9966] to-[#FFCC33] rounded-full"
                    animate={{
                      width: `${progressPosition}%`,
                      backgroundPosition: ["0%", "200%"],
                    }}
                    transition={{
                      width: {
                        duration: 1.5,
                        ease: "easeInOut",
                      },
                      backgroundPosition: {
                        duration: 2,
                        ease: "linear",
                        repeat: Infinity,
                      },
                    }}
                    style={{
                      backgroundSize: "200% 100%",
                    }}
                  />
                  
                  <motion.div
                    className="absolute top-1/2 h-6 w-6 bg-[#FFCC33] rounded-full -translate-y-1/2 shadow-lg"
                    animate={{
                      left: `${progressPosition}%`,
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#FFCC33]"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.8, 0, 0.8],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>

                  {steps.map((_, i) => {
                    const position = (i / (steps.length - 1)) * 100;
                    return (
                      <div
                        key={i}
                        className="absolute top-1/2 -translate-y-1/2"
                        style={{ left: `${position}%` }}
                      >
                        <motion.div
                          className={`h-4 w-4 rounded-full ${i <= activeStep ? 'bg-[#FFCC33]' : 'bg-white/30'}`}
                          animate={{
                            scale: activeStep === i ? [1, 1.3, 1] : 1,
                          }}
                          transition={{
                            duration: 0.5,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="grid grid-cols-5 gap-4 sm:gap-8 md:gap-14 relative">
                  {steps.map((step, i) => {
                    const Icon = step.icon;
                    const isActive = activeStep === i;
                    const isPast = i < activeStep;
                    
                    return (
                      <motion.div
                        key={i}
                        className="flex flex-col items-center gap-3 sm:gap-4 cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: i * 0.2 }}
                        onClick={() => handleStepClick(i)}
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div
                          className={`relative h-14 w-14 sm:h-16 sm:w-16 rounded-full flex items-center justify-center text-sm sm:text-lg font-semibold transition-all duration-300 ${isActive ? 'scale-110 step-glow float-animation' : ''}`}
                          animate={{
                            backgroundColor: isActive 
                              ? ["#FFCC33", "#FF9966", "#FFCC33"] 
                              : isPast
                              ? "#FFCC33"
                              : "#333",
                            color: isActive || isPast ? "black" : "white",
                            scale: isActive ? [1, 1.1, 1] : isPast ? 1 : 0.95,
                          }}
                          transition={{
                            backgroundColor: {
                              duration: 2,
                              repeat: isActive ? Infinity : 0,
                              ease: "easeInOut"
                            },
                            scale: {
                              duration: 0.3,
                            }
                          }}
                        >
                          <motion.div
                            animate={{
                              scale: isActive ? [1, 1.2, 1] : 1,
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: isActive ? Infinity : 0,
                            }}
                          >
                            <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${isActive ? 'icon-pulse' : ''}`} />
                          </motion.div>
                          
                          {isActive && (
                            <motion.div
                              className="absolute -inset-2 border-2 border-[#FFCC33] rounded-full"
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [1, 0, 1],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                              }}
                            />
                          )}
                          
                          {isPast && !isActive && (
                            <div className="absolute -inset-0.5 border-2 border-[#FFCC33]/50 rounded-full"></div>
                          )}
                        </motion.div>
                        
                        <div className="text-center">
                          <motion.h3 
                            className={`font-semibold mb-1 transition-colors duration-300 ${isActive ? 'text-[#FFCC33]' : isPast ? 'text-[#FFCC33]/80' : 'text-white'}`}
                            animate={{
                              scale: isActive ? [1, 1.05, 1] : 1,
                            }}
                            transition={{
                              duration: 0.5,
                              repeat: isActive ? Infinity : 0,
                            }}
                          >
                            {step.label}
                          </motion.h3>
                          <motion.p 
                            className="saas-body text-white/70 text-xs sm:text-sm max-w-[120px] mx-auto"
                            initial={{ opacity: 0.5 }}
                            animate={{ 
                              opacity: isActive ? 1 : isPast ? 0.8 : 0.5,
                              scale: isActive ? 1.05 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {step.desc}
                          </motion.p>
                        </div>

                        {/* Connection arrow for past steps */}
                        {i < steps.length - 1 && isPast && (
                          <motion.div
                            className="absolute right-[-30%] top-6 text-[#FFCC33]"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            →
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* MOBILE FLOW */}
              <div className="sm:hidden relative mt-8">
                <div className="space-y-10 relative">
                  {steps.map((step, i) => {
                    const Icon = step.icon;
                    const isActive = activeStep === i;
                    const isPast = i < activeStep;
                    
                    return (
                      <motion.div
                        key={i}
                        className="flex items-start gap-4 sm:gap-6 relative cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => handleStepClick(i)}
                      >
                        {/* Vertical line connector */}
                        {i < steps.length - 1 && (
                          <motion.div
                            className="absolute left-[15px] top-10 bottom-[-3.5rem] w-0.5 bg-gradient-to-b from-white/20 via-white/40 to-white/20 -z-10"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                          />
                        )}      

                        <motion.div
                          className={`relative h-10 w-10 rounded-full flex items-center justify-center font-semibold text-sm z-20 ${isActive ? 'step-glow' : ''}`}
                          animate={{
                            backgroundColor: isActive 
                              ? ["#FFCC33", "#FF9966", "#FFCC33"] 
                              : isPast
                              ? "#FFCC33"
                              : "#333",
                            color: isActive || isPast ? "black" : "white",
                            scale: isActive ? [1, 1.1, 1] : isPast ? 1 : 0.95,
                          }}
                          transition={{
                            backgroundColor: {
                              duration: 2,
                              repeat: isActive ? Infinity : 0,
                              ease: "easeInOut"
                            },
                            scale: {
                              duration: 0.3,
                            }
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Icon className={`h-4 w-4 ${isActive ? 'icon-pulse' : ''}`} />
                        </motion.div>

                        <div className="flex-1 pt-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className={`font-semibold ${isActive ? 'text-[#FFCC33]' : isPast ? 'text-[#FFCC33]/80' : 'text-white'}`}>
                              {step.label}
                            </h3>
                            {isActive && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="text-[#FFCC33]"
                              >
                                →
                              </motion.div>
                            )}
                            {isPast && !isActive && (
                              <div className="text-[#FFCC33]/60 text-sm">✓</div>
                            )}
                          </div>
                          <motion.p
                            className="saas-body text-white/80 text-sm"
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: isActive ? 1 : isPast ? 0.8 : 0.5 }}
                            transition={{ duration: 0.3 }}
                          >
                            {step.desc}
                          </motion.p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-8 flex items-center justify-center gap-2">
                  {steps.map((_, i) => (
                    <motion.div
                      key={i}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activeStep === i ? 'w-8 bg-[#FFCC33]' : i < activeStep ? 'w-4 bg-[#FFCC33]/70' : 'w-2 bg-white/30'}`}
                      animate={{
                        backgroundColor: activeStep === i ? "#FFCC33" : i < activeStep ? "#FFCC33/70" : "#555",
                      }}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => handleStepClick(i)}
                    />
                  ))}
                </div>
              </div>

              <motion.div
                className="text-center mt-10 sm:mt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="saas-body text-white/70 mb-4 text-sm sm:text-base">
                  Ready to experience seamless remote care?
                </p>
                <Link to="/register">
                  <motion.button
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-[#FFCC33] text-black font-semibold rounded-full text-sm sm:text-base hover:shadow-lg hover:shadow-[#FFCC33]/30 transition-all duration-300"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 204, 51, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Your Journey
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Telemedicine;
