"use client";

import { Button } from "@workspace/ui/components/button";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { AnimatedCard } from "./animated-card";

export const PresentationPreviewCard = ({ data }: { data: number }) => {
  return (
    <AnimatedCard>
      <div className="relative h-full w-full">
        <Button size="icon" variant="outline" className="absolute right-1 top-1 z-10">
          <TrashIcon />
        </Button>

        <Image
          src={`https://picsum.photos/200/300?random=${data}`}
          alt={`preview-url-${data}`}
          fill
          className="object-cover"
        />
      </div>
    </AnimatedCard>
  );
};
