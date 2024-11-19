import React from "react";
import Header from "@/components/sign-in/sign-in-empty-mobile/sign-in-header";
import { useState } from "react";
import Sidebar from "@/components/main-page/main-page-mobile/mobile-sidebar";
import Navbar from "@/components/sign-in/sign-in-empty-mobile/sign-in-navbar";
import Footer from "@/components/main-page/main-page-mobile/main-page-footer";

const PersonalInformationMobile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="relative w-full h-screen">
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleSidebar}
          ></div>
          <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </div>
      )}
      <Header onMenuClick={toggleSidebar} />
      <Navbar />
      <div className="overflow-y-scroll flex flex-col w-[100vw] h-screen p-4 bg-[#5C0E1405] justify-start items-center gap-6">
        <div className="flex flex-col w-[100%] h-auto gap-4">
          <p
            className="font-montserrat text-[12
          px] font-bold"
          >
            Personal Information
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="salutation"
                className="text-[12px] font-montserrat"
              >
                Salutation*
              </label>
              <select
                id="salutation"
                name="salutation"
                className="border border-[#D1B3B8] p-2 w-[100%]"
              >
                <option value="" disabled>
                  -- Select Pronoun --
                </option>
                <option value="he/him">He/Him</option>
                <option value="she/her">She/Her</option>
                <option value="they/them">They/Them</option>
                <option value="ze/zir">Ze/Zir</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[12px] font-montserrat">
                Name as per Aadhar card*
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-[#D1B3B8] p-2 w-[100%]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[12px] font-montserrat">
                Email ID*
              </label>
              <input
                type="text"
                placeholder=""
                className="border border-[#D1B3B8] p-2 w-[100%]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone number"
                className="text-[12px] font-montserrat"
              >
                Phone Number*
              </label>
              <input
                type="text"
                placeholder=""
                className="border border-[#D1B3B8] p-2 w-[100%]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="gender" className="text-[12px] font-montserrat">
              Gender*
            </label>
            <select
              id="gender"
              name="gender"
              className="border border-[#D1B3B8] p-2 w-[100%]"
            >
              <option value="" disabled>
                -- Select Gender --
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-binary</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="nationality"
              className="text-[12px] font-montserrat"
            >
              Nationality*
            </label>
            <input
              type="text"
              placeholder=""
              className="border border-[#D1B3B8] p-2 w-[100%]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="text-[12px] font-montserrat">
              Postal Address*
            </label>
            <input
              type="text"
              placeholder=""
              className="border border-[#D1B3B8] p-2 w-[100%]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="country" className="text-[12px] font-montserrat">
              Country*
            </label>
            <select
              id="country"
              name="country"
              className="border border-[#D1B3B8] p-2 w-[100%]"
            >
              <option value="" disabled>
                -- Select Country --
              </option>
              <option value="india">India</option>
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
              <option value="germany">Germany</option>
              <option value="france">France</option>
              <option value="japan">Japan</option>
              <option value="china">China</option>
              <option value="brazil">Brazil</option>
              <option value="south-africa">South Africa</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="state" className="text-[12px] font-montserrat">
              State*
            </label>
            <input
              type="text"
              placeholder="Enter your State"
              className="border border-[#D1B3B8] p-2 w-[100%]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="city" className="text-[12px] font-montserrat">
              City*
            </label>
            <input
              type="text"
              placeholder="Enter your city"
              className="border border-[#D1B3B8] p-2 w-[100%]"
            />
          </div>
        </div>
        <div className="flex justify-between pb-6 w-[100%]">
          <div className="flex gap-1">
            <button className="flex justify-center items-center gap-3 flex-shrink-0 w-[40vw] border border-[rgba(92,14,20,0.5)] shadow-[0px_10px_30px_0px_rgba(101,0,16,0.2)] p-[10px_15px]">
              <span className="w-[15px] h-[8px]">
                <svg
                  width="22"
                  height="13"
                  viewBox="0 0 22 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Group 1381">
                    <path
                      id="Vector"
                      d="M2.33122 6.83668L7.20172 11.706C7.31199 11.8163 7.37393 11.9658 7.37393 12.1218C7.37393 12.2777 7.31199 12.4273 7.20172 12.5375C7.09145 12.6478 6.9419 12.7097 6.78596 12.7097C6.63002 12.7097 6.48047 12.6478 6.3702 12.5375L1.08512 7.25244C1.03043 7.19789 0.987044 7.13309 0.95744 7.06174C0.927836 6.9904 0.912598 6.91392 0.912598 6.83668C0.912598 6.75944 0.927836 6.68295 0.95744 6.61161C0.987044 6.54027 1.03043 6.47547 1.08512 6.42092L6.3702 1.13584C6.48047 1.02557 6.63002 0.963623 6.78596 0.963623C6.9419 0.963623 7.09145 1.02557 7.20172 1.13584C7.31199 1.2461 7.37393 1.39566 7.37393 1.5516C7.37393 1.70754 7.31199 1.85709 7.20172 1.96736L2.33122 6.83668Z"
                      fill="#5C0E14"
                      fillOpacity="0.5"
                    />
                    <path
                      id="Vector_2"
                      d="M2.86409 6.28131L20.5005 6.28131C20.6562 6.28131 20.8056 6.34318 20.9157 6.45331C21.0259 6.56343 21.0877 6.7128 21.0877 6.86854C21.0877 7.02429 21.0259 7.17365 20.9157 7.28378C20.8056 7.39391 20.6562 7.45577 20.5005 7.45577H2.86409C2.70834 7.45577 2.55898 7.39391 2.44885 7.28378C2.33872 7.17365 2.27686 7.02429 2.27686 6.86854C2.27686 6.7128 2.33872 6.56343 2.44885 6.45331C2.55898 6.34318 2.70834 6.28131 2.86409 6.28131Z"
                      fill="#5C0E14"
                      fillOpacity="0.5"
                    />
                  </g>
                </svg>
              </span>
              <span className="text-[#5C0E1480] text-[12px]">BACK</span>
            </button>
          </div>
          <div className="flex justify-center items-center border border-[#5C0E14] bg-[#650010] shadow-[0px_10px_30px_0px_rgba(101,0,16,0.2)] w-[40vw] text-white">
            <button className="font-montserrat text-[12px]">
              Next Section
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PersonalInformationMobile;
