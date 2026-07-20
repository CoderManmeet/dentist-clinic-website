import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-display",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});