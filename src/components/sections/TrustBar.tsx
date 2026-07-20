"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Siren, BadgeCheck, Sparkles, Star } from "lucide-react";
import { motionPresets } from "@/lib/design-tokens";

const icons = { ShieldCheck, Siren, BadgeCheck, Sparkles, Star };

import { trustBadges } from "@/lib/constants";

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface">
      <motion.div
        {...motionPresets.stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-wrap justify-center md:justify-between gap-6"
      >
        {trustBadges.map((badge) => {
          const Icon = icons[badge.icon as keyof typeof icons];
          return (
            <motion.div
              key={badge.label}
              variants={{ initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } }}
              className="flex items-center gap-2 text-sm text-text-muted"
            >
              <Icon className="size-4 text-primary" />
              {badge.label}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}