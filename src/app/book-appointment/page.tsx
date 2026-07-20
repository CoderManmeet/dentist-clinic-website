import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { AppointmentForm } from "@/components/sections/AppointmentForm";
import { clinic } from "@/lib/constants";
import { Phone, Clock } from "lucide-react";

export default function BookAppointmentPage() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <section className="max-w-3xl mx-auto px-4 md:px-8 pt-12 pb-16 md:pt-16 md:pb-24">
          <div className="text-center mb-10">
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
              Book your appointment
            </h1>
            <p className="text-text-muted mt-3">
              Fill in your details and we'll confirm your slot within a few hours.
            </p>
            <p className="text-sm text-text-muted mt-4 flex items-center justify-center gap-2">
              <Clock className="size-4" /> Prefer to call?
              <a href={`tel:${clinic.phone}`} className="text-primary font-medium inline-flex items-center gap-1">
                <Phone className="size-3.5" /> {clinic.phone}
              </a>
            </p>
          </div>

          <AppointmentForm />
        </section>
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}