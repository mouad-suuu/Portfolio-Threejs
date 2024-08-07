import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/component/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mouad Mennioui",
  description: "Mouad's portfolio",
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
          {/* Sidebar */}
          <Sidebar />
          {/* Main content */}
          <main className="flex-1 overflow-y-auto focus:outline-none">
            {/* Render children components */}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
