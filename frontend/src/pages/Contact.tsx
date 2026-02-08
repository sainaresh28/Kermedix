import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, Phone, MapPin, Send, Clock, Shield, MessageSquare, 
  Users, CheckCircle, Server
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [activeSection, setActiveSection] = useState<"healthcare" | "technical">("healthcare");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const supportInfo = {
    healthcare: {
      title: "Healthcare Support",
      description: "Medical inquiries, policy information, and healthcare assistance",
      contacts: [
        { 
          type: "email", 
          label: "Healthcare Email", 
          value: "dhskerala.hlth@kerala.gov.in", 
          link: "mailto:dhskerala.hlth@kerala.gov.in?subject=Healthcare%20Support",
          icon: Mail,
          color: "text-[#402EE6]"
        },
        { 
          type: "location", 
          label: "Office Location", 
          value: "Directorate of Health Services, Kerala", 
          link: "https://www.google.com/maps/search/?api=1&query=Directorate+of+Health+Services+Kerala",
          icon: MapPin,
          color: "text-[#FF6B6B]"
        }
      ],
      hours: "Mon – Fri, 9:00 AM – 6:00 PM",
      response: "Within 48 hours"
    },
    technical: {
      title: "Technical Support",
      description: "Portal access, login issues, and system-related queries",
      contacts: [
        { 
          type: "email", 
          label: "Technical Email", 
          value: "kermedix.Dhrms@gmail.com", 
          link: "mailto:kermedix.Dhrms@gmail.com?subject=Technical%20Support",
          icon: Mail,
          color: "text-[#402EE6]"
        },
        { 
          type: "phone", 
          label: "Support Numbers", 
          value: "+91 78478 10210 | +91 78480 91884", 
          links: ["tel:+917847810210", "tel:+917848091884"],
          icon: Phone,
          color: "text-[#4ECDC4]"
        }
      ],
      hours: "24/7 Support Available",
      response: "Within 24 hours"
    }
  };

  const emergencyContacts = [
    { service: "Ambulance", number: "108", color: "bg-gradient-to-r from-[#FF6B6B] to-red-600" },
    { service: "Police", number: "100", color: "bg-gradient-to-r from-[#402EE6] to-blue-700" },
    { service: "Fire", number: "101", color: "bg-gradient-to-r from-[#f66c10] to-orange-600" },
    { service: "Women Helpline", number: "1091", color: "bg-gradient-to-r from-purple-600 to-purple-700" }
  ];

  const activeInfo = supportInfo[activeSection];

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap");
        .contact-root { font-family: "Montserrat", system-ui, sans-serif; }
        .contact-eyebrow { 
          font-size: 12px; 
          letter-spacing:.18em; 
          text-transform:uppercase; 
          font-weight:600; 
        }
        @media (min-width: 640px) {
          .contact-eyebrow { font-size: 13px; }
        }
        .contact-h1 { 
          letter-spacing:-.035em; 
          line-height:1.1; 
          font-weight:800; 
          font-size: 32px;
        }
        @media (min-width: 640px) { .contact-h1 { font-size: 40px; } }
        @media (min-width: 1024px) { .contact-h1 { font-size: 58px; line-height: 1.05; } }
        .contact-h2 { 
          letter-spacing:-.02em; 
          font-weight:700; 
          font-size: 24px;
        }
        @media (min-width: 1024px) { .contact-h2 { font-size: 32px; } }
        .contact-body { 
          line-height:1.6; 
          font-weight:500;
          font-size: 16px;
        }
        @media (min-width: 640px) { .contact-body { line-height: 1.75; } }
        
        /* Hide scrollbar but keep functionality */
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        /* Custom breakpoint for tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          .contact-form-tablet {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <section className="contact-root bg-transparent pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#402EE6]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -left-40 w-80 h-80 bg-[#4ECDC4]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-[#FF6B6B]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-20 mb-12 lg:mb-20">
   
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="max-w-2xl w-full lg:w-auto"
            >
              <motion.p 
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="contact-eyebrow text-[#402EE6] mb-4 flex items-center gap-2"
              >
                <span className="w-6 h-0.5 bg-[#402EE6]"></span>
                Contact & Support
              </motion.p>

              <motion.h1 
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="contact-h1 text-center lg:text-left mb-6"
              >
                Get Support for
                <span className="text-[#402EE6] block lg:inline"> Healthcare Access</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="contact-body text-black/65 text-center lg:text-left mb-8 px-2 lg:px-0"
              >
                Official healthcare and technical support assistance. Connect with our dedicated 
                teams for inquiries, technical issues, or emergency services.
              </motion.p>
            </motion.div>

            {/* ILLUSTRATION */}
            <div className="w-full lg:max-w-lg">
              <div className="relative">
                {/* Main Container */}
                <div className="relative border border-gray-200 bg-[#ecdb96] rounded-2xl shadow-sm p-4 md:p-6">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-[#402EE6] rounded-lg flex items-center justify-center">
                        <Server className="h-3 w-3 md:h-4 md:w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base">Support Workflow</h3>
                        <p className="text-xs text-gray-500 hidden sm:block">Real-time response tracking</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#021fff] font-medium bg-[#00A86B]/10 px-2 py-1 rounded">
                      <div className="w-2 h-2 bg-[#ff0000] rounded-full animate-pulse"></div>
                      <span>Live</span>
                    </div>
                  </div>

                  {/* Workflow Steps */}
                  <div className="space-y-4 md:space-y-6">
                    
                    {/* Step 1: Query Submission */}
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="relative">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center">
                          <MessageSquare className="h-4 w-4 md:h-5 md:w-5 text-[#ff0303]" />
                        </div>
                        <div className="absolute -bottom-4 md:-bottom-5 left-1/2 -translate-x-1/2 w-px h-4 md:h-5 bg-gray-200"></div>
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-900 text-sm md:text-base">Query Submission</h4>
                          <span className="text-xs text-gray-500">Instant</span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 mt-1">Form submission or direct contact</p>
                        <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-[#402EE6]"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Step 2: Expert Assignment */}
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="flex items-start gap-3"
                    >
                      <div className="relative">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center">
                          <Users className="h-4 w-4 md:h-5 md:w-5 text-[#402EE6]" />
                        </div>
                        <div className="absolute -bottom-4 md:-bottom-5 left-1/2 -translate-x-1/2 w-px h-4 md:h-5 bg-gray-200"></div>
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-900 text-sm md:text-base">Expert Assignment</h4>
                          <span className="text-xs text-gray-500">10-15 min</span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 mt-1">Dedicated specialist allocation</p>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex -space-x-1 md:-space-x-2">
                            {[...Array(3)].map((_, i) => (
                              <div key={i} className="w-5 h-5 md:w-6 md:h-6 bg-blue-100 border-2 border-white rounded-full flex items-center justify-center text-[10px] font-semibold text-[#402EE6]">
                                {String.fromCharCode(65 + i)}
                              </div>
                            ))}
                          </div>       
                        </div>
                      </div>
                    </motion.div>

                    {/* Step 3: Resolution */}
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#00A86B]" />
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-900 text-sm md:text-base">Resolution</h4>
                          <span className="text-xs text-[#404040] font-medium">Within 24h</span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 mt-1">Comprehensive solution delivery</p>
                      </div>
                    </motion.div>

                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 lg:mb-24"
          >
            <div className="contact-eyebrow text-black/70 mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#402EE6]"></span>
              Send Message
            </div>
            
            <div className="bg-white border border-black/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl transition-all duration-300">
              <div className="flex flex-col lg:grid lg:grid-cols-2 contact-form-tablet">
                
                <div className="relative overflow-hidden bg-[#2718af] p-6 md:p-8 lg:p-12 order-1">
                  <div className="relative z-10">
                    <div className="mb-6 md:mb-8">
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Contact Form</h2>
                      <div className="h-[6px] w-40 rounded-full bg-[#F4C430]" />
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">
                          Full Name *
                        </label>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-[#ffffff] border border-[#bcbcbc] text-[#000000] placeholder-[#7f7f7f] focus:outline-none focus:ring-2 focus:ring-[#ffffff] focus:border-transparent backdrop-blur-sm text-sm md:text-base"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-[#ffffff] border border-[#bcbcbc] text-[#000000] placeholder-[#7f7f7f] focus:outline-none focus:ring-2 focus:ring-[#ffffff] focus:border-transparent backdrop-blur-sm text-sm md:text-base"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Describe your inquiry or issue"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-[#ffffff] border border-[#bcbcbc] text-[#000000] placeholder-[#7f7f7f] focus:outline-none focus:ring-2 focus:ring-[#ffffff] focus:border-transparent backdrop-blur-sm resize-none text-sm md:text-base"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ffe711] text-[#000000] font-semibold rounded-xl hover:from-[#2c25d4] hover:to-[#402EE6]/90 shadow-lg hover:shadow-xl transition-all disabled:opacity-60 text-sm md:text-base"
                      >
                        {loading ? (
                          <>
                            <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Submit Message
                          </>
                        )}
                      </button>

                      {status === "success" && (
                        <p className="text-[#fffb02] font-medium text-sm mt-3 text-center md:text-left">
                          ✓ Message sent successfully. We'll contact you soon.
                        </p>
                      )}

                      {status === "error" && (
                        <p className="text-[#fffb02] font-medium text-sm mt-3 text-center md:text-left">
                          X Failed to send message. Please try again later.
                        </p>
                      )}
                    </form>
                  </div>
                </div>

                {/* Info section  */}
                <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center bg-[#ecdb96] order-2">
                  <span className="contact-eyebrow text-[#000000] mb-4 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Support Information
                  </span>

                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight">
                    Direct Support Channels
                  </h2>

                  <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
               
                    <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                      <button
                        onClick={() => setActiveSection("healthcare")}
                        className={`px-4 py-2 rounded-lg font-medium text-sm transition-all flex-shrink-0 ${
                          activeSection === "healthcare" 
                            ? "bg-[#402EE6] text-white shadow-sm" 
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                        }`}
                      >
                        Healthcare
                      </button>
                      <button
                        onClick={() => setActiveSection("technical")}
                        className={`px-4 py-2 rounded-lg font-medium text-sm transition-all flex-shrink-0 ${
                          activeSection === "technical" 
                            ? "bg-[#402EE6] text-white shadow-sm" 
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                        }`}
                      >
                        Technical
                      </button>
                    </div>

                    {/* Active Support Info */}
                    <div className="space-y-3 md:space-y-4">
                      {activeInfo.contacts.map((contact, index) => (
                        <div key={contact.label} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className={`p-2 rounded-lg ${contact.color}`}>
                            <contact.icon className="w-4 h-4 md:w-5 md:h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs md:text-sm text-gray-500 mb-1 truncate">{contact.label}</div>
                            
                            {contact.label === "Support Numbers" && contact.type === "phone" && contact.links ? (
                              <div className="flex flex-wrap gap-2">
                                <a
                                  href={contact.links[0]}
                                  className="text-gray-900 font-medium hover:text-[#402EE6] transition-colors text-sm md:text-base break-words"
                                >
                                  +91 78478 10210
                                </a>
                                <span className="text-gray-400">|</span>
                                <a
                                  href={contact.links[1]}
                                  className="text-gray-900 font-medium hover:text-[#402EE6] transition-colors text-sm md:text-base break-words"
                                >
                                  +91 78480 91884
                                </a>
                              </div>
                            ) : (
                              <a
                                href={contact.link}
                                target={contact.type === "location" ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="text-gray-900 font-medium hover:text-[#402EE6] transition-colors text-sm md:text-base break-words"
                              >
                                {contact.value}
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 border-t border-gray-100 gap-4 sm:gap-0">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-xs md:text-sm">{activeInfo.hours}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#ff004c] font-medium">
                      <Shield className="h-4 w-4" />
                      <span className="text-xs md:text-sm">{activeInfo.response}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Support Cards Grid */}
          <div className="mb-16 lg:mb-24">
            <div className="mb-6 md:mb-8">
              <h2 className="contact-h2 mb-2">Emergency Contacts</h2>
              <p className="text-black/60 text-sm md:text-base">Immediate assistance services</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {emergencyContacts.map((contact, index) => (
                <motion.div
                  key={contact.service}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full"
                >
                  <a href={`tel:${contact.number}`} className="block">
                    <div className={`${contact.color} text-white rounded-xl md:rounded-2xl overflow-hidden hover:shadow-lg md:hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full`}>
                      <div className="p-3 md:p-4 lg:p-6">
                        <div className="flex items-center justify-between mb-2 md:mb-3 lg:mb-4">
                          <span className="text-xs font-medium text-white/90 bg-white/20 py-1 px-2 md:px-3 rounded-full whitespace-nowrap">
                            Emergency
                          </span>
                          <span className="text-xs text-white/70">{index + 1}</span>
                        </div>

                        <div className="text-center mb-2 md:mb-3 lg:mb-4">
                          <div className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wider mb-1 md:mb-2">{contact.number}</div>
                          <div className="text-sm md:text-base lg:text-lg font-semibold">{contact.service}</div>
                        </div>

                        <div className="mt-auto pt-2 md:pt-3 lg:pt-4 border-t border-white/20">
                          <div className="text-xs md:text-sm font-medium flex items-center justify-center gap-1">
                            <span className="hidden sm:inline">Tap to call</span>
                            <span className="sm:hidden">Call</span>
                            <Phone className="h-3 w-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 text-center md:hidden">
              <p className="text-xs text-gray-500">Tap any card to call emergency services</p>
            </div>
          </div>
       
        </div>
      </section>
    </>
  );
};

export default Contact;
