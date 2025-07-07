import { Sequence } from "remotion";
import { Track } from "@/context/ppt-editor-context";

export const MainComposition = ({ tracks }: { tracks: Track[] }) => {
  return (
    <>
      {tracks.flatMap((track) =>
        track.items.map((item) => (
          <Sequence
            key={item.id}
            from={item.start}
            durationInFrames={item.duration}
          >
            <div style={{ ...item.style, position: "absolute" }}>
              {item.content}
            </div>
          </Sequence>
        ))
      )}
    </>
  );
};
