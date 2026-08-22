"use client"

import { useMemo, useState } from "react"
import { Layers } from "lucide-react"
import { skillGroups } from "@/lib/data"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const ALL = "All Skills"

export function Skills() {
  const [active, setActive] = useState(ALL)

  const filters = useMemo(
    () => [
      { label: ALL, count: skillGroups.reduce((n, g) => n + g.skills.length, 0) },
      ...skillGroups.map((g) => ({ label: g.category, count: g.skills.length })),
    ],
    []
  )

  const visible = useMemo(
    () =>
      active === ALL
        ? skillGroups.flatMap((g) => g.skills)
        : (skillGroups.find((g) => g.category === active)?.skills ?? []),
    [active]
  )

  return (
    <Section id="skills" title="Skills">
      <div className="mt-2 space-y-4">
        <div className="flex flex-wrap justify-start gap-2 print:hidden">
          {filters.map((filter) => (
            <button
              key={filter.label}
              type="button"
              onClick={() => setActive(filter.label)}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300",
                active === filter.label
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted hover:bg-muted/80"
              )}
            >
              <span className="flex items-center gap-1">
                {filter.label === ALL && <Layers className="size-3.5" />}
                {filter.label}
              </span>
              <span
                className={cn(
                  "inline-flex size-4 items-center justify-center rounded-full text-[10px]",
                  active === filter.label
                    ? "bg-primary-foreground text-primary"
                    : "bg-background/70"
                )}
              >
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-1">
          {visible.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs font-medium">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </Section>
  )
}
