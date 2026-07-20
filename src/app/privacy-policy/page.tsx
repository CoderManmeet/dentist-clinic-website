import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { clinic } from "@/lib/constants";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <section className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">Privacy Policy</h1>
          <p className="text-text-muted text-sm mt-2">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

          <div className="mt-8 space-y-8 text-foreground">
            <div>
              <h2 className="font-heading text-xl font-semibold">Information We Collect</h2>
              <p className="text-text-muted mt-2 leading-relaxed">
                When you book an appointment or contact us through this website, we collect your name,
                phone number, email address, and any details you share about your treatment needs.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold">How We Use Your Information</h2>
              <p className="text-text-muted mt-2 leading-relaxed">
                Your information is used solely to schedule appointments, communicate about your care,
                and improve our services. We do not sell or share your personal data with third parties
                for marketing purposes.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold">Data Security</h2>
              <p className="text-text-muted mt-2 leading-relaxed">
                We take reasonable technical and organizational measures to protect your personal
                information from unauthorized access, loss, or misuse.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold">Your Rights</h2>
              <p className="text-text-muted mt-2 leading-relaxed">
                You may request access to, correction of, or deletion of your personal data at any time
                by contacting us at {clinic.email}.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold">Contact Us</h2>
              <p className="text-text-muted mt-2 leading-relaxed">
                For any privacy-related questions, reach us at {clinic.email} or {clinic.phone}.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}