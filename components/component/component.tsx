"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import  Sidebar  from "@/components/component/Sidebar"
export function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    setIsDarkMode(mediaQuery.matches)
  }, [])
  return (
    <div className={`flex min-h-screen w-full ${isDarkMode ? "dark" : ""}`}>
      <Sidebar />
       {/* <div className="flex flex-col bg-muted p-6 text-muted-foreground md:w-64">
        <div className="flex flex-col items-center gap-4">
          <Image src="/placeholder.svg" width={80} height={80} alt="Avatar" className="rounded-full" />
          <div className="text-center">
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-sm">Software Engineer</p>
            <div className="mt-2 flex items-center gap-4">
              <Link
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                prefetch={false}
              >
                <LinkedinIcon className="h-5 w-5" />
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
        <nav className="mt-8 flex flex-col gap-2">
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
            prefetch={false}
          >
            <HomeIcon className="h-5 w-5" />
            Products
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
            prefetch={false}
          >
            <AwardIcon className="h-5 w-5" />
            Certifications
          </Link>
          <Collapsible className="grid gap-2">
            <CollapsibleTrigger className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground">
              <BookIcon className="h-5 w-5" />
              My Library{" "}
              <ChevronRightIcon className="ml-auto h-5 w-5 transition-transform group-[data-state=open]:rotate-90" />
            </CollapsibleTrigger>
            <CollapsibleContent className="grid gap-2 pl-6">
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                prefetch={false}
              >
                <BookOpenIcon className="h-5 w-5" />
                Books
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                prefetch={false}
              >
                <VideoIcon className="h-5 w-5" />
                Videos
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                prefetch={false}
              >
                <BookmarkIcon className="h-5 w-5" />
                Articles
              </Link>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="grid gap-2">
            <CollapsibleTrigger className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground">
              <BookOpenIcon className="h-5 w-5" />
              Resources{" "}
              <ChevronRightIcon className="ml-auto h-5 w-5 transition-transform group-[data-state=open]:rotate-90" />
            </CollapsibleTrigger>
            <CollapsibleContent className="grid gap-2 pl-6">
              <Collapsible className="grid gap-2">
                <CollapsibleTrigger className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground">
                  <BookOpenIcon className="h-5 w-5" />
                  Programming Languages{" "}
                  <ChevronRightIcon className="ml-auto h-5 w-5 transition-transform group-[data-state=open]:rotate-90" />
                </CollapsibleTrigger>
                <CollapsibleContent className="grid gap-2 pl-6">
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                    prefetch={false}
                  >
                    <BookOpenIcon className="h-5 w-5" />
                    JavaScript
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                    prefetch={false}
                  >
                    <BookOpenIcon className="h-5 w-5" />
                    TypeScript
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                    prefetch={false}
                  >
                    <BookOpenIcon className="h-5 w-5" />
                    Python
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                    prefetch={false}
                  >
                    <BookOpenIcon className="h-5 w-5" />
                    Java
                  </Link>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="grid gap-2">
                <CollapsibleTrigger className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground">
                  <CodeIcon className="h-5 w-5" />
                  Frameworks and Libraries{" "}
                  <ChevronRightIcon className="ml-auto h-5 w-5 transition-transform group-[data-state=open]:rotate-90" />
                </CollapsibleTrigger>
                <CollapsibleContent className="grid gap-2 pl-6">
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                    prefetch={false}
                  >
                    <CodeIcon className="h-5 w-5" />
                    React
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                    prefetch={false}
                  >
                    <CodeIcon className="h-5 w-5" />
                    Node.js
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                    prefetch={false}
                  >
                    <CodeIcon className="h-5 w-5" />
                    Express
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                    prefetch={false}
                  >
                    <CodeIcon className="h-5 w-5" />
                    Django
                  </Link>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="grid gap-2">
                <CollapsibleTrigger className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground">
                  <PenToolIcon className="h-5 w-5" />
                  Tools and Technologies{" "}
                  <ChevronRightIcon className="ml-auto h-5 w-5 transition-transform group-[data-state=open]:rotate-90" />
                </CollapsibleTrigger>
                <CollapsibleContent className="grid gap-2 pl-6">
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                    prefetch={false}
                  >
                    <PenToolIcon className="h-5 w-5" />
                    Git
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                    prefetch={false}
                  >
                    <PenToolIcon className="h-5 w-5" />
                    Docker
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                    prefetch={false}
                  >
                    <CloudIcon className="h-5 w-5" />
                    AWS
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                    prefetch={false}
                  >
                    <DatabaseIcon className="h-5 w-5" />
                    MongoDB
                  </Link>
                </CollapsibleContent>
              </Collapsible>
            </CollapsibleContent>
          </Collapsible>
        </nav>
        <div className="mt-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full border w-8 h-8">
                {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                <span className="sr-only">Toggle dark mode</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={() => setIsDarkMode(false)}>Light Mode</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setIsDarkMode(true)}>Dark Mode</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div> */}
      <main className="flex-1 bg-background p-8 text-foreground md:p-12 lg:p-16">
        <header className="mb-8 flex flex-col items-center gap-4 md:flex-row md:items-start">
          <Image src="/placeholder.svg" width={80} height={80} alt="Avatar" className="rounded-full" />
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold">John Doe</h1>
            <p className="text-sm text-muted-foreground">Software Engineer</p>
            <div className="mt-2 flex items-center justify-center gap-4 md:justify-start">
              <Link
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                prefetch={false}
              >
                <MailIcon className="h-5 w-5" />
                john@example.com
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                prefetch={false}
              >
                <PhoneIcon className="h-5 w-5" />
                +1 (234) 567-890
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                prefetch={false}
              >
                <LinkedinIcon className="h-5 w-5" />
                LinkedIn
              </Link>
            </div>
          </div>
        </header>
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Professional Summary</h2>
          <p className="text-muted-foreground">
            Experienced software engineer with a strong background in full-stack web development. Proficient in
            JavaScript, React, Node.js, and various web technologies. Passionate about building scalable and
            user-friendly applications. Committed to staying up-to-date with the latest industry trends and best
            practices.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Experience</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold">Software Engineer</h3>
              <p className="text-sm text-muted-foreground">Acme Inc. | Jan 2020 - Present</p>
              <ul className="mt-2 list-disc pl-4 text-muted-foreground">
                <li>
                  Developed and maintained complex web applications using React, Node.js, and various supporting
                  technologies.
                </li>
                <li>Collaborated with cross-functional teams to design and implement new features and improvements.</li>
                <li>
                  Participated in code reviews, testing, and deployment processes to ensure high-quality and reliable
                  software.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Web Developer Intern</h3>
              <p className="text-sm text-muted-foreground">XYZ Corp. | Jun 2019 - Dec 2019</p>
              <ul className="mt-2 list-disc pl-4 text-muted-foreground">
                <li>
                  Contributed to the development of a responsive e-commerce website using HTML, CSS, and JavaScript.
                </li>
                <li>Assisted in implementing new features and fixing bugs in the existing codebase.</li>
                <li>Gained experience in working with version control systems and project management tools.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Education</h2>
          <div>
            <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
            <p className="text-sm text-muted-foreground">University of Example | 2015 - 2019</p>
            <p className="mt-2 text-muted-foreground">
              Graduated with a GPA of 3.8 and received the Deans List recognition for academic excellence.
            </p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Skills</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-md bg-muted p-4 text-muted-foreground">
              <h3 className="mb-2 text-lg font-bold">Programming Languages</h3>
              <ul className="list-disc pl-4">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>Java</li>
              </ul>
            </div>
            <div className="rounded-md bg-muted p-4 text-muted-foreground">
              <h3 className="mb-2 text-lg font-bold">Frameworks and Libraries</h3>
              <ul className="list-disc pl-4">
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Django</li>
              </ul>
            </div>
            <div className="rounded-md bg-muted p-4 text-muted-foreground">
              <h3 className="mb-2 text-lg font-bold">Tools and Technologies</h3>
              <ul className="list-disc pl-4">
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="rounded-md bg-muted p-4 text-muted-foreground">
              <h3 className="mb-2 text-lg font-bold">Other Skills</h3>
              <ul className="list-disc pl-4">
                <li>Agile Methodologies</li>
                <li>Technical Writing</li>
                <li>Problem-Solving</li>
                <li>Teamwork</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Certifications</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <div className="rounded-md bg-muted p-4 text-muted-foreground">
              <h3 className="mb-2 text-lg font-bold">AWS Certified Solutions Architect - Associate</h3>
              <p className="text-sm">Issued by Amazon Web Services | 2021</p>
            </div>
            <div className="rounded-md bg-muted p-4 text-muted-foreground">
              <h3 className="mb-2 text-lg font-bold">Certified Scrum Master</h3>
              <p className="text-sm">Issued by Scrum Alliance | 2020</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function AwardIcon(props:any) {
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
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  )
}


function BookIcon(props:any) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function BookOpenIcon(props:any) {
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function BookmarkIcon(props:any) {
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
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}


function ChevronRightIcon(props:any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function CloudIcon(props:any) {
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
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}


function CodeIcon(props:any) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function DatabaseIcon(props:any) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function HomeIcon(props:any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LinkedinIcon(props:any) {
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
  )
}


function MailIcon(props:any) {
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
  )
}


function MoonIcon(props:any) {
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}


function PenToolIcon(props:any) {
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
      <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
      <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
      <path d="m2.3 2.3 7.286 7.286" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  )
}


function PhoneIcon(props:any) {
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
  )
}


function SunIcon(props:any) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}


function VideoIcon(props:any) {
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
  )
}