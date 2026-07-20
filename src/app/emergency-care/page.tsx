import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Phone, Siren, CheckCircle2 } from "lucide-react";
import { clinic, emergencyScenarios, emergencySteps } from "@/lib/constants";

export default function EmergencyCarePage() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <section className="bg-navy text-white py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-brand-emerald/20 text-brand-emerald text-sm font-medium px-3 py-1.5 rounded-full mb-6">
              <Siren className="size-4" /> Same-Day Emergency Slots Available
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-semibold">
              In dental pain? We'll see you today.
            </h1>
            <p className="text-white/70 mt-4 text-lg">
              Don't wait it out — call now and we'll get you in as soon as possible.
            </p>
            <a href={`tel:${clinic.phone}`}>
              <button className="mt-8 inline-flex items-center gap-2 bg-white text-secondary font-medium rounded-button h-14 px-8 text-base hover:bg-white/90 transition-colors">
                <Phone className="size-5" /> Call {clinic.phone}
              </button>
            </a>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
            When to treat it as an emergency
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {emergencyScenarios.map((s) => (
              <div key={s} className="flex items-center gap-3 bg-surface border border-border rounded-card p-4">
                <Siren className="size-4 text-brand-emerald shrink-0" />
                <span className="text-foreground text-sm">{s}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
            What to do right now
          </h2>
          <div className="space-y-5">
            {emergencySteps.map((step, i) => (
              <div key={step.title} className="flex gap-4">
                <div className="size-9 rounded-full bg-primary/10 text-primary font-heading font-semibold flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                <div>
                  <p className="font-medium text-foreground">{step.title}</p>
                  <p className="text-text-muted text-sm mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}