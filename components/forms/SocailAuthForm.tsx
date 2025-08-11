import Image from "next/image";
// import { signIn } from "next-auth/react";
import React from "react";

import { signIn } from "@/auth";
import ROUTES from "@/constants/routes";

import { Button } from "../ui/button";

const SocailAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5 cursor-pointer";
  return (
    <form
      className="mt-10 flex flex-wrap gap-2.5"
      action={async (formData: FormData) => {
        "use server";
        const provider = formData.get("provider") as "github" | "google";

        await signIn(provider, {
          redirectTo: ROUTES.HOME,
        });
      }}
    >
      <Button
        type="submit"
        name="provider"
        value="github"
        className={buttonClass}
      >
        <Image
          src="icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Log in with Github</span>
      </Button>
      <Button
        type="submit"
        name="provider"
        value="google"
        className={buttonClass}
      >
        <Image
          src="icons/google.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </form>
  );
};

export default SocailAuthForm;
