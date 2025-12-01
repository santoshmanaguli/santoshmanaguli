"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Linkedin, Mail, Twitter, Instagram, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/santoshmanaguli",
    icon: Github,
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/santoshmanaguli",
    icon: Linkedin,
    color: "hover:text-blue-500",
  },
  {
    name: "Twitter",
    url: "https://x.com/santoshmanguli",
    icon: Twitter,
    color: "hover:text-blue-400",
  },
  {
    name: "Email",
    url: "mailto:santoshmanaguli98@gmail.com",
    icon: Mail,
    color: "hover:text-primary",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/santoshmanaguli.in",
    icon: Instagram,
    color: "hover:text-pink-500",
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-sf-pro-bold mb-8 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat about technology. Feel free to reach
            out!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className={`${social.color} transition-colors`}
                  >
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Icon className="h-5 w-5" />
                      <span>{social.name}</span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-lg border bg-card"
          >
            <p className="text-muted-foreground mb-4">
              Prefer email? Drop me a line at
            </p>
            <Link
              href="mailto:santoshmanaguli98@gmail.com"
              className="text-xl font-semibold text-primary hover:underline"
            >
              santoshmanaguli98@gmail.com
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

