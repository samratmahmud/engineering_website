import Button from "@/components/common/Button";
import React from "react";

const pages = [
  {
    thumbneil: "/images/covid_virus-lab-research-microscope.svg",
    title: "ANALYSIS",
    contain:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fug.",
    button: "MORE",
  },
  {
    thumbneil: "/images/CONSUMING CRITICALLY (1) 1.svg",
    title: "PLANNING",
    contain:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fug.",
    button: "MORE",
  },
  {
    thumbneil: "/images/MENTAL HEALTH (1) 1.svg",
    title: "DESIGN",
    contain:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fug.",
    button: "MORE",
  },
];

function Header() {
  return (
    <section className="bg-gray-400 mb-11">
      <div className="pt-8 pb-[60px] container">
        <div className="flex gap-5 justify-between">
          <div>
            <img src="/images/ggg-min 1.png" alt="" />
          </div>
          <div className="max-w-[513px]">
            <div className="text-base font-bold mb-5 mt-7 font-roboto">
              ABOUT US
            </div>
            <div className="text-4xl font-bold text-orange-600 mb-5 font-oswald">
              Architecture, Engineering & Design Firm
            </div>
            <div className="text-sm mb-9 italic">
              We are the authority for completing construction projects in
              environmentally sensitive surroundings.
            </div>
            <div>
              <Button name="READ MORE" />
            </div>
          </div>
        </div>
        <div className="flex">
          {pages.map(({thumbneil, title, contain, button}, index) => (
            <div
              key={index}
              className="bg-orange-500 last:bg-orange-300 first:bg-orange-600 py-[30px] px-7"
            >
              <div className="flex justify-center">
                <div className="bg-white rounded-full mb-7">
                  <img className="p-5" src={thumbneil} alt="" />
                </div>
              </div>
              <div className="text-xl font-roboto-Condensed font-light mb-5 text-white text-center">
                {title}
              </div>
              <div className="text-sm italic mb-6 text-white text-center">
                {contain}
              </div>
              <div className="flex justify-center">
                <button className="text-sm font-light bg-white py-2.5 px-8">
                  {button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Header;