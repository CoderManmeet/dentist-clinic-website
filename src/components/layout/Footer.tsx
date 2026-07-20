import Link from "next/link";
import { Phone, Mail, MapPin, Siren } from "lucide-react";
import { clinic, footerLinks } from "@/lib/constants";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="font-heading text-lg font-semibold">{clinic.name}</p>
          <p className="text-white/60 text-sm mt-3 leading-relaxed">
            Calm, modern dental care in Ludhiana — built around your comfort, not just your teeth.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Instagram" className="size-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="Facebook" className="size-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div>
          <p className="font-medium text-sm uppercase tracking-wide text-white/50">Quick Links</p>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-medium text-sm uppercase tracking-wide text-white/50">Services</p>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.services.slice(0, 6).map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-medium text-sm uppercase tracking-wide text-white/50">Contact</p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2.5 text-sm text-white/70">
              <Phone className="size-4 shrink-0" /> {clinic.phone}
            </li>
            <li className="flex items-center gap-2.5 text-sm text-white/70">
              <Mail className="size-4 shrink-0" /> {clinic.email}
            </li>
            <li className="flex items-start gap-2.5 text-sm text-white/70">
              <MapPin className="size-4 shrink-0 mt-0.5" /> {clinic.address}
            </li>
          </ul>
          
           < a href={`tel:${clinic.phone}`}
            className="inline-flex items-center gap-2 mt-5 text-sm font-medium bg-brand-emerald/20 text-brand-emerald px-4 py-2 rounded-button"
          >
            <Siren className="size-4" /> Emergency Line
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="text-center text-white/40 text-xs">
          © {new Date().getFullYear()} {clinic.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}