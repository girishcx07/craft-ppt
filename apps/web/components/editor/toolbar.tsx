"use client"

import { useEditor } from "@/context/ppt-editor-context";
import { nanoid } from "nanoid";

export const Toolbar = () => {
  const { addTrack, addItem, tracks } = useEditor();

  const handleAddTrack = () => {
    addTrack({ id: nanoid(), name: "New Track", items: [] });
  };

  const handleAddItem = () => {
    debugger
    if (!tracks.length) return;
    addItem(tracks[0]!.id, {
      id: nanoid(),
      name: "Text Box",
      start: 30,
      duration: 60,
      content: <div className="text-white text-3xl">Hello</div>,
      style: { top: "100px", left: "100px" },
    });
  };

  return (
    <div className="flex items-center gap-2">
      <button onClick={handleAddTrack} className="btn btn-outline">+ Track</button>
      <button onClick={handleAddItem} className="btn btn-primary">+ Item</button>
    </div>
  );
};
