import { motion } from "framer-motion";

import { Card, CardContent } from "@workspace/ui/components/card";
import { PropsWithChildren } from "react";

export const AnimatedCard = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      className="group"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="border-muted group-hover:border-primary rounded border-2 border-dashed bg-white transition-colors duration-300">
        <CardContent className="flex min-h-44 flex-col items-center justify-center gap-3">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
};
