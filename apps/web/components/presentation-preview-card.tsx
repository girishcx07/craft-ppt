"use client";

import { Button } from "@workspace/ui/components/button";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import { AnimatedCard } from "./animated-card";

export const PresentationPreviewCard = ({ data }: { data: number }) => {
  return (
    <AnimatedCard>
      <div className="group relative h-full w-full">
        <Button
          size="icon"
          variant="outline"
          className="pointer-events-none absolute right-1 top-1 z-10 size-6 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100"
        >
          <EllipsisVertical />
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
