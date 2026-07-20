"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Car, Landmark } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { clinic } from "@/lib/constants";
import { motionPresets } from "@/lib/design-tokens";

export function Location() {
  return (
    <section id="location" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <SectionHeading
        eyebrow="Visit Us"
        title="Find your way here"
        subtitle="Conveniently located with easy parking — just walk in or book ahead."
      />

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <motion.div
          {...motionPresets.fadeUp}
          className="rounded-image overflow-hidden aspect-[4/3] border border-border"
        >
          <iframe
            title="Clinic location map"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(clinic.address)}&output=embed`}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <motion.div
          {...motionPresets.fadeUp}
          transition={{ ...motionPresets.fadeUp.transition, delay: 0.1 }}
          className="space-y-5"
        >
          <div className="flex gap-4 bg-surface border border-border rounded-card p-5">
            <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">Address</p>
              <p className="text-text-muted text-sm mt-1">{clinic.address}</p>
            </div>
          </div>

          <div className="flex gap-4 bg-surface border border-border rounded-card p-5">
            <Clock className="size-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">Opening Hours</p>
              <p className="text-text-muted text-sm mt-1">Mon–Fri: {clinic.hours.weekday}</p>
              <p className="text-text-muted text-sm">Sat: {clinic.hours.saturday}</p>
              <p className="text-text-muted text-sm">Sun: {clinic.hours.sunday}</p>
            </div>
          </div>

          <div className="flex gap-4 bg-surface border border-border rounded-card p-5">
            <Car className="size-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">Parking</p>
              <p className="text-text-muted text-sm mt-1">Free on-site parking available for all patients.</p>
            </div>
          </div>

          <div className="flex gap-4 bg-surface border border-border rounded-card p-5">
            <Landmark className="size-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">Nearby Landmarks</p>
              <p className="text-text-muted text-sm mt-1">2 minutes from Model Town Park, opposite City Hospital.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}