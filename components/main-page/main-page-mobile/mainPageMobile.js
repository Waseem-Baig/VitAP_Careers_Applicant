import { useState } from "react";
import Navbar from "@/components/sign-in/sign-in-empty-mobile/sign-in-navbar";
import Header from "@/components/sign-in/sign-in-empty-mobile/sign-in-header";
import Status from "../main-page-desktop/job-status";
import Footer from "./main-page-footer";
import Sidebar from "./mobile-sidebar"; // Import your Sidebar component

const MainpageMobile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const jobData = [
    {
      id: "JOB123",
      role: "Software Engineer - IT",
      appliedOn: "November 18, 2024",
      category: "Full-Time",
      status: "SELECTED",
    },
    {
      id: "JOB124",
      role: "Software Engineer - IT",
      appliedOn: "November 18, 2024",
      category: "Full-Time",
      status: "REJECTED",
    },
    {
      id: "JOB125",
      role: "Software Engineer - IT",
      appliedOn: "November 18, 2024",
      category: "Full-Time",
      status: "IN PROGRESS",
    },
  ];

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
      <div
        className={`flex-grow flex flex-col gap-4 transition-all duration-300 ${
          isSidebarOpen ? "blur-sm" : ""
        }`}
      >
        <Navbar />
        <div className="flex flex-col gap-4">
          <p className="text-[16px] font-montserrat font-bold p-[0px_20px]">
            General Information
          </p>
          <div className="flex flex-col justify-start items-center gap-4 w-full">
            <div className="flex justify-between p-[8px_20px] w-[90%] border border-greyscale-300 ml-4 text-[12px]">
              <span>01 Jan 2023 - 10 Mar 2023</span>
              <span>
                <CalendarIcon />
              </span>
            </div>
            <div>
              <select
                id="options"
                name="options"
                className="flex justify-between p-[8px_20px] w-[90vw] border border-greyscale-300 ml-4 text-[12px]"
                defaultValue="default"
              >
                <option value="default" disabled>
                  Field Type - All Type
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
          <div className="w-full overflow-x-scroll">
            <table className="min-w-[800px] border-collapse border border-gray-300">
              <thead className="bg-[#F5F5F5]">
                <tr>
                  {[
                    "S.No",
                    "Job ID",
                    "Role Name - Dept",
                    "Applied On",
                    "Job Category",
                    "Job Status",
                  ].map((header, index) => (
                    <th
                      key={index}
                      className="p-[24px] text-left text-[13px] font-montserrat text-[#000] font-bold"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {jobData.map((job, index) => (
                  <tr key={index}>
                    <td className="p-[24px] text-[13px]">{index + 1}</td>
                    <td className="p-[24px] text-[13px]">{job.id}</td>
                    <td className="p-[24px] text-[14px] font-bold">
                      {job.role}
                    </td>
                    <td className="p-[24px] text-[13px]">{job.appliedOn}</td>
                    <td className="p-[24px] text-[13px]">{job.category}</td>
                    <td className="p-[24px] text-[13px]">
                      <Status status={job.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

const CalendarIcon = () => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="calendar">
      <g id="Vector">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.50016 4.79167C4.92487 4.79167 4.4585 5.25804 4.4585 5.83333V15.8333C4.4585 16.4086 4.92487 16.875 5.50016 16.875H15.5002C16.0755 16.875 16.5418 16.4086 16.5418 15.8333V5.83333C16.5418 5.25804 16.0755 4.79167 15.5002 4.79167H5.50016ZM3.2085 5.83333C3.2085 4.56768 4.23451 3.54167 5.50016 3.54167H15.5002C16.7658 3.54167 17.7918 4.56768 17.7918 5.83333V15.8333C17.7918 17.099 16.7658 18.125 15.5002 18.125H5.50016C4.23451 18.125 3.2085 17.099 3.2085 15.8333V5.83333Z"
          fill="#111827"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.8335 1.875C14.1787 1.875 14.4585 2.15482 14.4585 2.5V5.83333C14.4585 6.17851 14.1787 6.45833 13.8335 6.45833C13.4883 6.45833 13.2085 6.17851 13.2085 5.83333V2.5C13.2085 2.15482 13.4883 1.875 13.8335 1.875Z"
          fill="#111827"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.16683 1.875C7.51201 1.875 7.79183 2.15482 7.79183 2.5V5.83333C7.79183 6.17851 7.51201 6.45833 7.16683 6.45833C6.82165 6.45833 6.54183 6.17851 6.54183 5.83333V2.5C6.54183 2.15482 6.82165 1.875 7.16683 1.875Z"
          fill="#111827"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.2085 9.16667C3.2085 8.82149 3.48832 8.54167 3.8335 8.54167H17.1668C17.512 8.54167 17.7918 8.82149 17.7918 9.16667C17.7918 9.51184 17.512 9.79167 17.1668 9.79167H3.8335C3.48832 9.79167 3.2085 9.51184 3.2085 9.16667Z"
          fill="#111827"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.8335 12.5C8.8335 12.0398 9.20659 11.6667 9.66683 11.6667H10.5002C10.9604 11.6667  11.3335 12.0398 11.3335 12.5C11.3335 12.9602 10.9604 13.3333 10.5002 13.3333H9.66683C9.20659 13.3333 8.8335 12.9602 8.8335 12.5Z"
          fill="#111827"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5002 11.875C10.8453 11.875 11.1252 12.1548 11.1252 12.5V15C11.1252 15.3452 10.8453 15.625 10.5002 15.625C10.155 15.625 9.87516 15.3452 9.87516 15V12.5C9.87516 12.1548 10.155 11.875 10.5002 11.875Z"
          fill="#111827"
        />
      </g>
    </g>
  </svg>
);

export default MainpageMobile;
