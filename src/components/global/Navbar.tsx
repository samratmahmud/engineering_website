"use client";
import Link from "next/link";
import React, {useState} from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const navLink = [
  {
    name: "ABOUT US",
    url: "/",
  },
  {
    name: "Contact",
    url: "/",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="container md:py-6 py-4">
        <div className="flex justify-between gap-5 items-center">
          <Link href="/">
            <img src="/images/logo.svg" alt="Logo" />
          </Link>
          <div
            onClick={toggle}
            role="button"
            className="hover:bg-gray-400 rounded-md duration-300"
          >
            <img className="p-2" src="/images/Icon.svg" alt="Logo" />
          </div>
        </div>
      </div>
      <div className="">
        <Drawer onClose={toggle} open={open} direction="left">
          <div className="p-5 bg-gray-400 h-full flex flex-col justify-between">
            <div className="flex flex-col gap-10">
              <div className="flex justify-between gap-5 items-center">
                <Link href="/">
                  <img src="/images/logo.svg" alt="Logo" />
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                {navLink.map(({name, url}, index) => (
                  <div
                    key={index}
                    className="hover:bg-gray-300 py-2 px-2 duration-500 text-center"
                  >
                    <Link href="" className="text-md font-semibold ">
                      {name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-sx font-medium text-gray-950 text-center">
              <Link href="" className="text-orange-600 underline">
                Website Templates
              </Link>{" "}
              created with{" "}
              <Link href="" className="text-orange-600 underline">
                Website Builder Software
              </Link>
            </div>
          </div>
        </Drawer>
      </div>
    </nav>
  );
}

export default Navbar;
