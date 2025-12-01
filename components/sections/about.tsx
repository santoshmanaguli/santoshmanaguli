"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-sf-pro-bold mb-12 text-center tracking-tight">
            About Me
          </h2>
          <div className="space-y-8 text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light">
            <p>
              I&apos;m a Software Engineer based in Pune, India, with a passion for
              creating exceptional digital experiences. I specialize in building
              modern web applications using cutting-edge technologies like
              Vue.js, React, and full-stack solutions.
            </p>
            <p>
              With experience in developing complex UI components, implementing
              state management solutions, and building scalable applications, I
              focus on writing clean, maintainable code that delivers both
              functionality and performance.
            </p>
            <p>
              I&apos;m always eager to learn new technologies and take on challenging
              projects that push the boundaries of what&apos;s possible in web
              development. When I&apos;m not coding, you can find me exploring new
              frameworks, contributing to open-source projects, or sharing
              knowledge with the developer community.
            </p>
            <div className="mt-12 p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm">
              <p className="text-lg sm:text-xl text-foreground leading-relaxed">
                <span className="font-semibold text-foreground">💻 Vibe Coder:</span> I&apos;m a vibe coder who embraces the power of AI tools to enhance my development workflow. I believe in using the best tools available—including AI assistants like Cursor—to write cleaner code, solve problems faster, and focus on what truly matters: building amazing experiences. AI doesn&apos;t replace creativity; it amplifies it.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

