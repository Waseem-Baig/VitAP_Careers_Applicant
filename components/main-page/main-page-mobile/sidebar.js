const logoSrc =
  "https://s3-alpha-sig.figma.com/img/0de7/cd9d/bd08b05603698e0c38c8eb4b41bf2b7d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ph4xZYg-8aitj87saeNyVxotpblTwAoRHxs8SgFs6CE-VQsuwuP5RpY3lBC9FVZnr~Iq4HumIDWXs9-kHqH5wOR6tpkBIMVLu~CDgedN6zvt8c0QlRheiBgbSSd2zDuyJLHtc~k06yYq4v9lC6B-jLgixCUxVoAiZrchQvegc6auFrp~Vq3T-eSaQnYGTlY1seCoqUTxhHDDjP3kfI-Hk69P1pqNQ41AWLrwgKveYWTO6lI2tD5v19TDf2xGEdP6NW6E-J-PsOUObyelEaiEsc~uIiN61OoY~JCfeOrlLiMmBUGSpgPHgH--f9DMacn~RTsLAS33ivxbTBKuWTRaoA__";

const Button = ({ children, className, onClick }) => (
  <button
    className={`flex items-center self-stretch py-4 font-montserrat text-[12px] font-medium ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const SidebarButton = ({ label, icon }) => (
  <button className="flex justify-center items-center">
    <div className="flex justify-between gap-10 p-[10px_17px]">
      <p className="text-white font-montserrat text-[14px] font-medium">
        {label}
      </p>
      {icon}
    </div>
  </button>
);

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[60vw] overflow-y-scroll p-[14px_19px] flex flex-col gap-4 border-l border-gray-300 bg-white transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between">
        <img src={logoSrc} alt="Logo" width="90vw" />
        <button className="flex" onClick={onClose}>
          <ChevronIcon />
          <ChevronIcon />
        </button>
      </div>
      <div className="flex flex-col pb-5">
        <p className="text-black font-montserrat text-[15px] font-bold">
          Hello Sri Vardhan
        </p>
        <p className="text-black font-montserrat text-[12px] font-normal">
          Happy to see you here!
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Button className="border border-[#650010] text-[#650010] text-center w-full p-[10px] text-[12px]">
          VITAp Home Page
        </Button>
        <div className="text-white bg-[#650010] shadow-[0px_10px_30px_0px_rgba(101,0,16,0.2)]">
          <SidebarButton label="Dashboard" icon={<DashboardIcon />} />
        </div>
      </div>
      <div className="flex flex-col pb-4">
        {[
          "Home",
          "Apply Jobs",
          "Contact Us",
          "Personal Information",
          "Education",
          "Research",
          "Documents Upload",
        ].map((label) => (
          <Button key={label}>{label}</Button>
        ))}
      </div>
      <Button className="text-[#650010] font-montserrat text-[12px] font-medium p-[10px_16px] border border-[#5C0E14] shadow -[0px_10px_30px_0px_rgba(101,0,16,0.2)]">
        Jobs you applied
      </Button>
      <div className="text-white bg-[#650010] shadow-[0px_10px_30px_0px_rgba(101,0,16,0.2)] text-center p-[10px_16px]">
        <Button>Logout</Button>
      </div>
    </div>
  );
};

const ChevronIcon = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="chevron-left">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3373 3.52851C11.5976 3.78886 11.5976 4.21097 11.3373 4.47132L7.80869 7.99992L11.3373 11.5285C11.5976 11.7889 11.5976 12.211 11.3373 12.4713C11.0769 12.7317 10.6548 12.7317 10.3945 12.4713L6.39448 8.47132C6.13413 8.21097 6.13413 7.78886 6.39448 7.52851L10.3945 3.52851C10.6548 3.26816 11.0769 3.26816 11.3373 3.52851Z"
        fill="#111827"
      />
    </g>
  </svg>
);

const DashboardIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="layout-grid">
      <g id="Vector">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 4.75C4.86193 4.75 4.75 4.86193 4.75 5V9C4.75 9.13807 4.86193 9.25 5 9.25H9C9.13807 9.25 9.25 9.13807 9.25 9V5C9.25 4.86193 9.13807 4.75 9 4.75H5ZM3.25 5C3.25 4.0335 4.0335 3.25 5 3.25H9C9.9665 3.25 10.75 4.0335 10.75 5V9C10.75 9.9665 9.9665 10.75 9 10.75H5C4.0335 10.75 3.25 9.9665 3.25 9V5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 4.75C14.8619 4.75 14.75 4.86193 14.75 5V9C14.75 9.13807 14.8619 9.25 15 9.25H19C19.1381 9.25 19.25 9.13807 19.25 9V5C19.25 4.86193 19.1381 4.75 19 4.75H15ZM13.25 5C13.25 4.0335 14.0335 3.25 15 3.25H19C19.9665 3.25 20.75 4.0335 20.75 5V9C20.75 9.9665 19.9665 10.75 19 10.75H15C14.0335 10.75 13.25 9.9665 13.25 9V5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 14.75C4.86193  4.75 4.75 15V19C4.75 19.1381 4.86193 19.25 5 19.25H9C9.13807 19.25 9.25 19.1381 9.25 19V15C9.25 14.8619 9.13807 14.75 9 14.75H5ZM3.25 15C3.25 14.0335 4.0335 13.25 5 13.25H9C9.9665 13.25 10.75 14.0335 10.75 15V19C10.75 19.9665 9.9665 20.75 9 20.75H5C4.0335 20.75 3.25 19.9665 3.25 19V15Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 14.75C14.8619 14.75 14.75 14.8619 14.75 15V19C14.75 19.1381 14.8619 19.25 15 19.25H19C19.1381 19.25 19.25 19.1381 19.25 19V15C19.25 14.8619 19.1381 14.75 19 14.75H15ZM13.25 15C13.25 14.0335 14.0335 13.25 15 13.25H19C19.9665 13.25 20.75 14.0335 20.75 15V19C20.75 19.9665 19.9665 20.75 19 20.75H15C14.0335 20.75 13.25 19.9665 13.25 19V15Z"
          fill="white"
        />
      </g>
    </g>
  </svg>
);

export default Sidebar;
