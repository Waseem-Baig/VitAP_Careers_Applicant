import React from "react";
import Sidebar from "@/components/main-page/main-page-desktop/sidebar";
import Navbar from "@/components/main-page/main-page-desktop/main-page-navbar";
import Footer from "@/components/personal-information/personal-information-desktop/pi-footer";
import EducationMainPage from "./education-main-page";

const EducationPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col gap-8">
          <Navbar />
          <EducationMainPage />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EducationPage;
