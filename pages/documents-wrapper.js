import { useEffect, useState } from "react";
import DocumentsDesktop from "@/components/documents-upload/documents-upload-desktop/documents-upload";
import DocumentsMobile from "@/components/documents-upload/documents-upload-mobile/documents-mobile";

const DocumentsWrapper = () => {
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
  return isMobile ? <DocumentsMobile /> : <DocumentsDesktop />;
};

export default DocumentsWrapper;
