import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import GetYourInvite from "@/components/GetYourInvite";
import Header from "@/components/Header";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Photosnap",
  description: "Photosnap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${dmSans.variable} antialiased`}
      >
        <Header />
        <div className="mx-auto mt-26 max-w-360">{children}</div>
        <GetYourInvite />
        <Footer />
      </body>
    </html>
  );
}
