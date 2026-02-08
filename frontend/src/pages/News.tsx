import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ExternalLink, Mail, Newspaper, Bell, TrendingUp, Shield, Users, ChevronRight, ChevronLeft, Pause, Play, Touchpad } from "lucide-react";

import healthScreenImg from "@/assets/health-screen.jpg";

/* ---------------- animations ---------------- */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const News = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);
  const autoScrollRef = useRef(null);
  const cardHoverTimeoutRef = useRef(null);
  const cardTapTimeoutRef = useRef(null);

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/subscribe-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      alert("Subscribed successfully!");
      setEmail("");
    } catch {
      alert("Subscription failed. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const newsArticles = [
    {
      id: 1,
      title: "87.7% of Migrant Workers Unaware of State Health Policies, Study Finds",
      link: "https://www.hindustantimes.com/india-news/study-flags-how-kerala-s-migrant-workers-remain-excluded-from-govt-health-schemes-101758543832317.html",
      featured: true,
      image: healthScreenImg,
      category: "Research",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Kerala CM Inaugurates 'Norka Care' Health Insurance Scheme for Non-Resident Malayalis",
      link: "https://timesofindia.indiatimes.com/business/india-business/kerala-cm-inaugurates-norka-care-a-comprehensive-health-and-accident-insurance-scheme-for-non-resident-malayalis/articleshow/124148777.cms",
      category: "Policy",
      readTime: "3 min read",
    },
    {
      id: 3,
      title: "Migrant Labourers Form Majority of Workforce in Kerala Marine Fisheries Sector",
      link: "https://timesofindia.indiatimes.com/city/kochi/migrant-labourers-form-majority-of-workforce-in-kerala-marine-fisheries-sector-study-finds/articleshow/123551411.cms",
      category: "Employment",
      readTime: "4 min read",
    },
    {
      id: 4,
      title: "Mandatory Health Screening for Migrant Workers in Udupi District",
      link: "https://timesofindia.indiatimes.com/city/mangaluru/mandatory-health-screening-for-migrant-workers-health-dept/articleshow/121322695.cms",
      category: "Health",
      readTime: "2 min read",
    },
    {
      id: 5,
      title: "Kerala Clinic For Migrant Workers Featured In WHO List",
      link: "https://www.themigrationstory.com/post/kerala-clinic-for-migrant-workers-featured-in-who-list",
      category: "Recognition",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "Kerala Launches AI-Powered Health Dashboard to Track Migrant Worker Health",
      link: "https://www.digitalhealthnews.com/kerala-health-department-implements-ai-tools-for-patient-care-early-diagnosis",
      category: "Technology",
      readTime: "6 min read",
    },
    {
      id: 7,
      title: "New Mobile Health Units Deployed for Migrant Worker Communities",
      link: "#",
      category: "Initiative",
      readTime: "3 min read",
    },
    {
      id: 8,
      title: "Study Reveals Improved Healthcare Access for Migrant Workers in 2024",
      link: "#",
      category: "Research",
      readTime: "5 min read",
    },
    {
      id: 9,
      title: "Digital Health Cards Launched for Interstate Migrant Workers",
      link: "#",
      category: "Technology",
      readTime: "4 min read",
    },
  ];

  const featured = newsArticles.find(n => n.featured);
  const rest = newsArticles.filter(n => !n.featured);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    
    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft < maxScrollLeft - 10);
    

    if (container.children.length > 0) {
      const cardWidth = container.children[0].offsetWidth + 24;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    }
  };

  const scrollToCard = (index) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = container.children[0]?.offsetWidth + 24;
    const targetScroll = index * cardWidth;
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  const startAutoScroll = () => {
    if (!scrollContainerRef.current || isPaused) return;

    const container = scrollContainerRef.current;
    const scrollAmount = 1;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    autoScrollRef.current = requestAnimationFrame(() => {
      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollAmount;
      }
      checkScrollPosition();
      startAutoScroll();
    });
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      cancelAnimationFrame(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  const handleCardHoverStart = () => {
    clearTimeout(cardHoverTimeoutRef.current);
    setIsPaused(true);
  };

  const handleCardHoverEnd = () => {
   
    cardHoverTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 500);
  };


  const handleCardTapStart = (e) => {
    if (!isMobile) return;
    
    e.preventDefault();
    clearTimeout(cardTapTimeoutRef.current);
    setIsPaused(true);
    
    e.currentTarget.classList.add('card-tap-active');
  };

  const handleCardTapEnd = (e) => {
    if (!isMobile) return;
    
    cardTapTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 1000);
    
    setTimeout(() => {
      e.currentTarget.classList.remove('card-tap-active');
    }, 300);
  };


  const scrollLeft = () => {
    setIsPaused(true);
    
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      
      container.scrollBy({ 
        left: -scrollAmount, 
        behavior: 'smooth' 
      });
      
      setTimeout(() => {
        checkScrollPosition();
     
        setTimeout(() => {
          setIsPaused(false);
        }, 2000);
      }, 300);
    }
  };

  const scrollRight = () => {
    setIsPaused(true);
    
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      
      container.scrollBy({ 
        left: scrollAmount, 
        behavior: 'smooth' 
      });
      
      setTimeout(() => {
        checkScrollPosition();
       
        setTimeout(() => {
          setIsPaused(false);
        }, 2000);
      }, 300);
    }
  };


  const toggleAutoScroll = () => {
    setIsPaused(!isPaused);
  };


  useEffect(() => {
    if (!isPaused) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }
    
    return () => {
      stopAutoScroll();
      clearTimeout(cardHoverTimeoutRef.current);
      clearTimeout(cardTapTimeoutRef.current);
    };
  }, [isPaused]);


  useEffect(() => {
    checkScrollPosition();
    window.addEventListener('resize', checkScrollPosition);
    
    return () => {
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap");
        .news-root { font-family: "Montserrat", system-ui, sans-serif; }
        .news-eyebrow { font-size:13px; letter-spacing:.18em; text-transform:uppercase; font-weight:600; }
        .news-h1 { letter-spacing:-.035em; line-height:1.05; font-weight:800; }
        .news-h2 { letter-spacing:-.02em; font-weight:700; }
        .news-body { line-height:1.75; font-weight:500; }
        
        /* Hide scrollbar */
        .scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-behavior: smooth;
        }
        .scroll-container::-webkit-scrollbar {
          display: none;
        }
        
        /* Card hover effects */
        .news-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .news-card:hover {
          transform: translateY(-4px);
        }
        
        /* Card tap effect for mobile */
        .card-tap-active {
          transform: scale(0.98) !important;
          box-shadow: 0 4px 12px rgba(64, 46, 230, 0.2) !important;
        }
        
        /* Custom arrows */
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 4px 20px rgba(64, 46, 230, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 20;
          transition: all 0.3s ease;
          border: 1px solid rgba(64, 46, 230, 0.15);
          opacity: 0.9;
        }
        .carousel-arrow:hover {
          background: #402EE6;
          box-shadow: 0 6px 25px rgba(64, 46, 230, 0.3);
          transform: translateY(-50%) scale(1.1);
          opacity: 1;
        }
        .carousel-arrow:hover svg {
          color: white;
        }
        .carousel-arrow-left {
          left: -22px;
        }
        .carousel-arrow-right {
          right: -22px;
        }
        
        /* Mobile responsive */
        @media (max-width: 768px) {
          .carousel-arrow {
            width: 40px;
            height: 40px;
          }
          .carousel-arrow-left {
            left: 10px;
          }
          .carousel-arrow-right {
            right: 10px;
          }
          .mobile-scroll-hint {
            display: flex !important;
          }
          
          /* Better touch targets */
          .news-card {
            min-height: 200px;
          }
          .carousel-dot {
            width: 10px;
            height: 10px;
          }
          
          /* Fix hero illustration on mobile */
          .hero-illustration-container {
            width: 100% !important;
            max-width: 500px !important;
            margin: 0 auto !important;
          }
        }
        @media (max-width: 640px) {
          .carousel-arrow {
            width: 36px;
            height: 36px;
          }
          .carousel-arrow-left {
            left: 5px;
          }
          .carousel-arrow-right {
            right: 5px;
          }
        }
        
        /* Desktop-specific hero illustration fix */
        @media (min-width: 1024px) {
          .hero-illustration-container {
            min-width: 480px !important;
            width: 480px !important;
            max-width: 500px !important;
            flex-shrink: 0 !important;
          }
          .hero-illustration-wrapper {
            width: 100% !important;
            max-width: 500px !important;
          }
        }
        
        /* Auto-scroll indicator */
        .auto-scroll-indicator {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        /* Active dot indicator */
        .carousel-dot.active {
          background: #402EE6;
          transform: scale(1.2);
        }
        
        /* Touch indicator for mobile */
        .touch-indicator {
          animation: touch-pulse 1.5s infinite;
        }
        @keyframes touch-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>

      <section className="news-root bg-transparent pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#402EE6]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -left-40 w-80 h-80 bg-[#4ECDC4]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-[#FF6B6B]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header section  */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-10 mb-12 lg:mb-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              className="max-w-2xl order-2 lg:order-1 w-full lg:flex-1"
            >
              <motion.p variants={fadeUp} className="news-eyebrow text-[#402EE6] mb-3 md:mb-4 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-[#402EE6] hidden sm:block"></span>
                Latest Updates
              </motion.p>

              <motion.h1 variants={fadeUp} className="news-h1 text-[32px] sm:text-[40px] lg:text-[58px] mb-4 md:mb-6">
                Stay Informed on
                <span className="text-[#402EE6] block"> Migrant Health</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="news-body text-black/65 max-w-xl mb-6 md:mb-8 text-sm sm:text-base">
                Curated media reports, research findings, and verified updates
                related to migrant worker health and healthcare access.
              </motion.p>

              {/* Stats */}
              <motion.div 
                variants={fadeUp}
                className="flex flex-wrap gap-4 md:gap-6 mt-6 md:mt-8"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#402EE6]/10 flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-[#402EE6]" />
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-bold">100+</p>
                    <p className="text-xs md:text-sm text-black/60">News Updates</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#4ECDC4]/10 flex items-center justify-center">
                    <Shield className="h-4 w-4 md:h-5 md:w-5 text-[#4ECDC4]" />
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-bold">100%</p>
                    <p className="text-xs md:text-sm text-black/60">Verified</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#FF6B6B]/10 flex items-center justify-center">
                    <Users className="h-4 w-4 md:h-5 md:w-5 text-[#FF6B6B]" />
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-bold">5K+</p>
                    <p className="text-xs md:text-sm text-black/60">Subscribers</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/*  HERO ILLUSTRATION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="hero-illustration-container order-1 lg:order-2 w-full lg:w-auto"
            >
              <div className="hero-illustration-wrapper relative max-w-[500px] lg:max-w-none mx-auto lg:mx-0">
                <div className="relative bg-white rounded-2xl lg:rounded-[32px] border border-black/10 shadow-lg lg:shadow-2xl overflow-hidden p-6 lg:p-8 w-full">
                  <div className="absolute top-2 right-2 lg:top-1 lg:right-1 bg-[#FF6B6B] text-white text-xs lg:text-sm font-bold py-1 lg:py-2 px-3 lg:px-4 rounded-lg rotate-12 shadow">
                    BREAKING
                  </div>

                  <div className="mb-4 lg:mb-6">
                    <div className="text-xl lg:text-2xl font-bold text-[#402EE6] mb-2">HEALTH GAZETTE</div>
                    <div className="w-full h-1 bg-[#402EE6] rounded-full"></div>
                  </div>

                  <div className="space-y-3 lg:space-y-4 mb-4 lg:mb-6">
                    <div className="h-2 lg:h-3 bg-gradient-to-r from-[#402EE6]/80 to-[#402EE6]/40 rounded-full w-full"></div>
                    <div className="h-2 lg:h-3 bg-gradient-to-r from-[#402EE6]/60 to-[#402EE6]/30 rounded-full w-4/5"></div>
                    <div className="h-2 lg:h-3 bg-gradient-to-r from-[#402EE6]/40 to-[#402EE6]/20 rounded-full w-3/4"></div>
                  </div>

                  <div className="h-32 lg:h-40 bg-[#ffe603] rounded-xl lg:rounded-2xl mb-4 lg:mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Newspaper className="h-10 w-10 lg:h-16 lg:w-16 text-[#402EE6]/40" />
                    </div>
                   
                    <div className="absolute inset-0 overflow-hidden">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-full h-[1px] bg-[#402EE6]"
                          style={{ top: `${i * 12.5}%` }}
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, ease: "linear" }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[#f66c10] flex items-center justify-center">
                        <span className="text-white text-xs font-bold">H</span>
                      </div>
                      <span className="text-sm font-medium">Health News</span>
                    </div>
                    <div className="text-sm text-black/60">Today</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Featured Article */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 lg:mb-24"
            >
              <div className="news-eyebrow text-black/70 mb-4 lg:mb-6 flex items-center gap-2">
                <span className="w-6 lg:w-8 h-0.5 bg-[#402EE6]"></span>
                Featured Story
              </div>
              
              <a href={featured.link} target="_blank" rel="noopener noreferrer">
                <Card className="group bg-[#ecdb96] border border-black/10 rounded-xl lg:rounded-3xl overflow-hidden hover:shadow-lg lg:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative overflow-hidden h-48 lg:h-auto">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                      <div className="absolute top-4 left-4 lg:top-6 lg:left-6 bg-[#000000] text-white font-bold py-1 lg:py-1.5 px-3 lg:px-4 rounded-full text-xs lg:text-sm">
                        Exclusive
                      </div>
                    </div>

                    <CardHeader className="p-6 lg:p-8 xl:p-12 flex flex-col justify-center">
                      <span className="news-eyebrow text-[#000000] mb-3 lg:mb-4 flex items-center gap-2 text-xs lg:text-sm">
                        <Newspaper className="h-3 w-3 lg:h-4 lg:w-4" />
                        In-depth Analysis
                      </span>

                      <CardTitle className="text-xl lg:text-2xl xl:text-3xl font-bold mb-4 lg:mb-6 leading-tight group-hover:text-[#402EE6] transition-colors">
                        {featured.title}
                      </CardTitle>

                      <p className="text-black/60 mb-6 lg:mb-8 leading-relaxed text-sm lg:text-base">
                        A comprehensive study reveals critical gaps in migrant worker awareness about state health policies.
                      </p>

                      <div className="flex items-center justify-between">
                        <CardDescription className="text-[#402EE6] font-semibold flex items-center gap-2 text-sm lg:text-base group-hover:gap-3 transition-all">
                          Read full coverage 
                          <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4 group-hover:rotate-45 transition-transform" />
                        </CardDescription>
                        <span className="text-xs lg:text-sm text-black/50">{featured.readTime}</span>
                      </div>
                    </CardHeader>
                  </div>
                </Card>
              </a>
            </motion.div>
          )}

          <div className="mb-16 lg:mb-24">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 lg:mb-8">
              <div>
                <h2 className="news-h2 text-2xl lg:text-3xl mb-2">Latest Updates</h2>
                <p className="text-black/60 text-sm lg:text-base">
                  {isMobile ? "Tap cards to pause • Auto-scroll" : "Hover cards to pause • Auto-scroll"}
                </p>
              </div>
              <div className="flex items-center gap-3 lg:gap-4 w-full sm:w-auto">
                <div className="flex items-center gap-2 text-sm text-[#402EE6] font-medium">
                  {isMobile ? (
                    <Touchpad className={`h-4 w-4 ${!isPaused ? 'touch-indicator' : ''}`} />
                  ) : (
                    <Bell className={`h-4 w-4 ${!isPaused ? 'auto-scroll-indicator' : ''}`} />
                  )}
                  <span className="hidden sm:inline">
                    {isPaused ? 'Paused' : 'Auto-scrolling'}
                  </span>
                </div>
                <div className="flex items-center gap-2 ml-auto sm:ml-0">
                  <button
                    onClick={toggleAutoScroll}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors group"
                    aria-label={isPaused ? "Start auto-scroll" : "Pause auto-scroll"}
                  >
                    {isPaused ? (
                      <Play className="h-4 w-4 text-gray-600 group-hover:text-[#402EE6]" />
                    ) : (
                      <Pause className="h-4 w-4 text-gray-600 group-hover:text-[#402EE6]" />
                    )}
                  </button>
                  <button
                    onClick={scrollLeft}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors group"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="h-4 w-4 text-gray-600 group-hover:text-[#402EE6]" />
                  </button>
                  <button
                    onClick={scrollRight}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors group"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="h-4 w-4 text-gray-600 group-hover:text-[#402EE6]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile instruction */}
            {isMobile && (
              <div className="mobile-scroll-hint flex items-center justify-center gap-2 text-sm text-gray-500 mb-4 animate-pulse">
                <Touchpad className="h-4 w-4" />
                <span>Tap cards to pause auto-scroll</span>
              </div>
            )}


            <div className="flex justify-center gap-2 mb-4">
              {rest.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsPaused(true);
                    scrollToCard(index);
                    setTimeout(() => setIsPaused(false), 2000);
                  }}
                  className={`carousel-dot w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'active bg-[#402EE6] w-4' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>

            {/* CAROUSEL CONTAINER*/}
            <div className="relative">
              {/* Left Arrow */}
              {showLeftArrow && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={scrollLeft}
                  className="carousel-arrow carousel-arrow-left"
                  aria-label="Previous articles"
                >
                  <ChevronLeft className="h-5 w-5 text-[#402EE6]" />
                </motion.button>
              )}

              {/* Right Arrow */}
              {showRightArrow && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={scrollRight}
                  className="carousel-arrow carousel-arrow-right"
                  aria-label="Next articles"
                >
                  <ChevronRight className="h-5 w-5 text-[#402EE6]" />
                </motion.button>
              )}

             
              <div 
                ref={scrollContainerRef}
                className="scroll-container flex gap-4 sm:gap-6 py-2 px-1 overflow-x-auto"
                onScroll={checkScrollPosition}
              >
                {rest.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px]"
                  >
                    <a 
                      href={article.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block h-full"
                      onMouseEnter={isMobile ? undefined : handleCardHoverStart}
                      onMouseLeave={isMobile ? undefined : handleCardHoverEnd}
                      onTouchStart={isMobile ? handleCardTapStart : undefined}
                      onTouchEnd={isMobile ? handleCardTapEnd : undefined}
                    >
                      <Card className="news-card h-full bg-white border border-black/10 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 group">
                        <CardHeader className="p-4 sm:p-6">
                          <div className="flex items-center justify-between mb-3 sm:mb-4">
                            <span className="inline-flex items-center gap-1 sm:gap-2 text-xs font-medium text-[#402EE6] bg-[#402EE6]/10 py-1 px-2 sm:px-3 rounded-full">
                              <Newspaper className="h-3 w-3" />
                              {article.category}
                            </span>
                            <span className="text-xs text-black/50 flex items-center gap-1">
                              <span className="hidden sm:inline">Card</span> #{index + 1}
                            </span>
                          </div>

                          <CardTitle className="text-base sm:text-lg font-semibold leading-snug mb-3 sm:mb-4 group-hover:text-[#402EE6] transition-colors line-clamp-3">
                            {article.title}
                          </CardTitle>

                          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100">
                            <div className="flex items-center justify-between">
                              <CardDescription className="text-xs sm:text-sm text-[#402EE6] font-medium flex items-center gap-1">
                                Read article 
                                <ExternalLink className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                              </CardDescription>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-black/40">{article.readTime}</span>
                                <span className={`w-2 h-2 rounded-full ${!isPaused ? 'animate-pulse' : ''}`} 
                                      style={{ backgroundColor: !isPaused ? '#4ECDC4' : '#94a3b8' }}></span>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="border-t border-gray-200 pt-12 lg:pt-16">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4 lg:mb-6">
                    <div className="w-6 lg:w-8 h-px bg-[#402EE6]"></div>
                    <span className="news-eyebrow text-gray-500 text-sm lg:text-base">Stay Informed</span>
                  </div>
                  
                  <h2 className="news-h2 text-[24px] sm:text-[28px] lg:text-[32px] mb-3 lg:mb-4 text-gray-900">
                    Information That Supports Better Care
                  </h2>
                  
                  <p className="news-body text-gray-600 mb-6 lg:mb-8 text-sm lg:text-base">
                    Subscribe to get reliable updates on migrant health initiatives, healthcare access programs, system improvements, and important public health developments connected to KerMedix.
                  </p>


                  <div className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#402EE6]" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="
                          w-full
                          pl-11 pr-4 py-3
                          rounded-lg
                          border border-gray-300
                          bg-white
                          focus:outline-none
                          focus:border-[#402EE6]
                          focus:ring-2
                          focus:ring-[#402EE6]/20
                          placeholder:text-gray-400
                          text-gray-900
                          text-sm lg:text-base
                        "
                      />
                    </div>

                    <button
                      onClick={handleSubscribe}
                      disabled={loading}
                      className="
                        w-full
                        px-6 py-3
                        rounded-lg
                        bg-[#402EE6]
                        text-white
                        font-medium
                        hover:bg-[#402EE6]/90
                        disabled:opacity-60
                        transition-colors
                        flex items-center justify-center gap-2
                        text-sm lg:text-base
                      "
                    >
                      {loading ? (
                        <>
                          <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          Processing...
                        </>
                      ) : (
                        <>
                          Subscribe to Newsletter
                          <ChevronRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                  
                  <p className="text-xs lg:text-sm text-gray-500 mt-3 lg:mt-4">
                    Privacy respected. Unsubscribe anytime.
                  </p>
                </div>

                {/* Newsletter Illustration */}
                <div className="hidden lg:block">
                  <div className="relative h-full min-h-[300px]">
                    <div className="absolute top-10 right-20 w-64">
                      <div className="relative">
                        <div className="w-full h-80 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                          <div className="space-y-3">
                            <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-100 rounded w-full"></div>
                            <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2 mt-4"></div>
                          </div>
                          <div className="mt-6 pt-4 border-t border-gray-100">
                            <div className="h-3 bg-gray-100 rounded w-full mb-2"></div>
                            <div className="h-3 bg-gray-100 rounded w-2/3"></div>
                          </div>
                        </div>
                        
                        <motion.div
                          animate={{ y: [0, -2, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute top-0 right-4 w-full h-80 bg-[#ecdb96] border-gray-200 rounded-lg shadow-sm p-6 -rotate-1"
                        >
                          <div className="space-y-3">
                            <div className="h-4 bg-[#402EE6] rounded w-3/4"></div>
                            <div className="h-4 bg-[#402EE6] rounded w-full"></div> 
                            <div className="h-4 bg-[#402EE6] rounded w-5/6"></div>
                          </div>
                          <div className="mt-6 pt-4 border-t border-gray-100">
                            <div className="h-6 bg-[#402EE6] rounded w-1/3 mb-3"></div>
                            <div className="h-3 bg-gray-50 rounded w-full mb-2"></div>
                            <div className="h-3 bg-gray-50 rounded w-2/3"></div>
                          </div>
                        </motion.div>
                        
                        <div className="absolute bottom-1 -left-3 w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                          <Mail className="h-5 w-5 text-[#402EE6]" />
                        </div>
                      </div>
                    </div>
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

export default News;
