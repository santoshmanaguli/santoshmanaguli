"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"

export function Education() {
  return (
    <Section id="education" title="Education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
        className="mt-1 space-y-4"
      >
        <Card>
          <div className="flex flex-col space-y-1.5">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="font-semibold leading-none">Pune University</h3>
              <div className="text-sm tabular-nums text-muted-foreground">
                2016 - 2020
              </div>
            </div>
          </div>
          <div className="mt-2 text-pretty font-mono text-sm text-muted-foreground">
            Bachelor&apos;s Degree, Computer Science
          </div>
        </Card>
      </motion.div>
    </Section>
  )
}
