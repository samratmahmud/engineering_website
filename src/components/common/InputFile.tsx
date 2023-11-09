import React from "react";

interface inputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

function InputFile(props: inputProps) {
  const {type, id, placeholder, className} = props;
  return (
    <div className={`${className}`}>
      <input
        className="focus:outline-none md:text-sm text-xs placeholder:text-gray-300 uppercase placeholder:font-inter w-full border border-gray-300 focus:border-gray-900 md:p-3 py-2 px-3"
        type={type}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
}

export default InputFile;
