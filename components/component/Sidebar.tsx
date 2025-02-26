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
  FaLinkedin,
  FaHome,
  FaAward,
  FaBookOpen,
  FaChevronRight,
  FaCode,
  FaPen,
  FaCloud,
  FaDatabase,
} from "react-icons/fa";

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
  }, []);

  return (
    <div
      className={`flex mt-8 flex-col bg-muted p-2 text-muted-foreground md:w-64 transition-all duration-300 ${
        !isHovered ? "w-16" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center gap-4">
        <Link href="/">
          <div
            style={{
              borderRadius: "50%",
              overflow: "hidden",
              width: "80px",
              height: "80px",
            }}
          >
            {" "}
            <Image
              src="/image.png"
              width={80}
              height={80}
              alt="Avatar"
              className="rounded-full"
              objectFit="avatar"
            />
          </div>
        </Link>
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            <Link href="/">Mouad Mennioui</Link>
          </h2>
          <p className="text-sm">Software Engineer</p>
          <div className="mt-2 flex ml-12 items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/mouad-mennioui-040477264/"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-5 w-5" />
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
          <FaHome className="h-5 w-5" />
          Projects
        </Link>
        <Link
          href="/certifications"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
          prefetch={false}
        >
          <FaAward className="h-5 w-5" />
          Certifications
        </Link>
        <Collapsible className="grid gap-2">
          <CollapsibleTrigger className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground">
            <FaBookOpen className="h-5 w-5" />
            My Dev Library{" "}
            <FaChevronRight className="ml-auto h-5 w-5 transition-transform group-[data-state=open]:rotate-90" />
          </CollapsibleTrigger>
          <CollapsibleContent className="grid gap-2 pl-4">
            <Collapsible className="grid gap-2">
              <CollapsibleTrigger className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground">
                <FaBookOpen className="h-5 w-5" />
                Programming Languages{" "}
                <FaChevronRight className="ml-auto h-5 w-5 transition-transform group-[data-state=open]:rotate-90" />
              </CollapsibleTrigger>
              <CollapsibleContent className="grid gap-2 pl-4">
                <Link
                  href="/library/javascript"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <FaBookOpen className="h-5 w-5" />
                  JavaScript
                </Link>
                <Link
                  href="/library/Typescript"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <FaBookOpen className="h-5 w-5" />
                  TypeScript
                </Link>
                <Link
                  href="/library/python"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <FaBookOpen className="h-5 w-5" />
                  Python
                </Link>
                <Link
                  href="/library/java"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <FaBookOpen className="h-5 w-5" />
                  Java
                </Link>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid gap-2">
              <CollapsibleTrigger className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground">
                <FaCode className="h-5 w-5" />
                Frameworks and Libraries{" "}
                <FaChevronRight className="ml-auto h-5 w-5 transition-transform group-[data-state=open]:rotate-90" />
              </CollapsibleTrigger>
              <CollapsibleContent className="grid gap-2 pl-4">
                <Link
                  href="/library/react"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <FaCode className="h-5 w-5" />
                  React
                </Link>
                <Link
                  href="/library/Next.js"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <FaCode className="h-5 w-5" />
                  Next.js
                </Link>
                <Link
                  href="/library/node.js"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <FaCode className="h-5 w-5" />
                  Node.js
                </Link>
                <Link
                  href="/library/express"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <FaCode className="h-5 w-5" />
                  Express
                </Link>
                <Link
                  href="/library/django"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <FaCode className="h-5 w-5" />
                  Django
                </Link>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid gap-2">
              <CollapsibleTrigger className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground">
                <FaPen className="h-5 w-5" />
                Tools and Technologies{" "}
                <FaChevronRight className="ml-auto h-5 w-5 transition-transform group-[data-state=open]:rotate-90" />
              </CollapsibleTrigger>
              <CollapsibleContent className="grid gap-2 pl-4">
                <Link
                  href="/library/git"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <FaPen className="h-5 w-5" />
                  Git
                </Link>
                <Link
                  href="/library/Docker"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <FaPen className="h-5 w-5" />
                  Docker
                </Link>
                <Link
                  href="/library/AWS"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <FaCloud className="h-5 w-5" />
                  AWS
                </Link>
                <Link
                  href="/library/MongoDb"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
                  prefetch={false}
                >
                  <FaDatabase className="h-5 w-5" />
                  MongoDB
                </Link>
              </CollapsibleContent>
            </Collapsible>
          </CollapsibleContent>
        </Collapsible>
      </nav>
    </div>
  );
};

export default Sidebar;
