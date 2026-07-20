"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  const numericPart = value.match(/[\d.]+/)?.[0];
  const suffix = value.replace(numericPart ?? "", "");

  useEffect(() => {
    if (!isInView || !numericPart) return;
    const target = parseFloat(numericPart);
    const isDecimal = numericPart.includes(".");
    let frame: number;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = target * progress;
      setDisplay(isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString());
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, numericPart]);

  return (
    <motion.div ref={ref} {...({} as any)} className="text-left">
      <p className="font-mono text-2xl md:text-3xl font-semibold text-foreground">
        {display}
        {suffix}
      </p>
      <p className="text-sm text-text-muted mt-1">{label}</p>
    </motion.div>
  );
}