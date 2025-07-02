"use client";

import { useState } from "react";

import { Calendar, Inbox, LayoutDashboard, Search, Settings } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@workspace/ui/components/tooltip";

const items = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Inbox",
    icon: Inbox,
  },
  {
    title: "Calendar",
    icon: Calendar,
  },
  {
    title: "Search",
    icon: Search,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

export const PPTSidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-sidebar h-full p-2 space-y-1 ">
        {items.map(({ icon: Icon, ...item }, i) => (
          <div className="hover:bg-sidebar-accent rounded" key={i}>
            <Tooltip delayDuration={1000}>
              <TooltipTrigger>
                <div className="flex items-center gap-2 p-2">
                  <span>
                    <Icon className="size-4" />
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.title}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        ))}
      </div>
    </>
  );
};
