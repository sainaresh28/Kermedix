import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

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
              bg-white/95 backdrop-blur-sm
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

  return (
    <>
      <MontserratFontLoader />
      
      <div className="min-h-screen bg-transparent pt-20 sm:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2 font-montserrat">
              Healthcare <span className="text-blue-600">Gallery</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 font-montserrat">
              Explore our comprehensive photo collection showcasing healthcare initiatives, 
              vaccination programs, and medical facilities.
            </p>
          </div>

          {/* Gallery Navigation */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4 sm:gap-0">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 font-montserrat">
                {activeGallery.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl font-montserrat">
                {activeGallery.description}
              </p>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveSection("healthCamps")}
                className={`px-4 py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 font-montserrat ${
                  activeSection === "healthCamps" 
                    ? "bg-blue-600 text-white shadow-sm font-semibold" 
                    : "bg-white/80 text-gray-700 hover:bg-gray-100 border border-gray-200 font-medium"
                }`}
              >
                Health Camps
              </button>
              <button
                onClick={() => setActiveSection("vaccination")}
                className={`px-4 py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 font-montserrat ${
                  activeSection === "vaccination" 
                    ? "bg-blue-600 text-white shadow-sm font-semibold" 
                    : "bg-white/80 text-gray-700 hover:bg-gray-100 border border-gray-200 font-medium"
                }`}
              >
                Vaccination
              </button>
              <button
                onClick={() => setActiveSection("facilities")}
                className={`px-4 py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 font-montserrat ${
                  activeSection === "facilities" 
                    ? "bg-blue-600 text-white shadow-sm font-semibold" 
                    : "bg-white/80 text-gray-700 hover:bg-gray-100 border border-gray-200 font-medium"
                }`}
              >
                Facilities
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200/50 p-4 sm:p-6 md:p-8">
            <Carousel 
              items={activeGallery.items} 
              title={activeGallery.title}
              description={activeGallery.description}
            />
          </div>

          {/* Info Text */}
          <div className="mt-8 text-center text-sm text-gray-500 font-montserrat">
            <p>Scroll or use arrows to view more photos</p>
          </div>
        </div>

        {/* Inline CSS with Montserrat font family definition */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
          
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
          
          /* Optional: Add smooth font rendering */
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          /* Improve Montserrat rendering on different weights */
          .font-light {
            font-weight: 300;
          }
          .font-normal {
            font-weight: 400;
          }
          .font-medium {
            font-weight: 500;
          }
          .font-semibold {
            font-weight: 600;
          }
          .font-bold {
            font-weight: 700;
          }
        `}</style>
      </div>
    </>
  );
};

export default Gallery;
