import { EditorProvider } from "@/context/ppt-editor-context";
import { Canvas } from "./canvas";
import { Timeline } from "./timeline";
import { Toolbar } from "./toolbar";

export const EditorLayout = () => {
  return (
    <section className="grid h-screen grid-rows-[auto_1fr_auto] gap-4 p-4">
      <EditorProvider>
        <Toolbar />
        <Canvas />
        <Timeline />
      </EditorProvider>
    </section>
  );
};
