import { getTenantConfig } from "./tenants";

const tenant = getTenantConfig();

export const clinic = tenant.clinic;
export const navLinks = tenant.navLinks;
export const whyChooseUs = tenant.whyChooseUs;
export const trustBadges = tenant.trustBadges;
export const services = tenant.services;
export const dentists = tenant.dentists;
export const galleryImages = tenant.galleryImages;
export const testimonials = tenant.testimonials;
export const faqs = tenant.faqs;
export const values = tenant.values;
export const emergencyScenarios = tenant.emergencyScenarios;
export const emergencySteps = tenant.emergencySteps;
export const timeSlots = tenant.timeSlots;
export const hero = tenant.hero;

export const footerLinks = {
  services: services.map((s) => ({ label: s.title, href: "/services" })),
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Meet the Team", href: "/team" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "FAQ", href: "/#faq" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

export const treatmentOptions = services.map((s) => s.title);