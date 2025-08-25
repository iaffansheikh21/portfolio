// // // "use client"

// // // import { Button } from "@/components/ui/button"
// // // import { Badge } from "@/components/ui/badge"
// // // import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
// // // import { useEffect, useState } from "react"

// // // export function HeroSection() {
// // //   const [isVisible, setIsVisible] = useState(false)

// // //   useEffect(() => {
// // //     setIsVisible(true)
// // //   }, [])

// // //   const skills = ["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS"]

// // //   return (
// // //     <section
// // //       id="home"
// // //       className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
// // //     >
// // //       <div className="absolute inset-0 opacity-30">
// // //         <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
// // //         <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
// // //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
// // //       </div>

// // //       <div className="relative max-w-7xl mx-auto z-10">
// // //         <div className="grid lg:grid-cols-2 gap-12 items-center">
// // //           {/* Content */}
// // //           <div
// // //             className={`space-y-8 transition-all duration-1000 ${
// // //               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
// // //             }`}
// // //           >
// // //             <div className="space-y-4">
// // //               <div className="flex flex-wrap gap-2">
// // //                 {skills.map((skill, index) => (
// // //                   <Badge
// // //                     key={skill}
// // //                     variant="secondary"
// // //                     className={`transition-all duration-500 hover:bg-primary hover:text-primary-foreground ${
// // //                       isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
// // //                     }`}
// // //                     style={{ transitionDelay: `${index * 100}ms` }}
// // //                   >
// // //                     {skill}
// // //                   </Badge>
// // //                 ))}
// // //               </div>

// // //               <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
// // //                 Full Stack
// // //                 <span className="block text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
// // //                   Developer
// // //                 </span>
// // //               </h1>

// // //               <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
// // //                 Hi, I'm <span className="font-semibold text-foreground">Muhammad Affan Sheikh</span>. I craft
// // //                 exceptional digital experiences using modern web technologies, specializing in React, Next.js, and
// // //                 scalable backend solutions.
// // //               </p>
// // //             </div>

// // //             <div className="flex flex-col sm:flex-row gap-4">
// // //               <Button size="lg" className="group">
// // //                 <a href="#projects" className="flex items-center">
// // //                   View My Work
// // //                   <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
// // //                 </a>
// // //               </Button>
// // //               <Button variant="outline" size="lg">
// // //                 <Download className="mr-2 h-4 w-4" />
// // //                 Download CV
// // //               </Button>
// // //             </div>

// // //             <div className="flex space-x-4">
// // //               <Button
// // //                 variant="ghost"
// // //                 size="sm"
// // //                 className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
// // //                 asChild
// // //               >
// // //                 <a href="https://github.com/iaffansheikh21" target="_blank" rel="noopener noreferrer">
// // //                   <Github className="h-5 w-5" />
// // //                 </a>
// // //               </Button>
// // //               <Button
// // //                 variant="ghost"
// // //                 size="sm"
// // //                 className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
// // //                 asChild
// // //               >
// // //                 <a href="https://linkedin.com/in/affansheikh21" target="_blank" rel="noopener noreferrer">
// // //                   <Linkedin className="h-5 w-5" />
// // //                 </a>
// // //               </Button>
// // //               <Button
// // //                 variant="ghost"
// // //                 size="sm"
// // //                 className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
// // //                 asChild
// // //               >
// // //                 <a href="mailto:muhammadaffansheikh21@gmail.com">
// // //                   <Mail className="h-5 w-5" />
// // //                 </a>
// // //               </Button>
// // //             </div>
// // //           </div>

// // //           {/* Visual Element */}
// // //           <div
// // //             className={`relative transition-all duration-1000 delay-300 ${
// // //               isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
// // //             }`}
// // //           >
// // //             <div className="relative">
// // //               <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center backdrop-blur-sm border border-primary/20">
// // //                 <img
// // //                   src="/professional-developer-portrait.png"
// // //                   alt="Muhammad Affan Sheikh"
// // //                   className="w-64 h-64 rounded-xl object-cover"
// // //                 />
// // //               </div>
// // //               <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full animate-pulse"></div>
// // //               <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full animate-pulse delay-1000"></div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // "use client"

// // import { Button } from "@/components/ui/button"
// // import { Badge } from "@/components/ui/badge"
// // import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
// // import { useEffect, useState } from "react"

