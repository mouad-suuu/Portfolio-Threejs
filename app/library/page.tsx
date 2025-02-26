"use client";
import React from "react";
import Header from "@/components/component/Header";

export default function Library() {
  return (
    <>
      <Header />
      <main className="p-8 md:p-12 lg:p-16 pt-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Code Library
          </h1>
          <div className="text-muted-foreground mb-12 max-w-3xl space-y-4">
            <p>
              This is my personal collection of:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cool code snippets and elegant design patterns</li>
              <li>Reusable components and utility functions</li>
              <li>Interesting tricks and techniques for various software tools</li>
              <li>Solutions to common development challenges</li>
            </ul>
            <p>
              This library grows organically over time as I discover new approaches worth preserving. 
              Each entry has been tested in real-world projects and proven valuable in my development work.
            </p>
            <p className="italic">
              Feel free to explore and use anything you find helpful in your own projects!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
