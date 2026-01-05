// src/lib/animations.ts
import type { Variants } from "framer-motion";

export const animations = {
  // For the entire page container to stagger its children (cards)
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each card appearing
      },
    },
  } as Variants,

  // For individual cards
  card: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  } as Variants,

  // For the Sidebar slide effect
  sidebar: {
    open: { width: 256, opacity: 1 },
    closed: { width: 0, opacity: 0 },
  } as Variants,

  // For the Status Bar sliding down
  header: {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "backOut" },
    },
  } as Variants,
};
