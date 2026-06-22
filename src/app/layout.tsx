import type { Metadata } from "next";
import { Inter, Open_Sans, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Sam Anderson Dispatch | Truck Dispatch Service | Higher Paying Loads",
  description:
    "Stop fighting with brokers. Our dispatchers negotiate the highest rates so you can focus on the road.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${openSans.variable} ${oswald.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
