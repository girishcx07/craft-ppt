"use client"

import { Track } from "@/types/remotion";
import { useRef } from "react";

export const TimelineEditor = ({
  tracks,
  fps = 30,
  durationInFrames = 600,
  currentFrame,
  onSeek,
}: {
  tracks: Track[];
  fps: number;
  durationInFrames: number;
  currentFrame: number;
  onSeek?: (frame: number) => void;
}) => {
  const rulerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-x-auto w-full border-t bg-muted">
      {/* Timeline ruler */}
      <div className="relative h-8 min-w-[2400px] bg-background text-xs text-muted-foreground flex">
        {Array.from({ length: durationInFrames / 10 }).map((_, i) => (
          <div
            key={i}
            className="border-r border-gray-300 px-2"
            style={{ width: "40px" }}
          >
            {i * 10}
          </div>
        ))}
        {/* Playhead */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-red-500"
          style={{ left: `${(currentFrame / durationInFrames) * 100}%` }}
        />
      </div>

      {/* Tracks */}
      {tracks.map((track, trackIndex) => (
        <div
          key={trackIndex}
          className="relative h-12 min-w-[2400px] border-t border-gray-200 bg-white"
        >
          {track.items.map((item) => {
            const left = (item.from / durationInFrames) * 100;
            const width = (item.durationInFrames / durationInFrames) * 100;

            return (
              <div
                key={item.id}
                className="absolute top-1 h-10 bg-blue-500 text-white text-xs px-2 py-1 rounded shadow-sm cursor-pointer"
                style={{
                  left: `${left}%`,
                  width: `${width}%`,
                }}
              >
                {item.label || item.type}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};