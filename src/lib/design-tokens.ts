export const colors = {
  primary: "#5A8FA8",
  primaryDark: "#47768C",
  secondary: "#0F2A3D",
  accent: "#1F8A70",
  success: "#4CAF7D",
  background: "#FAF8F5",
  surface: "#FFFFFF",
  text: "#14181C",
  textMuted: "#6B7280",
  border: "#E7E2DA",
} as const;

export const radius = {
  card: "22px",
  button: "14px",
  input: "16px",
  image: "24px",
} as const;



// Shared Framer Motion presets — used everywhere so motion feels consistent, not scattered
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