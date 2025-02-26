"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/component/Header";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio",
      image: "/portf.png",
      link: "https://github.com/mouad-suuu/Portfolio-Threejs",
      description:
        "A simple portfolio that I have developed to work as a library for me, a place to save design patterns and code I may need later along with my own documentation.\n\n\"If you can't explain it to a six-year-old, you don't understand it yourself.\" - Albert Einstein",
      tech: "Next.js 14, React.js, Node.js, TypeScript, TailwindCSS",
    },
    {
      title: "EduNexus",
      video: "/Edunexes.mp4",
      link: "https://github.com/mouad-suuu/EduNexus",
      description:
        "A professional media platform to share academic resources and documents. Features two-layer authentication and efficient large data management.",
      tech: "Next.js 14, OAuth 2.0, MongoDB (Atlas), Google Cloud, React.js, Node.js, TypeScript, TailwindCSS",
    },
    {
      title: "Bank-balance-tracker",
      image: "/Bank.png",
      link: "https://github.com/mouad-suuu/Bank-balance-tracker",
      description:
        "Bank balance tracker using Plaid API with modern frontend built using shadcn and advanced React concepts.",
      tech: "Next.js 14, React.js, Node.js, TypeScript, TailwindCSS",
    },
    {
      title: "Airbnb Clone",
      image: "/Airbnb.png",
      link: "https://github.com/mouad-suuu/AirBnB_clone_v3",
      description:
        "Full-stack Airbnb clone with Ubuntu server deployment using Nginx, Apache 2, and Load balancer.",
      tech: "Python, Flask, MySQL, Nginx, Apache 2, Redis, HTML, JavaScript, CSS",
    },
  ];

  return (
    <>
      <Header />
      <main className="p-8 md:p-12 lg:p-16 pt-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Projects
          </h1>
          <div className="grid gap-12">
            {projects.map((project) => (
              <div key={project.title} className="group">
                <div className="flex flex-col lg:flex-row gap-8 bg-card rounded-lg p-8 shadow-lg">
                  <div className="relative lg:w-2/3 h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
                    {project.video ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={project.image!}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center"
                    >
                      <span className="bg-background/80 text-foreground px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        View Project
                      </span>
                    </Link>
                  </div>
                  <div className="lg:w-1/3 space-y-4">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {project.description}
                    </p>
                    <div>
                      <h3 className="text-sm font-semibold mb-2">Technologies:</h3>
                      <p className="text-sm text-muted-foreground">{project.tech}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
