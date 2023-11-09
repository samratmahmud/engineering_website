import React from "react";

interface inputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

function InputFile(props: inputProps) {
  const {type, id, placeholder, className} = props;
  return (
    <div
      className={`border border-gray-300 focus:border-gray-100  p-3 ${className}`}
    >
      <input
        className="focus:outline-none text-sm placeholder:text-gray-300 uppercase w-[60%] placeholder:font-inter"
        type={type}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
}

export default InputFile;
