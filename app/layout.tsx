import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "katex/dist/katex.min.css";
import "./globals.css";

const author = localFont({
  src: '../public/fonts/Author-Variable.ttf',
  variable: '--font-author',
  weight: "100 900",
});

const chillax = localFont({
  src: '../public/fonts/Chillax-Variable.ttf',
  variable: '--font-chillax',
  weight: "100 900",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hind = localFont({
  src: '../public/fonts/Hind-Variable.ttf',
  variable: '--font-hind',
  weight: "100 900",
});

const outfit = localFont({
  src: '../public/fonts/Outfit-Variable.ttf',
  variable: '--font-outfit',
  weight: "100 900",
});

const panchang = localFont({
  src: '../public/fonts/Panchang-Variable.ttf',
  variable: '--font-panchang',
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Algulus Line",
  description: "A personal coding exploration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${author.variable} ${chillax.variable} ${geistSans.variable} ${geistMono.variable} ${hind.variable} ${outfit.variable} ${panchang.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
