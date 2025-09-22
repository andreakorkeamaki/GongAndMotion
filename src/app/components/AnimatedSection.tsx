"use client";

import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from "framer-motion";
import { useMemo } from "react";

type AnimationPreset = "fade" | "fade-up" | "fade-down" | "scale" | "slide-left" | "slide-right";

type AnimatedSectionProps = {
  animation?: AnimationPreset;
  delay?: number;
} & HTMLMotionProps<"section">;

const ANIMATION_VARIANTS: Record<AnimationPreset, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "fade-up": {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -32 },
    visible: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
};

export default function AnimatedSection({
  animation = "fade-up",
  delay = 0,
  children,
  ...rest
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants = useMemo<Variants>(() => {
    if (prefersReducedMotion) {
      return {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      };
    }

    return ANIMATION_VARIANTS[animation] ?? ANIMATION_VARIANTS["fade-up"];
  }, [animation, prefersReducedMotion]);

  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      {...rest}
    >
      {children}
    </motion.section>
  );
}

