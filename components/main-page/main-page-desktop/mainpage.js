import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Mainbar from "./mainbar";

const Mainpage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col gap-8">
        <Navbar />
        <Mainbar />
      </div>
    </div>
  );
};

export default Mainpage;
