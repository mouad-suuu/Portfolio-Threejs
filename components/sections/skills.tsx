"use client";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", level: "95%" },
      { name: "Express.js", level: "90%" },
      { name: "NestJS", level: "85%" },
      { name: "GraphQL", level: "80%" },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React", level: "95%" },
      { name: "Next.js", level: "90%" },
      { name: "TypeScript", level: "85%" },
      { name: "TailwindCSS", level: "90%" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", level: "85%" },
      { name: "CI/CD", level: "80%" },
      { name: "Git", level: "90%" },
      { name: "AWS", level: "75%" },
    ],
  },
  {
    category: "Database & Security",
    items: [
      { name: "MongoDB", level: "90%" },
      { name: "PostgreSQL", level: "85%" },
      { name: "Redis", level: "80%" },
      { name: "Auth & Security", level: "85%" },
    ],
  },
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
            Technical Expertise
          </h2>
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
                <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
                <div className="space-y-6">
                  {category.items.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">{skill.name}</span>
                        <span className="text-sm text-primary">{skill.level}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-primary to-primary/60"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-semibold mb-6">Additional Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "RESTful APIs",
                "WebSockets",
                "Microservices",
                "Testing",
                "Performance Optimization",
                "Web Security",
                "Agile",
                "Team Leadership",
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
