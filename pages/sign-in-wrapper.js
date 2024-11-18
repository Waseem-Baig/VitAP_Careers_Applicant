import { useEffect, useState } from "react";
import SignInMobile from "../components/sign-in/sign-in-empty-mobile/sign-in-mobile-empty"; // Adjust the import path as necessary
import SignIn from "../components/sign-in/sign-in-empty/sign-in-empty"; // Adjust the import path as necessary

const SignInWrapper = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500); // You can adjust the width as needed
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Check on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  return isMobile ? <SignInMobile /> : <SignIn />;
};

export default SignInWrapper;
