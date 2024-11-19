import { useEffect, useState } from "react";
import ExperienceDesktop from "@/components/experience/experience-desktop/experience-page";
import ExperienceMobile from "@/components/experience/experience-mobile/experience-mobile";

const ExperienceWrapper = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500); // Adjust width as needed for mobile breakpoints
    };

    handleResize(); // Initial check when the component mounts
    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener
    };
  }, []);

  // Conditional rendering based on screen size
  return isMobile ? <ExperienceMobile /> : <ExperienceDesktop />;
};

export default ExperienceWrapper;
