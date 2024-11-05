"use client";
import { Component } from "@/components/component/component";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 bg-background p-8 text-foreground md:p-12 lg:p-16 mt-12">
      <header className="mb-8 flex flex-col items-center gap-4 md:flex-row md:items-start">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">Mouad Mennioui</h1>
          <p className="text-sm text-muted-foreground">
            Full Stack Developer Engineer
          </p>
          <div className="mt-2 flex items-center justify-center gap-4 md:justify-start">
            <Link
              href="mailto:moad.menniui@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              prefetch={false}
            >
              <MailIcon className="h-5 w-5" />
              moad.menniui@gmail.com
            </Link>
            <Link
              href="tel:+212620234060"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              prefetch={false}
            >
              <PhoneIcon className="h-5 w-5" />
              +212 620234060
            </Link>
            <Link
              href="https://www.linkedin.com/in/mouad-mennioui-040477264/"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="h-5 w-5" />
              LinkedIn
            </Link>
          </div>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Professional Summary</h2>
        <p className="text-muted-foreground max-w-[1000px]">
          Full Stack Developer with experience in modern web technologies and
          Web3. Skilled in Next.js, React, and TypeScript, with a strong
          foundation in both frontend and backend development. Passionate about
          creating efficient, scalable solutions and staying current with
          emerging technologies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Experience</h2>
        <div className="grid gap-6">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <Link
                href="https://www.fevertokens.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/Fever.png"
                  alt="FeverTokens Logo"
                  width={60}
                  height={60}
                  className="rounded-2xl hover:opacity-80 transition-opacity"
                />
              </Link>
              <div>
                <h3 className="text-xl font-bold">
                  FeverTokens, Full Stack Developer Intern
                </h3>
                <p className="text-sm text-muted-foreground">
                  July 2024 - Present
                </p>
              </div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground italic">
              A Paris-based company specializing in Web3 technologies and smart
              contracts
            </p>
            <ul className="mt-4 list-disc pl-4 text-muted-foreground">
              <li>
                Developed full-stack solutions using Next.js 14, focusing on
                optimized rendering and secure server-side handling
              </li>
              <li>
                Integrated MeiliSearch for fast search results (under 50ms),
                enhancing user experience and engagement
              </li>
              <li>
                Designed backend architecture with MongoDB, DynamoDB, and
                Prisma, ensuring efficient data management and secure access
                control
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-semibold">Technologies Used:</h4>
              <p className="text-sm text-muted-foreground">
                TypeScript, JavaScript, Next.js, React.js, Prisma, MongoDB,
                DynamoDB, Git, Node.js, TailwindCSS, AWS, Docker
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Education</h2>
        <div className="grid gap-6">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">Holberton School</h3>
                <p className="text-sm text-muted-foreground">
                  Software Engineering Bootcamp
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Remote</p>
                <p className="text-sm text-muted-foreground">2023 – 2024</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">
                  Faculté des sciences et Technique
                </h3>
                <p className="text-sm text-muted-foreground">
                  Cycle License ST MIP (Math Informatique physique)
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Fès, Morocco</p>
                <p className="text-sm text-muted-foreground">2022 – 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Skills</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-5">
          <div className="rounded-md bg-muted p-4 text-muted-foreground">
            <h3 className="mb-2 text-lg font-semibold">Programming</h3>
            <ul className="list-disc pl-4">
              <li>Javascript (ES6-7)</li>
              <li>Typescript</li>
              <li>Python</li>
              <li>C</li>
              <li>Ruby</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>

          <div className="rounded-md bg-muted p-4 text-muted-foreground">
            <h3 className="mb-2 text-lg font-semibold">Frameworks</h3>
            <ul className="list-disc pl-4">
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Next.js</li>
              <li>React Native</li>
              <li>Angular</li>
              <li>Tailwindcss</li>
              <li>Jest</li>
              <li>Android</li>
            </ul>
          </div>

          <div className="rounded-md bg-muted p-4 text-muted-foreground">
            <h3 className="mb-2 text-lg font-semibold">Databases</h3>
            <ul className="list-disc pl-4">
              <li>MongoDB</li>
              <li>Supabase</li>
              <li>Postgresql</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>MeiliSearch</li>
            </ul>
          </div>

          <div className="rounded-md bg-muted p-4 text-muted-foreground">
            <h3 className="mb-2 text-lg font-semibold">Tools</h3>
            <ul className="list-disc pl-4">
              <li>Docker</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Google Cloud</li>
              <li>Nginx</li>
              <li>Redis</li>
              <li>Prisma</li>
              <li>OAuth 2.0</li>
              <li>CI/CD</li>
              <li>AWS</li>
            </ul>
          </div>

          <div className="rounded-md bg-muted p-4 text-muted-foreground">
            <h3 className="mb-2 text-lg font-semibold">Other</h3>
            <ul className="list-disc pl-4">
              <li>Microservices</li>
              <li>Test unitaire</li>
              <li>Test intégration</li>
              <li>Linux</li>
              <li>REST APIs</li>
              <li>Agile</li>
              <li>YAML</li>
              <li>JSON</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8 max-w-[1000px]">
        <h2 className="mb-4 text-2xl font-bold">Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center justify-between md:justify-center gap-2">
            <span className="font-semibold">English:</span>
            <span className="text-muted-foreground">Advanced</span>
          </div>
          <div className="flex items-center justify-between md:justify-center gap-2">
            <span className="font-semibold">French:</span>
            <span className="text-muted-foreground">Intermediate</span>
          </div>
          <div className="flex items-center justify-between md:justify-center gap-2">
            <span className="font-semibold">Arabic:</span>
            <span className="text-muted-foreground">Native</span>
          </div>
        </div>
      </section>
    </main>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function VideoIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}
