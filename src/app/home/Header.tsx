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
    <section className="bg-gray-400 md:mb-11 mb-7">
      <div className="md:pt-8 md:pb-[60px] py-7 container">
        <div className="lg:flex gap-5 justify-between">
          <div>
            <img src="/images/ggg-min 1.png" alt="" />
          </div>
          <div className="lg:max-w-[513px]">
            <div className="md:text-base text-md font-bold md:mb-5 mb-3 mt-7 font-roboto">
              ABOUT US
            </div>
            <div className="md:text-4xl text-2xl font-bold text-orange-600 md:mb-5 mb-3 font-oswald">
              Architecture, Engineering & Design Firm
            </div>
            <div className="text-sm mb-9 italic">
              We are the authority for completing construction projects in
              environmentally sensitive surroundings.
            </div>
            <div className="mb-5">
              <Button name="READ MORE" />
            </div>
          </div>
        </div>
        <div className="md:flex">
          {pages.map(({thumbneil, title, contain, button}, index) => (
            <div
              key={index}
              className="bg-orange-500 last:bg-orange-300 first:bg-orange-600 py-[30px] px-7"
            >
              <div className="flex justify-center">
                <img
                  className="p-5 bg-white rounded-full md:mb-7 mb-4"
                  src={thumbneil}
                  alt=""
                />
              </div>
              <div className="md:text-xl text-lg font-roboto-Condensed font-light md:mb-5 mb-4 text-white text-center">
                {title}
              </div>
              <div className="md:text-sm text-xs italic md:mb-6 mb-4 text-white text-center">
                {contain}
              </div>
              <div className="flex justify-center">
                <button className="text-sm font-light bg-white md:py-2.5 py-1.5 px-8">
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
