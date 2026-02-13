import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Phone, MapPin, Mail, ChevronDown, X, ArrowRight } from "lucide-react";
import { 
  Home, User, Users, Shield, UserPlus, Stethoscope,
  FileText, HelpCircle, Download, Settings,
  Activity
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoImage from '@/assets/logo.webp'; 
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const user = null; 
  const logout = () => {};
  const { t } = useTranslation();
  const location = useLocation();

  // Mobile navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  if (location.pathname.startsWith('/dashboard')) {
    return <>{children}</>;
  }

  const navigation = [
    { name: t('nav.home'), href: "/", icon: Home, subtitle: "Main dashboard", tag: "Home" },
    { name: t('nav.about'), href: "/about", icon: User, subtitle: "Learn about us", tag: "Info" },
    { name: "News", href: "/news", icon: FileText, subtitle: "Latest updates", tag: "New" },
    { name: "Gallery", href: "/gallery", icon: Activity, subtitle: "View photos", tag: "Media" },
    { name: t('nav.contact'), href: "/contact", icon: Mail, subtitle: "Get in touch", tag: "Help" },
  ];

  const services = [
    { name: "Digital Health Records", href: "/services/health-records", icon: FileText, subtitle: "Access your records", tag: "Active" },
    { name: "Health Screening", href: "/services/screening", icon: Activity, subtitle: "Book screening", tag: "New" },
    { name: "Telemedicine", href: "/services/telemedicine", icon: Stethoscope, subtitle: "Online consultation", tag: "Popular" },
    { name: "Vaccination Services", href: "/services/vaccination", icon: Shield, subtitle: "Schedule vaccines", tag: "Safe" },
  ];

  const miscellaneous = [
    { name: "Policies", href: "/policies", icon: Shield, subtitle: "Read our policies", tag: "Legal" },
    { name: "Guidelines", href: "/guidelines", icon: FileText, subtitle: "Health guidelines", tag: "Info" },
    { name: "FAQS", href: "/FAQ", icon: HelpCircle, subtitle: "Common questions", tag: "Help" },
    { name: "Forms", href: "/forms", icon: FileText, subtitle: "Download forms", tag: "Docs" },
  ];

  const downloads = [
    { name: "User Manual", href: "/downloads/manual", icon: Download, subtitle: "How to use", tag: "Guide" },
    { name: "Health Forms", href: "/downloads/forms", icon: FileText, subtitle: "PDF forms", tag: "PDF" },
    { name: "Reports", href: "/downloads/reports", icon: Activity, subtitle: "Health reports", tag: "Data" },
    { name: "Certificates", href: "/downloads/certificates", icon: Shield, subtitle: "Get certificates", tag: "Cert" },
  ];

  const userAccess = [
    { name: "Migrant Login", href: "/login?role=migrant", icon: Users, subtitle: "Access migrant portal", tag: "Login" },
    { name: "Doctor Login", href: "/login?role=doctor", icon: Stethoscope, subtitle: "Doctor dashboard", tag: "Login" },
    { name: "Admin Login", href: "/login?role=admin", icon: Shield, subtitle: "Admin panel", tag: "Login" },
    { name: "Register New User", href: "/register", icon: UserPlus, subtitle: "Create account", tag: "Sign up", highlight: true },
  ];

  const handleBottomNavClick = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(true);
  };

  const getSectionData = () => {
    switch(activeSection) {
      case 'navigation': return { items: navigation, title: 'Navigation', subtitle: '5 options', icon: Home };
      case 'services': return { items: services, title: 'Services', subtitle: '4 services', icon: Stethoscope };
      case 'miscellaneous': return { items: miscellaneous, title: 'Miscellaneous', subtitle: '4 resources', icon: Settings };
      case 'downloads': return { items: downloads, title: 'Downloads', subtitle: '4 downloads', icon: Download };
      case 'user-access': return { items: userAccess, title: 'User Access', subtitle: '4 portals', icon: Users };
      default: return { items: [], title: '', subtitle: '', icon: Home };
    }
  };

  const sectionData = getSectionData();

  const orangePortalBtn =
    "bg-orange-500 hover:bg-orange-600 text-black font-extrabold tracking-wide border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:scale-105 transition-all font-[Poppins] rounded-3xl";

  const UserPortalDropdown = ({
    onItemClick,
  }: {
    onItemClick?: () => void;
  }) => (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button className={`${orangePortalBtn}`}>
          User Portal <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="bottom"
        align="end"
        sideOffset={12}
        className="
          w-72
          rounded-2xl
          bg-white
          border border-gray-200
          shadow-[0_20px_40px_rgba(0,0,0,0.12)]
          p-3
          z-[9999]
        "
      >
        <div className="space-y-1">
          <p className="px-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Navigation
          </p>

          <DropdownMenuItem asChild onSelect={onItemClick}>
            <Link
              to="/"
              className="
                flex items-center gap-3 px-4 py-2.5 rounded-xl
                text-sm font-medium text-gray-900
                hover:bg-gray-100
              "
            >
              <Home className="w-4 h-4 text-gray-600" />
              Home
            </Link>
          </DropdownMenuItem>
        </div>

        <div className="my-3 h-px bg-gray-200" />

        <div className="space-y-1">
          <p className="px-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
            User Access
          </p>

          <DropdownMenuItem asChild onSelect={onItemClick}>
            <Link
              to="/login?role=migrant"
              className="
                flex items-center gap-3 px-4 py-2.5 rounded-xl
                text-sm text-gray-800
                hover:bg-gray-100
              "
            >
              <Users className="w-4 h-4 text-gray-600" />
              Migrant Login
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild onSelect={onItemClick}>
            <Link
              to="/login?role=doctor"
              className="
                flex items-center gap-3 px-4 py-2.5 rounded-xl
                text-sm text-gray-800
                hover:bg-gray-100
              "
            >
              <Stethoscope className="w-4 h-4 text-gray-600" />
              Doctor Login
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild onSelect={onItemClick}>
            <Link
              to="/login?role=admin"
              className="
                flex items-center gap-3 px-4 py-2.5 rounded-xl
                text-sm text-gray-800
                hover:bg-gray-100
              "
            >
              <Shield className="w-4 h-4 text-gray-600" />
              Admin Login
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild onSelect={onItemClick}>
            <Link
              to="/register"
              className="
                flex items-center gap-3 px-4 py-2.5 rounded-xl
                text-sm font-semibold
                text-[#1f11eb]
                hover:bg-[#1f11eb]/10
              "
            >
              <UserPlus className="w-4 h-4" />
              Register New User
            </Link>
          </DropdownMenuItem>
        </div>

        <div className="my-4 h-px bg-gray-200" />

        <div>
          <p className="px-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Language
          </p>

          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            className="focus:bg-transparent cursor-default"
          >
            <div className="w-full flex justify-center py-1">
              <LanguageSwitcher />
            </div>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  // Helper Component for Bottom Nav Buttons
  const NavButton = ({ onClick, active, icon }: { onClick: () => void; active: boolean; icon: React.ReactNode }) => (
    <motion.button
      onClick={onClick}
      className="flex flex-col items-center gap-1.5 transition-all relative"
      whileTap={{ scale: 0.9 }}
    >
      <div className="transition-transform">
        {icon}
      </div>
      {/* Active indicator line below icon */}
      {active && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="absolute -bottom-1 w-8 h-0.5 bg-[#FF6B35] rounded-full"
        />
      )}
    </motion.button>
  );

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FFFDF5" }}>

      {/* Header  */}
      <header
        className="
          relative lg:fixed
          top-0 left-0 w-full
          z-50
          bg-gradient-to-r
          from-[#1b5338]
          via-[#24583b]
          to-[#2e5a44]
          lg:bg-none lg:bg-transparent
          lg:px-8
          lg:pt-4
          lg:pb-4
        "
      >

        {/* Desktop capsule header */}
        <div className="hidden lg:block">
          <nav className="max-w-8xl mx-auto bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-black-200 px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-3">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-white">
                    <img 
                      src={logoImage} 
                      alt="KerMedix Logo" 
                      className="min-w-full min-h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-black">KerMedix</div>
                    <div className="text-sm text-gray-600">Health Services</div>
                  </div>
                </Link>
              </div>

              <div className="flex ml-10 items-baseline space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                      location.pathname === item.href
                        ? "text-black font-bold border-b-2 border-black"
                        : "text-black hover:text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                <DropdownMenu>
                  <DropdownMenuTrigger className="px-3 py-2 text-sm font-medium text-black hover:text-gray-700 flex items-center gap-1">
                    Services <ChevronDown className="h-3 w-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white border-2 border-black z-50">
                    {services.map((service) => (
                      <DropdownMenuItem key={service.name} asChild>
                        <Link to={service.href} className="text-black hover:bg-gray-100 cursor-pointer">
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger className="px-3 py-2 text-sm font-medium text-black hover:text-gray-700 flex items-center gap-1">
                    Miscellaneous <ChevronDown className="h-3 w-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white border-2 border-black z-50">
                    {miscellaneous.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link to={item.href} className="text-black hover:bg-gray-100 cursor-pointer">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger className="px-3 py-2 text-sm font-medium text-black hover:text-gray-700 flex items-center gap-1">
                    Downloads <ChevronDown className="h-3 w-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white border-2 border-black z-50">
                    {downloads.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link to={item.href} className="text-black hover:bg-gray-100 cursor-pointer">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="flex items-center space-x-4">
                <LanguageSwitcher />

                {user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white rounded-full">
                        {user.name} <ChevronDown className="ml-1 h-4 w-4" />  
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white border-2 border-black z-50 w-48">
                      <DropdownMenuItem disabled className="text-500 text-xs font-semibold">
                        logged in as {user.role.charAt(0).toUpperCase() + user.role.slice(1)} 
                      </DropdownMenuItem>
                      <div className="border-t border-gray-300 my-1"></div>
                      <DropdownMenuItem asChild>
                        <Link to={`/dashboard/${user.role}`} className="text-black hover:bg-gray-100 cursor-pointer font-medium">
                          Dashboard
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <button onClick={logout} className="w-full text-left text-black hover:bg-gray-100 cursor-pointer font-medium">
                          Logout
                        </button>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className={orangePortalBtn}>
                        User Portal <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white border-2 border-black z-50 w-48">
                      <DropdownMenuItem asChild>
                        <Link to="/login?role=migrant" className="text-black hover:bg-gray-100 cursor-pointer font-medium">
                          Migrant Login
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/login?role=doctor" className="text-black hover:bg-gray-100 cursor-pointer font-medium">
                          Doctor Login
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/login?role=admin" className="text-black hover:bg-gray-100 cursor-pointer font-medium">
                          Admin Login
                        </Link>
                      </DropdownMenuItem>
                      <div className="border-t border-gray-300 my-1"></div>
                      <DropdownMenuItem asChild>
                        <Link to="/register" className="text-black hover:bg-gray-100 cursor-pointer font-medium">
                          Register New User
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile top bar */}
        <nav className="lg:hidden sticky top-0 z-50 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center h-20">

              <Link to="/" className="flex items-center gap-2">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-white shrink-0">
                  <img
                    src={logoImage}
                    alt="KerMedix Logo"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center leading-none">
                  <span className="text-[20px] font-extrabold tracking-tight text-white">
                    KerMedix
                  </span>
                  <span className="text-sm text-white/80 tracking-wide">
                    Health Services
                  </span>
                </div>
              </Link>

              <div className="flex items-center">
                <UserPortalDropdown />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow pb-24 lg:pb-0">{children}</main>

      {/* ================= MOBILE BOTTOM NAVIGATION BAR ================= */}
      <div className="lg:hidden fixed -bottom-3 left-0 right-0 z-50 pointer-events-none">
        <div className="relative pointer-events-auto">
          <div className="relative max-w-md mx-auto">
            {/* Dark background bar with notch */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 400 90" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >

              <path
                d="M 0,30 
                   Q 0,15 15,15 
                   L 145,15 
                   Q 155,15 162,22
                   C 170,30 180,35 200,35
                   C 220,35 230,30 238,22
                   Q 245,15 255,15
                   L 385,15
                   Q 400,15 400,30
                   L 400,90
                   L 0,90
                   Z"
                fill="#ffffff"
                
              />
            </svg>

            {/* Icons Container */}
            <div className="relative flex items-center justify-around h-[90px] px-8 pt-4">
              
              <NavButton 
                onClick={() => handleBottomNavClick('downloads')}
                active={activeSection === 'downloads'}
                icon={
                  <svg className="w-7 h-7" fill="none" stroke="#059669" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                }
              />

              <NavButton 
                onClick={() => handleBottomNavClick('miscellaneous')}
                active={activeSection === 'miscellaneous'}
                icon={
                  <svg className="w-7 h-7" fill="none" stroke="#059669" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                }
              />

              {/* Center Elevated Button */}
              <motion.button
                onClick={() => handleBottomNavClick('navigation')}
                className="flex flex-col items-center transition-all -mt-12"
                whileTap={{ scale: 0.92 }}
              >
                <div className="relative w-[70px] h-[70px] rounded-full bg-[#059669] flex items-center justify-center shadow-2xl border-4 border-[#2d2d2d]">
                  <svg className="w-9 h-9" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </motion.button>

              <NavButton 
                onClick={() => handleBottomNavClick('services')}
                active={activeSection === 'services'}
                icon={
                   <svg className="w-7 h-7" fill="none" stroke="#059669" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>

                }
              />

              <NavButton 
                onClick={() => handleBottomNavClick('user-access')}
                active={activeSection === 'user-access'}
                icon={
                  <svg className="w-7 h-7" fill="none" stroke="#059669" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                }
              />

            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE BOTTOM SHEET - INSPIRED BY UPLOADED IMAGES ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
              onClick={() => {
                setMobileMenuOpen(false);
                setActiveSection('');
              }}
            />

            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-[70] lg:hidden"
            >
              <div className="bg-white rounded-t-3xl shadow-2xl max-h-[70vh] overflow-hidden">
                
                {/* Drag Handle */}
                <div className="flex justify-center pt-4 pb-2">
                  <div className="w-12 h-1 bg-gray-300 rounded-full" />
                </div>

                {/* Header - Clean like the reference images */}
                <div className="px-5 py-4 flex items-center justify-between border-b border-gray-100">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {sectionData.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {sectionData.subtitle}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setActiveSection('');
                    }}
                    className="text-emerald-600 text-sm font-semibold"
                  >
                    Close
                  </button>
                </div>

                {/* Content - Card style like the reference images */}
                <div className="overflow-y-auto max-h-[calc(70vh-100px)] p-4 bg-gray-50">
                  <div className="space-y-3">
                    {sectionData.items.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.05 * index }}
                      >
                        <Link
                          to={item.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setActiveSection('');
                          }}
                          className="block"
                        >
                          <div 
                            className={`
                              relative p-4 rounded-2xl transition-all
                              ${item.highlight 
                                ? 'bg-emerald-600 shadow-lg' 
                                : 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-md hover:shadow-lg'
                              }
                            `}
                          >
                            <div className="flex items-center justify-between">
                              {/* Left side - Icon and content */}
                              <div className="flex items-center gap-3 flex-1">
                                {/* Icon */}
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                  <item.icon className="w-5 h-5 text-white" />
                                </div>

                                {/* Text content */}
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-white font-semibold text-base leading-tight">
                                    {item.name}
                                  </h3>
                                  <p className="text-white/80 text-xs mt-0.5">
                                    {item.subtitle}
                                  </p>
                                </div>
                              </div>

                              {/* Right side - Tag and arrow */}
                              <div className="flex items-center gap-2 ml-2">
                                <span className="px-2.5 py-1 bg-white/20 rounded-full text-white text-xs font-medium">
                                  {item.tag}
                                </span>
                                <ArrowRight className="w-4 h-4 text-white/80 flex-shrink-0" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom padding */}
                  <div className="h-4" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ================= FOOTER ================= */}
      <footer
        className="
          relative bg-black text-white overflow-hidden
          mx-4 mt-12 mb-6 rounded-3xl
        "
        style={{ clipPath: "inset(0 round 1.5rem)" }}
      >
        {(() => {
          const scrollToTop = () => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          };

          return (
            <>
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
                  `,
                  backgroundSize: "60px 60px",
                }}
              />

              <motion.div
                className="absolute -top-40 left-1/2 -translate-x-1/2
                          w-[500px] h-[500px] bg-gray-500/10
                          rounded-full blur-3xl pointer-events-none"
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              <div className="relative z-10 max-w-7xl mx-auto px-7 ">

                <motion.div
                  className="h-[2px] w-full bg-gradient-to-r
                            from-transparent via-white to-transparent
                            mb-16 pointer-events-none"
                  animate={{ opacity: [0.35, 0.8, 0.35] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                  <motion.div
                    className="md:col-span-2 space-y-7"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 160 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-white
                                      flex items-center justify-center shadow-xl">
                        <img
                          src={logoImage}
                          alt="KerMedix Logo"
                          className="w-10 h-10"
                        />
                      </div>
                      <div>
                        <h2 className="text-3xl font-extrabold">KerMedix</h2>
                        <p className="text-l text-gray-400 hover:text-[#ff6200]">
                          Digital Public Health Platform
                        </p>
                      </div>
                    </div>

                    <p className="text-white max-w-xl leading-relaxed ">
                      Empowering inclusive healthcare access for migrant workers
                      through secure digital health records and telemedicine.
                    </p>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3 text-white">
                        <Phone className="w-6 h-6 text-emerald-400 mt-1" />
                        <div className="flex flex-col">
                          <a href="tel:+917848091884" className="hover:text-emerald-400">
                            +91-7848091884
                          </a>
                          <a href="tel:+917847810210" className="hover:text-emerald-400">
                            +91-7847810210
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-white">
                        <Mail className="w-6 h-6 text-orange-400" />
                        <a
                          href="mailto:kermedix.Dhrms@gmail.com?subject=Support%20Request&body=Hello%20Kermedix%20Team,"
                          className="hover:text-orange-400"
                        >
                          kermedix.Dhrms@gmail.com
                        </a>
                      </div>

                      <div className="flex items-center gap-3 text-white">
                        <MapPin className="w-6 h-6 text-blue-400" />
                        <a
                          href="https://maps.app.goo.gl/6BxwSDMjFTmbcNLr8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#3083ff] transition-colors font-medium"
                        >
                          Kerala, India
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div className="space-y-6">
                    <h4 className="text-3xl font-semibold tracking-wide">
                      Services
                    </h4>

                    <ul className="space-y-3">
                      {services.map((s) => (
                        <li key={s.name}>
                          <Link
                            to={s.href}
                            onClick={scrollToTop}
                            className="footer-link"
                          >
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div className="space-y-6">
                    <h4 className="text-3xl font-semibold tracking-wide">
                      Quick Links
                    </h4>

                    <ul className="space-y-3">
                      {[
                        { name: "Home", href: "/" },
                        { name: "FAQs", href: "/FAQ" },
                        { name: "Contact", href: "/contact" },
                        { name: "User Portal", href: "/login" },
                      ].map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            onClick={scrollToTop}
                            className="footer-link"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                </div>
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-50 py-8 flex justify-center">
                <div className="relative w-fit overflow-hidden rounded-full border border-white/20 shadow-xl">

                  <motion.div
                    className="absolute inset-0 liquid-wave"
                    animate={{
                      backgroundPositionX: ["0%", "200%"],
                      backgroundPositionY: ["0%", "20%", "0%"],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative px-10 py-4 backdrop-blur-xl bg-black/40 rounded-full">
                    <div className="flex items-center gap-3 text-sm sm:text-base text-gray-200">

                      <span>Built with</span>

                      <motion.span
                        className="text-red-500 font-semibold"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2.2, repeat: Infinity }}
                      >
                        ♥
                      </motion.span>

                      <span>by</span>
                      <span className="text-white font-medium">Sai</span>
                      <span className="text-white">×</span>
                      <span className="text-white font-medium">Ashu</span>

                    </div>
                  </div>
                </div>
              </div>        

              <div className="w-full bg-black border-t border-gray-700
                              overflow-hidden relative h-32">
                <div className="absolute top-12 -translate-y-1/2
                                flex animate-marquee whitespace-nowrap
                                pointer-events-none">
                  <span
                    className="text-white text-5xl"
                    style={{ fontFamily: "'Press Start 2P', monospace" }}
                  >
                    © 2026 KerMedix Health Services. All rights reserved. &nbsp;
                    © 2026 KerMedix Health Services. All rights reserved. &nbsp;
                  </span>
                </div>
              </div>

              <style>{`
                .footer-link {
                  position: relative;
                  color: #9ca3af;
                  font-size: 15px;
                  transition: color 0.25s ease, transform 0.25s ease;
                }

                .footer-link::after {
                  content: "";
                  position: absolute;
                  left: 0;
                  bottom: -4px;
                  width: 0%;
                  height: 1px;
                  background: white;
                  transition: width 0.25s ease;
                }

                .footer-link:hover {
                  color: white;
                  transform: translateX(6px);
                }

                .footer-link:hover::after {
                  width: 100%;
                }
              `}</style>
            </>
          );
        })()}
      </footer>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, -50%, 0);
          }
          100% {
            transform: translate3d(-50%, -50%, 0);
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        
        .animate-marquee span {
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default Layout;
