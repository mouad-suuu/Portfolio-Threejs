"use client";
import { Component } from "@/components/component/component";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 bg-background p-8 text-foreground md:p-12 lg:p-16">
      <header className="mb-8 flex flex-col items-center gap-4 md:flex-row md:items-start">
        <Image
          src="/image1.png"
          width={80}
          height={80}
          alt="Avatar"
          className="Picture of the author"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">Mouad Mennioui</h1>
          <p className="text-sm text-muted-foreground">Software Engineer</p>
          <div className="mt-2 flex items-center justify-center gap-4 md:justify-start">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              prefetch={false}
            >
              <MailIcon className="h-5 w-5" />
              moad.menniui.com
            </Link>
            <Link
              href="#"
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
      <Component />
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
