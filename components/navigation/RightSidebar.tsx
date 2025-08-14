import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";

const hotQuestions = [
  {
    id: "1",
    title: "What is the best way to learn React?",
  },
  {
    id: "2",
    title: "How to create a React app?",
  },
  {
    id: "3",
    title: "How to use React hooks?",
  },
  {
    id: "4",
    title: "Why is React so popular?",
  },
  {
    id: "5",
    title: "When to use React?",
  },
];

const RightSidebar = () => {
  return (
    <section
      className="pt-36 custom-scrollbar
       background-light900_dark200 light-border sticky top-0 right-0 h-screen
       flex flex-col w-[350px] overflow-auto ga-6 border-l p-6 shadow-light-300
       dark:shadow-none max-xl:hidden
      "
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex flex-col w-full gap-[30px]">
          {hotQuestions.map(({ id, title }) => (
            <Link
              href={ROUTES.PROFILE(id)}
              key={id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                width={20}
                height={20}
                alt="Chevron Right"
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
