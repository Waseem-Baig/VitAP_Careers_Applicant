import React from "react";

const InputField = ({ label, placeholder, id, width }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-[16px] font-montserrat">
      {label}
      <span className="text-red-600">*</span>
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className={`border border-[#D1B3B8] p-2 ${width} placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[13.893px] placeholder-font-normal placeholder-leading-[18.524px]`}
    />
  </div>
);

const SelectField = ({ label, id, options, width, placeholder }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-[16px] font-montserrat">
      {label}
      <span className="text-red-600">*</span>
    </label>
    <select
      id={id}
      name={id}
      className={`block ${width} px-3 py-3 border border-[#D1B3B8] shadow-sm focus:outline-none sm:text-sm`}
      placeholder={placeholder}
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

const ExperienceMainbar = () => {
  return (
    <div className="overflow-y-scroll flex flex-col w-[80vw] h-[75vh] p-6 bg-[#5C0E1405]">
      <div className="flex flex-col w-[80%] h-[100%] gap-6">
        <p className="font-montserrat text-[24px] font-bold">
          Professional Experience details
        </p>
        <InputField
          label="Total Experience (in years)"
          placeholder="Enter Your Experience in Number , 0 if you have no experience"
          id="experienceTotal"
          width={"w-[45vw]"}
        />
        <InputField
          label="Experience after Ph.D. (in years)"
          placeholder="Enter Your Experience in Number , 0 if you have no experience"
          id="experiencePHD"
          width={"w-[45vw]"}
        />
        <InputField
          label="Industry Experience (in years)"
          placeholder="Enter Your Experience in Number , 0 if you have no experience"
          id="experienceIndustry"
          width={"w-[45vw]"}
        />
        <div className="flex justify-between gap-16">
          <InputField
            label="Current Institute/ Organization"
            placeholder="Enter The Name of Organization"
            id="instituteCurrent"
            width={"w-[30vw]"}
          />
          <InputField
            label="Current Designation"
            placeholder="Enter your Present Role"
            id="designationCurrent"
            width={"w-[30vw]"}
          />
        </div>
        <SelectField
          label="Have you served in VIT (Vellore/Chennai/Bhopal/Amaravati) before?"
          id="phd-status"
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
            { value: "na", label: "NA" },
          ]}
          width={"w-[30vw]"}
        />
        <div className="flex justify-between gap-16">
          <InputField
            label="Present Salary ( Per month in INR)"
            placeholder="Enter Your Salary in Number [ Ex: 1200000]"
            id="salaryCurrent"
            width={"w-[30vw]"}
          />
          <InputField
            label="Expected Salary ( Per month in INR)"
            placeholder="Enter Your Salary in Number [ Ex: 1200000]"
            id="salaryExpected"
            width={"w-[30vw]"}
          />
        </div>
        <SelectField
          label="When can you join, if you are given an offer *"
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
          width={"w-[30vw]"}
          placeholder={"Select Yes, if you can join immediately or No."}
        />
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

export default ExperienceMainbar;
