"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentText, setCurrentText] = useState(0)

  const loadingTexts = ["Muhammad Affan Sheikh", "Full Stack Developer", "Building Amazing Experiences"]

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length)
    }, 800)

    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      clearInterval(textInterval)
      clearTimeout(loadingTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-full h-full border-4 border-primary/20 border-t-primary rounded-full"
                />
              </div>
            </motion.div>

            <motion.h1
              key={currentText}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4"
            >
              {loadingTexts[currentText]}
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto max-w-xs"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
