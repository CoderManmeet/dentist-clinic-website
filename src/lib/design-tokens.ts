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
    animate: { scale: [1, 1.015, 1] },
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
} as const;