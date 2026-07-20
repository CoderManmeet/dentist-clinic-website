"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Calendar, Star, Siren, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/shared/StatCard";
import { clinic } from "@/lib/constants";
import { motionPresets } from "@/lib/design-tokens";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16 pb-16 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div {...motionPresets.fadeUp}>
          {clinic.emergencyAvailable && (
            <div className="inline-flex items-center gap-2 bg-brand-success/10 text-brand-success text-sm font-medium px-3 py-1.5 rounded-full mb-6">
              <Siren className="size-4" /> Emergency Slots Available Today
            </div>
          )}

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1]">
            Dentistry that feels
            <br />
            <span className="text-primary">calm, not clinical.</span>
          </h1>

          <p className="text-text-muted text-lg mt-6 max-w-md leading-relaxed">
            Modern, pain-free dental care in Ludhiana — from routine cleanings to complex
            implants, delivered with genuine warmth.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link href="/book-appointment">
              <Button size="lg" className="w-full sm:w-auto rounded-button bg-primary hover:bg-primary/90 gap-2 h-14 px-8 text-base">
                <Calendar className="size-5" /> Book Appointment
              </Button>
            </Link>
            <a href={`tel:${clinic.phone}`}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-button gap-2 h-14 px-8 text-base">
                <Phone className="size-5" /> Call Now
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10 flex-wrap">
            <StatCard value={`${clinic.googleRating}★`} label={`${clinic.googleReviewCount}+ Google reviews`} />
            <div className="w-px h-10 bg-border" />
            <StatCard value={`${clinic.yearsExperience}+`} label="Years experience" />
            <div className="w-px h-10 bg-border" />
            <StatCard value={clinic.patientsTreated} label="Patients treated" />
          </div>

          <div className="flex flex-wrap items-center gap-5 mt-8 text-sm text-text-muted">
            <span className="flex items-center gap-1.5"><Clock className="size-4" /> {clinic.hours.weekday}</span>
            <span className="flex items-center gap-1.5"><MapPin className="size-4" /> {clinic.address}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] md:aspect-square rounded-image overflow-hidden"
        >
          <Image
            src="/images/hero-clinic.jpg"
            alt="Friendly dentist consulting with a patient at Meridian Dental"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}