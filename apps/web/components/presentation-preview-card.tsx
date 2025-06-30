"use client";

import { Plus } from "lucide-react";

import { AnimatedCard } from "./animated-card";

export const PresentationPreviewCard = () => {
  return (
    <AnimatedCard>
      <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
        <Plus size={32} strokeWidth={2.5} />
      </div>
    </AnimatedCard>
  );
};
