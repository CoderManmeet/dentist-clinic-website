"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalmCurveDivider } from "@/components/shared/CalmCurveDivider";
import { clinic } from "@/lib/constants";
import { motionPresets } from "@/lib/design-tokens";

export function AppointmentCTA() {
  return (
    <>
      <CalmCurveDivider />
      <section className="bg-navy py-16 md:py-24">
        <motion.div
          {...motionPresets.fadeUp}
          className="max-w-3xl mx-auto px-4 md:px-8 text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">
            Your calmest dental visit starts here.
          </h2>
          <p className="text-white/70 mt-4 text-base md:text-lg">
            Same-day slots available. No pressure, no judgment — just genuine care.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link href="/book-appointment">
              <Button size="lg" className="w-full sm:w-auto rounded-button bg-white text-primary hover:bg-white/90 gap-2 h-14 px-8 text-base">
                <Calendar className="size-5" /> Book Appointment
              </Button>
            </Link>
            <a href={`tel:${clinic.phone}`}>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-button gap-2 h-14 px-8 text-base border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <Phone className="size-5" /> Call Now
              </Button>
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}