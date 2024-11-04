import React from "react";
import Link from "next/link";
import Image from "next/image";

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
    <div className="p-8 md:p-12 lg:p-16 mt-12 max-w-[1500px]">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="flex flex-col gap-16">
        {projects.map((project) => (
          <div key={project.title} className="group">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <div className="relative">
              {project.video ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-lg object-cover h-[400px]"
                >
                  <source src={project.video} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={project.image!}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="rounded-lg object-cover w-full h-full "
                />
              )}
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center"
              >
                <span className="bg-background/80 text-foreground px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  View Project
                </span>
              </Link>
            </div>
            <div className="mt-4">
              <p className="mt-2 text-muted-foreground">
                {project.description}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-semibold">Tech:</span> {project.tech}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
