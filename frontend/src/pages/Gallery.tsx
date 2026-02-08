import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, MapPin, Camera, Star, Zap, Shield, Sparkles } from "lucide-react";

const MontserratFontLoader = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);

    const preloadLink = document.createElement('link');
    preloadLink.href = 'https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2';
    preloadLink.rel = 'preload';
    preloadLink.as = 'font';
    preloadLink.type = 'font/woff2';
    preloadLink.crossOrigin = 'anonymous';
    document.head.appendChild(preloadLink);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(preloadLink);
    };
  }, []);

  return null;
};

const Carousel = ({ items, title, description }: { items: any[], title: string, description: string }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 280 : 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative font-montserrat">
      {/* Navigation Arrows */}
      <button
        onClick={() => scroll("left")}
        className="hidden sm:block absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10
                   bg-white/80 backdrop-blur-sm border border-gray-200
                   rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl
                   hover:bg-white transition-all duration-300
                   hover:scale-110 active:scale-95"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="hidden sm:block absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10
                   bg-white/80 backdrop-blur-sm border border-gray-200
                   rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl
                   hover:bg-white transition-all duration-300
                   hover:scale-110 active:scale-95"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth px-1 sm:px-4 scrollbar-hide"
      >
        {items.map((item) => (
          <Card
            key={item.id}
            className="
              flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] rounded-xl md:rounded-2xl overflow-hidden
              border border-gray-200
              bg-white backdrop-blur-sm
              shadow-sm
              hover:shadow-lg
              transition-all duration-300
              hover:-translate-y-1
              group
              font-montserrat
            "
          >
            {/* Image Container */}
            <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden bg-gray-100">
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-105
                "
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://placehold.co/320x192/e5e7eb/6b7280?text=Healthcare";
                }}
              />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 line-clamp-2 leading-snug">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                <span className="truncate text-sm">{item.location}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

/* ---------- Main Gallery ---------- */
const Gallery = () => {
  const [activeSection, setActiveSection] = useState<"healthCamps" | "vaccination" | "facilities">("healthCamps");

  const galleries = {
    healthCamps: {
      title: "Health Camps",
      description: "Mobile healthcare services and community outreach initiatives across Kerala.",
      items: [
        { 
          id: 1, 
          title: "Annual Health Screening Camp 2024", 
          location: "Ernakulam District", 
          image: "/images/hc1.webp" 
        },
        { 
          id: 2, 
          title: "Mobile Healthcare Unit Service", 
          location: "Thrissur Rural Area", 
          image: "/images/hc2.webp" 
        },
        { 
          id: 3, 
          title: "Comprehensive Health Screening Drive", 
          location: "Kozhikode City Center", 
          image: "/images/hc3.webp" 
        },
        { 
          id: 4, 
          title: "Community Health Awareness Workshop", 
          location: "Kottayam Municipality", 
          image: "/images/hc4.webp" 
        },
        { 
          id: 5, 
          title: "Emergency First Aid Training Program", 
          location: "Kannur Coastal Region", 
          image: "/images/hc5.webp" 
        },
        { 
          id: 6, 
          title: "Nutrition & Wellness Awareness Session", 
          location: "Palakkad District", 
          image: "/images/hc6.webp" 
        },
      ]
    },
    vaccination: {
      title: "Vaccination Programs",
      description: "Photos from our various vaccination campaigns and immunization programs.",
      items: [
        { 
          id: 1, 
          title: "COVID-19 Vaccination Drive Phase 3", 
          location: "Multiple Centers Across Kerala", 
          image: "/images/vaccine1.webp" 
        },
        { 
          id: 2, 
          title: "Seasonal Influenza Prevention Campaign", 
          location: "Thiruvananthapuram Capital", 
          image: "/images/vaccine2.webp" 
        },
        { 
          id: 3, 
          title: "Tetanus Immunization Program", 
          location: "Kollam Industrial Zone", 
          image: "/images/vaccine3.webp" 
        },
        { 
          id: 4, 
          title: "Hepatitis B Vaccination Initiative", 
          location: "Malappuram Medical College", 
          image: "/images/vaccine4.webp" 
        },
        { 
          id: 5, 
          title: "Child Immunization Awareness Day", 
          location: "Wayanad Tribal Areas", 
          image: "/images/vaccine5.webp" 
        },
        { 
          id: 6, 
          title: "Typhoid Prevention & Control Drive", 
          location: "Alappuzha Backwater Region", 
          image: "/images/vaccine6.webp" 
        },
      ]
    },
    facilities: {
      title: "Healthcare Facilities",
      description: "A look inside our medical centers, laboratories, and healthcare infrastructure.",
      items: [
        { 
          id: 1, 
          title: "Main Health Center & Administration", 
          location: "Kochi Central Office", 
          image: "/images/facility1.webp" 
        },
        { 
          id: 2, 
          title: "Digital Health Records System Room", 
          location: "Headquarters Building", 
          image: "/images/facility2.webp" 
        },
        { 
          id: 3, 
          title: "Telemedicine Consultation Station", 
          location: "Thrissur Regional Center", 
          image: "/images/facility3.webp" 
        },
        { 
          id: 4, 
          title: "Modern Diagnostic Laboratory Facility", 
          location: "Kozhikode Medical Complex", 
          image: "/images/facility4.webp" 
        },
        { 
          id: 5, 
          title: "Patient Waiting & Reception Area", 
          location: "Ernakulam Health Center", 
          image: "/images/facility5.webp" 
        },
        { 
          id: 6, 
          title: "Doctor Consultation & Examination Rooms", 
          location: "Main Medical Branch", 
          image: "/images/facility6.webp" 
        },
      ]
    }
  };

  const activeGallery = galleries[activeSection];

 
  const columnImages = [
    // Column 1 images
    [
      "/images/hc1.webp",
      "/images/vaccine2.webp",
      "/images/facility3.webp",
      "/images/hc4.webp",
      "/images/vaccine5.webp"
    ],
    // Column 2 images 
    [
      "/images/facility2.webp",
      "/images/hc3.webp",
      "/images/vaccine4.webp",
      "/images/facility1.webp",
      "/images/hc5.webp"
    ],
    // Column 3 images 
    [
      "/images/vaccine1.webp",
      "/images/facility4.webp",
      "/images/hc2.webp",
      "/images/vaccine3.webp",
      "/images/facility5.webp"
    ],
    // Column 4 images 
    [
      "/images/hc6.webp",
      "/images/facility6.webp",
      "/images/vaccine6.webp",
      "/images/hc1.webp",
      "/images/vaccine2.webp"
    ]
  ];

  return (
    <>
      <MontserratFontLoader />
      
      <div className="min-h-screen bg-transparent pt-16 pb-12 md:pt-24 lg:pt-28 md:pb-20 lg:pb-24 overflow-hidden">
      
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Hero Header Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20 mb-16 lg:mb-1">
            {/* Left Content */}
            <div className="max-w-2xl w-full lg:w-auto">
      
              <div className="contact-eyebrow text-[#402EE6] mb-4 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-[#402EE6]"></span>
                VISUAL STORY OF OUR JOURNEY
              </div>

              <h1 className="contact-h1 text-[36px] sm:text-[48px] lg:text-[58px] mb-6">
                Stories of Care, 
                <br /><span className="text-[#402EE6]">Captured with Purpose</span>
              </h1>

              <p className="contact-body text-black/65 max-w-xl mb-8">
               Explore KerMedix’s visual archive documenting healthcare delivery across Kerala. From community health camps and vaccination drives to clinical consultations and digital health initiatives, each image reflects our commitment to accessible, transparent, and people-centric healthcare.
              </p>


            </div>

            {/* Right Side - Animated Image Columns */}
            <div className="w-full lg:max-w-xl">
              <div className="relative h-[400px] overflow-hidden rounded-3xl ">
           
                <div className="absolute inset-0 flex gap-4 p-4">
                  
                  {/* Column 1  */}
                  <div className="flex-1 overflow-hidden">
                    <div className="animate-marquee-up-down h-full">
                      {[...columnImages[0], ...columnImages[0]].map((img, index) => (
                        <div key={`col1-${index}`} className="mb-4 last:mb-0">
                          <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                            <img 
                              src={img} 
                              alt="Gallery" 
                              className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://placehold.co/400x200/e5e7eb/6b7280?text=Healthcare";
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="flex-1 overflow-hidden">
                    <div className="animate-marquee-down-up h-full">
                      {[...columnImages[1], ...columnImages[1]].map((img, index) => (
                        <div key={`col2-${index}`} className="mb-4 last:mb-0">
                          <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                            <img 
                              src={img} 
                              alt="Gallery" 
                              className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://placehold.co/400x200/e5e7eb/6b7280?text=Medical";
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div className="flex-1 overflow-hidden">
                    <div className="animate-marquee-up-down h-full">
                      {[...columnImages[2], ...columnImages[2]].map((img, index) => (
                        <div key={`col3-${index}`} className="mb-4 last:mb-0">
                          <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                            <img 
                              src={img} 
                              alt="Gallery" 
                              className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://placehold.co/400x200/e5e7eb/6b7280?text=Vaccine";
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 4 - Moves Down to Up */}
                  <div className="flex-1 overflow-hidden">
                    <div className="animate-marquee-down-up h-full">
                      {[...columnImages[3], ...columnImages[3]].map((img, index) => (
                        <div key={`col4-${index}`} className="mb-4 last:mb-0">
                          <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                            <img 
                              src={img} 
                              alt="Gallery" 
                              className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://placehold.co/400x200/e5e7eb/6b7280?text=Facility";
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Gallery Navigation Section */}
          <div className="mb-8 lg:mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
              <div>
                <h2 className="contact-h2 text-2xl lg:text-3xl mb-2">
                  {activeGallery.title}
                </h2>
                <p className="text-black/60 max-w-2xl contact-body">
                  {activeGallery.description}
                </p>
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveSection("healthCamps")}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all flex-shrink-0 ${
                    activeSection === "healthCamps" 
                      ? "bg-[#402EE6] text-white shadow-sm font-semibold" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200 font-medium"
                  }`}
                >
                  Health Camps
                </button>
                <button
                  onClick={() => setActiveSection("vaccination")}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all flex-shrink-0 ${
                    activeSection === "vaccination" 
                      ? "bg-[#402EE6] text-white shadow-sm font-semibold" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200 font-medium"
                  }`}
                >
                  Vaccination
                </button>
                <button
                  onClick={() => setActiveSection("facilities")}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all flex-shrink-0 ${
                    activeSection === "facilities" 
                      ? "bg-[#402EE6] text-white shadow-sm font-semibold" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200 font-medium"
                  }`}
                >
                  Facilities
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="bg-[#ecdb96] backdrop-blur-sm rounded-xl lg:rounded-2xl border border-gray-200/50 p-4 sm:p-6 lg:p-8 mb-12">
            <Carousel 
              items={activeGallery.items} 
              title={activeGallery.title}
              description={activeGallery.description}
            />
          </div>

          {/* Info Section */}
          <div className="text-center text-sm text-gray-500">
            <p>Scroll horizontally or use navigation arrows to explore more photos</p>
          </div>

        </div>

  
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap');
          
          .font-montserrat {
            font-family: 'Montserrat', sans-serif;
          }
          
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          
          .line-clamp-2 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
          }
          
          /* Animation Keyframes */
          @keyframes marqueeUpDown {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }
          
          @keyframes marqueeDownUp {
            0% {
              transform: translateY(-50%);
            }
            100% {
              transform: translateY(0);
            }
          }
          
          .animate-marquee-up-down {
            animation: marqueeUpDown 30s linear infinite;
          }
          
          .animate-marquee-down-up {
            animation: marqueeDownUp 30s linear infinite;
          }
          
          /* Pause animation on hover */
          .animate-marquee-up-down:hover,
          .animate-marquee-down-up:hover {
            animation-play-state: paused;
          }
          
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
        `}</style>
      </div>
    </>
  );
};

export default Gallery;
