import { useEffect, useState } from "react";
import FlowingMenu from "./FlowingMenu";
import feature from "@/assets/features-background.jpg";
import Records from "@/assets/digital-records.jpg";

const statsItems = [
  { link: "#", text: "50,000+ Active Profiles", image: Records },
  { link: "#", text: "200,000+ Health Records", image: feature },
  { link: "#", text: "150+ Healthcare Facilities", image: "/images/hc3.webp" },
  { link: "#", text: "24/7 Real-time Updates", image: "/images/facility2.webp" },
];

export default function FlowingStats() {
  const [height, setHeight] = useState("450px");

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerWidth < 768 ? "360px" : "460px");
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#FFFDF5",
        paddingTop: "32px",
        paddingBottom: "32px",
      }}
    >
      <div
        style={{
          height,
          position: "relative",
        }}
      >
        <FlowingMenu
          items={statsItems}
          bgColor="#FFFDF5"
          textColor="#402EE6"
          marqueeBgColor="#402EE6"
          marqueeTextColor="#FFCC33"
          borderColor="#1f4d3a"
          speed={15}
        />
      </div>
    </section>
  );
}
