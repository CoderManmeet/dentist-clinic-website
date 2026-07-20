"use client";

import { motion } from "framer-motion";
import { motionPresets } from "@/lib/design-tokens";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      {...motionPresets.fadeUp}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"} mb-12`}
    >
      {eyebrow && (
        <span className="text-sm font-medium text-primary tracking-wide uppercase">{eyebrow}</span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mt-2">{title}</h2>
      {subtitle && <p className="text-text-muted mt-4 text-base md:text-lg leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}