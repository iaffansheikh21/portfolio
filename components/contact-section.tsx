// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle } from "lucide-react"

// interface ContactForm {
//   name: string
//   email: string
//   subject: string
//   message: string
// }

// export function ContactSection() {
//   const [form, setForm] = useState<ContactForm>({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)
//   const [emailError, setEmailError] = useState("") // ✅ added for validation

//   const validateEmail = (email: string) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     return regex.test(email)
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     // ✅ Email validation before submission
//     if (!validateEmail(form.email)) {
//       setEmailError("Please enter a valid email address")
//       return
//     } else {
//       setEmailError("")
//     }

//     setIsSubmitting(true)

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     setIsSubmitting(false)
//     setIsSubmitted(true)

//     // Reset form after success message
//     setTimeout(() => {
//       setIsSubmitted(false)
//       setForm({ name: "", email: "", subject: "", message: "" })
//     }, 3000)
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }))

//     // ✅ live email validation
//     if (e.target.name === "email") {
//       if (!validateEmail(e.target.value)) {
//         setEmailError("Invalid email format")
//       } else {
//         setEmailError("")
//       }
//     }
//   }

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email",
//       value: "muhammadaffansheikh21@gmail.com",
//       href: "mailto:muhammadaffansheikh21@gmail.com",
//     },
//     {
//       icon: Phone,
//       label: "Phone",
//       value: "+92-310-1048485",
//       href: "tel:+923101048485",
//     },
//     {
//       icon: MapPin,
//       label: "Location",
//       value: "Faisalabad, Pakistan",
//     },
//   ]

//   const socialLinks = [
//     {
//       icon: Github,
//       label: "GitHub",
//       href: "https://github.com/iaffansheikh21",
//       color: "hover:text-blue-600",
//     },
//     {
//       icon: Linkedin,
//       label: "LinkedIn",
//       href: "https://www.linkedin.com/in/iaffansheikh21/",
//       color: "hover:text-blue-600",
//     },
//     {
//       icon: Instagram,
//       label: "Instagram",
//       href: "https://instagram.com/iaffansheikh21",
//       color: "hover:text-blue-400",
//     },
//   ]

//   return (
//     <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
//             Let's <span className="text-primary">Connect</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="font-serif font-semibold text-2xl mb-6">Get in Touch</h3>
//               <p className="text-muted-foreground mb-8 leading-relaxed">
//                 I'm always open to discussing new opportunities, interesting projects, or just having a chat about
//                 technology and development. Feel free to reach out!
//               </p>
//             </div>

//             {/* Contact Details */}
//             <div className="space-y-4">
//               {contactInfo.map((info) => (
//                 <a
//                   key={info.label}
//                   href={info.href}
//                   className="flex items-center space-x-4 p-4 rounded-lg bg-card hover:bg-muted transition-colors duration-200 group"
//                 >
//                   <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
//                     <info.icon className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <p className="font-medium text-foreground">{info.label}</p>
//                     <p className="text-muted-foreground">{info.value}</p>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             {/* Social Links */}
//             <div>
//               <h4 className="font-semibold mb-4">Follow Me</h4>
//               <div className="flex space-x-4">
//                 {socialLinks.map((social) => (
//                   <a
//                     key={social.label}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`p-3 rounded-lg bg-card hover:bg-muted transition-all duration-200 ${social.color}`}
//                   >
//                     <social.icon className="w-5 h-5" />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Availability Status */}
//             <Card>
//               <CardContent className="p-6">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                   <div>
//                     <p className="font-semibold text-foreground">Available for Projects</p>
//                     <p className="text-sm text-muted-foreground">
//                       Currently accepting new freelance and full-time opportunities
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Contact Form */}
//           <Card>
//             <CardHeader>
//               <CardTitle className="font-serif">Send a Message</CardTitle>
//             </CardHeader>
//             <CardContent>
//               {isSubmitted ? (
//                 <div className="text-center py-8">
//                   <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
//                   <h3 className="font-semibold text-lg mb-2">Message Sent!</h3>
//                   <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon!</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium mb-2">
//                         Name *
//                       </label>
//                       <Input
//                         id="name"
//                         name="name"
//                         value={form.name}
//                         onChange={handleChange}
//                         required
//                         placeholder="Your full name"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium mb-2">
//                         Email *
//                       </label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={form.email}
//                         onChange={handleChange}
//                         required
//                         placeholder="your.email@example.com"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="subject" className="block text-sm font-medium mb-2">
//                       Subject *
//                     </label>
//                     <Input
//                       id="subject"
//                       name="subject"
//                       value={form.subject}
//                       onChange={handleChange}
//                       required
//                       placeholder="What's this about?"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium mb-2">
//                       Message *
//                     </label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       value={form.message}
//                       onChange={handleChange}
//                       required
//                       rows={5}
//                       placeholder="Tell me about your project or inquiry..."
//                     />
//                   </div>

