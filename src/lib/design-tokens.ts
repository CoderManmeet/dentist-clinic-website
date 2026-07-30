import { getTenantConfig } from "./tenants";

const tenant = getTenantConfig();

export const colors = tenant.theme;

export const radius = {
  card: "22px",
  button: "14px",
  input: "16px",
  image: "24px",
} as const;

export const motionPresets = {
  fadeUp: {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  stagger: {
    animate: { transition: { staggerChildren: 0.08 } },
  },
  breathe: {
    animate: { scale: [1, 1.015, 1] as number[] },
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },

  // NEW — card hover: lift + subtle tilt, used on ServicesGrid, WhyChooseUs, DoctorCard
  cardHover: {
    whileHover: { y: -6, scale: 1.02 },
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  // NEW — scroll-linked fade+scale for gallery images
  scaleIn: {
    initial: { opacity: 0, scale: 0.92 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  // NEW — CTA button press feedback
  buttonTap: {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.2, ease: "easeOut" },
  },
  
} as const;