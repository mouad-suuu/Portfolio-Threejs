// app/components/Sidebar.js
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
  }, []);

  return (
    <div className="flex flex-col bg-muted p-6 text-muted-foreground md:w-64">
      <div className="flex flex-col items-center gap-4">
        <Link href="/">
          <Image
            src="/image1.png"
            width={80}
            height={80}
            alt="Avatar"
            className="Picture of the author"
          />
        </Link>
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            <Link href="/">Mouad Mennioui</Link>
          </h2>
          <p className="text-sm">Software Engineer</p>
          <div className="mt-2 flex items-center gap-4">
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
      </div>
      <nav className="mt-8 flex flex-col gap-2">
        <Link
          href="/projects"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
          prefetch={false}
        >
          <HomeIcon className="h-5 w-5" />
          Projects
        </Link>
        <Link
          href="/certifications"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
          prefetch={false}
        >
          <AwardIcon className="h-5 w-5" />
          Certifications
        </Link>
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
                  href="/resources/programming-languages/javascript"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <BookOpenIcon className="h-5 w-5" />
                  JavaScript
                </Link>
                <Link
                  href="/resources/programming-languages/Typescript"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <BookOpenIcon className="h-5 w-5" />
                  TypeScript
                </Link>
                <Link
                  href="/resources/programming-languages/python"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <BookOpenIcon className="h-5 w-5" />
                  Python
                </Link>
                <Link
                  href="/resources/programming-languages/java"
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
                  href="/resources/frameworks-libraries/react"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <CodeIcon className="h-5 w-5" />
                  React
                </Link>
                <Link
                  href="/resources/frameworks-libraries/NextJs"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <CodeIcon className="h-5 w-5" />
                  Next.js
                </Link>
                <Link
                  href="/resources/frameworks-libraries/nodeJs"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <CodeIcon className="h-5 w-5" />
                  Node.js
                </Link>
                <Link
                  href="/resources/frameworks-libraries/express"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <CodeIcon className="h-5 w-5" />
                  Express
                </Link>
                <Link
                  href="/resources/frameworks-libraries/django"
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
                  href="/resources/tools-technologies/git"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <PenToolIcon className="h-5 w-5" />
                  Git
                </Link>
                <Link
                  href="/resources/tools-technologies/Docker"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <PenToolIcon className="h-5 w-5" />
                  Docker
                </Link>
                <Link
                  href="/resources/tools-technologies/AWS"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <CloudIcon className="h-5 w-5" />
                  AWS
                </Link>
                <Link
                  href="/resources/tools-technologies/MongoDb"
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
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border w-8 h-8"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle dark mode</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onSelect={() => setIsDarkMode(false)}>
              Light Mode
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setIsDarkMode(true)}>
              Dark Mode
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Sidebar;

function AwardIcon(props: any) {
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
  );
}

function BookIcon(props: any) {
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
  );
}

function BookOpenIcon(props: any) {
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
  );
}

function BookmarkIcon(props: any) {
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
  );
}

function ChevronRightIcon(props: any) {
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
  );
}

function CloudIcon(props: any) {
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
  );
}

function CodeIcon(props: any) {
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
  );
}

function DatabaseIcon(props: any) {
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
  );
}

function HomeIcon(props: any) {
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

function MoonIcon(props: any) {
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
  );
}

function PenToolIcon(props: any) {
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
  );
}

function SunIcon(props: any) {
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
