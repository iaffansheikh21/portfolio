"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Server, Smartphone } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const expertise = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with React, Next.js, and modern CSS frameworks.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Building scalable server-side applications and APIs with Node.js, Python, and cloud services.",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 sm:space-y-8"
          >
            <motion.div variants={itemVariants}>
              <motion.h2
                className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                About <span className="text-primary">Me</span>
              </motion.h2>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                {[
                  "I’m Muhammad Affan Sheikh, a passionate Full-Stack Web Developer skilled in React, Next.js, Node.js, and MongoDB, with additional experience in TypeScript, MySQL, and PostgreSQL. I recently completed my BS in Software Engineering and gained real-world experience during my internship at FISTA Solutions, where I worked on scalable web applications and optimized UI performance. I love the problem-solving aspect of programming and enjoy building clean, maintainable, and user-friendly applications. Always eager to learn and grow, I stay up-to-date with modern technologies and am currently seeking a full-time role as a Software Engineer.",
                ].map((paragraph, index) => (
                  <motion.p
                    key={index}
                    variants={itemVariants}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  transition: `all 0.3s ease-out ${index * 0.1}s`,
                }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 h-full">
                  <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                    <motion.div
                      className="flex items-center mb-3 sm:mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                    </motion.div>
                    <h3 className="font-serif font-semibold text-base sm:text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3 sm:mb-4 flex-grow">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: skillIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
