import { useEffect, useState } from "react";
import ResearchDesktop from "@/components/research/research-desktop/research-desktop";
import ResearchMobile from "@/components/research/research-mobile/research-mobile";

const ResearchWrapper = () => {
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
  return isMobile ? <ResearchMobile /> : <ResearchDesktop />;
};

export default ResearchWrapper;
