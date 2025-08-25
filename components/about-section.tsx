"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Server, Smartphone } from "lucide-react"

export function AboutSection() {
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
    // {
    //   icon: Smartphone,
    //   title: "Mobile Development",
    //   description: "Developing cross-platform mobile applications with React Native and progressive web apps.",
    //   skills: ["React Native", "PWA", "Mobile UI/UX"],
    // },
    // {
    //   icon: Palette,
    //   title: "UI/UX Design",
    //   description: "Designing intuitive user experiences with modern design principles and accessibility in mind.",
    //   skills: ["Figma", "Design Systems", "Accessibility"],
    // },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
                About <span className="text-primary">Me</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                 I’m a passionate Full-Stack Web Developer with a Bachelor of Science in Software Engineering from National Textile University. I specialize in building scalable, high-performing web applications using modern technologies like React, Next.js, Node.js, TypeScript, and Tailwind CSS, with a focus on clean code, user experience, and performance optimization.

When I’m not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community. I’m always eager to innovate and create impactful digital solutions.
                </p>
                
              </div>
            </div>
          </div>

          {/* Expertise Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <Card key={item.title} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
