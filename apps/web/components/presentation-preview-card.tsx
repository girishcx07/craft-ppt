"use client";

import Image from "next/image";
import { AnimatedCard } from "./animated-card";

export const PresentationPreviewCard = ({ data }: { data: number }) => {
  return (
    <AnimatedCard>
      <div className="relative w-full h-full">
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
