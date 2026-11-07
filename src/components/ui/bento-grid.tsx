"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Layout from the 21st.dev bento-grid-01: a 6-column grid of tall (2x2), standard (2x1) and wide (3x1) tiles.
const spans = {
  tall: "min-h-[380px] md:col-span-2 md:row-span-2 md:min-h-0",
  std: "min-h-[280px] md:col-span-2 md:min-h-0",
  wide: "min-h-[280px] md:col-span-3 md:min-h-0",
} as const;

export function BentoGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("grid grid-cols-1 gap-4 md:auto-rows-[290px] md:grid-cols-6", className)}>{children}</div>;
}

export function BentoCard({ size, index = 0, className, children }: { size: keyof typeof spans; index?: number; className?: string; children: React.ReactNode }) {
  return (
    <motion.div
      className={cn("relative overflow-hidden rounded-card", spans[size], className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
