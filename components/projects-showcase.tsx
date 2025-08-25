// "use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: "meetscribe",
    title: "MeetScribe",
    description: "AI-powered meeting transcription and analysis platform",
    longDescription:
      "MeetScribe is an AI-powered web application that records, transcribes, and documents meetings in real-time. It uses speech-to-text and LLMs to identify speakers, generate structured meeting minutes, and extract key insights streamlining productivity for teams and professionals.",
    image: "/MeetScribe.png",
    technologies: ["Next.js", "TypeScript", "OpenAI", "MongoDB", "Pinecone", "Gemini API", "Cloudinary", "Assembly AI", "Framer-motion"],
    liveUrl: "https://meetscribe0.vercel.app/",
    githubUrl: "https://github.com/iaffansheikh21/meetscribe",
  },
  {
    id: "listco",
    title: "ListCo",
    description: "A business directory that helps users easily find and connect with services.",
    longDescription:
      "ListCo is a comprehensive business directory platform that allows users to discover local businesses, read reviews, and connect with service providers. It features advanced search capabilities, user-friendly navigation, and a responsive design for seamless access across devices.",
    image: "/BD(MAS).png",
    technologies: ["Next.Js", "TypeScript", "Tailwind CSS", "Context API", "Framer-motion"],
    liveUrl: "https://list-co.vercel.app/",
    githubUrl: "https://github.com/iaffansheikh21/listco",
  },
  {
    id: "business-directory",
    title: "Business Directory",
    description: "This platform provides an intuitive, scalable solution for efficient business search and discovery.",
    longDescription:
      "A comprehensive business directory that allows users to search for local businesses, read reviews, and find contact information. Features include advanced search filters, user ratings, and a responsive design for mobile access.",
    image: "/business_directory.png",
    technologies: ["Next.js", "TypeScript", "Context API", "Tailwind CSS", "Google Map API"],
    liveUrl: "https://thecarrygo.vercel.app/",
    githubUrl: "https://github.com/iaffansheikh21/CarryGo",
  },
  {
    id: "newswave",
    title: "The NewsWave",
    description: "News aggregation platform with real-time updates",
    longDescription:
      "A news platform leveraging NewsAPI for content, with integrated web development APIs for easy news sharing, ensuring users access up-to-date information effortlessly.",
    image: "/NewsWave.png",
    technologies: ["Next.Js", "Tailwind VSS", "News API", "TypeScript"],
    liveUrl: "https://newswave-sigma.vercel.app/",
    githubUrl: "https://github.com/iaffansheikh21/newswave",
  },
  {
    id: "todoApp",
    title: "Todo App",
    description: "Modern blogging platform with CMS",
    longDescription:
    "A full-stack Todo app with a Next.js frontend (TypeScript, Tailwind CSS) and a FastAPI backend (SQLModel, Supabase). Supports CRUD operations and is optimized for both desktop and mobile.",  
    image: "/blogsite.png",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/iaffansheikh21/TodoApp-FastAPI-",
  },
  {
    id: "blog-website",
    title: "Blog Website",
    description: "Modern blogging platform with CMS",
    longDescription:
      "A feature-rich blogging platform with markdown support, comment system, and admin dashboard. Includes SEO optimization and social media integration.",
    image: "/blogsite.png",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/iaffansheikh21/blog-website",
  },
]

export function ProjectsShowcase() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            My <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            A showcase of my work, featuring modern web applications built with cutting-edge technologies
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } }}
            >
              <Card
                className="group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 border-0 bg-card/50 backdrop-blur-sm"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 md:h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 right-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Button size="sm" variant="secondary" onClick={() => window.open(project.liveUrl, "_blank")}>
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" onClick={() => window.open(project.githubUrl, "_blank")}>
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                      )}
                    </div>
                  </motion.div>
                </div>
                <CardHeader>
                  <CardTitle className="font-serif">{project.title}</CardTitle>
                  <motion.div animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.3 }}>
                    <CardDescription>
                      {hoveredProject === project.id ? project.longDescription : project.description}
                    </CardDescription>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge variant="outline" className="text-xs">
                          {tech}
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
    </section>
  )
}
