import { useEffect, useState } from "react";
import Mainpage from "@/components/main-page/main-page-desktop/mainpage";
import MainpageMobile from "@/components/main-page/main-page-mobile/mainPageMobile";

const MainpageWrapper = () => {
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
  return isMobile ? <MainpageMobile /> : <Mainpage />;
};

export default MainpageWrapper;
