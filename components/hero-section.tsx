// "use client"

// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
// import { useEffect, useState } from "react"

// export function HeroSection() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   const skills = ["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS"]

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
//     >
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Content */}
//           <div
//             className={`space-y-8 transition-all duration-1000 ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//             }`}
//           >
//             <div className="space-y-4">
//               <div className="flex flex-wrap gap-2">
//                 {skills.map((skill, index) => (
//                   <Badge
//                     key={skill}
//                     variant="secondary"
//                     className={`transition-all duration-500 hover:bg-primary hover:text-primary-foreground ${
//                       isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//                     }`}
//                     style={{ transitionDelay: `${index * 100}ms` }}
//                   >
//                     {skill}
//                   </Badge>
//                 ))}
//               </div>

//               <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
//                 Full Stack
//                 <span className="block text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//                   Developer
//                 </span>
//               </h1>

//               <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
//                 Hi, I'm <span className="font-semibold text-foreground">Muhammad Affan Sheikh</span>. I craft
//                 exceptional digital experiences using modern web technologies, specializing in React, Next.js, and
//                 scalable backend solutions.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button size="lg" className="group">
//                 <a href="#projects" className="flex items-center">
//                   View My Work
//                   <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </a>
//               </Button>
//               <Button variant="outline" size="lg">
//                 <Download className="mr-2 h-4 w-4" />
//                 Download CV
//               </Button>
//             </div>

//             <div className="flex space-x-4">
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
//                 asChild
//               >
//                 <a href="https://github.com/iaffansheikh21" target="_blank" rel="noopener noreferrer">
//                   <Github className="h-5 w-5" />
//                 </a>
//               </Button>
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
//                 asChild
//               >
//                 <a href="https://linkedin.com/in/affansheikh21" target="_blank" rel="noopener noreferrer">
//                   <Linkedin className="h-5 w-5" />
//                 </a>
//               </Button>
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
//                 asChild
//               >
//                 <a href="mailto:muhammadaffansheikh21@gmail.com">
//                   <Mail className="h-5 w-5" />
//                 </a>
//               </Button>
//             </div>
//           </div>

//           {/* Visual Element */}
//           <div
//             className={`relative transition-all duration-1000 delay-300 ${
//               isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
//             }`}
//           >
//             <div className="relative">
//               <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center backdrop-blur-sm border border-primary/20">
//                 <img
//                   src="/professional-developer-portrait.png"
//                   alt="Muhammad Affan Sheikh"
//                   className="w-64 h-64 rounded-xl object-cover"
//                 />
//               </div>
//               <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full animate-pulse"></div>
//               <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full animate-pulse delay-1000"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = ["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS"]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className={`transition-all duration-500 hover:bg-primary hover:text-primary-foreground ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
                Full Stack
                <span className="block text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Hi, I'm <span className="font-semibold text-foreground">Muhammad Affan Sheikh</span>. I craft
                exceptional digital experiences using modern web technologies, specializing in React, Next.js, and
                scalable backend solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                <a href="#projects" className="flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                asChild
              >
                <a href="https://github.com/iaffansheikh21" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                asChild
              >
                <a href="https://www.linkedin.com/in/iaffansheikh21/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                asChild
              >
                <a href="mailto:muhammadaffansheikh21@gmail.com.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center backdrop-blur-sm border border-primary/20">
                <img
                  src="/pic.jpg"
                  alt="Muhammad Affan Sheikh"
                  className="w-64 h-64 rounded-xl object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
