import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Web Agency Landing Page",
  description:
    "Professional web agency specializing in custom websites, responsive design, SEO optimization, and digital solutions for businesses of all sizes.",
  openGraph: {
    title: "Web Agency Landing Page",
    description:
      "Professional web agency specializing in custom websites, responsive design, SEO optimization, and digital solutions for businesses of all sizes.",
    url: "https://webagencydemo.ashishdev.in/",
    siteName: "Web Agency Landing Page",
    images: [
      {
        url: "https://webagencydemo.ashishdev.in/og.png",
        width: 1200,
        height: 630,
        alt: "Web Agency Landing Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Agency Landing Page",
    description:
      "Professional web agency specializing in custom websites, responsive design, SEO optimization, and digital solutions for businesses of all sizes.",
    images: ["https://webagencydemo.ashishdev.in/og.png"],
  },
  icons: {
    icon: "https://webagencydemo.ashishdev.in/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} antialiased`}>{children}</body>
    </html>
  );
}
