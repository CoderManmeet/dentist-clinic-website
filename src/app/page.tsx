import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { MeetTheDentists } from "@/components/sections/MeetTheDentists";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Location } from "@/components/sections/Location";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Hero />
        <TrustBar />
        <WhyChooseUs />
        <ServicesGrid />
        <MeetTheDentists />
        <Gallery />
        <Testimonials />
        <AppointmentCTA />
        <FAQ />
        <Location />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}