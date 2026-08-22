"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { experiences, type Experience as ExperienceItem } from "@/lib/data"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

function ExperienceRow({ exp, index }: { exp: ExperienceItem; index: number }) {
  const [expanded, setExpanded] = useState(index === 0)
  const isLast = index === experiences.length - 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative"
    >
      {!isLast && (
        <div aria-hidden className="absolute bottom-0 left-5 top-10 w-px bg-muted" />
      )}

      <div className="group flex gap-4">
        <div className="relative z-10 flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-muted bg-background shadow-md">
          <span className="font-mono text-xs font-bold">{exp.initials}</span>
        </div>

        <div className="flex-1 pb-2">
          <div className="rounded-lg border border-muted bg-card p-4 shadow-sm transition-all duration-300 hover:shadow group-hover:border-muted/80">
            <div className="mb-1 flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <h3 className="text-base font-semibold">{exp.company}</h3>
              <div className="text-sm tabular-nums text-muted-foreground">
                {exp.period}
              </div>
            </div>

            <div className="mb-2 flex flex-wrap items-center gap-1">
              <span className="font-mono text-sm font-medium">{exp.role}</span>
              <div className="flex-1" />
              <Badge variant="outline">{exp.workMode}</Badge>
            </div>

            <p className="mt-2 text-sm text-muted-foreground">{exp.summary}</p>

            <div
              className={cn(
                "grid transition-all duration-300",
                expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <ul className="mt-3 space-y-1.5">
                  {exp.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-[7px] size-1 shrink-0 rounded-full bg-muted-foreground/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-1">
              {exp.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-1 py-0 text-[10px]"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground print:hidden"
            >
              {expanded ? "Show less" : `Show ${exp.highlights.length} highlights`}
              <ChevronDown
                className={cn(
                  "size-3 transition-transform duration-300",
                  expanded && "rotate-180"
                )}
              />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Experience() {
  return (
    <Section id="work" title="Work Experience">
      <div className="mt-3">
        {experiences.map((exp, index) => (
          <ExperienceRow key={exp.company} exp={exp} index={index} />
        ))}
      </div>
    </Section>
  )
}
