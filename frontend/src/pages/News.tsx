import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ExternalLink, Mail, Newspaper, Bell, TrendingUp, Shield, Users, ChevronRight } from "lucide-react";

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

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/subscribe-newsletter", {
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
      title:
        "87.7% of Migrant Workers Unaware of State Health Policies, Study Finds",
      link: "https://www.hindustantimes.com/india-news/study-flags-how-kerala-s-migrant-workers-remain-excluded-from-govt-health-schemes-101758543832317.html",
      featured: true,
      image: healthScreenImg,
    },
    {
      id: 2,
      title:
        "Kerala CM Inaugurates 'Norka Care' Health Insurance Scheme for Non-Resident Malayalis",
      link: "https://timesofindia.indiatimes.com/business/india-business/kerala-cm-inaugurates-norka-care-a-comprehensive-health-and-accident-insurance-scheme-for-non-resident-malayalis/articleshow/124148777.cms",
    },
    {
      id: 3,
      title:
        "Migrant Labourers Form Majority of Workforce in Kerala Marine Fisheries Sector",
      link: "https://timesofindia.indiatimes.com/city/kochi/migrant-labourers-form-majority-of-workforce-in-kerala-marine-fisheries-sector-study-finds/articleshow/123551411.cms",
    },
    {
      id: 4,
      title:
        "Mandatory Health Screening for Migrant Workers in Udupi District",
      link: "https://timesofindia.indiatimes.com/city/mangaluru/mandatory-health-screening-for-migrant-workers-health-dept/articleshow/121322695.cms",
    },
    {
      id: 5,
      title:
        "Kerala Clinic For Migrant Workers Featured In WHO List",
      link: "https://www.themigrationstory.com/post/kerala-clinic-for-migrant-workers-featured-in-who-list",
    },
    {
      id: 6,
      title:
        "Kerala Launches AI-Powered Health Dashboard to Track Migrant Worker Health",
      link: "https://www.digitalhealthnews.com/kerala-health-department-implements-ai-tools-for-patient-care-early-diagnosis",
    },
  ];

  const featured = newsArticles.find(n => n.featured);
  const rest = newsArticles.filter(n => !n.featured);

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap");
        .news-root { font-family: "Montserrat", system-ui, sans-serif; }
        .news-eyebrow { font-size:13px; letter-spacing:.18em; text-transform:uppercase; font-weight:600; }
        .news-h1 { letter-spacing:-.035em; line-height:1.05; font-weight:800; }
        .news-h2 { letter-spacing:-.02em; font-weight:700; }
        .news-body { line-height:1.75; font-weight:500; }
      `}</style>

      <section className="news-root bg-transparent pt-32 pb-24 overflow-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#402EE6]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -left-40 w-80 h-80 bg-[#4ECDC4]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-[#FF6B6B]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20 mb-20 lg:mb-28">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              className="max-w-2xl order-2 lg:order-1"
            >
              <motion.p variants={fadeUp} className="news-eyebrow text-[#402EE6] mb-4 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-[#402EE6]"></span>
                Latest Updates
              </motion.p>

              <motion.h1 variants={fadeUp} className="news-h1 text-[36px] sm:text-[48px] lg:text-[58px] mb-6">
                Stay Informed on
                <span className="text-[#402EE6]"> Migrant Health</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="news-body text-black/65 max-w-xl mb-8">
                Curated media reports, research findings, and verified updates
                related to migrant worker health and healthcare access.
              </motion.p>

              {/* Stats */}
              <motion.div 
                variants={fadeUp}
                className="flex flex-wrap gap-6 mt-8"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#402EE6]/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-[#402EE6]" />
                  </div>
                  <div>
                    <p className="text-lg font-bold">100+</p>
                    <p className="text-sm text-black/60">News Updates</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#4ECDC4]/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-[#4ECDC4]" />
                  </div>
                  <div>
                    <p className="text-lg font-bold">100%</p>
                    <p className="text-sm text-black/60">Verified Sources</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FF6B6B]/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-[#FF6B6B]" />
                  </div>
                  <div>
                    <p className="text-lg font-bold">5K+</p>
                    <p className="text-sm text-black/60">Subscribers</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* NEWS HERO ILLUSTRATION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="order-1 lg:order-2 relative w-full max-w-lg lg:max-w-none"
            >
              <div className="relative">
                {/* Main illustration container */}
                <div className="relative w-full aspect-square max-w-md lg:max-w-lg mx-auto">
                  {/* Main card */}
                  <div className="relative bg-white rounded-[32px] border-2 border-black/10 shadow-2xl overflow-hidden p-8">
                    {/* Breaking badge */}
                    <div className="absolute top-1 right-1 bg-[#FF6B6B] text-white font-bold py-2 px-4 rounded-lg rotate-12 shadow-lg">
                      BREAKING
                    </div>

                    {/* Newspaper masthead */}
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-[#402EE6] mb-2">HEALTH GAZETTE</div>
                      <div className="w-full h-1 bg-[#402EE6] rounded-full"></div>
                    </div>

                    {/* Headlines */}
                    <div className="space-y-4 mb-6">
                      <div className="h-3 bg-gradient-to-r from-[#402EE6]/80 to-[#402EE6]/40 rounded-full w-full"></div>
                      <div className="h-3 bg-gradient-to-r from-[#402EE6]/60 to-[#402EE6]/30 rounded-full w-4/5"></div>
                      <div className="h-3 bg-gradient-to-r from-[#402EE6]/40 to-[#402EE6]/20 rounded-full w-3/4"></div>
                    </div>

                    {/* Featured image placeholder */}
                    <div className="h-40 bg-[#ffe603] rounded-2xl mb-6 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Newspaper className="h-16 w-16 text-[#402EE6]/40" />
                      </div>
                      {/* Animated scan lines */}
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

                    {/* Bottom section */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#f66c10] flex items-center justify-center">
                          <span className="text-white text-xs font-bold">H</span>
                        </div>
                        <span className="text-sm font-medium">Health News</span>
                      </div>
                      <div className="text-sm text-black/60">Today</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FEATURED ARTICLE */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="news-eyebrow text-black/70 mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[#402EE6]"></span>
                Featured Story
              </div>
              
              <a href={featured.link} target="_blank" rel="noopener noreferrer">
                <Card className="group bg-white border border-black/10 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                      <div className="absolute top-6 left-6 bg-[#000000] text-white font-bold py-1.5 px-4 rounded-full text-sm">
                        Exclusive
                      </div>
                    </div>

                    <CardHeader className="p-8 lg:p-12 flex flex-col justify-center">
                      <span className="news-eyebrow text-[#000000] mb-4 flex items-center gap-2">
                        <Newspaper className="h-4 w-4" />
                        In-depth Analysis
                      </span>

                      <CardTitle className="text-2xl lg:text-3xl font-bold mb-6 leading-tight group-hover:text-[#402EE6] transition-colors">
                        {featured.title}
                      </CardTitle>

                      <p className="text-black/60 mb-8 leading-relaxed">
                        A comprehensive study reveals critical gaps in migrant worker awareness about state health policies. Read our detailed coverage of this important public health issue.
                      </p>

                      <div className="flex items-center justify-between">
                        <CardDescription className="text-[#402EE6] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                          Read full coverage 
                          <ExternalLink className="h-4 w-4 group-hover:rotate-45 transition-transform" />
                        </CardDescription>
                        <span className="text-sm text-black/50">8 min read</span>
                      </div>
                    </CardHeader>
                  </div>
                </Card>
              </a>
            </motion.div>
          )}

          {/* LATEST NEWS GRID */}
          <div className="mb-24">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="news-h2 text-2xl lg:text-3xl mb-2">Latest Updates</h2>
                <p className="text-black/60">Fresh insights and breaking news</p>
              </div>
              <div className="hidden lg:flex items-center gap-2 text-sm text-[#402EE6] font-medium">
                <Bell className="h-4 w-4 animate-pulse" />
                Updated daily
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    <Card className="group h-full bg-white border border-black/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardHeader className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="inline-flex items-center gap-2 text-xs font-medium text-[#402EE6] bg-[#402EE6]/10 py-1 px-3 rounded-full">
                            <Newspaper className="h-3 w-3" />
                            Report
                          </span>
                          <span className="text-xs text-black/50">{index + 1}</span>
                        </div>

                        <CardTitle className="text-lg font-semibold leading-snug mb-4 group-hover:text-[#402EE6] transition-colors">
                          {article.title}
                        </CardTitle>

                        <div className="mt-auto">
                          <div className="h-1 w-full bg-gradient-to-r from-[#402EE6]/20 to-transparent rounded-full mb-4"></div>
                          <CardDescription className="text-sm text-[#402EE6] font-medium flex items-center justify-between">
                            <span className="flex items-center gap-1">
                              Read article 
                              <ExternalLink className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <span className="text-xs text-black/40">→</span>
                          </CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* NEWSLETTER CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="border-t border-gray-200 pt-16">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-px bg-[#402EE6]"></div>
                    <span className="news-eyebrow text-gray-500">Stay Informed</span>
                  </div>
                  
                  <h2 className="news-h2 text-[28px] mb-4 text-gray-900">
                    Information That Supports Better Care
                  </h2>
                  
                  <p className="news-body text-gray-600 mb-8">
                    Subscribe to get reliable updates on migrant health initiatives, healthcare access programs, system improvements, and important public health developments connected to KerMedix.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-[#402EE6]"></div>
                      </div>
                      <span className="text-sm text-gray-600">Weekly curated newsletter</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-[#402EE6]"></div>
                      </div>
                      <span className="text-sm text-gray-600">Monthly platform updates and announcements</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-[#402EE6]"></div>
                      </div>
                      <span className="text-sm text-gray-600">Occasional alerts for important system or service changes</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="
                          w-full
                          pl-11 pr-4 py-3.5
                          rounded-lg
                          border border-gray-300
                          bg-white
                          focus:outline-none
                          focus:border-[#402EE6]
                          focus:ring-1
                          focus:ring-[#402EE6]
                          placeholder:text-gray-400
                          text-gray-900
                        "
                      />
                    </div>

                    <button
                      onClick={handleSubscribe}
                      disabled={loading}
                      className="
                        w-full
                        px-6 py-3.5
                        rounded-lg
                        bg-[#402EE6]
                        text-white
                        font-medium
                        hover:bg-[#402EE6]/90
                        disabled:opacity-60
                        transition-colors
                        flex items-center justify-center gap-2
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
                  
                  <p className="text-l text-gray-500 mt-4">
                    Privacy respected. Unsubscribe anytime.
                  </p>
                </div>

                {/* SIMPLE NEWSLETTER ILLUSTRATION */}
                <div className="hidden lg:block">
                  <div className="relative h-full min-h-[300px]">
                    {/* Simple newspaper stack */}
                    <div className="absolute top-10 right-20 w-64">
                      <div className="relative">
                        {/* Base newspaper */}
                        <div className="w-full h-80  bg-[#062fd5] border border-gray-200 rounded-lg shadow-sm p-6">
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
                        
                        {/* Top newspaper with slight rotation */}
                        <motion.div
                          animate={{ y: [0, -2, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute top-0 right-4 w-full h-80 bg-[#dbb90f] border-gray-200 rounded-lg shadow-sm p-6 -rotate-1"
                        >
                          <div className="space-y-3">
                            <div className="h-4 bg-[#402EE6] rounded w-3/4"></div>
                            <div className="h-4 bg-[#402EE6] rounded w-full"></div> 
                            <div className="h-4 bg-[#402EE6] rounded w-5/6"></div>
                          </div>
                          <div className="mt-6 pt-4 border-t border-gray-100">
                            <div className="h-6 bg-[#1d3bcf] rounded w-1/3 mb-3"></div>
                            <div className="h-3 bg-gray-50 rounded w-full mb-2"></div>
                            <div className="h-3 bg-gray-50 rounded w-2/3"></div>
                          </div>
                        </motion.div>
                        
                        {/* Mail icon */}
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
