"use client"

import { HeroSection } from "@/components/hero-section"
import { ProjectsShowcase } from "@/components/projects-showcase"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {LoadingScreen} from "@/components/loading-screen"
import {ScrollToTop} from "@/components/scroll-to-top"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.2 }}
        className="min-h-screen bg-background"
      >
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsShowcase />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </motion.main>
    </>
  )
}
