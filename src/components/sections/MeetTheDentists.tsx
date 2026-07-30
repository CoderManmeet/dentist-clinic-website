"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DoctorCard } from "@/components/shared/DoctorCard";
import { dentists } from "@/lib/constants";
import { motionPresets } from "@/lib/design-tokens";

export function MeetTheDentists() {
  return (
    <section id="team" className="bg-navy/[0.03] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Meet the Team"
          title="The specialists behind your smile"
          subtitle="Experienced, approachable, and genuinely invested in putting you at ease."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dentists.map((doc, i) => (
            <motion.div
              key={doc.name}
              {...motionPresets.fadeUp}
              transition={{ ...motionPresets.fadeUp.transition, delay: i * 0.1 }}
              whileHover={motionPresets.cardHover.whileHover}
              className="rounded-card"
            >
              <DoctorCard {...doc} delay={i * 0.1} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}