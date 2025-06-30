import Link from "next/link";

import { Presentation } from "lucide-react";

import { Button } from "@workspace/ui/components/button";
import { ThemeToggle } from "@workspace/ui/components/theme-toggle";

export const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 font-bold h-[68px]">
      <div className="flex items-center gap-2">
        <Presentation className="text-primary" />
        <Link href="/">
          <span>Craft</span>
          <span className="text-primary">PPT</span>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <Button asChild>
          <Link href="/dashboard">Dashboard</Link>
        </Button>
        <ThemeToggle />
      </div>
    </nav>
  );
};
