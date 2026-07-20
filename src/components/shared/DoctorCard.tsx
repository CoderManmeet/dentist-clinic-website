"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motionPresets } from "@/lib/design-tokens";

interface DoctorCardProps {
  name: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
  delay?: number;
}

export function DoctorCard({ name, specialty, experience, bio, image, delay = 0 }: DoctorCardProps) {
  return (
    <motion.div
      {...motionPresets.fadeUp}
      transition={{ ...motionPresets.fadeUp.transition, delay }}
      className="bg-surface border border-border rounded-card overflow-hidden group"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-lg font-semibold text-foreground">{name}</h3>
        <p className="text-primary text-sm font-medium mt-1">{specialty}</p>
        <p className="text-text-muted text-xs mt-1">{experience} experience</p>
        <p className="text-text-muted text-sm mt-3 leading-relaxed">{bio}</p>
      </div>
    </motion.div>
  );
}