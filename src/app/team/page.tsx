import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { MeetTheDentists } from "@/components/sections/MeetTheDentists";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0 pt-8 md:pt-12">
        <MeetTheDentists />
        <AppointmentCTA />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}