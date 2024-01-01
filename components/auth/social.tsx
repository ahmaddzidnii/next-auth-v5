"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export const Social = () => {
  return (
    <div className="w-full flex items-center gap-x-2">
      <Button
        className="w-full"
        size="lg"
        variant="outline"
        onClick={() => alert("Login with Google")}
      >
        <FcGoogle />
      </Button>
      <Button
        className="w-full"
        size="lg"
        variant="outline"
        onClick={() => alert("Login with Github")}
      >
        <FaGithub />
      </Button>
    </div>
  );
};
