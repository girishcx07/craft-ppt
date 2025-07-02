import { PPTEditorProvider } from "@/context/ppt-editor-context";
import {
  HoverableSidebar,
  HoverableSidebarProvider,
  HoverableSidebarTrigger,
} from "@workspace/ui/components/hoverable-sidebar";
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
  const defaultOpen = cookieStore.get("hoverable_sidebar_state")?.value === "true";
  return (
    <PPTEditorProvider>
      <HoverableSidebarProvider defaultOpen={false}>
          <HoverableSidebar variant="floating" collapsible="icon">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti minus natus
            temporibus illo explicabo rerum ratione ex! Ex eos ullam velit ipsum, libero fuga iure,
            perferendis voluptatibus, nesciunt molestias voluptatum.
          </HoverableSidebar>
        <HoverableSidebarTrigger />
        <main>
          {children}
        </main>
      </HoverableSidebarProvider>
    </PPTEditorProvider>
  );
}
