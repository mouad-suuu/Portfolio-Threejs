import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/component/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Mouad Mennioui - Full Stack Developer",
    template: "%s | Mouad Mennioui",
  },
  description:
    "Full Stack Developer with expertise in Next.js, React, and TypeScript. Experienced in modern web technologies and Web3 development.",
  keywords: [
    "Mouad Mennioui",
    "Moad Menniui",
    "Mouad Meniwi",

    "Full Stack Developer",
    "Web Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Web3 Developer",
    "JavaScript Developer",
    "Morocco Developer",
    "Fès Developer",
  ],
  authors: [{ name: "Mouad Mennioui" }],
  creator: "Mouad Mennioui",
  publisher: "Mouad Mennioui",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
    title: "Mouad Mennioui - Full Stack Developer",
    description:
      "Full Stack Developer with expertise in Next.js, React, and TypeScript. Experienced in modern web technologies and Web3 development.",
    siteName: "Mouad Mennioui Portfolio",
    images: [
      {
        url: "/icon.png", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Mouad Mennioui - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mouad Mennioui - Full Stack Developer",
    description:
      "Full Stack Developer with expertise in Next.js, React, and TypeScript. Experienced in modern web technologies and Web3 development.",
    images: ["/og-image.png"], // Add your Twitter card image
  },
  verification: {
    // Add your verification tokens if you have them
    google: "your-google-verification-code",
    // other verification tokens as needed
  },
  alternates: {
    canonical: "https://your-portfolio-url.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className="flex h-screen overflow-hidden bg-background">
          <main className="flex-1 overflow-y-auto focus:outline-none mt-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
