import { PropsWithChildren } from "react";

import { cn } from "@workspace/ui/lib/utils";

export const Container = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return <div className={cn("max-w-7xl mx-auto", className)}>{children}</div>;
};
