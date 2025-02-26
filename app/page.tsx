"use client";
import Header from "@/components/component/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <Hero />
        {/* About Section */}

        <About />
        {/* Skills Section */}
        <Skills />

        {/* Contact Section */}
        <Contact />
      </main>
    </>
  );
}
