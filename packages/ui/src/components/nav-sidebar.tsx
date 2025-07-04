"use client";

import { type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@workspace/ui/components/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
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
      <SidebarGroupContent className="flex">
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
          <SidebarMenuItem key={item.title}>
            <NavSidebarTriggerButton tooltip={item.title}>
              {item.icon && <item.icon />}
            </NavSidebarTriggerButton>
          </SidebarMenuItem>
        ) : (
          <DropdownMenu key={item.title} defaultOpen={item.isActive}>
            <SidebarMenuItem>
              <NavSidebarTriggerButton tooltip={item.title}>
                {item.icon && <item.icon />}
              </NavSidebarTriggerButton>
              <DropdownMenuContent
                className="h-full w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
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
        "h-full min-w-40 max-w-xs overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 ease-in-out",
        show
          ? "translate-x-0 scale-100 opacity-100 relative"
          : "pointer-events-none absolute left-0 min-w-0 translate-x-4 scale-95 opacity-0",
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
