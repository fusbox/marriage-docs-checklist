import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Serif_SC, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const notoSC = Noto_Serif_SC({
  weight: ['400', '600'],
  variable: "--font-noto-sc",
  preload: false,
  display: 'swap',
});

const notoKR = Noto_Serif_KR({
  weight: ['400', '600'],
  variable: "--font-noto-kr",
  preload: false,
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Park-Meng Wedding Checklist & Guide",
  description: "Official coordination and checklist for the Park-Meng wedding single ceremony application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${notoSC.variable} ${notoKR.variable} antialiased min-h-screen text-warm-white selection:bg-rose-main/20 selection:text-rose-light`}>
        {children}
      </body>
    </html>
  );
}
