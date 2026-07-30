

export interface IconItem {
  icon: string;
  title: string;
  desc: string;
}

export interface DentistItem {
  name: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  span: string;
}

export interface TestimonialItem {
  name: string;
  rating: number;
  text: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface EmergencyStep {
  title: string;
  desc: string;
}

export interface ThemeTokens {
  primary: string;
  primaryDark: string;
  secondary: string;
  accent: string;
  success: string;
  background: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
}

export interface TenantConfig {
  slug: string;
  clinic: {
    name: string;
    phone: string;
    phoneDisplay: string;
    email: string;
    address: string;
    hours: { weekday: string; saturday: string; sunday: string };
    googleRating: number;
    googleReviewCount: number;
    yearsExperience: number;
    patientsTreated: string;
    emergencyAvailable: boolean;
    whatsapp: string; // full number with country code, no + or spaces, e.g. "919876601854"
  };

  hero: {
    heading: string;
    highlight: string;
    subtext: string;
  };

  
  theme: ThemeTokens;
  navLinks: { label: string; href: string }[];
  whyChooseUs: IconItem[];
  trustBadges: { icon: string; label: string }[];
  services: IconItem[];
  dentists: DentistItem[];
  galleryImages: GalleryImage[];
  testimonials: TestimonialItem[];
  faqs: FAQItem[];
  values: IconItem[];
  emergencyScenarios: string[];
  emergencySteps: EmergencyStep[];
  timeSlots: string[];
}