"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  category: string
}

const projects: Project[] = [
  {
    id: "meetscribe",
    title: "MeetScribe",
    description: "AI-powered meeting transcription and analysis platform",
    longDescription:
      "MeetScribe is an AI-powered web application that records, transcribes, and documents meetings in real-time. It uses speech-to-text and LLMs to identify speakers, generate structured meeting minutes, and extract key insights streamlining productivity for teams and professionals.",
    image: "/MeetScribe.png",
    technologies: ["Next.js", "TypeScript", "OpenAI", "MongoDB", "Pinecone", "Gemini API", "Cloudinary", "Assembly AI", "Framer-motion" ],
    liveUrl: "https://meetscribe0.vercel.app/",
    githubUrl: "https://github.com/iaffansheikh21/meetscribe",
    featured: true,
    category: "AI/ML",
  },
  {
    id: "listco",
    title: "ListCo",
    description: "A business directory that helps users easily find and connect with services.",
    longDescription:
    'ListCo is a comprehensive business directory platform that allows users to discover local businesses, read reviews, and connect with service providers. It features advanced search capabilities, user-friendly navigation, and a responsive design for seamless access across devices.',
    image: "/BD(MAS).png",
    technologies: ["Next.Js", "TypeScript", "Tailwind CSS", "Context API", "Framer-motion"],
    liveUrl: "https://list-co.vercel.app/",
    githubUrl: "https://github.com/iaffansheikh21/listco",
    featured: true,
    category: "Productivity",
  },
  // {
  //   id: "smart-seo",
  //   title: "Smart SEO Tools",
  //   description: "Comprehensive SEO analysis and optimization suite",
  //   longDescription:
  //     "A powerful SEO toolkit that provides keyword analysis, competitor research, and content optimization suggestions. Includes automated reporting and performance tracking.",
  //   image: "/seo-analytics-dashboard.png",
  //   technologies: ["Next.js", "JavaScript", "API Integration", "Chart.js"],
  //   liveUrl: "https://your-seo-tools.vercel.app",
  //   githubUrl: "https://github.com/iaffansheikh21/smart-seo-tools",
  //   featured: false,
  //   category: "Marketing",
  // },
  {
    id: "business-directory",
    title: "Business Directory",
    description: "This platform provides an intuitive, scalable solution for efficient business search and discovery.",
    longDescription:
      "A comprehensive business directory that allows users to search for local businesses, read reviews, and find contact information. Features include advanced search filters, user ratings, and a responsive design for mobile access.",
    image: "/business_directory.png",
    technologies: ["Next.js", "TypeScript", "Context API",  "Tailwind CSS", "Google Map API"],
    liveUrl: "https://thecarrygo.vercel.app/",
    githubUrl: "https://github.com/iaffansheikh21/CarryGo",
    featured: false,
    category: "Web App",
  },
  {
    id: "newswave",
    title: "The NewsWave",
    description: "News aggregation platform with real-time updates",
    longDescription:
    "A news platform leveraging NewsAPI for content, with integrated web development APIs for easy news sharing, ensuring users access up-to-date information effortlessly." , 
    image: "/NewsWave.png",
    technologies: ["Next.Js", "Tailwind VSS", "News API", "TypeScript"],
    liveUrl: "https://newswave-sigma.vercel.app/",
    githubUrl: "https://github.com/iaffansheikh21/newswave",
    featured: true,
    category: "Media",
  },
  {
    id: "blog-website",
    title: "Blog Website",
    description: "Modern blogging platform with CMS",
    longDescription:
      "A feature-rich blogging platform with markdown support, comment system, and admin dashboard. Includes SEO optimization and social media integration.",
    image: "/modern-blog-website.png",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    liveUrl: "https://your-blog-website.vercel.app",
    githubUrl: "https://github.com/iaffansheikh21/blog-website",
    featured: false,
    category: "Content",
  },
]

export function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]
  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  const featuredProjects = filteredProjects.filter((p) => p.featured)
  const regularProjects = filteredProjects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring modern web applications built with cutting-edge technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Featured Projects - Larger Cards */}
          {featuredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                index === 0 ? "md:col-span-2 md:row-span-2" : "lg:col-span-1"
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-serif">{project.title}</CardTitle>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                <CardDescription className="text-base">
                  {hoveredProject === project.id ? project.longDescription : project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Regular Projects */}
          {regularProjects.map((project) => (
            <Card
              key={project.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-serif">{project.title}</CardTitle>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                <CardDescription>
                  {hoveredProject === project.id ? project.longDescription : project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group bg-transparent">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
