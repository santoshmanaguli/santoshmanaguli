"use client"

import Link from "next/link"
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react"
import { EMAIL, socials } from "@/lib/data"
import { Section } from "@/components/ui/section"

const iconMap = { Github, Linkedin, Twitter, Instagram, Mail } as const

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="text-pretty font-mono text-sm text-muted-foreground">
        Open to new roles and freelance work. Reach me at{" "}
        <Link
          href={`mailto:${EMAIL}`}
          className="text-foreground underline underline-offset-4 hover:no-underline"
        >
          {EMAIL}
        </Link>
        .
      </p>

      <div className="mt-2 flex flex-wrap gap-1 print:hidden">
        {socials
          .filter((social) => social.name !== "Email")
          .map((social) => {
            const Icon = iconMap[social.icon]
            return (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-input bg-background px-2.5 py-1 font-mono text-xs transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="size-3.5" />
                {social.name}
              </Link>
            )
          })}
      </div>
    </Section>
  )
}
