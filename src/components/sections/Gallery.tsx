"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { galleryImages } from "@/lib/constants";
import { motionPresets } from "@/lib/design-tokens";

export function Gallery() {
  return (
    <section id="gallery" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <SectionHeading
        eyebrow="Gallery"
        title="Step inside the clinic"
        subtitle="A calm, modern space — designed to feel nothing like a typical dental office."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-4">
        {galleryImages.map((img, i) => (
          <motion.div
            key={img.src}
            {...motionPresets.fadeUp}
            transition={{ ...motionPresets.fadeUp.transition, delay: i * 0.06 }}
            className={`relative rounded-image overflow-hidden group ${img.span}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}