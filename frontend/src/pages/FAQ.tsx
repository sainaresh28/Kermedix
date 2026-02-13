import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, Search, HelpCircle, Users, FileText, 
  Lock, Download, Shield, MessageSquare, Sparkles,
  AlertCircle, Info, CheckCircle, BookOpen, 
  Clock, MessageCircle, ArrowRight, Mail
} from "lucide-react";


type Category = "all" | "worker" | "doctor" | "security";
type FAQItem = {
  category: "worker" | "doctor" | "security";
  question: string;
  answer: string;
  icon: any;
  tags: string[];
};

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const categories = [
    { id: "all" as Category, label: "All Topics", icon: HelpCircle, color: "text-[#402EE6]" },
    { id: "worker" as Category, label: "Workers", icon: Users, color: "text-[#4ECDC4]" },
    { id: "doctor" as Category, label: "Doctors", icon: FileText, color: "text-[#FF6B6B]" },
    { id: "security" as Category, label: "Security", icon: Lock, color: "text-purple-600" }
  ];

  const faqs: FAQItem[] = [
    // MIGRANT WORKER FAQs (20)
    {
      category: "worker",
      question: "What is KerMedix and how does it benefit migrant workers?",
      answer: "KerMedix is a secure digital health identity and medical records platform designed specifically for migrant workers. It enables seamless access to medical history, teleconsultations, vaccination tracking, and insurance benefits across regions, ensuring continuity of care regardless of location or employer.",
      icon: Users,
      tags: ["kermedix", "benefits", "migrant workers", "digital health", "medical records"]
    },
    {
      category: "worker",
      question: "What is a Digital Health ID within KerMedix?",
      answer: "The Digital Health ID is a unique, QR-enabled identifier that securely links a worker to their medical records. It allows authorized healthcare providers to retrieve relevant medical history instantly during consultations or emergencies.",
      icon: Sparkles,
      tags: ["digital health id", "qr code", "medical records", "emergency"]
    },
    {
      category: "worker",
      question: "Is registration on KerMedix mandatory or voluntary?",
      answer: "Registration is voluntary; however, it is strongly recommended as it ensures long-term medical continuity, emergency accessibility, and portability of health records across hospitals and states.",
      icon: Users,
      tags: ["registration", "mandatory", "voluntary", "signup"]
    },
    {
      category: "worker",
      question: "How does KerMedix ensure nationwide access to my records?",
      answer: "KerMedix operates on a centralized secure infrastructure, allowing workers to access their health records from any registered healthcare facility within the network, irrespective of geographic location.",
      icon: FileText,
      tags: ["nationwide access", "health records", "accessibility", "network"]
    },
    {
      category: "worker",
      question: "Can I access my health records outside working hours?",
      answer: "Yes. Workers can securely log in at any time to view diagnoses, prescriptions, laboratory reports, and vaccination records.",
      icon: FileText,
      tags: ["24/7 access", "health records", "anytime", "login"]
    },
    {
      category: "worker",
      question: "What information is stored in my medical profile?",
      answer: "Your profile may include: Diagnoses, Prescriptions, Clinical notes, Laboratory results, Vaccination history, Appointment records, and Insurance details.",
      icon: FileText,
      tags: ["medical profile", "data stored", "information", "records"]
    },
    {
      category: "worker",
      question: "How secure is my medical data?",
      answer: "All health information is encrypted using industry-grade encryption protocols. Access is restricted through authentication mechanisms and role-based authorization to prevent unauthorized viewing.",
      icon: Shield,
      tags: ["security", "encryption", "data protection", "privacy"]
    },
    {
      category: "worker",
      question: "Who is authorized to access my medical records?",
      answer: "Only: You (the registered worker), and Verified and authorized healthcare providers involved in your care. All access activities are logged for transparency.",
      icon: Lock,
      tags: ["access control", "authorization", "privacy", "permissions"]
    },
    {
      category: "worker",
      question: "What is the purpose of the Emergency SOS feature?",
      answer: "The Emergency SOS function allows immediate visibility of critical medical information, such as allergies or ongoing conditions, to healthcare providers during urgent medical situations.",
      icon: AlertCircle,
      tags: ["emergency", "sos", "urgent care", "critical info"]
    },
    {
      category: "worker",
      question: "Can I revoke a doctor's access to my records?",
      answer: "Yes. Workers retain control over data access and may request revocation of access permissions as per platform policy.",
      icon: Lock,
      tags: ["revoke access", "permissions", "privacy control", "access management"]
    },
    {
      category: "worker",
      question: "How does telemedicine work on KerMedix?",
      answer: "Workers can schedule appointments digitally and join secure virtual consultations through the platform at the designated time.",
      icon: MessageSquare,
      tags: ["telemedicine", "virtual consultation", "teleconsultation", "online appointment"]
    },
    {
      category: "worker",
      question: "Can I reschedule or cancel appointments?",
      answer: "Yes. Appointments can be managed through the Appointments section, including cancellation or rescheduling subject to provider policies.",
      icon: FileText,
      tags: ["appointments", "reschedule", "cancel", "booking"]
    },
    {
      category: "worker",
      question: "What are Medication Reminders?",
      answer: "Medication Reminders allow workers to set scheduled alerts for prescribed medications, improving adherence and health outcomes.",
      icon: AlertCircle,
      tags: ["medication", "reminders", "alerts", "prescription"]
    },
    {
      category: "worker",
      question: "Can I upload personal medical documents?",
      answer: "Yes. The 'Add Self Record' feature enables workers to upload relevant personal medical documents for centralized storage.",
      icon: Download,
      tags: ["upload", "documents", "self record", "add files"]
    },
    {
      category: "worker",
      question: "How long is my medical data retained?",
      answer: "Medical records are retained securely for long-term continuity of care, subject to regulatory compliance and platform retention policies.",
      icon: FileText,
      tags: ["data retention", "records storage", "long-term", "compliance"]
    },
    {
      category: "worker",
      question: "Does KerMedix integrate with insurance schemes?",
      answer: "Yes. Insurance details such as ESIC and PM-JAY can be linked and viewed within the platform.",
      icon: FileText,
      tags: ["insurance", "esic", "pm-jay", "schemes", "benefits"]
    },
    {
      category: "worker",
      question: "Can I download my medical history?",
      answer: "Yes. Workers can export or download their records in secure digital format for personal reference or second opinions.",
      icon: Download,
      tags: ["download", "export", "medical history", "pdf"]
    },
    {
      category: "worker",
      question: "What are Community Health Alerts?",
      answer: "Community Health Alerts provide official notifications regarding public health updates, outbreak warnings, and policy announcements.",
      icon: AlertCircle,
      tags: ["health alerts", "community", "notifications", "outbreak", "updates"]
    },
    {
      category: "worker",
      question: "What is Sahaya AI Assistant?",
      answer: "Sahaya is an AI-powered health assistant that provides symptom guidance, basic health information, and navigation support within the platform. It does not replace professional medical advice.",
      icon: Sparkles,
      tags: ["ai assistant", "sahaya", "chatbot", "symptoms", "guidance"]
    },
    {
      category: "worker",
      question: "What should I do if I suspect incorrect medical information?",
      answer: "You should contact your healthcare provider or platform support to request verification or correction of medical entries.",
      icon: AlertCircle,
      tags: ["incorrect info", "correction", "support", "verification"]
    },

    // DOCTOR FAQs (20)
    {
      category: "doctor",
      question: "What is the purpose of the KerMedix Doctor Portal?",
      answer: "The Doctor Portal enables verified healthcare professionals to securely access patient records, manage appointments, upload diagnoses, generate prescriptions, and monitor community health trends.",
      icon: FileText,
      tags: ["doctor portal", "healthcare professionals", "patient records", "appointments"]
    },
    {
      category: "doctor",
      question: "How are doctors verified on KerMedix?",
      answer: "Doctors undergo credential validation and administrative verification before being granted access to patient records.",
      icon: CheckCircle,
      tags: ["verification", "credentials", "doctor validation", "authentication"]
    },
    {
      category: "doctor",
      question: "How can I search for a patient?",
      answer: "Patients can be located using: Worker ID, Registered phone number, or QR code scan.",
      icon: Search,
      tags: ["search patient", "worker id", "phone number", "qr scan"]
    },
    {
      category: "doctor",
      question: "Is QR-based patient access secure?",
      answer: "Yes. QR access requires authenticated login and is governed by role-based authorization protocols.",
      icon: Lock,
      tags: ["qr code", "security", "authentication", "access control"]
    },
    {
      category: "doctor",
      question: "Can I view complete medical history?",
      answer: "Yes. Once authorized, the system provides structured access to historical diagnoses, prescriptions, lab reports, and vaccination records.",
      icon: FileText,
      tags: ["medical history", "patient records", "diagnoses", "prescriptions"]
    },
    {
      category: "doctor",
      question: "How are medical entries recorded?",
      answer: "All entries are digitally timestamped and securely logged to maintain clinical integrity and audit traceability.",
      icon: FileText,
      tags: ["medical entries", "timestamp", "logging", "audit trail"]
    },
    {
      category: "doctor",
      question: "Can previous medical records be edited?",
      answer: "Edits are logged and tracked to ensure accountability and compliance with medical documentation standards.",
      icon: FileText,
      tags: ["edit records", "accountability", "compliance", "documentation"]
    },
    {
      category: "doctor",
      question: "Does the system support telemedicine consultations?",
      answer: "Yes. Doctors can conduct secure video consultations and update records accordingly.",
      icon: MessageSquare,
      tags: ["telemedicine", "video consultation", "teleconsultation", "virtual care"]
    },
    {
      category: "doctor",
      question: "What analytics are available?",
      answer: "The Analytics section provides: Common health issue trends, Vaccination coverage metrics, and Predictive health alerts.",
      icon: Sparkles,
      tags: ["analytics", "health trends", "vaccination", "metrics", "reports"]
    },
    {
      category: "doctor",
      question: "What are Predictive Alerts?",
      answer: "Predictive Alerts are AI-driven indicators that highlight emerging health risks or outbreak patterns within the registered population.",
      icon: AlertCircle,
      tags: ["predictive alerts", "ai", "health risks", "outbreak", "warnings"]
    },
    {
      category: "doctor",
      question: "Can I export patient data?",
      answer: "Yes. Authorized users can export structured data (e.g., CSV format) for institutional or reporting purposes.",
      icon: Download,
      tags: ["export data", "csv", "download", "reporting"]
    },
    {
      category: "doctor",
      question: "How are appointments managed?",
      answer: "Doctors can view daily schedules, track appointment status, and manage teleconsultation sessions.",
      icon: FileText,
      tags: ["appointments", "schedule", "teleconsultation", "booking"]
    },
    {
      category: "doctor",
      question: "Is patient activity logged?",
      answer: "Yes. All system interactions are securely logged to ensure transparency and compliance.",
      icon: Lock,
      tags: ["activity logs", "audit trail", "transparency", "compliance"]
    },
    {
      category: "doctor",
      question: "Can I send community health announcements?",
      answer: "Yes. The Community Alerts section enables authorized announcements to registered workers.",
      icon: MessageSquare,
      tags: ["announcements", "community alerts", "notifications", "health updates"]
    },
    {
      category: "doctor",
      question: "Does KerMedix support vaccination monitoring?",
      answer: "Yes. Doctors can review immunization records and monitor coverage percentages.",
      icon: CheckCircle,
      tags: ["vaccination", "immunization", "monitoring", "coverage"]
    },
    {
      category: "doctor",
      question: "Is data centralized across hospitals?",
      answer: "Yes. KerMedix provides centralized digital continuity of care across participating healthcare facilities.",
      icon: FileText,
      tags: ["centralized", "hospitals", "continuity of care", "network"]
    },
    {
      category: "doctor",
      question: "How is patient confidentiality maintained?",
      answer: "Through encryption, authentication, audit logging, and strict access control policies.",
      icon: Shield,
      tags: ["confidentiality", "encryption", "privacy", "security"]
    },
    {
      category: "doctor",
      question: "Can I manage my professional profile?",
      answer: "Yes. Doctors can update qualifications, specialization, and availability details.",
      icon: Users,
      tags: ["profile", "qualifications", "specialization", "update"]
    },
    {
      category: "doctor",
      question: "Does KerMedix comply with digital health standards?",
      answer: "KerMedix aligns with modern digital health security principles and healthcare data governance frameworks.",
      icon: CheckCircle,
      tags: ["compliance", "standards", "healthcare", "governance"]
    },
    {
      category: "doctor",
      question: "What happens if a security incident is detected?",
      answer: "The system initiates predefined response protocols including logging, containment, and administrative review.",
      icon: Shield,
      tags: ["security incident", "response", "protocols", "breach"]
    },

    // SECURITY FAQs (5)
    {
      category: "security",
      question: "How does KerMedix protect sensitive medical information?",
      answer: "KerMedix implements industry-standard encryption protocols for data both in transit and at rest. Access to health records is governed through secure authentication mechanisms and role-based authorization controls, ensuring that only verified and authorized users can access medical information.",
      icon: Shield,
      tags: ["protection", "encryption", "security", "data protection"]
    },
    {
      category: "security",
      question: "Who can access a worker's health records?",
      answer: "Health records are accessible only to: The registered worker, and Verified healthcare professionals involved in the worker's treatment. All access activities are logged to maintain transparency and accountability.",
      icon: Lock,
      tags: ["access", "permissions", "authorization", "healthcare providers"]
    },
    {
      category: "security",
      question: "Are all actions within the system audited?",
      answer: "Yes. KerMedix maintains comprehensive audit logs of record access, updates, and system interactions. This ensures traceability, compliance monitoring, and detection of unauthorized activities.",
      icon: FileText,
      tags: ["audit", "logs", "traceability", "compliance", "monitoring"]
    },
    {
      category: "security",
      question: "Is personal health data shared with employers or third parties?",
      answer: "No. Personal health information is not shared with employers or external entities without proper authorization or consent. Data confidentiality is a core principle of the platform's design.",
      icon: Lock,
      tags: ["data sharing", "employers", "third parties", "confidentiality", "privacy"]
    },
    {
      category: "security",
      question: "What safeguards are in place against unauthorized access?",
      answer: "KerMedix employs multiple layers of protection including: Secure login authentication, OTP-based verification, Role-based access restrictions, Continuous monitoring and logging, and Encrypted storage infrastructure. These measures collectively minimize the risk of unauthorized access or data compromise.",
      icon: Shield,
      tags: ["safeguards", "unauthorized access", "otp", "authentication", "monitoring"]
    }
  ];

  const searchFAQs = (query: string): FAQItem[] => {
    let filteredByCategory = activeCategory === "all" 
      ? faqs 
      : faqs.filter(faq => faq.category === activeCategory);
  
    if (!query.trim()) {
      return filteredByCategory;
    }

    const lowercaseQuery = query.toLowerCase();
    const searchTerms = lowercaseQuery.split(/\s+/).filter(term => term.length > 0);
    
    return filteredByCategory.filter(faq => {
      return searchTerms.some(term => 
        faq.question.toLowerCase().includes(term) ||
        faq.answer.toLowerCase().includes(term) ||
        faq.tags.some(tag => tag.toLowerCase().includes(term))
      );
    });
  };

  const filteredFaqs = searchFAQs(searchQuery);

  const popularQuestions = [
    "registration",
    "Digital Health ID",
    "telemedicine",
    "download records",
    "insurance",
    "Emergency SOS",
    "QR code",
    "security",
    "patient records",
    "vaccination",
    "appointments"
  ];

 
  const mobilePopularQuestions = popularQuestions.slice(0, 6);

  // Navigation handlers
  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap");
        .faq-root { 
          font-family: "Montserrat", system-ui, sans-serif; 
        }
        .faq-eyebrow { 
          font-size: 11px; 
          letter-spacing:.15em; 
          text-transform:uppercase; 
          font-weight:600; 
        }
        @media (min-width: 640px) {
          .faq-eyebrow { font-size: 12px; letter-spacing:.18em; }
        }
        .faq-h1 { 
          letter-spacing:-.03em; 
          line-height:1.2; 
          font-weight:800; 
          font-size: 28px;
        }
        @media (min-width: 640px) { 
          .faq-h1 { font-size: 32px; } 
        }
        @media (min-width: 1024px) { 
          .faq-h1 { font-size: 48px; line-height: 1.1; } 
        }
        .faq-h2 { 
          letter-spacing:-.02em; 
          font-weight:700; 
          font-size: 22px;
        }
        @media (min-width: 1024px) { 
          .faq-h2 { font-size: 28px; } 
        }
        .faq-body { 
          line-height:1.5; 
          font-weight:500;
          font-size: 15px;
        }
        @media (min-width: 640px) { 
          .faq-body { line-height: 1.6; font-size: 16px; } 
        }
        
        /* Mobile optimizations */
        .mobile-scroll-categories {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .mobile-scroll-categories::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Mobile illustration adjustments */
        .mobile-illustration {
          max-width: 100%;
          height: auto;
        }
        .mobile-faqs-letter {
          font-size: 80px;
        }
        @media (min-width: 480px) {
          .mobile-faqs-letter {
            font-size: 100px;
          }
        }

        /* Live Chat Button Animation */
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .live-chat-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>

      <section className="faq-root bg-transparent pt-12 pb-12 md:pt-20 md:pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#402EE6]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -left-40 w-80 h-80 bg-[#4ECDC4]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-[#FF6B6B]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-20 mb-8 lg:mb-16">
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
                className="faq-eyebrow text-[#402EE6] mb-3 flex items-center gap-2"
              >
                <span className="w-5 h-0.5 bg-[#402EE6]"></span>
                Frequently Asked Questions
              </motion.p>

              <motion.h1 
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="faq-h1 text-center lg:text-left mb-4"
              >
                Get Your
                <span className="text-[#402EE6] block sm:inline"> Answers Here</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="faq-body text-black/65 text-center lg:text-left mb-6 px-1 lg:px-0"
              >
                Common questions about the KerMedix Health Portal. Search through our comprehensive knowledge base.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative max-w-xl mx-auto lg:mx-0"
              >
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={isMobile ? "Search FAQs..." : "Search questions, topics, or keywords..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#402EE6] focus:border-transparent shadow-sm text-sm md:text-base"
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap gap-2 mt-3 justify-center lg:justify-start"
              >
                <span className="text-xs md:text-sm text-gray-500 w-full sm:w-auto text-center sm:text-left mb-1 sm:mb-0">
                  Popular:
                </span>
                <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
                  {(isMobile ? mobilePopularQuestions : popularQuestions).map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSearchQuery(q)}
                      className="text-xs px-2 py-1.5 md:px-3 md:py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </motion.div>
              
              {/* Search Results Count */}
              {searchQuery && (
                <div className="mt-2 text-xs md:text-sm text-gray-600 text-center lg:text-left">
                  Found {filteredFaqs?.length || 0} result{filteredFaqs?.length !== 1 ? 's' : ''} for "{searchQuery}"
                </div>
              )}
            </motion.div>

            {/* MOBILE ILLUSTRATION */}
            {isMobile ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full mt-4 mb-2"
              >
                <div className="relative bg-[#F4C430] rounded-2xl shadow-xl overflow-hidden p-6 aspect-video flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="relative">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute -top-8 -left-2"
                      >
                        <span className="text-sm md:text-base font-medium text-black italic" style={{ fontFamily: 'Georgia, serif' }}>
                          frequently
                        </span>
                        <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 140 12" preserveAspectRatio="none">
                          <motion.path
                            d="M 0 8 Q 35 2, 70 6 T 140 8"
                            stroke="black"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </svg>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative inline-flex items-center"
                      >
                        <span className="text-[70px] sm:text-[90px] font-black text-black leading-none tracking-tighter">
                          F
                        </span>
                        <span className="relative inline-block text-[70px] sm:text-[90px] font-black text-black leading-none tracking-tighter mx-0">
                          A
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
                            className="absolute top-[15%] left-1/2 -translate-x-1/2"
                          >
                            <div className="relative">
                              <div className="w-[40px] sm:w-[55px] h-[40px] sm:h-[55px] border-[4px] sm:border-[5px] border-black rounded-full bg-[#F4C430] flex items-center justify-center">
                                <span className="text-[24px] sm:text-[32px] font-black text-black">?</span>
                              </div>
                              <div className="absolute top-[70%] left-[70%] w-[20px] sm:w-[28px] h-[5px] sm:h-[6px] bg-black rounded-full transform rotate-45 origin-top-left"></div>
                            </div>
                          </motion.div>
                        </span>
                        <span className="text-[70px] sm:text-[90px] font-black text-black leading-none tracking-tighter">
                          Q
                        </span>
                        <span className="text-[70px] sm:text-[90px] font-black text-black leading-none tracking-tighter">
                          S
                        </span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="absolute -top-6 -right-1"
                      >
                        <span className="text-sm md:text-base font-medium text-black italic" style={{ fontFamily: 'Georgia, serif' }}>
                          asked
                        </span>
                        <svg className="absolute -top-1 -right-2 w-8 h-6" viewBox="0 0 50 40">
                          <motion.path
                            d="M 5 30 Q 15 5, 35 20 Q 40 25, 45 20"
                            stroke="black"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                          />
                        </svg>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="absolute -bottom-6 right-0"
                      >
                        <span className="text-sm md:text-base font-medium text-black italic" style={{ fontFamily: 'Georgia, serif' }}>
                          questions
                        </span>
                        <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 150 12" preserveAspectRatio="none">
                          <motion.path
                            d="M 0 8 Q 37.5 2, 75 6 T 150 8"
                            stroke="black"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                          />
                        </svg>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, rotate: 0, scale: 0 }}
                      animate={{ opacity: 1, rotate: -8, scale: 1 }}
                      transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                      className="absolute top-2 right-3 bg-black text-[#F4C430] px-2 py-1.5 rounded-lg shadow-lg transform -rotate-12"
                    >
                      <div className="flex items-center gap-1">
                        <span className="text-xl font-black">Q</span>
                        <div className="w-0.5 h-5 bg-[#F4C430]"></div>
                        <span className="text-xl font-black">A</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Desktop Illustration */
              <div className="hidden lg:block w-full lg:max-w-2xl">
                <div className="relative">
                  <div className="relative bg-[#F4C430] rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 lg:p-16 aspect-video flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="relative">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="absolute -top-12 md:-top-16 -left-4 md:-left-8"
                        >
                          <span className="text-xl md:text-2xl lg:text-3xl font-medium text-black italic" style={{ fontFamily: 'Georgia, serif' }}>
                            frequently
                          </span>
                          <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 140 12" preserveAspectRatio="none">
                            <motion.path
                              d="M 0 8 Q 35 2, 70 6 T 140 8"
                              stroke="black"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </svg>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="relative inline-flex items-center"
                        >
                          <span className="text-[120px] md:text-[160px] lg:text-[200px] font-black text-black leading-none tracking-tighter">
                            F
                          </span>
                          <span className="relative inline-block text-[120px] md:text-[160px] lg:text-[200px] font-black text-black leading-none tracking-tighter mx-0">
                            A
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
                              className="absolute top-[15%] left-1/2 -translate-x-1/2"
                            >
                              <div className="relative">
                                <div className="w-[70px] md:w-[90px] lg:w-[110px] h-[70px] md:h-[90px] lg:h-[110px] border-[6px] md:border-[8px] border-[#333332] rounded-full bg-[#F4C430] flex items-center justify-center">
                                  <span className="text-[40px] md:text-[50px] lg:text-[60px] font-black text-black">?</span>
                                </div>
                                <div className="absolute top-[70%] left-[70%] w-[35px] md:w-[45px] lg:w-[55px] h-[8px] md:h-[10px] bg-[#444448] rounded-full transform rotate-45 origin-top-left"></div>
                              </div>
                            </motion.div>
                          </span>
                          <span className="text-[120px] md:text-[160px] lg:text-[200px] font-black text-black leading-none tracking-tighter">
                            Q
                          </span>
                          <span className="text-[120px] md:text-[160px] lg:text-[200px] font-black text-black leading-none tracking-tighter">
                            S
                          </span>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                          className="absolute -top-8 md:-top-12 -right-2 md:-right-6"
                        >
                          <span className="text-xl md:text-2xl lg:text-3xl font-medium text-black italic" style={{ fontFamily: 'Georgia, serif' }}>
                            asked
                          </span>
                          <svg className="absolute -top-2 -right-3 w-10 h-8 md:w-12 md:h-10" viewBox="0 0 50 40">
                            <motion.path
                              d="M 5 30 Q 15 5, 35 20 Q 40 25, 45 20"
                              stroke="black"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.8, delay: 0.6 }}
                            />
                          </svg>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="absolute -bottom-10 md:-bottom-14 right-0 md:right-4"
                        >
                          <span className="text-xl md:text-2xl lg:text-3xl font-medium text-black italic" style={{ fontFamily: 'Georgia, serif' }}>
                            questions
                          </span>
                          <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 150 12" preserveAspectRatio="none">
                            <motion.path
                              d="M 0 8 Q 37.5 2, 75 6 T 150 8"
                              stroke="black"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 1, delay: 0.7 }}
                            />
                          </svg>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, rotate: 0, scale: 0 }}
                        animate={{ opacity: 1, rotate: -12, scale: 1 }}
                        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                        className="absolute top-4 md:top-8 right-6 md:right-12 bg-black text-[#F4C430] px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl shadow-2xl transform -rotate-12"
                      >
                        <div className="flex items-center gap-2 md:gap-3">
                          <span className="text-3xl md:text-4xl lg:text-5xl font-black">Q</span>
                          <div className="w-0.5 md:w-1 h-8 md:h-10 lg:h-12 bg-[#F4C430]"></div>
                          <span className="text-3xl md:text-4xl lg:text-5xl font-black">A</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-8"
          >
            <div className="mobile-scroll-categories flex gap-2 overflow-x-auto pb-2 px-1 -mx-1 lg:flex-wrap lg:overflow-visible lg:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSearchQuery("");
                  }}
                  className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2.5 md:py-3 rounded-xl font-semibold text-xs md:text-sm lg:text-base whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#402EE6] text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  <cat.icon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* FAQ List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16 lg:mb-24"
          >
            <div className="faq-eyebrow text-black/70 mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#402EE6]"></span>
              {filteredFaqs?.length || 0} {filteredFaqs?.length === 1 ? 'Question' : 'Questions'} Found
              {searchQuery && ` for "${searchQuery}"`}
            </div>

            {!filteredFaqs || filteredFaqs.length === 0 ? (
              <div className="text-center py-10 md:py-16 bg-white rounded-2xl border border-gray-200">
                <Search className="h-12 w-12 md:h-16 md:w-16 text-gray-300 mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">No results found</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 px-4">Try adjusting your search or browse all categories</p>
                <button 
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="px-5 md:px-6 py-2.5 md:py-3 bg-[#402EE6] text-white rounded-xl hover:bg-[#3020c0] transition-colors text-sm md:text-base"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="space-y-3 md:space-y-4">
                {filteredFaqs.map((faq, index) => {
                  const originalIndex = faqs.findIndex(f => 
                    f.question === faq.question && f.answer === faq.answer
                  );
                  const isOpen = openIndex === originalIndex;
                  
                  return (
                    <motion.div
                      key={originalIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min((index % 10) * 0.05, 0.3) }}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : originalIndex)}
                        className="w-full px-4 md:px-6 py-4 md:py-5 flex items-start gap-3 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center ${
                          faq.category === "worker" ? "bg-[#4ECDC4]/10 text-[#4ECDC4]" :
                          faq.category === "doctor" ? "bg-[#FF6B6B]/10 text-[#FF6B6B]" :
                          "bg-purple-600/10 text-purple-600"
                        }`}>
                          <faq.icon className="h-4 w-4 md:h-5 md:w-5" />
                        </div>
                        <div className="flex-1 min-w-0 pr-2">
                          <h3 className="font-semibold text-gray-900 text-sm md:text-base lg:text-lg mb-1 pr-4">
                            {faq.question}
                          </h3>
                          {!isOpen && (
                            <p className="text-xs md:text-sm text-gray-500 line-clamp-1 md:line-clamp-2">
                              {faq.answer}
                            </p>
                          )}
                        </div>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0 mt-1"
                        >
                          <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 md:px-6 pb-4 md:pb-5 pt-0 pl-11 md:pl-20">
                              <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed mb-3 md:mb-4">
                                {faq.answer}
                              </p>
                              <div className="flex flex-wrap gap-1.5 md:gap-2">
                                {faq.tags.slice(0, isMobile ? 4 : faq.tags.length).map((tag, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => setSearchQuery(tag)}
                                    className="text-[10px] md:text-xs px-2 md:px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-colors"
                                  >
                                    #{tag}
                                  </button>
                                ))}
                                {isMobile && faq.tags.length > 4 && (
                                  <span className="text-[10px] md:text-xs px-2 md:px-3 py-1 bg-gray-50 text-gray-500 rounded-full">
                                    +{faq.tags.length - 4} more
                                  </span>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-[#402EE6] to-blue-700 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-6 md:p-10 lg:p-16 relative">
                <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
                
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4 md:mb-6">
                    <MessageSquare className="h-3.5 w-3.5 md:h-4 md:w-4 text-white" />
                    <span className="text-xs md:text-sm font-semibold text-white">Still Need Help?</span>
                  </div>

                  <h2 className="faq-h2 text-white mb-3 md:mb-4">
                    Can't Find Your Answer?
                  </h2>
                  <p className="faq-body text-white/90 mb-6 md:mb-8 text-sm md:text-base px-2">
                    Our support team is ready to assist you. Get personalized help for your specific question.
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                    <button 
                      onClick={() => navigateTo('/contact')}
                      className="group px-5 md:px-8 py-3 md:py-4 bg-white text-[#402EE6] font-semibold rounded-xl hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                      <MessageSquare className="h-4 w-4 md:h-5 md:w-5" />
                      Contact Support
                      <ArrowRight className="h-4 w-4 md:h-5 md:w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                    <button 
                      onClick={() => navigateTo('/about')}
                      className="group px-5 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 border-2 border-white/30 transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                      <BookOpen className="h-4 w-4 md:h-5 md:w-5" />
                      About KerMedix
                      <ArrowRight className="h-4 w-4 md:h-5 md:w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                  </div>

  
                  <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-white/90">
                  
                   <div
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 cursor-pointer group"
                    
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="relative">
                          <MessageCircle className="h-5 w-5 text-white" />
                       
                        </div>
                        <div className="font-semibold text-sm md:text-base">Live Chat</div>
                      </div>
                      <div className="text-xs md:text-sm text-white/80 mb-1">
                        Chat with our AI assistant
                      </div>
       
                    </div>

                    {/* Community Forum */}
                    <div
                      
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 cursor-pointer group"
                     
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Users className="h-5 w-5 text-white" />
                        <div className="font-semibold text-sm md:text-base">Community</div>
                      </div>
                      <div className="text-xs md:text-sm text-white/80 mb-1">
                        Ask the community
                      </div>
  
                   </div>

                    {/* Email Support  */}
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 cursor-pointer group"
                      onClick={() => window.location.href = 'mailto:kermedix.dhrms@gmail.com'}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Mail className="h-5 w-5 text-white" />
                        <div className="font-semibold text-sm md:text-base">Email Us</div>
                      </div>
                      <div className="text-xs md:text-sm text-white/80 mb-1">
                        kermedix.dhrms@gmail.com
                      </div>
      
                    </motion.div>
                  </div>

     
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
