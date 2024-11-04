import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = [
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
      tech: "Shell, Git, C, Python, SQL, JavaScript, REST APIs, Data Structures, System Design ...",
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
      link: "https://www.boot.dev/certificate/mouadme/2af5c197-21eb-48b4-bd90-b0d59adb311e",
      description:
        "An in-depth JavaScript course for developers, covering core concepts, ES6 features, and practical applications in back-end and front-end projects.",
      tech: "JavaScript, ES6, Front-end Development, data structures, algorithms",
    },
  ];

  return (
    <div className="p-8 md:p-12 lg:p-16 mt-12 max-w-[1500px]">
      <h1 className="text-3xl font-bold mb-8">Certifications</h1>
      <div className="flex flex-col gap-16">
        {projects.map((project) => (
          <div key={project.title} className="group">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <div className="relative">
              <Image
                src={project.image!}
                alt={project.title}
                width={800}
                height={400}
                className="rounded-lg object-cover w-full h-full "
              />
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
                <span className="font-semibold">Tech Studied:</span>{" "}
                {project.tech}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
