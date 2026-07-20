"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { motionPresets } from "@/lib/design-tokens";

interface ReviewCardProps {
  name: string;
  rating: number;
  text: string;
  image: string;
  delay?: number;
}

export function ReviewCard({ name, rating, text, image, delay = 0 }: ReviewCardProps) {
  return (
    <motion.div
      {...motionPresets.fadeUp}
      transition={{ ...motionPresets.fadeUp.transition, delay }}
      className="bg-surface border border-border rounded-card p-6 flex flex-col h-full"
    >
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-foreground text-[15px] leading-relaxed flex-1">"{text}"</p>
      <div className="flex items-center gap-3 mt-6">
        <div className="relative size-10 rounded-full overflow-hidden shrink-0">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{name}</p>
          <p className="text-xs text-text-muted">Verified Google Review</p>
        </div>
      </div>
    </motion.div>
  );
}