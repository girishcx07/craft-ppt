"use client";

import { Player } from "@remotion/player";
import { useEditor } from "@/context/ppt-editor-context";
import { MainComposition } from "./main-composition";

export const Canvas = () => {
  const { tracks } = useEditor();

  return (
    <div className="aspect-video rounded border bg-black shadow">
      <Player
        component={MainComposition}
        durationInFrames={300}
        fps={30}
        compositionWidth={1280}
        compositionHeight={720}
        controls
        inputProps={{ tracks }}
      />
    </div>
  );
};
