import React from "react";

interface buttonProps {
  name: string;
  fontWeight?: "normal" | "bold";
}

function Button(props: buttonProps) {
  const {name, fontWeight = "normal"} = props;
  return (
    <div
      role="button"
      className={`${
        fontWeight === "normal"
          ? "bg-orange-500 py-2.5 px-7 tracking-[1.68px] text-sm text-white inline-block"
          : "bg-orange-500 py-2.5 px-7 tracking-[1.68px] text-sm text-white inline-block font-bold"
      }`}
    >
      {name}
    </div>
  );
}

export default Button;
