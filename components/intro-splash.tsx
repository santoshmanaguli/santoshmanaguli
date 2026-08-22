"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const NAME = "SANTOSH"

/** Letter-by-letter name intro, mirroring the reference site's opening. */
export function IntroSplash() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    const timer = setTimeout(() => setDone(true), prefersReduced ? 0 : 1600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background print:hidden"
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, hsl(var(--muted-foreground) / 0.25) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          <div className="flex flex-wrap justify-center gap-x-4 text-center">
            <div className="overflow-hidden py-2">
              {NAME.split("").map((letter, i) => (
                <motion.span
                  key={`${letter}-${i}`}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="inline-block font-mono text-4xl font-bold sm:text-6xl lg:text-8xl"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
