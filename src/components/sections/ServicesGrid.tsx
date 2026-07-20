"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Stethoscope, Sparkles, Sun, Anchor, Grid2x2,
  Syringe, Smile, Baby, Siren, ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/lib/constants";
import { motionPresets } from "@/lib/design-tokens";

const icons = {
  Stethoscope, Sparkles, Sun, Anchor, Grid2x2,
  Syringe, Smile, Baby, Siren,
};

export function ServicesGrid() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <SectionHeading
        eyebrow="Services"
        title="Complete care, under one roof"
        subtitle="From routine checkups to complex procedures — every service designed around comfort."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => {
          const Icon = icons[service.icon as keyof typeof icons];
          return (
            <motion.div
              key={service.title}
              {...motionPresets.fadeUp}
              transition={{ ...motionPresets.fadeUp.transition, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="group bg-surface border border-border rounded-card p-6 flex flex-col transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="size-11 rounded-input bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="size-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="text-text-muted text-sm mt-2 leading-relaxed flex-1">{service.desc}</p>
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary mt-4 group-hover:gap-2.5 transition-all"
              >
                Book this treatment <ArrowRight className="size-4" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}