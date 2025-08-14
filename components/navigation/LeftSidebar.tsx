import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";

import NavLinks from "./navbar/NavLinks";
import { Button } from "../ui/button";

const LeftSidebar = () => {
  return (
    <section
      className="custom-scrollbar background-light900_dark200
    light-border sticky top-0 left-0 h-screen flex flex-col
    overflow-y-auto justify-between border-r p-6 pt-36 shadow-light300
    dark:shadow-none max-sm:hidden lg:w-[266px]"
    >
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>

      <div className="flex flex-col gap-3">
        <Button
          className="small-medium btn-secondary rounded-lg
                min-h-[41px] w-full px-4 py-3 shadow-none"
          asChild
        >
          <Link href={ROUTES.SIGN_UP}>
            <Image
              src="/icons/account.svg"
              width={20}
              height={20}
              alt="Account"
              className="invert-colors lg:hidden"
            />
            <span className="primary-text-gradient max-lg:hidden">Sign In</span>
          </Link>
        </Button>
        <Button
          className="small-medium btn-tertiary rounded-lg
            min-h-[41px] w-full px-4 py-3 shadow-none text-dark400_light900
            light-border-2 border"
          asChild
        >
          <Link href={ROUTES.SIGN_UP}>
            <Image
              src="/icons/sign-up.svg"
              width={20}
              height={20}
              alt="Account"
              className="invert-colors lg:hidden"
            />
            <span className="max-lg:hidden">Sign Up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LeftSidebar;