// // export function HeroSection() {
// //   const [isVisible, setIsVisible] = useState(false)

// //   useEffect(() => {
// //     setIsVisible(true)
// //   }, [])

// //   const skills = ["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS"]

// //   return (
// //     <section
// //       id="home"
// //       className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
// //     >
// //       <div className="absolute inset-0 opacity-30">
// //         <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
// //         <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
// //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
// //       </div>

// //       <div className="relative max-w-7xl mx-auto z-10">
// //         <div className="grid lg:grid-cols-2 gap-12 items-center">
// //           {/* Content */}
// //           <div
// //             className={`space-y-8 transition-all duration-1000 ${
// //               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
// //             }`}
// //           >
// //             <div className="space-y-4">
// //               <div className="flex flex-wrap gap-2">
// //                 {skills.map((skill, index) => (
// //                   <Badge
// //                     key={skill}
// //                     variant="secondary"
// //                     className={`transition-all duration-500 hover:bg-primary hover:text-primary-foreground ${
// //                       isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
// //                     }`}
// //                     style={{ transitionDelay: `${index * 100}ms` }}
// //                   >
// //                     {skill}
// //                   </Badge>
// //                 ))}
// //               </div>

// //               <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
// //                 Full Stack
// //                 <span className="block text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
// //                   Developer
// //                 </span>
// //               </h1>

// //               <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
// //                 Hi, I'm <span className="font-semibold text-foreground">Muhammad Affan Sheikh</span>. I craft
// //                 exceptional digital experiences using modern web technologies, specializing in React, Next.js, and
// //                 scalable backend solutions.
// //               </p>
// //             </div>

// //             <div className="flex flex-col sm:flex-row gap-4">
// //               <Button size="lg" className="group">
// //                 <a href="#projects" className="flex items-center">
// //                   View My Work
// //                   <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
// //                 </a>
// //               </Button>
// //               <Button variant="outline" size="lg">
// //                 <Download className="mr-2 h-4 w-4" />
// //                 Download CV
// //               </Button>
// //             </div>

// //             <div className="flex space-x-4">
// //               <Button
// //                 variant="ghost"
// //                 size="sm"
// //                 className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
// //                 asChild
// //               >
// //                 <a href="https://github.com/iaffansheikh21" target="_blank" rel="noopener noreferrer">
// //                   <Github className="h-5 w-5" />
// //                 </a>
// //               </Button>
// //               <Button
// //                 variant="ghost"
// //                 size="sm"
// //                 className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
// //                 asChild
// //               >
// //                 <a href="https://www.linkedin.com/in/iaffansheikh21/" target="_blank" rel="noopener noreferrer">
// //                   <Linkedin className="h-5 w-5" />
// //                 </a>
// //               </Button>
// //               <Button
// //                 variant="ghost"
// //                 size="sm"
// //                 className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
// //                 asChild
// //               >
// //                 <a href="mailto:muhammadaffansheikh21@gmail.com.com">
// //                   <Mail className="h-5 w-5" />
// //                 </a>
// //               </Button>
// //             </div>
// //           </div>

// //           {/* Visual Element */}
// //           <div
// //             className={`relative transition-all duration-1000 delay-300 ${
// //               isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
// //             }`}
// //           >
// //             <div className="relative">
// //               <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center backdrop-blur-sm border border-primary/20">
// //                 <img
// //                   src="/pic.jpg"
// //                   alt="Muhammad Affan Sheikh"
// //                   className="w-64 h-64 rounded-xl object-cover"
// //                 />
// //               </div>
// //               <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full animate-pulse"></div>
// //               <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full animate-pulse delay-1000"></div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }


// "use client"

// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
// import { motion } from "framer-motion"

// export function HeroSection() {
//   const skills = ["React", "Next.js", "TypeScript", "Node.js", "Python", "MongoDB"]

//   const handleViewWork = () => {
//     const element = document.querySelector("#projects")
//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       })
//     }
//   }

