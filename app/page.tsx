"use client";
import { useState } from "react";
import Header from "@/components/component/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { InteractiveBackground } from "@/components/interactive-background";

export default function Home() {
  const [isRevealingImage, setIsRevealingImage] = useState(false);

  return (
    <>
      <Header />
      <InteractiveBackground isRevealing={isRevealingImage} />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <Hero />
        {/* About Section */}

        <About />
        {/* Skills Section */}
        <Skills />

        {/* Contact Section */}
        <Contact />

        {/* Reveal Button */}
        <div className="flex justify-center py-8">
          <button
            className="px-6 py-3 bg-primary/20 rounded-xs hover:bg-primary/30 border border-primary/30 text-white/80 text-sm transition-colors"
            onMouseDown={() => setIsRevealingImage(true)}
            onMouseUp={() => setIsRevealingImage(false)}
            onMouseLeave={() => setIsRevealingImage(false)}
            onTouchStart={() => setIsRevealingImage(true)}
            onTouchEnd={() => setIsRevealingImage(false)}
          >
            Reveal Moonlight
          </button>
        </div>
      </main>
    </>
  );
}
