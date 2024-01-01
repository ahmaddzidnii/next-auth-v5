import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Home() {
  return (
    <main className="flex h-full flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-sky-600">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", popins.className)}>🔐Auth</h1>
        <p className="text-white text-lg">A simple authentication service</p>
      </div>
      <LoginButton>
        <Button variant="secondary" size="lg">
          SignIn
        </Button>
      </LoginButton>
    </main>
  );
}
