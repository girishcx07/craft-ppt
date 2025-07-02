import { PPTAppSidebar } from "@/components/ppt-app-sidebar";
import { PPTSidebar } from "@/components/ppt-sidebar";
import { PPTEditorProvider } from "@/context/ppt-editor-context";
import { SidebarProvider, SidebarTrigger } from "@workspace/ui/components/sidebar";
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
    <PPTEditorProvider>
      <SidebarProvider defaultOpen={defaultOpen}>
        <PPTAppSidebar />
        <SidebarTrigger />
        <main>
          <PPTSidebar />
          {children}
        </main>
      </SidebarProvider>
    </PPTEditorProvider>
  );
}
