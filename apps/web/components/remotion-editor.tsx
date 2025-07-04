"use client";

import { useState } from "react";
import { Player } from "@remotion/player";
import { Main } from "@/components/remotion-main";
import { TimelineEditor } from "./remotion-timeline";
import { Track } from "@/types/remotion";

const tracks: Track[] = [
  {
    name: "Track 1",
    items: [
      { id: "1", type: "solid", color: "red", from: 0, durationInFrames: 60, label: "Intro" },
      { id: "2", type: "text", text: "Hello", from: 70, durationInFrames: 40, label: "Title" },
    ],
  },
];

export const Editor =() => {
  const [currentFrame, setCurrentFrame] = useState(0);

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <div className="flex-1 overflow-hidden border-b">
        <Player
          component={Main}
          inputProps={{ tracks }}
          durationInFrames={600}
          fps={30}
          compositionWidth={1280}
          compositionHeight={720}
          controls
          onFrameChange={setCurrentFrame}
        />
      </div>

      <div className="h-48 overflow-auto">
        <TimelineEditor
          tracks={tracks}
          fps={30}
          durationInFrames={300}
          currentFrame={currentFrame}
        />
      </div>
    </div>
  );
}
