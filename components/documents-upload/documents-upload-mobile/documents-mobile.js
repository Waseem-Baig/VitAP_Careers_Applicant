import Sidebar from "@/components/main-page/main-page-mobile/mobile-sidebar";
import Header from "@/components/sign-in/sign-in-empty-mobile/sign-in-header";
import Navbar from "@/components/sign-in/sign-in-empty-mobile/sign-in-navbar";
import { useState } from "react";
import Footer from "@/components/main-page/main-page-mobile/main-page-footer";

const DocumentUploadField = ({ label, id, placeholder, subContent }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-[12px] font-montserrat">
      {label}
      <span className="text-red-600">*</span>
    </label>
    <p className="text-[10px] font-montserrat">{subContent}</p>
    <div className="relative border border-[#D1B3B8] w-[100%] p-2 flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="12"
        viewBox="0 0 11 12"
        fill="none"
        className="flex-shrink-0"
      >
        <g clipPath="url(#clip0_1_3886)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.41569 1.39246L7.96072 3.74182L7.4818 4.26029L5.77876 2.68863V8.59241H5.0724V2.73454L3.55655 4.2511L3.05644 3.751L5.41569 1.39246ZM1.54059 10.0051V5.76696H0.834229V10.7115H10.0169V5.76696H9.31057V10.0051H1.54059Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_3886">
            <rect
              width="10.5954"
              height="10.5954"
              fill="white"
              transform="translate(0.127197 0.822144)"
            />
          </clipPath>
        </defs>
      </svg>
      <input
        type="file"
        id={id}
        accept=".pdf,.doc,.docx,.txt"
        className="absolute inset-0 opacity-0 cursor-pointer"
      />
      <span className="text-[rgba(51,51,51,0.40)] font-montserrat text-[10px] font-normal leading-[16.953px]">
        {placeholder}
      </span>
    </div>
  </div>
);

const SelectField = ({ label, id, options }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-[12px] font-montserrat">
      {label}
      <span className="text-red-600">*</span>
    </label>
    <select
      id={id}
      name={id}
      className="block w-[full] px-3 py-2 border border-[#D1B3B8] shadow-sm focus:outline-none sm:text-sm"
    >
      <option value="" disabled defaultValue>
        Select
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const DocumentsMobile = () => {
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
      <div className="overflow-y-scroll flex flex-col w-[full] h-auto p-6 bg-[#5C0E1405]">
        <div className="flex flex-col w-[90%] h-screen gap-6">
          <p className="font-montserrat text-[16px] font-bold">Resume</p>
          <DocumentUploadField
            label="Upload your Resume"
            placeholder="Upload [File type - pdf size below 1 mb]"
            id={1}
          />
          <DocumentUploadField
            label="Upload All Transcripts"
            placeholder="Upload [File type - pdf size below 1 mb]"
            subContent="(merge all transcripts into a single pdf file and upload)"
            id={2}
          />
          <DocumentUploadField
            label="Upload all Experince Certificates"
            placeholder="Upload [File type - pdf size below 1 mb]"
            subContent="(merge all your experience certificates into a single pdf file and upload)  "
            id={3}
          />
          <SelectField
            label="Whether you have applied/attended previously in VIT-AP"
            id="workedPreviously"
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ]}
          />
          <label htmlFor="duration" className="text-[12px] font-montserrat">
            If yes, date of attended to the Technical round
            <span className="text-red-600">*</span>
          </label>
          <input
            type="date"
            id={4}
            className="border border-[#D1B3B8] p-2 w-[100%] text-[12px] font-montserrat placeholder-[rgba(51, 51, 51, 0.40)] leading-[18.524px] focus:outline-none focus:ring-2 focus:ring-[#D1B3B8]"
          />
          <p className="font-montserrat text-[24px] font-bold">Declaration</p>
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id={5}
              className="w-4 h-4 border border-[#D1B3B8] accent-[#D1B3B8]"
            />
            <label
              htmlFor={6}
              className="text-[12px] font-montserrat text-[rgba(51, 51, 51, 0.40)] leading-[16.953px]"
            >
              I confirm that I have not been convicted by a court in India for
              any criminal offense and/or sentenced to imprisonment. There are
              no criminal proceedings pending against me before any court in
              India. I have not been issued a warrant or summons for appearance
              or a warrant for arrest by any court in India. I certify that the
              above statements made by me are true, complete and correct. I
              agree that in case VIT finds at any time that the information
              given by me in this form is not correct or incomplete, VIT will
              have the right to withdraw my letter of appointment or to
              terminate my appointment at any time without notice or
              compensation.
            </label>
          </div>
          <div className="flex justify-between pb-6">
            <div className="flex gap-1">
              <button className="flex justify-center items-center gap-[10px] flex-shrink-0 w-[25vw] border border-[rgba(92,14,20,0.5)] shadow-[0px_10px_30px_0px_rgba(101,0,16,0.2)] p-[10px_12px]">
                <span className="w-[20px] h-[11px]">
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
                <span className="text-[#5C0E1480]">Back</span>
              </button>
            </div>
            <div className="flex justify-center items-center border border-[#5C0E14] bg-[#650010] shadow-[0px_10px_30px_0px_rgba(101,0,16,0.2)] w-[50vw] text-white">
              <button className="font-montserrat text-[10px]">
                Submit Application
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocumentsMobile;
