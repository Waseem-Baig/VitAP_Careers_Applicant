import Sidebar from "@/components/main-page/main-page-desktop/sidebar";
import Navbar from "@/components/main-page/main-page-desktop/main-page-navbar";
import MainContent from "./personal-main";
import Footer from "./pi-footer";

const Personal = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col gap-8">
          <Navbar />
          <MainContent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Personal;