//                   <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
//                     {isSubmitting ? (
//                       <>
//                         <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         Send Message
//                         <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                       </>
//                     )}
//                   </Button>
//                 </form>
//               )}
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   )
// }
// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle } from "lucide-react"
// import { motion } from "framer-motion"

// interface ContactForm {
//   name: string
//   email: string
//   subject: string
//   message: string
// }

// export function ContactSection() {
//   const [form, setForm] = useState<ContactForm>({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     setIsSubmitting(false)
//     setIsSubmitted(true)

//     // Reset form after success message
//     setTimeout(() => {
//       setIsSubmitted(false)
//       setForm({ name: "", email: "", subject: "", message: "" })
//     }, 3000)
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email",
//       value: "muhammadaffansheikh21@gmail.com",
//       href: "mailto:muhammadaffansheikh21@gmail.com",
//     },
//     {
//       icon: Phone,
//       label: "Phone",
//       value: "+92 310 1048485",
//       href: "tel:+923101048485",
//     },
//     {
//       icon: MapPin,
//       label: "Location",
//       value: "Faisalabad, Pakistan",
//     },
//   ]

//   const socialLinks = [
//     {
//       icon: Github,
//       label: "GitHub",
//       href: "https://github.com/iaffansheikh21",
//       color: "hover:text-blue-600",
//     },
//     {
//       icon: Linkedin,
//       label: "LinkedIn",
//       href: "https://www.linkedin.com/in/iaffansheikh21/",
//       color: "hover:text-blue-600",
//     },
//     {
//       icon: Instagram,
//       label: "Instagram",
//       href: "https://instagram.com/iaffansheikh21",
//       color: "hover:text-blue-400",
//     },
//   ]

//   return (
//     <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12 sm:mb-16">
//           <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
//             Let's <span className="text-primary">Connect</span>
//           </h2>
//           <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
//             Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
//           {/* Contact Information */}
//           <div className="space-y-6 sm:space-y-8">
//             <div>
//               <h3 className="font-serif font-semibold text-xl sm:text-2xl mb-4 sm:mb-6">Get in Touch</h3>
//               <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
//                 I'm always open to discussing new opportunities, interesting projects, or just having a chat about
//                 technology and development. Feel free to reach out!
//               </p>
//             </div>

//             {/* Contact Details */}
//             <div className="space-y-3 sm:space-y-4">
//               {contactInfo.map((info) => (
//                 <a
//                   key={info.label}
//                   href={info.href}
//                   className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-card hover:bg-muted transition-colors duration-200 group"
//                 >
//                   <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 flex-shrink-0">
//                     <info.icon className="w-4 h-4 sm:w-5 sm:h-5" />
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <p className="font-medium text-foreground text-sm sm:text-base">{info.label}</p>
//                     <p className="text-muted-foreground text-sm break-all sm:break-normal">{info.value}</p>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             {/* Social Links */}
//             <div>
//               <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Follow Me</h4>
//               <motion.div className="flex space-x-3 sm:space-x-4">
//                 {[
//                   { icon: Github, href: "https://github.com/iaffansheikh21" },
//                   { icon: Linkedin, href: "https://www.linkedin.com/in/iaffansheikh21/" },
//                   { icon: Instagram, href: "https://instagram.com/iaffansheikh21" },
//                 ].map(({ icon: Icon, href }, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
//                       asChild
//                     >
//                       <a href={href} target="_blank" rel="noopener noreferrer">
//                         <Icon className="h-5 w-5" />
//                       </a>
//                     </Button>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </div>

