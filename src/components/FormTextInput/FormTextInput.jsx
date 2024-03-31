import React from "react";

const FormTextInput = ({ labelContent, inputType }) => {
  const labelWidth = "FormTextInput md:w-1/5 items-center";
  const labelStyle =
    "block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4";
  const textInputWidth = "md:w-2/3 items-center";
  const textInputStyle =
    "bg-white appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-600 leading-tight focus:outline-none focus:bg-white focus:border-rose-200";

  return (
    <div className="w-full">
      <div className={labelWidth}>
        <label className={labelStyle} htmlFor="inline-full-name">
          {labelContent}
        </label>
      </div>
      <div className={textInputWidth}>
        <input
          className={textInputStyle}
          id="inline-full-name"
          type={inputType}
          value=""
        />
      </div>
    </div>
  );
};

export default FormTextInput;
