import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Gallery } from "@/components/sections/Gallery";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0 pt-8 md:pt-12">
        <Gallery />
        <AppointmentCTA />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}