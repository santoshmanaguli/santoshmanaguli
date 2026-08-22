"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FileText, Github, Instagram, Linkedin, Mail, MapPin, Twitter } from "lucide-react"
import { EMAIL, RESUME_URL, TAGLINE, socials } from "@/lib/data"

const iconMap = { Github, Linkedin, Twitter, Instagram, Mail } as const

export function Hero() {
  return (
    <motion.section
      id="top"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center justify-between gap-4"
    >
      <div className="flex-1 space-y-1.5">
        <h1 className="text-2xl font-bold">Santosh Managuli</h1>
        <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
          {TAGLINE}
        </p>
        <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
          <Link
            href="https://www.google.com/maps/place/Pune"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
          >
            <MapPin className="size-3" />
            Pune, India
          </Link>
        </p>

        <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
          {socials.map((social) => {
            const Icon = iconMap[social.icon]
            return (
              <Link
                key={social.name}
                href={social.url}
                target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.name}
                className="inline-flex size-8 items-center justify-center rounded-md border border-input bg-background transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="size-4" />
              </Link>
            )
          })}
          <Link
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md border border-input bg-background px-3 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <FileText className="size-4" />
            CV
          </Link>
        </div>

        <p className="hidden font-mono text-sm text-muted-foreground print:block">
          {EMAIL}
        </p>
      </div>

      {/* Monogram stands in for the reference's portrait. */}
      <div className="flex size-24 shrink-0 items-center justify-center rounded-full border border-muted bg-secondary shadow-sm sm:size-28">
        <span className="font-mono text-2xl font-bold tracking-tight sm:text-3xl">
          SM
        </span>
      </div>
    </motion.section>
  )
}
