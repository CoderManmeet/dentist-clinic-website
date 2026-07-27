"use client";

import { motion } from "framer-motion";
import { Zap, Heart, ScanLine, Users, GraduationCap, CreditCard, Baby, Grid2x2, Sparkles, Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { whyChooseUs } from "@/lib/constants";
import { motionPresets } from "@/lib/design-tokens";

// const icons = { Zap, Heart, ScanLine, Users, GraduationCap, CreditCard };
const icons = { Zap, Heart, ScanLine, Users, GraduationCap, CreditCard, Baby, Grid2x2, Sparkles, Star };

export function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Care built around your comfort"
        subtitle="Every detail — from scheduling to the treatment chair — is designed to reduce anxiety, not add to it."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {whyChooseUs.map((item, i) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <motion.div
              key={item.title}
              {...motionPresets.fadeUp}
              transition={{ ...motionPresets.fadeUp.transition, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-surface border border-border rounded-card p-6 transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="size-11 rounded-input bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="size-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-text-muted text-sm mt-2 leading-relaxed">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}