import { useRef } from "react";
import { Card } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

/* ---------- Reusable Carousel ---------- */
const Carousel = ({ items }: { items: any[] }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -420 : 420,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10
                   backdrop-blur-md bg-white/70 border border-black/20
                   rounded-full p-3 shadow-lg hover:scale-105 transition"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scroll-smooth px-16 scrollbar-hide"
      >
        {items.map((item) => (
          <Card
            key={item.id}
            className="
              min-w-[320px] rounded-3xl overflow-hidden
              border border-black/10
              bg-white
              shadow-[0_20px_50px_rgba(0,0,0,0.12)]
              hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)]
              transition-all duration-300
            "
          >
            {/* Image */}
            <div className="relative h-60 overflow-hidden group">
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full h-full object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                "
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                {item.location}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10
                   backdrop-blur-md bg-white/70 border border-black/20
                   rounded-full p-3 shadow-lg hover:scale-105 transition"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

/* ---------- Main Gallery ---------- */
const Gallery = () => {
  const galleries = {
    healthCamps: [
      { id: 1, title: "Annual Health Camp 2024", location: "Ernakulam District", image: "/images/hc1.png" },
      { id: 2, title: "Mobile Clinic Visit", location: "Thrissur", image: "/images/hc2.png" },
      { id: 3, title: "Health Screening Drive", location: "Kozhikode", image: "/images/hc3.png" },
      { id: 4, title: "Community Health Workshop", location: "Kottayam", image: "/images/hc4.png" },
      { id: 5, title: "First Aid Training Session", location: "Kannur", image: "/images/hc5.png" },
      { id: 6, title: "Nutrition Awareness Program", location: "Palakkad", image: "/images/hc6.png" },
    ],
    vaccination: [
      { id: 1, title: "COVID-19 Vaccination Drive", location: "Multiple Centers", image: "/images/vaccine1.png" },
      { id: 2, title: "Seasonal Flu Campaign", location: "Thiruvananthapuram", image: "/images/vaccine2.png" },
      { id: 3, title: "Tetanus Immunization", location: "Kollam", image: "/images/vaccine3.png" },
      { id: 4, title: "Hepatitis B Vaccination", location: "Malappuram", image: "/images/vaccine4.png" },
      { id: 5, title: "Child Immunization Day", location: "Wayanad", image: "/images/vaccine5.png" },
      { id: 6, title: "Typhoid Prevention Drive", location: "Alappuzha", image: "/images/vaccine6.png" },
    ],
    facilities: [
      { id: 1, title: "Main Health Center", location: "Kochi", image: "/images/facility1.png" },
      { id: 2, title: "Digital Records Room", location: "Headquarters", image: "/images/facility2.png" },
      { id: 3, title: "Telemedicine Station", location: "Thrissur", image: "/images/facility3.png" },
      { id: 4, title: "Laboratory Facility", location: "Kozhikode", image: "/images/facility4.png" },
      { id: 5, title: "Waiting Area", location: "Ernakulam Center", image: "/images/facility5.png" },
      { id: 6, title: "Consultation Rooms", location: "Main Branch", image: "/images/facility6.png" },
    ],
  };

  return (
    <div className="min-h-[85vh] bg-[#F9EFE3] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
     <div className="text-center mt-10 mb-14">

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Photo Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our healthcare initiatives, vaccination programs,
            and facilities
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="healthCamps">
          <TabsList className="grid grid-cols-3 max-w-xl mx-auto mb-12 rounded-full bg-white border border-black/20 p-1">
            {["healthCamps", "vaccination", "facilities"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="
                  rounded-full font-medium
                  data-[state=active]:bg-black
                  data-[state=active]:text-white
                "
              >
                {tab === "healthCamps"
                  ? "Health Camps"
                  : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="healthCamps">
            <Carousel items={galleries.healthCamps} />
          </TabsContent>
          <TabsContent value="vaccination">
            <Carousel items={galleries.vaccination} />
          </TabsContent>
          <TabsContent value="facilities">
            <Carousel items={galleries.facilities} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Gallery;