//             {/* Availability Status */}
//             <Card>
//               <CardContent className="p-4 sm:p-6">
//                 <div className="flex items-start sm:items-center space-x-3">
//                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0 mt-1 sm:mt-0"></div>
//                   <div className="min-w-0 flex-1">
//                     <p className="font-semibold text-foreground text-sm sm:text-base">Available for Projects</p>
//                     <p className="text-xs sm:text-sm text-muted-foreground">
//                       Currently accepting new freelance and full-time opportunities
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Contact Form */}
//           <Card>
//             <CardHeader className="pb-4 sm:pb-6">
//               <CardTitle className="font-serif text-lg sm:text-xl">Send a Message</CardTitle>
//             </CardHeader>
//             <CardContent className="p-4 sm:p-6">
//               {isSubmitted ? (
//                 <div className="text-center py-6 sm:py-8">
//                   <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4" />
//                   <h3 className="font-semibold text-base sm:text-lg mb-2">Message Sent!</h3>
//                   <p className="text-muted-foreground text-sm sm:text-base">
//                     Thank you for reaching out. I'll get back to you soon!
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium mb-2">
//                         Name *
//                       </label>
//                       <Input
//                         id="name"
//                         name="name"
//                         value={form.name}
//                         onChange={handleChange}
//                         required
//                         placeholder="Your full name"
//                         className="text-sm sm:text-base"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium mb-2">
//                         Email *
//                       </label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={form.email}
//                         onChange={handleChange}
//                         required
//                         placeholder="your.email@example.com"
//                         className="text-sm sm:text-base"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="subject" className="block text-sm font-medium mb-2">
//                       Subject *
//                     </label>
//                     <Input
//                       id="subject"
//                       name="subject"
//                       value={form.subject}
//                       onChange={handleChange}
//                       required
//                       placeholder="What's this about?"
//                       className="text-sm sm:text-base"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium mb-2">
//                       Message *
//                     </label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       value={form.message}
//                       onChange={handleChange}
//                       required
//                       rows={4}
//                       className="resize-none text-sm sm:text-base"
//                       placeholder="Tell me about your project or inquiry..."
//                     />
//                   </div>

//                   <Button type="submit" size="lg" className="w-full group text-sm sm:text-base" disabled={isSubmitting}>
//                     {isSubmitting ? (
//                       <>
//                         <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         Send Message
//                         <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                       </>
//                     )}
//                   </Button>
//                 </form>
//               )}
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle, AlertCircle } from "lucide-react"

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactSection() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setForm({ name: "", email: "", subject: "", message: "" })
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (error) setError("")
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "muhammadaffansheikh21@gmail.com",
      href: "mailto:muhammadaffansheikh21@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 310 1048485",
      href: "tel:+923101048485",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Faisalabad, Pakistan",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/iaffansheikh21",
      color: "hover:text-blue-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/iaffansheikh21/",
      color: "hover:text-blue-600",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/iaffansheikh21",
      color: "hover:text-blue-400",
    },
  ]


  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="font-serif font-semibold text-xl sm:text-2xl mb-4 sm:mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology and development. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-card hover:bg-muted transition-colors duration-200 group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 flex-shrink-0">
                    <info.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground text-sm sm:text-base">{info.label}</p>
                    <p className="text-muted-foreground text-sm break-all sm:break-normal">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Follow Me</h4>
              <motion.div className="flex space-x-3 sm:space-x-4">
                {[
                  { icon: Github, href: "https://github.com/iaffansheikh21" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/iaffansheikh21/" },
                  { icon: Instagram, href: "https://instagram.com/iaffansheikh21" },
                ].map(({ icon: Icon, href }, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
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
            </div>


            {/* Availability Status */}
            <Card>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start sm:items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0 mt-1 sm:mt-0"></div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-foreground text-sm sm:text-base">Available for Projects</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Currently accepting new freelance and full-time opportunities
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="font-serif text-lg sm:text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              {isSubmitted ? (
                <div className="text-center py-6 sm:py-8">
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {error && (
                    <div className="flex items-center space-x-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                      <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                      <p className="text-sm text-destructive">{error}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className="text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="resize-none text-sm sm:text-base"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full group text-sm sm:text-base" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
