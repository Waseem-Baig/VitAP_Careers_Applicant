import { useEffect, useState } from "react";
import EducationMobilePage from "@/components/education/education-mobile/education-mobile";
import EducationPage from "@/components/education/education-desktop/education-page";

const EducationWrapper = () => {
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
  return isMobile ? <EducationMobilePage /> : <EducationPage />;
};

export default EducationWrapper;
