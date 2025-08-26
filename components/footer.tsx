"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Heart, ArrowUp, Instagram } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/iaffansheikh21",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/affansheikh21",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:muhammadaffansheikh21@gmail.com",
      label: "Email",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/iaffansheikh21",
      label: "Instagram",
    },
  ]

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-2xl text-foreground">Muhammad Affan Sheikh</h3>
            <p className="text-muted-foreground leading-relaxed">
              Full-stack developer passionate about creating exceptional digital experiences with modern web
              technologies.
            </p>
            <motion.div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
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
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 muhammadaffansheikh21@gmail.com</p>
              <p>📱 +92 310 1048485</p>
              <p>📍 Faisalabad, Pakistan</p>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-muted-foreground">Available for projects</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© 2025 Muhammad Affan Sheikh. Crafted with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and lots of ☕</span>
            </div>
            {/* <div className="text-sm text-muted-foreground">Built with Next.js ⚡ & Tailwind CSS 🎨.</div> */}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */} 
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="sm"
          className="fixed bottom-8 right-8 rounded-full p-3 shadow-lg z-50 transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </Button>
      )}
    </footer>
  )
}
