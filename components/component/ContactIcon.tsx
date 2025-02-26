"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface ContactIconProps {
  href: string;
  icon: (props: any) => JSX.Element;
  text: string;
  description: string;
}

export function ContactIcon({
  href,
  icon: Icon,
  text,
  description,
}: ContactIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <motion.div
        whileHover="hover"
        initial="initial"
        className="relative overflow-hidden cursor-pointer border border-primary/20 hover:border-primary rounded-[12px] bg-card/5 hover:bg-card/10"
        variants={{
          initial: { width: "64px", height: "64px" },
          hover: {
            width: "200px",
            height: "auto",
            transition: { duration: 0.3 },
          },
        }}
      >
        <div className="flex flex-col items-center p-4">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center mb-2">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <motion.div
            variants={{
              initial: { opacity: 0, height: 0 },
              hover: {
                opacity: 1,
                height: "auto",
                transition: {
                  opacity: { duration: 0.2, delay: 0.1 },
                  height: { duration: 0.2 },
                },
              },
            }}
            className="overflow-hidden text-center"
          >
            <p className="whitespace-nowrap text-sm font-medium mb-1">{text}</p>
            <p className="whitespace-nowrap text-xs text-muted-foreground">
              {description}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
