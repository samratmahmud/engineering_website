import Button from "@/components/common/Button";
import InputFile from "@/components/common/InputFile";
import Link from "next/link";
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

const socialPage = [
  {
    icon: "/images/Instagram.svg",
    url: "",
  },
  {
    icon: "/images/Facebook.svg",
    url: "",
  },
  {
    icon: "/images/Vector.svg",
    url: "",
  },
  {
    icon: "/images/Vector (1).svg",
    url: "",
  },
];

function Footer() {
  return (
    <section className="bg-gray-900 md:pt-[60px] pt-10">
      <div className="container">
        <div className="md:text-5xl text-2xl font-medium text-orange-500 md:mb-7 mb-4 font-oswald text-center">
          Get in Touch!
        </div>
        <div className="text-md md:mb-[74px] mb-10 text-white text-center font-roboto">
          We are looking forward to start a project with you
        </div>
        <div className="relative z-0 md:mb-12 mb-8">
          <div className="absolute bg-orange-400 xl:w-[calc(100%-128px)] w-full xl:ml-16 h-[80%] translate-y-[12%] -z-10" />
          <div className="lg:flex gap-12 bg-white md:pt-9 md:pb-12 md:px-[30px] p-5 md:max-w-[873px] w-[calc(100%-40px)] m-auto">
            <div className="flex flex-col gap-6">
              {personalDetails.map(({thumbneil, p1, p2}, index) => (
                <div key={index}>
                  <div className="mb-2.5">
                    <img src={thumbneil} alt="" />
                  </div>
                  <div className="md:text-sm text-xs font-bold">
                    <p>{p1}</p>
                    <p>{p2}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7 w-full lg:max-w-[459px]">
              <InputFile
                className="mb-5"
                type="text"
                placeholder="ENTER YOUR NAME"
                id="name"
              />
              <InputFile
                className="mb-5"
                type="email"
                placeholder="ENTER a valid email adress"
                id="email"
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
        <div className="flex items-center justify-center md:pb-9 pb-5">
          {socialPage.map(({icon, url}, index) => (
            <Link href={url} className="p-4">
              <img src={icon} alt="" />
            </Link>
          ))}
        </div>
      </div>
      <div className="md:text-xs text-sx font-medium text-white text-center md:py-14 py-7 bg-[#333] px-4">
        <Link href="" className="text-blue-300 underline">
          Website Templates
        </Link>{" "}
        created with{" "}
        <Link href="" className="text-blue-300 underline">
          Website Builder Software
        </Link>
      </div>
    </section>
  );
}

export default Footer;
