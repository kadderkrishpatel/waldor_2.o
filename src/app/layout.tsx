import "./globals.css";
import {
  Inter,
  Cormorant_Garamond,
  Hanken_Grotesk,
  Fraunces,
} from "next/font/google";
import AppProviders from "@/src/providers/AppProviders";
import { Toaster } from "sonner";

export const metadata = {
  title: "Waldor Clinic",
  description: "Luxury Skin and Hair Clinic",
};

const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${hanken.variable} ${fraunces.variable}`}
    >
      <body>
        <Toaster
          position="top-center"
          richColors
          expand={false}
          closeButton
          duration={4000}
        />

        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
