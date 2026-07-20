"use client";

import { motion } from "framer-motion";
import { motionPresets } from "@/lib/design-tokens";

export function CalmCurveDivider() {
  return (
    <div className="relative w-full overflow-hidden leading-none" aria-hidden="true">
      <motion.svg
        {...motionPresets.breathe}
        viewBox="0 0 1440 120"
        className="w-full h-[60px] md:h-[100px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 Q360,10 720,60 T1440,60 L1440,120 L0,120 Z"
          fill="var(--navy)"
          fillOpacity="0.04"
        />
        <path
          d="M0,70 Q360,25 720,70 T1440,70"
          fill="none"
          stroke="var(--color-primary)"
          strokeOpacity="0.3"
          strokeWidth="1.5"
        />
      </motion.svg>
    </div>
  );
}