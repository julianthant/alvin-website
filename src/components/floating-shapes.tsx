"use client";

import { motion } from "framer-motion";

// Sizes are scaled down on mobile via CSS
const shapes = [
  { size: 120, x: "10%", y: "15%", color: "bg-primary/8", delay: 0, duration: 20, mobileHide: false },
  { size: 80, x: "75%", y: "25%", color: "bg-accent/10", delay: 2, duration: 25, mobileHide: false },
  { size: 60, x: "85%", y: "70%", color: "bg-primary/6", delay: 4, duration: 22, mobileHide: true },
  { size: 100, x: "20%", y: "75%", color: "bg-accent/8", delay: 1, duration: 28, mobileHide: false },
  { size: 40, x: "50%", y: "10%", color: "bg-primary/10", delay: 3, duration: 18, mobileHide: true },
  { size: 70, x: "60%", y: "85%", color: "bg-primary/5", delay: 5, duration: 24, mobileHide: true },
];

export function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${shape.color} blur-2xl ${shape.mobileHide ? "hidden sm:block" : ""}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 20, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}
