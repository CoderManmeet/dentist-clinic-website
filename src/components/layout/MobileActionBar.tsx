"use client";
import Link from "next/link";
import { Phone, Calendar, MapPin, MessageCircle } from "lucide-react";
import { clinic } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface border-t border-border grid grid-cols-4 h-16 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <a href={`tel:${clinic.phone}`} className="flex flex-col items-center justify-center gap-1 active:bg-background">
        <Phone className="size-5 text-primary" />
        <span className="text-xs text-text-muted">Call</span>
      </a>
      
       <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 active:bg-background"
      >
        <MessageCircle className="size-5 text-primary" />
        <span className="text-xs text-text-muted">WhatsApp</span>
      </a>
      <Link href="/book-appointment" className="flex flex-col items-center justify-center gap-1 bg-primary text-white">
        <Calendar className="size-5" />
        <span className="text-xs">Book</span>
      </Link>
      
      <a  href={`https://maps.google.com/?q=${encodeURIComponent(clinic.address)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 active:bg-background"
      >
        <MapPin className="size-5 text-primary" />
        <span className="text-xs text-text-muted">Directions</span>
      </a>
    </div>
  );
}