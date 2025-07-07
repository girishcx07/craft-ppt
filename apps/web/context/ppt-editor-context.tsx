"use client";

import React, { createContext, useContext, useState } from "react";

export type TimelineItem = {
  id: string;
  name: string;
  start: number;
  duration: number;
  content: React.ReactNode;
  style?: React.CSSProperties;
};

export type Track = {
  id: string;
  name: string;
  items: TimelineItem[];
};

type EditorContextType = {
  tracks: Track[];
  currentFrame: number;
  addTrack: (track: Track) => void;
  addItem: (trackId: string, item: TimelineItem) => void;
  setCurrentFrame: (frame: number) => void;
};

const EditorContext = createContext<EditorContextType | null>(null);

export const useEditor = () => {
  const ctx = useContext(EditorContext);
  if (!ctx) throw new Error("useEditor must be used within EditorProvider");
  return ctx;
};

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentFrame, setCurrentFrame] = useState(0);

  const addTrack = (track: Track) => setTracks((t) => [...t, track]);

  const addItem = (trackId: string, item: TimelineItem) =>
    setTracks((prev) =>
      prev.map((t) =>
        t.id === trackId ? { ...t, items: [...t.items, item] } : t
      )
    );

  return (
    <EditorContext.Provider
      value={{ tracks, currentFrame, addTrack, addItem, setCurrentFrame }}
    >
      {children}
    </EditorContext.Provider>
  );
};
