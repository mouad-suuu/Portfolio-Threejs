"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function About() {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a <span className="text-primary font-semibold">Full Stack Developer</span>, I specialize in building robust and scalable web applications. My expertise spans across the entire development lifecycle, from conceptualization to deployment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I have a strong focus on <span className="text-primary font-semibold">performance optimization</span>, <span className="text-primary font-semibold">security implementation</span>, and <span className="text-primary font-semibold">code quality</span>. My experience includes working with diverse teams and managing complex projects.
              </p>
              <div className="flex gap-4 pt-4">
                <Link
                  href="/projects"
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View Projects
                </Link>
                <Link
                  href="/certifications"
                  className="px-6 py-2 border border-primary/20 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  View Certifications
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-card rounded-lg shadow-lg">
                  <h3 className="font-bold text-2xl text-primary mb-2">3+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-lg">
                  <h3 className="font-bold text-2xl text-primary mb-2">50+</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-lg">
                  <h3 className="font-bold text-2xl text-primary mb-2">15+</h3>
                  <p className="text-muted-foreground">Technologies</p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-lg">
                  <h3 className="font-bold text-2xl text-primary mb-2">5+</h3>
                  <p className="text-muted-foreground">Certifications</p>
                </div>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg">
                <h3 className="font-semibold text-lg mb-4">Key Focus Areas</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Full Stack Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>CI/CD & DevOps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Security Implementation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Project Management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
