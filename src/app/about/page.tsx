import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatCard } from "@/components/shared/StatCard";
import { Heart, ShieldCheck, Sparkles, Users } from "lucide-react";
import { clinic, values } from "@/lib/constants";

const icons = { Heart, ShieldCheck, Sparkles, Users };

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <section className="max-w-3xl mx-auto px-4 md:px-8 pt-12 pb-8 md:pt-16 text-center">
          <span className="text-sm font-medium text-primary tracking-wide uppercase">About Us</span>
          <h1 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mt-3">
            Dentistry, reimagined around you
          </h1>
          <p className="text-text-muted text-lg mt-5 leading-relaxed">
            {clinic.name} was founded on a simple idea: dental care shouldn't feel like something
            to dread. For {clinic.yearsExperience}+ years, we've combined modern technology with
            genuine, patient-first care — treating {clinic.patientsTreated} patients and counting.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 md:px-8 py-10 grid grid-cols-3 gap-6 border-y border-border">
          <StatCard value={`${clinic.yearsExperience}+`} label="Years experience" />
          <StatCard value={clinic.patientsTreated} label="Patients treated" />
          <StatCard value={`${clinic.googleRating}★`} label="Google rating" />
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <SectionHeading
            eyebrow="Our Values"
            title="What guides every visit"
            subtitle="These aren't wall plaques — they shape how we treat every single patient."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => {
              const Icon = icons[v.icon as keyof typeof icons];
              return (
                <div key={v.title} className="bg-surface border border-border rounded-card p-6">
                  <div className="size-11 rounded-input bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{v.title}</h3>
                  <p className="text-text-muted text-sm mt-2 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}