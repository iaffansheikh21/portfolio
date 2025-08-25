// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Code, Palette, Server, Smartphone } from "lucide-react"

// export function AboutSection() {
//   const expertise = [
//     {
//       icon: Code,
//       title: "Frontend Development",
//       description: "Creating responsive, interactive user interfaces with React, Next.js, and modern CSS frameworks.",
//       skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
//     },
//     {
//       icon: Server,
//       title: "Backend Development",
//       description: "Building scalable server-side applications and APIs with Node.js, Python, and cloud services.",
//       skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
//     },
//     // {
//     //   icon: Smartphone,
//     //   title: "Mobile Development",
//     //   description: "Developing cross-platform mobile applications with React Native and progressive web apps.",
//     //   skills: ["React Native", "PWA", "Mobile UI/UX"],
//     // },
//     // {
//     //   icon: Palette,
//     //   title: "UI/UX Design",
//     //   description: "Designing intuitive user experiences with modern design principles and accessibility in mind.",
//     //   skills: ["Figma", "Design Systems", "Accessibility"],
//     // },
//   ]

//   return (
//     <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Content */}
//           <div className="space-y-8">
//             <div>
//               <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
//                 About <span className="text-primary">Me</span>
//               </h2>
//               <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
//                 <p>
//                  I’m a passionate Full-Stack Web Developer with a Bachelor of Science in Software Engineering from National Textile University. I specialize in building scalable, high-performing web applications using modern technologies like React, Next.js, Node.js, TypeScript, and Tailwind CSS, with a focus on clean code, user experience, and performance optimization.

// When I’m not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community. I’m always eager to innovate and create impactful digital solutions.
//                 </p>
                
//               </div>
//             </div>
//           </div>

//           {/* Expertise Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {expertise.map((item, index) => (
//               <Card key={item.title} className="group hover:shadow-lg transition-all duration-300">
//                 <CardContent className="p-6">
//                   <div className="flex items-center mb-4">
//                     <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
//                       <item.icon className="w-6 h-6" />
//                     </div>
//                   </div>
//                   <h3 className="font-serif font-semibold text-lg mb-2">{item.title}</h3>
//                   <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
//                   <div className="flex flex-wrap gap-2">
//                     {item.skills.map((skill) => (
//                       <Badge key={skill} variant="secondary" className="text-xs">
//                         {skill}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Server, Smartphone } from "lucide-react"
import { motion, useInView } from "framer-motion"
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
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications with React Native and progressive web apps.",
      skills: ["React Native", "PWA", "Mobile UI/UX"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing intuitive user experiences with modern design principles and accessibility in mind.",
      skills: ["Design Systems", "User Research", "Accessibility"],
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <motion.h2
                className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                About <span className="text-primary">Me</span>
              </motion.h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                {[
                  "I'm a passionate full-stack developer with over 3 years of experience creating digital solutions that make a difference. My journey in web development started with curiosity and has evolved into a deep expertise in modern technologies.",
                  "I specialize in building scalable web applications using React, Next.js, and Node.js, with a strong focus on user experience and performance optimization. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends.",
                  "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
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
                <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                  <CardContent className="p-6">
                    <motion.div
                      className="flex items-center mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <item.icon className="w-6 h-6" />
                      </div>
                    </motion.div>
                    <h3 className="font-serif font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
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
