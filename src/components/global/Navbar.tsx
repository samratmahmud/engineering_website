import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="container py-6">
      <div className="flex justify-between gap-5 items-center">
        <Link href="/">
          <img src="/images/logo.svg" alt="Logo" />
        </Link>
        <div role="button">
          <img className="p-2" src="/images/Icon.svg" alt="Logo" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;