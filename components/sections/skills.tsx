"use client";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript (ES6-7)" },
      { name: "TypeScript" },
      { name: "Python" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "React Native" },
      { name: "Angular" },
      { name: "TailwindCSS" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "Supabase" },
      { name: "MeiliSearch" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker" },
      { name: "Git & GitHub" },
      { name: "Google Cloud" },
      { name: "AWS" },
      { name: "Firebase" },
      { name: "Nginx" },
      { name: "Redis" },
    ],
  },
];

const experience = [
  {
    company: "Upwork",
    position: "Top Rated Freelancer",
    period: "Present",
    description: "Working as a full-stack developer on various client projects, specializing in React, Next.js, and Node.js applications.",
  },
  {
    company: "FeverTokens",
    position: "Full Stack Developer Intern",
    period: "July 2024 - Present",
    description: "Developed full-stack solutions using Next.js 14, integrated MeiliSearch for fast search results, and designed backend architecture with MongoDB, DynamoDB, and Prisma.",
    technologies: "TypeScript, JavaScript, Next.js, React.js, Prisma, MongoDB, DynamoDB, Git, Node.js, TailwindCSS, AWS, Docker"
  },
  {
    company: "Devpost Hackathon",
    position: "Winner of Blockchain Hackathon",
    period: "November 2024",
    description: "Contributed to a React Native project, working on the UI and integration of an audio-to-text transcription service.",
    technologies: "React Native, Expo, Python, Whisper, Hugging Face, MongoDB"
  },
];

const education = [
  {
    institution: "Faculté des Sciences et Techniques",
    degree: "Bachelor's in Math and Computer Science",
    period: "2022 - 2025 (Expected)"
  },
  {
    institution: "Holberton School",
    degree: "Software Engineering Bootcamp",
    period: "2023 - 2024"
  }
];

const certifications = [
  {
    name: "Google Project Management Specialization",
    issuer: "Coursera",
    date: "August 2024",
    link: "Certification Link"
  },
  {
    name: "Software Engineering Foundation Program (Back-end Development)",
    issuer: "ALX",
    date: "July 2024",
    link: "Certification Link"
  },
  {
    name: "Advanced HTTP, JavaScript, Docker",
    issuer: "Boot.dev",
    date: "August 2024",
    link: "Certification Link"
  }
];

export function Skills() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Experience & Skills
          </h2>

          {/* Professional Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Professional Experience</h3>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card/50 backdrop-blur-sm p-6 rounded-xl"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-primary">{job.position}</h4>
                      <p className="text-lg font-medium">{job.company}</p>
                    </div>
                    <p className="text-muted-foreground">{job.period}</p>
                  </div>
                  <p className="mb-3">{job.description}</p>
                  {job.technologies && (
                    <div className="mt-3">
                      <p className="text-sm text-muted-foreground mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.split(", ").map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-primary/10 rounded-md text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((category) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card/50 backdrop-blur-sm p-6 rounded-xl"
                >
                  <h4 className="text-xl font-semibold mb-6">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-2 bg-primary/10 rounded-lg text-sm"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card/50 backdrop-blur-sm p-6 rounded-xl"
                >
                  <h4 className="text-lg font-semibold">{edu.institution}</h4>
                  <p className="text-muted-foreground">{edu.degree}</p>
                  <p className="text-sm text-primary mt-2">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card/50 backdrop-blur-sm p-6 rounded-xl"
                >
                  <h4 className="text-lg font-semibold">{cert.name}</h4>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                  <p className="text-sm mt-2">{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-semibold mb-6">Other Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "RESTful APIs",
                "Microservices",
                "Unit Testing",
                "Integration Testing",
                "CI/CD",
                "Linux",
                "Agile",
                "Prisma",
                "OAuth 2.0",
                "ORM",
                "YAML",
                "JSON",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
