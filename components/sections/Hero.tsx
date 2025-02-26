"use client";
import { motion } from "framer-motion";
import { ContactIcon } from "../component/ContactIcon";

const socialLinks = [
  {
    name: "GitHub",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" {...props}>
        <path
          fill="currentColor"
          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
        />
      </svg>
    ),
    href: "https://github.com/mouad-suuu",
    text: "@mouad-suuu",
    description: "Explore my open source projects",
  },
  {
    name: "Upwork",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" {...props}>
        <path
          fill="currentColor"
          d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"
        />
      </svg>
    ),
    href: "https://www.upwork.com/freelancers/~019947450e545855c8",
    text: "Top Rated",
    description: "Hire me on Upwork",
  },
  {
    name: "LinkedIn",
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    href: "https://www.linkedin.com/in/mouad-mennioui-040477264/",
    text: "Mouad Mennioui",
    description: "Connect with me",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5 z-0" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Content - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Mouad Mennioui
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Full Stack Developer Engineer
            </p>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-2xl italic text-primary/90 font-serif">
                &quot;Code is the vessel; the unknown is the adventure.&quot;
              </p>
            </motion.div>

            <div className="text-lg text-muted-foreground mb-12 space-y-4 max-w-2xl mx-auto">
              <p>
                Expert in{" "}
                <span className="text-primary font-semibold">Node.js</span>{" "}
                ecosystem with deep knowledge of frameworks like{" "}
                <span className="text-primary font-semibold">React.js</span>,{" "}
                <span className="text-primary font-semibold">Next.js</span>, and{" "}
                <span className="text-primary font-semibold">NestJS</span>.
              </p>
              <p>
                Proficient in implementing{" "}
                <span className="text-primary font-semibold">
                  CI/CD pipelines
                </span>
                ,{" "}
                <span className="text-primary font-semibold">
                  security best practices
                </span>
                , and{" "}
                <span className="text-primary font-semibold">
                  project management
                </span>{" "}
                methodologies.
              </p>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-12"
            >
              <div className="p-4 bg-card/50 backdrop-blur-sm rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">3+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="p-4 bg-card/50 backdrop-blur-sm rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
            </motion.div>

            {/* Social Links - Horizontal in Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {socialLinks.map((social) => (
                <ContactIcon
                  key={social.name}
                  href={social.href}
                  icon={social.icon}
                  text={social.text}
                  description={social.description}
                />
              ))}
            </motion.div>

            {/* Available for Work Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-block bg-primary/5 px-6 py-3 rounded-full border border-primary/10 text-center"
            >
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">
                  Available for Freelance Work
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-muted-foreground mb-2">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-primary"
        >
          <svg
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
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
