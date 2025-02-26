"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/component/Header";

export default function Certifications() {
  const certifications = [
    {
      title: "Google Project Management (all 6 courses)",
      image: "/Google.jpeg",
      link: "https://www.coursera.org/account/accomplishments/specialization/LE88WLKQL749",
      description:
        "A comprehensive certification program covering essential project management skills, including creating project plans, managing budgets, and effectively communicating with stakeholders, following industry-standard methodologies such as Agile and Waterfall.",
      tech: "Project Management, Agile, Waterfall, agile methodologies",
    },
    {
      title:
        "Software Development with a Specialization in Back-end (ALX 12-month program)",
      image: "/17-short-specializations-certificate-mouad-mennioui.png",
      link: "https://intranet.alxswe.com/certificates/Gp2rx8EZYB",
      description:
        "A rigorous 12-month software engineering program focused on back-end development, covering shell scripting, C programming, Python, SQL, JavaScript, and system design. The program emphasized hands-on projects like building a custom shell, AirBnB clone, and various algorithms.",
      tech: "Shell, Git, C, Python, SQL, JavaScript, REST APIs, Data Structures, System Design",
    },
    {
      title: "Learn Docker Course",
      image: "/bootdev_Docker.png",
      link: "https://www.boot.dev/certificate/mouadme/2d740eb6-3234-419e-9a23-08ec9e9889b7",
      description:
        "An introductory course on Docker, covering essential concepts of containerization, image creation, container management, and deployment strategies, providing practical knowledge on building and scaling applications with Docker.",
      tech: "Docker, Containerization, DevOps",
    },
    {
      title: "Learn HTTP Clients in JavaScript Course",
      image: "/bootdev_HTTP.png",
      link: "https://www.boot.dev/certificate/mouadme/5d804c54-887a-4c1c-b8c7-b6436f3a132e",
      description:
        "A course focused on HTTP client operations in JavaScript, covering API requests, handling responses, and managing asynchronous communication with RESTful services.",
      tech: "JavaScript, HTTP, APIs",
    },
    {
      title: "Learn JavaScript for Developers Course",
      image: "/bootdev_javascript.png",
      link: "https://www.boot.dev/certificate/mouadme/2af5c197-21eb-48b4-bd90-b0d59a",
      description:
        "A comprehensive JavaScript course designed for developers, covering advanced concepts, modern ES6+ features, and best practices in JavaScript development.",
      tech: "JavaScript, ES6+, Modern JavaScript Features",
    },
  ];

  return (
    <>
      <Header />
      <main className="p-8 md:p-12 lg:p-16 pt-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Certifications
          </h1>
          <div className="grid gap-8 md:grid-cols-2">
            {certifications.map((cert) => (
              <Link
                href={cert.link}
                key={cert.title}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-48 w-full">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h2 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h2>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {cert.description}
                    </p>
                    <div className="pt-2">
                      <p className="text-xs font-medium text-primary">
                        Skills: {cert.tech}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
