"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function MotionWrapper({
  children,
  className,
  delay = 0,
}: MotionWrapperProps) {
  return (
    <motion.div
      className={cn("h-full", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
}
