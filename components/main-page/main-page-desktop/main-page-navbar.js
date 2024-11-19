const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`font-montserrat text-[16px] font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Navbar = () => {
  const navItems = ["Home", "Apply Jobs", "Contact Us"];

  return (
    <div className="w-[80vw] h-[8vh] flex justify-between items-center p-[11px_67px]">
      <div className="flex gap-8">
        {navItems.map((item) => (
          <Button key={item}>{item}</Button>
        ))}
      </div>
      <div className="flex gap-7 justify-center items-center">
        <Button className="text-[#650010] text-[12px] p-[11.5px_23px] border border-[#650010]">
          VITAP Home Page
        </Button>
        <button className="p-[11.5px_22px] bg-[#650010] text-[12px] text-white font-montserrat">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
