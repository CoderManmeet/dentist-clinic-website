import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0 pt-8 md:pt-12">
        <ServicesGrid />
        <AppointmentCTA />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}