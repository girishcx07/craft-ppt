"use client"

import { motion, easeOut } from "framer-motion";
import { ReactNode, Children, isValidElement } from "react";

type StaggeredGridProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
};

const containerVariants = (stagger = 0.1, delay = 0.1) => ({
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

export const StaggeredGrid = ({
  children,
  className,
  stagger,
  delay,
}: StaggeredGridProps) => {
  const flatChildren = Children.toArray(children).filter(isValidElement);

  return (
    <motion.div
      className={className}
      variants={containerVariants(stagger, delay)}
      initial="hidden"
      animate="show"
    >
      {flatChildren.map((child, i) => (
        <motion.div key={i} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};
