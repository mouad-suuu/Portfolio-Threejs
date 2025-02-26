"use client";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/component/Header";
import { motion } from "framer-motion";

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
  },
  {
    name: "LinkedIn",
    icon: (props: any) => (
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
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    href: "https://www.linkedin.com/in/mouad-mennioui-040477264/",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5 z-0" />
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Main Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Mouad Mennioui
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Full Stack Developer Engineer
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Crafting exceptional digital experiences with modern web technologies.
                  Specialized in building scalable applications with React, Next.js, and Web3.
                </p>

                {/* Call to Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-wrap gap-4 mb-12"
                >
                  <Link
                    href="/projects"
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2 group"
                  >
                    View Projects
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transform group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                  <Link
                    href="/certifications"
                    className="px-8 py-3 border border-primary/20 rounded-full hover:bg-primary/10 transition-colors flex items-center gap-2 group"
                  >
                    View Certifications
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transform group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="grid grid-cols-2 gap-4 mb-8"
                >
                  <div className="p-4 bg-card/50 rounded-lg backdrop-blur-sm">
                    <div className="text-3xl font-bold text-primary mb-1">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="p-4 bg-card/50 rounded-lg backdrop-blur-sm">
                    <div className="text-3xl font-bold text-primary mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Contact & Social */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Contact Card */}
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/10">
                  <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>
                  
                  {/* Contact Links */}
                  <div className="space-y-4">
                    <Link
                      href="mailto:moad.menniui@gmail.com"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="20" height="16" x="2" y="4" rx="2" stroke="currentColor" strokeWidth="2"/>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <span>moad.menniui@gmail.com</span>
                    </Link>
                    
                    <Link
                      href="tel:+212620234060"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <span>+212 620234060</span>
                    </Link>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 mt-6">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                      >
                        <social.icon className="h-5 w-5" />
                        <span className="sr-only">{social.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Available for Work Banner */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for Work</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Open to freelance opportunities and collaborations
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-muted-foreground"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Full Stack Developer with experience in modern web technologies
                and Web3. Skilled in Next.js, React, and TypeScript, with a
                strong foundation in both frontend and backend development.
                Passionate about creating efficient, scalable solutions and
                staying current with emerging technologies.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                <div className="p-4 rounded-lg bg-card shadow-lg">
                  <h3 className="font-bold text-2xl text-primary mb-2">3+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div className="p-4 rounded-lg bg-card shadow-lg">
                  <h3 className="font-bold text-2xl text-primary mb-2">20+</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div className="p-4 rounded-lg bg-card shadow-lg">
                  <h3 className="font-bold text-2xl text-primary mb-2">15+</h3>
                  <p className="text-muted-foreground">Technologies</p>
                </div>
                <div className="p-4 rounded-lg bg-card shadow-lg">
                  <h3 className="font-bold text-2xl text-primary mb-2">5+</h3>
                  <p className="text-muted-foreground">Certifications</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Technical Skills
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {[
                  { name: "Next.js", level: "95%" },
                  { name: "React", level: "90%" },
                  { name: "TypeScript", level: "85%" },
                  { name: "Node.js", level: "80%" },
                  { name: "MongoDB", level: "85%" },
                  { name: "TailwindCSS", level: "90%" },
                  { name: "Docker", level: "75%" },
                  { name: "AWS", level: "70%" },
                ].map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="relative h-32 bg-card rounded-lg p-6 shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                      <h3 className="font-semibold mb-2">{skill.name}</h3>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="h-full bg-primary"
                        />
                      </div>
                      <span className="absolute bottom-6 right-6 text-sm text-muted-foreground">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Feel free to reach out for collaborations or just a friendly
                hello
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href="mailto:moad.menniui@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>moad.menniui@gmail.com</span>
                </Link>
                <Link
                  href="tel:+212620234060"
                  className="flex items-center gap-2 px-6 py-3 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+212 620234060</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mouad-mennioui-040477264/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span>LinkedIn</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
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
