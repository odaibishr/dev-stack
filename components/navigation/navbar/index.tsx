import Image from "next/image";
import Link from "next/link";
import React from "react";

import Theme from "./theme";

const Navbar = () => {
  return (
    <nav className="gap-5 flex-between background-light900_dark200 fixed z-50 w-full p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex flex-center gap-1">
        <Image
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="Devflow logo"
        />
        <p className="font-space-grotesk h2-bold text-dark-100 dark:text-light-900 max-sm:hidden ">
          Brezhn<span className="text-primary-500">Flow</span>
        </p>
      </Link>

      <p>Gloable Search</p>

      <div className="flex-between gap-5">
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;
