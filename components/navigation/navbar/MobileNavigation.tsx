import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";

import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="icons/hamburger.svg"
          width={36}
          height={36}
          alt="Hamburger"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none p-5"
      >
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/site-logo.svg"
            width={23}
            height={23}
            alt="BrezhnFlow logo"
          />
          <p className="font-space-grotesk h2-bold text-dark-100 dark:text-light-900  ">
            Brezhn<span className="text-primary-500">Flow</span>
          </p>
        </Link>

        <div
          className="no-scrollbar flex flex-col justify-between
              h-[calc(100vh-80px)] overflow-y-auto"
        >
          <SheetClose asChild>
            <section className="flex flex-col h-full gap-6 pt-16">
              <NavLinks isMobileNav />
            </section>
          </SheetClose>

          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button
                  className="small-medium btn-secondary rounded-lg
                min-h-[41px] w-full px-4 py-3 shadow-none"
                >
                  <span className="primary-text-gradient">Log In</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_UP}>
                <Button
                  className="small-medium btn-tertiary rounded-lg
                min-h-[41px] w-full px-4 py-3 shadow-none text-dark400_light900
                light-border-2 border"
                >
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
