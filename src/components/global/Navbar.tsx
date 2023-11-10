import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="container md:py-6 py-4">
      <div className="flex justify-between gap-5 items-center">
        <Link href="/">
          <img src="/images/logo.svg" alt="Logo" />
        </Link>
        <div
          role="button"
          className="hover:bg-gray-400 rounded-md duration-300"
        >
          <img className="p-2" src="/images/Icon.svg" alt="Logo" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
