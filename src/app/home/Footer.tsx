import Button from "@/components/common/Button";
import InputFile from "@/components/common/InputFile";
import React from "react";

const personalDetails = [
  {
    thumbneil: "/images/MAP.svg",
    p1: "121 Rock Sreet, 21 Avenue, New York,",
    p2: "NY 92103-9000",
  },
  {
    thumbneil: "/images/CALL.svg",
    p1: "121 Rock Sreet, 21 Avenue, New York,",
    p2: "NY 92103-9000",
  },
  {
    thumbneil: "/images/Group 14.svg",
    p1: "121 Rock Sreet, 21 Avenue, New York,",
    p2: "NY 92103-9000",
  },
];

function Footer() {
  return (
    <section className="bg-gray-900 pt-[60px] pb-7">
      <div className="container">
        <div className="text-5xl font-medium text-orange-500 mb-7 font-oswald text-center">
          Get in Touch!
        </div>
        <div className="text-md mb-[74px] text-white text-center font-roboto">
          We are looking forward to start a project with you
        </div>
        <div className="bg-orange-400 mr-24 ml-16 px-12">
          <div className="flex gap-12 bg-white pt-9 pb-12 px-[30px] max-w-[873px] m-auto mb-16">
            <div className="flex flex-col gap-6">
              {personalDetails.map(({thumbneil, p1, p2}, index) => (
                <div key={index}>
                  <div className="mb-2.5">
                    <img src={thumbneil} alt="" />
                  </div>
                  <div className="text-sm font-bold">
                    <p>{p1}</p>
                    <p>{p2}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7 w-full max-w-[459px]">
              <InputFile
                className="mb-5"
                type="text"
                placeholder="ENTER YOUR NAME"
                id=""
              />
              <InputFile
                className="mb-5"
                type="text"
                placeholder="ENTER YOUR NAME"
                id=""
              />
              <div className="border border-gray-300 p-3 mb-2.5">
                <textarea
                  className="focus:outline-none w-full h-28"
                  name="text"
                  id=""
                ></textarea>
              </div>
              <div>
                <Button name="SUBMIT" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
