import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import local from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "HL Transporte - Hermanos Luci | Servicio de Transporte en Córdoba",
  description:
    "HL Transporte, Hermanos Luci, ofrece servicios de transporte de turismo en Córdoba. Viaja con comodidad y seguridad a los mejores destinos turísticos de la región.",
  openGraph: {
    type: "website",
    url: "https://hltransporte.com.ar",
    title: "HL Transporte - Hermanos Luci | Servicio de Transporte en Córdoba",
    description:
      "HL Transporte, Hermanos Luci, ofrece servicios de transporte de turismo en Córdoba. Viaja con comodidad y seguridad a los mejores destinos turísticos de la región.",
    images: [
      {
        url: "https://hltransporte.com.ar/og-image.png",
        width: 1200,
        height: 630,
        alt: "HL Transporte - Hermanos Luci | Servicio de Transporte en Córdoba",
      },
    ],
  },
};

const RajdhaniFont = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-rajdhani",
});

const localFont = local({
  src: "/fonts/MolikaSans.ttf",
  variable: "--font-molika",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${RajdhaniFont.variable} ${localFont.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
