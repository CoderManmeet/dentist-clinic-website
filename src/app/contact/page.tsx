import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { ContactForm } from "@/components/sections/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { clinic } from "@/lib/constants";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary tracking-wide uppercase">Contact</span>
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mt-3">
              We'd love to hear from you
            </h1>
            <p className="text-text-muted mt-4">Questions about treatment, insurance, or booking? Reach out any time.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <ContactForm />
            <div className="space-y-4">
              <div className="flex gap-4 bg-surface border border-border rounded-card p-5">
                <Phone className="size-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a href={`tel:${clinic.phone}`} className="text-text-muted text-sm mt-1 hover:text-primary">{clinic.phone}</a>
                </div>
              </div>
              <div className="flex gap-4 bg-surface border border-border rounded-card p-5">
                <Mail className="size-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href={`mailto:${clinic.email}`} className="text-text-muted text-sm mt-1 hover:text-primary">{clinic.email}</a>
                </div>
              </div>
              <div className="flex gap-4 bg-surface border border-border rounded-card p-5">
                <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Address</p>
                  <p className="text-text-muted text-sm mt-1">{clinic.address}</p>
                </div>
              </div>
              <div className="flex gap-4 bg-surface border border-border rounded-card p-5">
                <Clock className="size-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Hours</p>
                  <p className="text-text-muted text-sm mt-1">Mon–Fri: {clinic.hours.weekday}</p>
                  <p className="text-text-muted text-sm">Sat: {clinic.hours.saturday} · Sun: {clinic.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}