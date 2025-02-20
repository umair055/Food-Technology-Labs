import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveAppBar from "./components/Navbar/navbar";

import { FooterBar } from "./components/Footer/footerBar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Food Technology Labs",
  description:
    "Explore the latest in food science and technology with Food Technology Labs. Discover innovative solutions, tools, and resources for the food industry.",
  alternates: { canonical: "https://www.foodtechnologylabs.com" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ResponsiveAppBar />
        {children}
        <FooterBar />
      </body>
    </html>
  );
}
