import React from "react";
import Sidebar from "@/components/main-page/main-page-desktop/sidebar";
import Navbar from "@/components/main-page/main-page-desktop/main-page-navbar";
import Footer from "@/components/personal-information/personal-information-desktop/pi-footer";
import ResearchMainbar from "./research-mainbar";

const ResearchDesktop = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col gap-8">
          <Navbar />
          <ResearchMainbar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResearchDesktop;
