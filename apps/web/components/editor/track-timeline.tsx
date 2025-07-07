import { Track } from "@/context/ppt-editor-context";

export const TrackTimeline = ({ track }: { track: Track }) => {
  return (
    <div className="bg-muted rounded p-1">
      <div className="text-sm font-semibold text-muted-foreground">{track.name}</div>
      <div className="relative h-10 bg-background rounded overflow-hidden">
        {track.items.map((item) => (
          <div
            key={item.id}
            className="absolute bg-primary/40 text-white text-xs px-2 py-1 rounded"
            style={{
              left: `${item.start}px`,
              width: `${item.duration}px`,
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
