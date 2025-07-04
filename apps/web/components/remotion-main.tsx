import type { Track, Item } from "@/types/remotion";
import { AbsoluteFill, Sequence, OffthreadVideo } from "remotion";

const ItemComp: React.FC<{ item: Item }> = ({ item }) => {
  if (item.type === "solid") {
    return (
      <AbsoluteFill
        style={{
          backgroundColor: item.color,
        }}
      />
    );
  }

  if (item.type === "text") {
    return (
      <AbsoluteFill className="flex items-center justify-center">
        <h1 className="text-4xl font-bold text-black">{item.text}</h1>
      </AbsoluteFill>
    );
  }

  if (item.type === "video") {
    return <OffthreadVideo src={item.src} />;
  }

  throw new Error(`Unknown item type: ${JSON.stringify(item)}`);
};

const Track: React.FC<{ track: Track }> = ({ track }) => {
  return (
    <AbsoluteFill>
      {track.items.map((item) => (
        <Sequence
          key={item.id}
          from={item.from}
          durationInFrames={item.durationInFrames}
        >
          <ItemComp item={item} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export const Main: React.FC<{ tracks: Track[] }> = ({ tracks }) => {
  return (
    <AbsoluteFill className="bg-white">
      {tracks.map((track) => (
        <Track key={track.name} track={track} />
      ))}
    </AbsoluteFill>
  );
};
