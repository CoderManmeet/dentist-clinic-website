import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0 pt-8 md:pt-12">
        <Testimonials />
        <AppointmentCTA />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}