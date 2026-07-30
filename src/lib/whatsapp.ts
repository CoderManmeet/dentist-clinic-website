import { clinic } from "@/lib/constants";

export function getWhatsAppLink(message?: string) {
  const defaultMessage = `Hi ${clinic.name}, I'd like to book an appointment.`;
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${clinic.whatsapp}?text=${text}`;
}