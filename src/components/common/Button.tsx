import React from "react";

interface buttonProps {
  name: string;
}

function Button(props: buttonProps) {
  const {name} = props;
  return (
    <div
      role="button"
      className="bg-orange-500 py-2.5 px-7 tracking-[1.68px] text-sm font-bold text-white inline-block"
    >
      {name}
    </div>
  );
}

export default Button;
