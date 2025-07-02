"use client";

import Link from "next/link";

import { Presentation } from "lucide-react";

import { Button } from "@workspace/ui/components/button";
import { ThemeToggle } from "@workspace/ui/components/theme-toggle";

import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathName = usePathname();

  return (
    <nav className="flex h-[68px] items-center justify-between px-4 py-3 font-bold">
      <div className="flex items-center gap-2">
        <Presentation className="text-primary" />
        <Link href="/">
          <span>Craft</span>
          <span className="text-primary">PPT</span>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        {pathName !== "/dashboard" && (
          <Button asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        )}
        <ThemeToggle />
      </div>
    </nav>
  );
};
