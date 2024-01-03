"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";

export const Social = () => {
  return (
    <div className="w-full flex flex-col gap-y-6 relative">
      <Separator />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 border text-muted-foreground/30 font-semibold">
        Or Continue With
      </div>

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
    </div>
  );
};