//   const handleDownloadCV = () => {
//     const link = document.createElement("a")
//     link.href = "/Affan-resume.pdf" 
//     link.download = "Muhammad-Affan-Sheikh-CV.pdf"
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   }

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   }

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
//     >
//       <div className="absolute inset-0 opacity-30">
//         <motion.div
//           animate={{
//             scale: [1, 1.1, 1],
//             rotate: [0, 180, 360],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "linear",
//           }}
//           className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1.1, 1, 1.1],
//             rotate: [360, 180, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "linear",
//           }}
//           className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
//             <motion.div variants={itemVariants} className="space-y-4">
//               <div className="flex flex-wrap gap-2">
//                 {skills.map((skill, index) => (
//                   <motion.div
//                     key={skill}
//                     variants={itemVariants}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Badge
//                       variant="secondary"
//                       className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground cursor-pointer"
//                     >
//                       {skill}
//                     </Badge>
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.h1
//                 variants={itemVariants}
//                 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight"
//               >
//                 Full Stack
//                 <motion.span
//                   className="block text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
//                   animate={{
//                     backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//                   }}
//                   transition={{
//                     duration: 3,
//                     repeat: Number.POSITIVE_INFINITY,
//                     ease: "linear",
//                   }}
//                 >
//                   Developer
//                 </motion.span>
//               </motion.h1>

//               <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
//                 Hi, I'm <span className="font-semibold text-foreground">Muhammad Affan Sheikh</span>. I craft
//                 exceptional digital experiences using modern web technologies, specializing in React, Next.js, and
//                 scalable backend solutions.
//               </motion.p>
//             </motion.div>

//             <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button size="lg" className="group" onClick={handleViewWork}>
//                   View My Work
//                   <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </Button>
//               </motion.div>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button variant="outline" size="lg" onClick={handleDownloadCV}>
//                   <Download className="mr-2 h-4 w-4" />
//                   Download CV
//                 </Button>
//               </motion.div>
//             </motion.div>

//             <motion.div variants={itemVariants} className="flex space-x-4">
//               {[
//                 { icon: Github, href: "https://github.com/iaffansheikh21" },
//                 { icon: Linkedin, href: "https://linkedin.com/in/affansheikh" },
//                 { icon: Mail, href: "mailto:affan.sheikh@example.com" },
//               ].map(({ icon: Icon, href }, index) => (
//                 <motion.div key={index} whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
//                     asChild
//                   >
//                     <a href={href} target="_blank" rel="noopener noreferrer">
//                       <Icon className="h-5 w-5" />
//                     </a>
//                   </Button>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="relative"
//           >
//             <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative">
//               <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center backdrop-blur-sm border border-primary/20">
//                 <img
//                   src="/pic.jpg"
//                   alt="Muhammad Affan Sheikh"
//                   className="w-64 h-64 rounded-xl object-cover"
//                 />
//               </div>
//               <motion.div
//                 animate={{
//                   scale: [1, 1.2, 1],
//                   opacity: [0.3, 0.6, 0.3],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Number.POSITIVE_INFINITY,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"
//               />
//               <motion.div
//                 animate={{
//                   scale: [1.2, 1, 1.2],
//                   opacity: [0.6, 0.3, 0.6],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Number.POSITIVE_INFINITY,
//                   ease: "easeInOut",
//                   delay: 1,
//                 }}
//                 className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full"
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const skills = ["React", "Next.js", "TypeScript", "Node.js", "Python", "MongoDB", "Express.Js"]

  const handleViewWork = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Affan-resume.pdf" // same file as in old version
    link.download = "Muhammad-Affan-Sheikh-CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Background animations */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge
                      variant="secondary"
                      className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              {/* Title */}
              <motion.h1
                variants={itemVariants}
                className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight"
              >
                Full Stack
                <motion.span
                  className="block text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  Developer
                </motion.span>
              </motion.h1>

              {/* Description */}
              <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Hi, I'm <span className="font-semibold text-foreground">Muhammad Affan Sheikh</span>. I craft
                exceptional digital experiences using modern web technologies, specializing in React, Next.js, and
                scalable backend solutions.
              </motion.p>
            </motion.div>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="group" onClick={handleViewWork}>
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" onClick={handleDownloadCV}>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/iaffansheikh21" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/iaffansheikh21/" },
                { icon: Mail, href: "mailto:muhammadaffansheikh21@gmail.com" },
              ].map(({ icon: Icon, href }, index) => (
                <motion.div key={index} whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    asChild
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center backdrop-blur-sm border border-primary/20">
                <img
                  src="/pic.jpg"
                  alt="Muhammad Affan Sheikh"
                  className="w-64 h-64 rounded-xl object-cover"
                />
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"
              />
              <motion.div
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
