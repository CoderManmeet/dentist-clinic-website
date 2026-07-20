"use client";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { ReviewCard } from "@/components/shared/ReviewCard";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <SectionHeading
        eyebrow="Patient Stories"
        title="Real patients, real relief"
        subtitle="We measure success in how our patients feel walking out — not just walking in."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <ReviewCard key={t.name} {...t} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}