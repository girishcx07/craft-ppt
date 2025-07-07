"use client"

import { useEditor } from "@/context/ppt-editor-context";
import { TrackTimeline } from "./track-timeline";

export const Timeline = () => {
  const { tracks } = useEditor();

  return (
    <div className="mt-4 space-y-2">
      {tracks.map((track) => (
        <TrackTimeline key={track.id} track={track} />
      ))}
    </div>
  );
};
