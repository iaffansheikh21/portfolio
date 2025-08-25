// "use client"

// import { useState, useEffect, useRef } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Progress } from "@/components/ui/progress"

// interface Skill {
//   name: string
//   level: number
//   category: string
// }

// interface SkillCategory {
//   name: string
//   icon: string
//   skills: Skill[]
// }

// const skillCategories: SkillCategory[] = [
//   {
//     name: "Frontend",
//     icon: "🎨",
//     skills: [
//       { name: "React", level: 95, category: "Frontend" },
//       { name: "Next.js", level: 90, category: "Frontend" },
//       { name: "JavaScript", level: 92, category: "Frontend" },
//       { name: "TypeScript", level: 85, category: "Frontend" },
//       { name: "HTML5", level: 95, category: "Frontend" },
//       { name: "CSS3", level: 90, category: "Frontend" },
//       { name: "Tailwind CSS", level: 88, category: "Frontend" },
//     ],
//   },
//   {
//     name: "Backend",
//     icon: "⚙️",
//     skills: [
//       { name: "Node.js", level: 88, category: "Backend" },
//       { name: "Express.js", level: 85, category: "Backend" },
//       { name: "MongoDB", level: 80, category: "Backend" },
//       { name: "PostgreSQL", level: 75, category: "Backend" },
//       { name: "REST APIs", level: 90, category: "Backend" },
//     ],
//   },
//   {
//     name: "Tools & Deployment",
//     icon: "🛠️",
//     skills: [
//       { name: "Git", level: 95, category: "Tools" },
//       { name: "GitHub", level: 90, category: "Tools" },
//       { name: "Vercel", level: 88, category: "Deployment" },
//       { name: "Netlify", level: 80, category: "Deployment" },
//       { name: "VS Code", level: 95, category: "Tools" },
//     ],
//   },
//   {
//     name: "Other Skills",
//     icon: "💡",
//     skills: [
//       { name: "Responsive Design", level: 92, category: "Design" },
//       { name: "SEO Optimization", level: 85, category: "Marketing" },
//       { name: "Performance Optimization", level: 80, category: "Development" },
//       { name: "Problem Solving", level: 95, category: "Soft Skills" },
//     ],
//   },
// ]

// export function SkillsSection() {
//   const [activeCategory, setActiveCategory] = useState(0)
//   const [isVisible, setIsVisible] = useState(false)
//   const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set())
//   const sectionRef = useRef<HTMLElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//           // Animate skills progressively
//           skillCategories[activeCategory].skills.forEach((skill, index) => {
//             setTimeout(() => {
//               setAnimatedSkills((prev) => new Set([...prev, skill.name]))
//             }, index * 200)
//           })
//         }
//       },
//       { threshold: 0.3 },
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => observer.disconnect()
//   }, [activeCategory])

//   const handleCategoryChange = (index: number) => {
//     setActiveCategory(index)
//     setAnimatedSkills(new Set())
//     // Re-animate skills for new category
//     setTimeout(() => {
//       skillCategories[index].skills.forEach((skill, skillIndex) => {
//         setTimeout(() => {
//           setAnimatedSkills((prev) => new Set([...prev, skill.name]))
//         }, skillIndex * 150)
//       })
//     }, 100)
//   }

//   return (
//     <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
//             Technical <span className="text-primary">Skills</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             A comprehensive overview of my technical expertise and proficiency levels
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Category Selector */}
//           <div className="lg:col-span-1">
//             <div className="space-y-2 sticky top-24">
//               {skillCategories.map((category, index) => (
//                 <button
//                   key={category.name}
//                   onClick={() => handleCategoryChange(index)}
//                   className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
//                     activeCategory === index
//                       ? "bg-primary text-primary-foreground shadow-lg"
//                       : "bg-card hover:bg-muted text-card-foreground"
//                   }`}
//                 >
//                   <div className="flex items-center space-x-3">
//                     <span className="text-2xl">{category.icon}</span>
//                     <span className="font-semibold">{category.name}</span>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Skills Display */}
//           <div className="lg:col-span-2">
//             <Card className="h-full">
//               <CardHeader>
//                 <CardTitle className="flex items-center space-x-3">
//                   <span className="text-2xl">{skillCategories[activeCategory].icon}</span>
//                   <span className="font-serif">{skillCategories[activeCategory].name} Skills</span>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 {skillCategories[activeCategory].skills.map((skill, index) => (
//                   <div
//                     key={skill.name}
//                     className={`transition-all duration-500 ${
//                       isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//                     }`}
//                     style={{ transitionDelay: `${index * 100}ms` }}
//                   >
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="font-medium text-foreground">{skill.name}</span>
//                       <Badge variant="outline">{skill.level}%</Badge>
//                     </div>
//                     <Progress
//                       value={animatedSkills.has(skill.name) ? skill.level : 0}
//                       className="h-2 transition-all duration-1000 ease-out"
//                     />
//                   </div>
//                 ))}
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//         {/* Quick Skills Overview */}
//         <div className="mt-16">
//           <h3 className="font-serif font-semibold text-2xl text-center mb-8">Technologies I Work With</h3>
//           <div className="flex flex-wrap justify-center gap-3">
//             {skillCategories
//               .flatMap((cat) => cat.skills)
//               .map((skill) => (
//                 <Badge
//                   key={skill.name}
//                   variant="secondary"
//                   className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
//                 >
//                   {skill.name}
//                 </Badge>
//               ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface Skill {
  name: string
  level: number
  category: string
}

