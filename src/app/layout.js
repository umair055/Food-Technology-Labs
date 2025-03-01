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
  robots: "index, follow",
  other: {
    "google-adsense-account": "ca-pub-6558128509243691",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-48x48.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon.png",
        type: "image/png",
        sizes: "500x500",
      },
      {
        rel: "icon",
        url: "/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        rel: "icon",
        url: "/favicon-144x144.png",
        type: "image/png",
        sizes: "144x144",
      },
    ],
  },
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
