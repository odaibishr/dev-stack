"use client";
import Image from "next/image";

import { Input } from "../ui/input";

const LocalSearch = () => {
  return (
    <div
      className="background-light800_darkgradient rounded-[10px]
        flex min-h-[56px] gap-4 grow items-center px-4
      "
    >
      <Image
        src="/icons/search.svg"
        width={24}
        height={24}
        alt="Search"
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder="Search..."
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus border-none outline-none shadow-none text-dark400_light700"
      />
    </div>
  );
};

export default LocalSearch;