interface SkillCategory {
  name: string
  icon: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 95, category: "Frontend" },
      { name: "Next.js", level: 90, category: "Frontend" },
      { name: "JavaScript", level: 92, category: "Frontend" },
      { name: "TypeScript", level: 85, category: "Frontend" },
      { name: "HTML5", level: 95, category: "Frontend" },
      { name: "CSS3", level: 90, category: "Frontend" },
      { name: "Tailwind CSS", level: 88, category: "Frontend" },
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 88, category: "Backend" },
      { name: "Express.js", level: 85, category: "Backend" },
      { name: "MongoDB", level: 80, category: "Backend" },
      { name: "PostgreSQL", level: 75, category: "Backend" },
      { name: "REST APIs", level: 90, category: "Backend" },
    ],
  },
  {
    name: "Tools & Deployment",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 95, category: "Tools" },
      { name: "GitHub", level: 90, category: "Tools" },
      { name: "Vercel", level: 88, category: "Deployment" },
      { name: "Netlify", level: 80, category: "Deployment" },
      { name: "VS Code", level: 95, category: "Tools" },
    ],
  },
  {
    name: "Other Skills",
    icon: "💡",
    skills: [
      { name: "Responsive Design", level: 92, category: "Design" },
      { name: "SEO Optimization", level: 85, category: "Marketing" },
      { name: "Performance Optimization", level: 80, category: "Development" },
      { name: "Problem Solving", level: 95, category: "Soft Skills" },
    ],
  },
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skills progressively
          skillCategories[activeCategory].skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => new Set([...prev, skill.name]))
            }, index * 200)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [activeCategory])

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index)
    setAnimatedSkills(new Set())
    // Re-animate skills for new category
    setTimeout(() => {
      skillCategories[index].skills.forEach((skill, skillIndex) => {
        setTimeout(() => {
          setAnimatedSkills((prev) => new Set([...prev, skill.name]))
        }, skillIndex * 150)
      })
    }, 100)
  }

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Category Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 lg:sticky lg:top-24">
              {skillCategories.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => handleCategoryChange(index)}
                  className={`flex-shrink-0 lg:w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-300 ${
                    activeCategory === index
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-card hover:bg-muted text-card-foreground"
                  }`}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3 whitespace-nowrap lg:whitespace-normal">
                    <span className="text-xl sm:text-2xl">{category.icon}</span>
                    <span className="font-semibold text-sm sm:text-base">{category.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="flex items-center space-x-2 sm:space-x-3">
                  <span className="text-xl sm:text-2xl">{skillCategories[activeCategory].icon}</span>
                  <span className="font-serif text-lg sm:text-xl">{skillCategories[activeCategory].name} Skills</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground text-sm sm:text-base">{skill.name}</span>
                      <Badge variant="outline" className="text-xs sm:text-sm">
                        {skill.level}%
                      </Badge>
                    </div>
                    <Progress
                      value={animatedSkills.has(skill.name) ? skill.level : 0}
                      className="h-2 transition-all duration-1000 ease-out"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Skills Overview */}
        <div className="mt-12 sm:mt-16">
          <h3 className="font-serif font-semibold text-xl sm:text-2xl text-center mb-6 sm:mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
            {skillCategories
              .flatMap((cat) => cat.skills)
              .map((skill) => (
                <Badge
                  key={skill.name}
                  variant="secondary"
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                >
                  {skill.name}
                </Badge>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
