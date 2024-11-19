import React from "react";

const EducationMainPage = () => {
  // Generate years from 2010 to 2024
  const years = [];
  for (let year = 2010; year <= 2024; year++) {
    years.push(year);
  }

  return (
    <div className="overflow-y-scroll flex flex-col w-[80vw] h-[75vh] p-6 bg-[#5C0E1405]">
      <div className="flex flex-col w-[80%] h-[100%] gap-6">
        <p className="font-montserrat text-[24px] font-bold">
          Education Details - 10th Standard
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <label htmlFor="schoolName" className="text-[16px] font-montserrat">
              Name of the School/Institute
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your School Name"
              className="border border-gray-300 p-2 w-[25vw] placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[13.893px] placeholder-font-normal placeholder-leading-[18.524px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="boardName" className="text-[16px] font-montserrat">
              Name of the Board
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter the Board Name [Eg: AP State Board, CBSE]"
              className="border border-gray-300 p-2 w-[25vw] placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[13.893px] placeholder-font-normal placeholder-leading-[18.524px]"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="yearOfCompletion"
              className="text-[16px] font-montserrat"
            >
              Year of Completion
              <span className="text-red-600">*</span>
            </label>
            <div className="flex gap-4">
              <select
                id="month"
                name="month"
                className="border border-gray-300 w-[8vw] h-[7vh] text-sm"
                defaultValue=""
              >
                <option value="" disabled>
                  MM
                </option>

                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
              <select
                id="year"
                name="year"
                className="border border-gray-300 w-[10vw] h-[7vh] text-sm"
                defaultValue=""
              >
                <option
                  value=""
                  disabled
                  className="text-[#33333366] font-montserrat text-[13.893px] font-normal leading-[18.524px]"
                >
                  YYYY
                </option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="GPA" className="text-[16px] font-montserrat">
              Percentage or CGPA Obtained<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter The Number you Obtained"
              className="border border-gray-300 p-2 w-[25vw] placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[13.893px] placeholder-font-normal placeholder-leading-[18.524px]"
            />
          </div>
        </div>
        <p className="font-montserrat text-[24px] font-bold">
          Education Details - Higher Secondary/Intermediate
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <label htmlFor="schoolName" className="text-[16px] font-montserrat">
              Name of the School/Institute
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your School Name"
              className="border border-gray-300 p-2 w-[25vw] placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[13.893px] placeholder-font-normal placeholder-leading-[18.524px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="boardName" className="text-[16px] font-montserrat">
              Name of the Board<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter the Board Name [Eg: AP State Board, CBSE]"
              className="border border-gray-300 p-2 w-[25vw] placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[13.893px] placeholder-font-normal placeholder-leading-[18.524px]"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="yearOfCompletion"
              className="text-[16px] font-montserrat"
            >
              Year of Completion<span className="text-red-600">*</span>
            </label>
            <div className="flex gap-4">
              <select
                id="month"
                name="month"
                className="border border-gray-300 w-[8vw] h-[7vh] text-sm"
                defaultValue=""
              >
                <option
                  value=""
                  disabled
                  className="text-[#33333366] font-montserrat text-[13.893px] font-normal leading-[18.524px]"
                >
                  MM
                </option>

                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
              <select
                id="year"
                name="year"
                className="border border-gray-300 w-[10vw] h-[7vh] text-sm"
                defaultValue=""
              >
                <option
                  value=""
                  disabled
                  className="text-[#33333366] font-montserrat text-[13.893px] font-normal leading-[18.524px]"
                >
                  YYYY
                </option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="GPA" className="text-[16px] font-montserrat">
              Percentage or CGPA Obtained<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter The Number you Obtained"
              className="border border-gray-300 p-2 w-[25vw] placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[13.893px] placeholder-font-normal placeholder-leading-[18.524px]"
            />
          </div>
        </div>
        <p className="font-montserrat text-[24px] font-bold">
          Education Details - Under Graduation
        </p>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="universityName"
            className="text-[16px] font-montserrat"
          >
            Name of the University/Institute*
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter the Name of Institution/University"
            className="border border-gray-300 p-2 w-[25vw] placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[13.893px] placeholder-font-normal placeholder-leading-[18.524px]"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <label htmlFor="schoolName" className="text-[16px] font-montserrat">
              Name of the Degree
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter the Degree Type [Eg: B.Tech, M.Tech, B.Ed Etc..]"
              className="border border-gray-300 p-2 w-[25vw] placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[13.893px] placeholder-font-normal placeholder-leading-[18.524px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="boardName" className="text-[16px] font-montserrat">
              Name of the Major<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter the Major Type [Eg: Computer Science Etc..]"
              className="border border-gray-300 p-2 w-[25vw] placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[13.893px] placeholder-font-normal placeholder-leading-[18.524px]"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="yearOfCompletion"
              className="text-[16px] font-montserrat"
            >
              Year of Completion<span className="text-red-600">*</span>
            </label>
            <div className="flex gap-4">
              <select
                id="month"
                name="month"
                className="border border-gray-300 w-[8vw] h-[7vh] text-sm"
                defaultValue=""
              >
                <option
                  value=""
                  disabled
                  className="text-[#33333366] font-montserrat text-[13.893px] font-normal leading-[18.524px]"
                >
                  MM
                </option>

                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
              <select
                id="year"
                name="year"
                className="border border-gray-300 w-[10vw] h-[7vh] text-sm"
                defaultValue=""
              >
                <option
                  value=""
                  disabled
                  className="text-[#33333366] font-montserrat text-[13.893px] font-normal leading-[18.524px]"
                >
                  YYYY
                </option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="GPA" className="text-[16px] font-montserrat">
              Percentage or CGPA Obtained<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter The Number you Obtained"
              className="border border-gray-300 p-2 w-[25vw] placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[13.893px] placeholder-font-normal placeholder-leading-[18.524px]"
            />
          </div>
        </div>
        <p className="font-montserrat text-[24px] font-bold">
          Education Details - Post Graduation
        </p>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="universityName"
            className="text-[16px] font-montserrat"
          >
            Name of the University/Institute*
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter the Name of Institution/University"
            className="border border-gray-300 p-2 w-[25vw] placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[13.893px] placeholder-font-normal placeholder-leading-[18.524px]"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <label htmlFor="schoolName" className="text-[16px] font-montserrat">
              Name of the Degree
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter the Degree Type [Eg: B.Tech, M.Tech, B.Ed Etc..]"
              className="border border-gray-300 p-2 w-[25vw] placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[13.893px] placeholder-font-normal placeholder-leading-[18.524px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="boardName" className="text-[16px] font-montserrat">
              Name of the Major<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter the Major Type [Eg: Computer Science Etc..]"
              className="border border-gray-300 p-2 w-[25vw] placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[13.893px] placeholder-font-normal placeholder-leading-[18.524px]"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="yearOfCompletion"
              className="text-[16px] font-montserrat"
            >
              Year of Completion<span className="text-red-600">*</span>
            </label>
            <div className="flex gap-4">
              <select
                id="month"
                name="month"
                className="border border-gray-300 w-[8vw] h-[7vh] text-sm"
                defaultValue=""
              >
                <option
                  value=""
                  disabled
                  className="text-[#33333366] font-montserrat text-[13.893px] font-normal leading-[18.524px]"
                >
                  MM
                </option>

                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
              <select
                id="year"
                name="year"
                className="border border-gray-300 w-[10vw] h-[7vh] text-sm"
                defaultValue=""
              >
                <option
                  value=""
                  disabled
                  className="text-[#33333366] font-montserrat text-[13.893px] font-normal leading-[18.524px]"
                >
                  YYYY
                </option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="GPA" className="text-[16px] font-montserrat">
              Percentage or CGPA Obtained<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter The Number you Obtained"
              className="border border-gray-300 p-2 w-[25vw] placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[13.893px] placeholder-font-normal placeholder-leading-[18.524px]"
            />
          </div>
        </div>
        <div className="border border-[#5C0E14] p-[16px_20px] max-w-fit text-[16px]">
          <button className="flex gap-1 ">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M11 13.3993H5V11.3993H11V5.39929H13V11.3993H19V13.3993H13V19.3993H11V13.3993Z"
                  fill="#650010"
                />
              </svg>
            </span>
            <span className="text-[#5C0E14]">Add One More Degree</span>
          </button>
        </div>
        <p className="font-montserrat text-[24px] font-bold">
          Education Details - Phd
        </p>
        <div className="flex flex-col gap-2">
          <label htmlFor="boardName" className="text-[16px] font-montserrat">
            Name of the University/Institute
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter the Name of Institution/University"
            className="border border-gray-300 p-2 w-[25vw] placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[13.893px] placeholder-font-normal placeholder-leading-[18.524px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="boardName" className="text-[16px] font-montserrat">
            Name of the Major<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter the Major Type [Eg: Computer Science Etc..]"
            className="border border-gray-300 p-2 w-[25vw] placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[13.893px] placeholder-font-normal placeholder-leading-[18.524px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="boardName" className="text-[16px] font-montserrat">
            Ph.D. Status<span className="text-red-600">*</span>
          </label>
          <select
            id="phd-status"
            name="phd-status"
            style={{
              color: "black",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "13.893px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "18.524px",
              padding: "12px",
            }}
            className="block w-[25vw] px-3 py-2 border border-gray-300 shadow-sm focus:outline-none sm:text-sm"
          >
            <option value="" disabled selected>
              Select
            </option>
            <option value="not_enrolled">Not Enrolled</option>
            <option value="enrolled">Enrolled</option>
            <option value="completed">Completed</option>
            <option value="graduated">Graduated</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="yearOfCompletion"
            className="text-[16px] font-montserrat"
          >
            Completion Date/ Expected Completion Date
            <span className="text-red-600">*</span>
          </label>
          <div className="flex gap-4">
            <select
              id="month"
              name="month"
              className="border border-gray-300 w-[8vw] h-[7vh] text-sm"
              defaultValue=""
            >
              <option
                value=""
                disabled
                className="text-[#33333366] font-montserrat text-[13.893px] font-normal leading-[18.524px]"
              >
                MM
              </option>

              <option value="1">Jan</option>
              <option value="2">Feb</option>
              <option value="3">Mar</option>
              <option value="4">Apr</option>
              <option value="5">May</option>
              <option value="6">Jun</option>
              <option value="7">Jul</option>
              <option value="8">Aug</option>
              <option value="9">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </select>
            <select
              id="year"
              name="year"
              className="border border-gray-300 w-[10vw] h-[7vh] text-sm"
              defaultValue=""
            >
              <option
                value=""
                disabled
                className="text-[#33333366] font-montserrat text-[13.893px] font-normal leading-[18.524px]"
              >
                YYYY
              </option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="font-montserrat text-[24px] font-bold">
          Education Details - PDF
        </p>
        <div className="flex flex-col gap-2">
          <label htmlFor="boardName" className="text-[16px] font-montserrat">
            Name of the University/Institute
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter the Name of Institution/University"
            className="border border-gray-300 p-2 w-[25vw] placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[13.893px] placeholder-font-normal placeholder-leading-[18.524px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="boardName" className="text-[16px] font-montserrat">
            Name of the Discipline<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter the Major Type [Eg: Computer Science Etc..]"
            className="border border-gray-300 p-2 w-[25vw] placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[13.893px] placeholder-font-normal placeholder-leading-[18.524px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="boardName" className="text-[16px] font-montserrat">
            PDF Status<span className="text-red-600">*</span>
          </label>
          <select
            id="pdf-status"
            name="pdf-status"
            style={{
              color: "black",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "13.893px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "18.524px",
              padding: "12px",
            }}
            className="block w-[25vw] px-3 py-2 border border-gray-300 shadow-sm focus:outline-none sm:text-sm"
          >
            <option value="" disabled selected>
              Select
            </option>
            <option value="not_enrolled">Not Enrolled</option>
            <option value="enrolled">Enrolled</option>
            <option value="completed">Completed</option>
            <option value="graduated">Graduated</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="yearOfCompletion"
            className="text-[16px] font-montserrat"
          >
            Completion Date/ Expected Completion Date
            <span className="text-red-600">*</span>
          </label>
          <div className="flex gap-4">
            <select
              id="month"
              name="month"
              className="border border-gray-300 w-[8vw] h-[7vh] text-sm"
              defaultValue=""
            >
              <option
                value=""
                disabled
                className="text-[#33333366] font-montserrat text-[13.893px] font-normal leading-[18.524px]"
              >
                MM
              </option>

              <option value="1">Jan</option>
              <option value="2">Feb</option>
              <option value="3">Mar</option>
              <option value="4">Apr</option>
              <option value="5">May</option>
              <option value="6">Jun</option>
              <option value="7">Jul</option>
              <option value="8">Aug</option>
              <option value="9">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </select>
            <select
              id="year"
              name="year"
              className="border border-gray-300 w-[10vw] h-[7vh] text-sm"
              defaultValue=""
            >
              <option
                value=""
                disabled
                className="text-[#33333366] font-montserrat text-[13.893px] font-normal leading-[18.524px]"
              >
                YYYY
              </option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-between pb-6">
          <div className="flex gap-1">
            <button className="flex justify-center items-center gap-[10px] flex-shrink-0 w-[12vw] border border-[rgba(92,14,20,0.5)] shadow-[0px_10px_30px_0px_rgba(101,0,16,0.2)] p-[12px_15px]">
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
          <div className="flex justify-center items-center border border-[#5C0E14] bg-[#650010] shadow-[0px_10px_30px_0px_rgba(101,0,16,0.2)] w-[40vw] text-white">
            <button className="font-montserrat text-[16px]">
              Next Section
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationMainPage;
