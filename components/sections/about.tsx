"use client"

import { Section } from "@/components/ui/section"

export function About() {
  return (
    <Section id="about" title="About">
      <p className="text-pretty font-mono text-sm text-muted-foreground">
        Building interfaces that hold up in production. Four years across Vue and
        React, mostly on complex multi-role products — reusable component
        systems, state management that survives growth, dashboards, payments and
        scheduling. Comfortable owning a feature from rough flow to shipped, and
        happy to lean on AI tooling to get there faster.
      </p>
    </Section>
  )
}
