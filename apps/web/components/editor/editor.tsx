"use client";

import { useRef } from "react";

import { TimelineInitialState, Track } from "@/types/remotion";

const INITIAL_TRACKS: Track[] = [
  {
    name: "first",
    items: [
      {
        durationInFrames: 60,
        from: 0,
        color: "yellow",
        type: "text",
        label: "something testnig",
        text: "Hey there",
        id: "something",
      },
    ],
  },
];

const INITIAL_STATE: TimelineInitialState = {
  tracks: INITIAL_TRACKS,
  fps: 30,
};

export const Editor = () => {
  const playerRef = useRef<PlayerRef>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const timelineContainerSize = useElementSize(timelineContainerRef);
  const timelineContainerWidth = timelineContainerSize?.width;
  return (
    <>
      <TimelineProvider
        onChange={(newState) => {
          console.log("New timeline state:", newState);
        }}
      >
        <PreviewContainer>
          <VideoPreview loop playerRef={playerRef} />
          <ActionRow playerRef={playerRef} />
        </PreviewContainer>

        <TimelineContainer timelineContainerRef={timelineContainerRef}>
          {timelineContainerWidth ? (
            <TimelineSizeProvider containerWidth={timelineContainerWidth}>
              <Timeline playerRef={playerRef} />
            </TimelineSizeProvider>
          ) : null}
        </TimelineContainer>
      </TimelineProvider>
    </>
  );
};
