"use client";

import { useState } from "react";

import { Calendar, Inbox, LayoutDashboard, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@workspace/ui/components/sidebar";

import { Card, CardContent } from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib/utils";

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function PPTAppSidebar() {
  const { open, setOpen } = useSidebar();
  const [hoveredMenu, setHoveredMenu] = useState(false);

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroup className="h-full w-full flex-row gap-1">
          <SidebarGroupContent className="w-min">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  className="w-min"
                  key={item.title}
                  onMouseOver={() => setHoveredMenu(true)}
                >
                  <SidebarMenuButton asChild onClick={() => setOpen(true)}>
                    <a href={item.url}>
                      <item.icon />
                      {/* <span>{item.title}</span> */}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SideBarCard open={open && hoveredMenu} setOpen={(value) => setOpen(value)} />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export const SideBarCard = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: ((value: boolean) => void) | undefined;
}) => {
  return (
    <Card className={cn("h-full py-1", open ? "visible w-full" : "w-0 opacity-0")}>
      <CardContent className="p-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas exercitationem maiores
        eligendi id ipsum! Facilis voluptas velit quibusdam vitae rem. Cupiditate esse quae impedit
        nam sapiente? Repudiandae reprehenderit itaque similique.
      </CardContent>
    </Card>
  );
};
