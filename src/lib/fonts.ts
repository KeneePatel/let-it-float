import { Space_Grotesk } from "next/font/google";
import { Playwrite_FR_Moderne } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const playwriteFRModerne = Playwrite_FR_Moderne({
  variable: "--font-playwrite-fr-moderne",
});
