import { AppSidebar } from "@workspace/ui/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@workspace/ui/components/sidebar";
import { cookies } from "next/headers";

export default async function EditorLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  // const resolvedParams = await params;
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    // <SidebarProvider>
    //   <AppSidebar />
    //   <SidebarInset>
    //     <SidebarTrigger />
        <main>{children}</main>
    //   </SidebarInset>
    // </SidebarProvider>
  );
}
