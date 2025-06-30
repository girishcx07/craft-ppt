"use client";

import { PlusIcon } from "lucide-react";
import { AnimatedCard } from "./animated-card";

export const NewPresentationCard = () => {
  return (
    <AnimatedCard>
      <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
        <PlusIcon size={32} strokeWidth={2.5} />
      </div>
    </AnimatedCard>
  );
};
