"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  if (!mounted) return null

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <p className="text-base md:text-lg text-muted-foreground mb-6 font-medium tracking-tight">
              Hello, I&apos;m
            </p>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-sf-pro-bold mb-8 text-foreground tracking-tight leading-none"
          >
            Santosh Managuli
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-muted-foreground mb-12 tracking-tight"
          >
            Software Engineer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Building modern, scalable web applications with a focus on user
            experience and performance. Passionate about clean code and
            innovative solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="text-base px-8 py-6 h-auto"
            >
              <Link
                href="https://docs.google.com/document/d/1THc7Fmxj7NFQYTPzXTCSUL1bcKmn5RYO/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                View Resume
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 py-6 h-auto"
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <Link
              href="#about"
              className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown className="h-6 w-6 animate-bounce" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

