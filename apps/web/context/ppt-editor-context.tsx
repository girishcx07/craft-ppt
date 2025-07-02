
"use client";

import React, { createContext, useContext, useState } from "react";

type Slide = {
  id: string;
  content: string;
};

type PPTEditorContextType = {
  slides: Slide[];
  currentSlideId: string | null;
  addSlide: () => void;
  selectSlide: (id: string) => void;
};

const PPTEditorContext = createContext<PPTEditorContextType | null>(null);

export const PPTEditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [currentSlideId, setCurrentSlideId] = useState<string | null>(null);

  const addSlide = () => {
    const newSlide: Slide = {
      id: crypto.randomUUID(),
      content: "",
    };
    setSlides((prev) => [...prev, newSlide]);
    setCurrentSlideId(newSlide.id);
  };

  const selectSlide = (id: string) => {
    setCurrentSlideId(id);
  };

  return (
    <PPTEditorContext.Provider value={{ slides, currentSlideId, addSlide, selectSlide }}>
      {children}
    </PPTEditorContext.Provider>
  )
};

export const usePPTEditor = () => {
  const context = useContext(PPTEditorContext);
  if (!context) throw new Error("usePPTEditor must be used within PPTEditorProvider");
  return context;
};
