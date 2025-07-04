"use client";

import { type LucideIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@workspace/ui/components/sidebar";
import { cn } from "@workspace/ui/lib/utils";

type NavItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
};

export function NavSidebarWrapper({
  items,
  children,
}: {
  items: NavItem[];
  children: React.ReactNode;
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Edit Content</SidebarGroupLabel>
      <SidebarGroupContent className="flex gap-1">
        <NavSidebarMenu items={items}>{children}</NavSidebarMenu>
        <NavSidebarMenuContent>{children}</NavSidebarMenuContent>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

function NavSidebarMenu({ items, children }: React.PropsWithChildren & { items: NavItem[] }) {
  const { isMobile, state } = useSidebar();
  const isExpanded = state === "expanded";

  return (
    <SidebarMenu className="max-w-min">
      {items.map((item) =>
        isExpanded ? (
          <NavSidebarTriggerButton tooltip={item.title} key={item.title}>
            {item.icon && <item.icon />}
          </NavSidebarTriggerButton>
        ) : (
          <DropdownMenu key={item.title} defaultOpen={item.isActive}>
            <SidebarMenuItem>
              <NavSidebarTriggerButton tooltip={item.title}>
                {item.icon && <item.icon />}
              </NavSidebarTriggerButton>
              <DropdownMenuContent
                className="bg-accent h-[80vh] w-72 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuArrow className="fill-accent border-accent" />
                {children}
              </DropdownMenuContent>
            </SidebarMenuItem>
          </DropdownMenu>
        )
      )}
    </SidebarMenu>
  );
}

function NavSidebarMenuContent({ className, ...props }: React.ComponentProps<"div">) {
  const { state } = useSidebar();
  const show = state === "expanded";

  return (
    <div
      data-slot="nav-sidebar-menu-content"
      data-sidebar="nav-sidebar-content"
      className={cn(
        "bg-accent h-full overflow-hidden rounded-xl p-1 shadow-md transition-all duration-300 ease-in-out",
        show
          ? "relative min-w-40 max-w-xs translate-x-0 scale-100 opacity-100" // Moved width props here
          : "pointer-events-none absolute left-0 hidden w-0 translate-x-4 scale-95 opacity-0", // Changed min-w-0 to w-0
        className
      )}
      {...props}
    />
  );
}

function NavSidebarTriggerButton({
  children,
  tooltip,
}: React.PropsWithChildren<{ tooltip?: string }>) {
  const { state } = useSidebar();

  if (state === "expanded") {
    return <SidebarMenuButton tooltip={tooltip}>{children}</SidebarMenuButton>;
  }

  return (
    <DropdownMenuTrigger asChild>
      <SidebarMenuButton tooltip={tooltip}>{children}</SidebarMenuButton>
    </DropdownMenuTrigger>
  );
}
