"use client";

import { PlusIcon } from "lucide-react";
import { AnimatedCard } from "./animated-card";

interface AddNewCardProps {
  onClick?: () => void;
}

export const AddNewCard = ({ onClick }: AddNewCardProps) => {
  return (
    <AnimatedCard>
      <div
        onClick={onClick}
        className="text-muted-foreground group-hover:text-primary flex h-full w-full items-center justify-center transition-colors duration-300"
      >
        <PlusIcon size={32} strokeWidth={2.5} />
      </div>
    </AnimatedCard>
  );
};
