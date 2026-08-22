"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Command, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about", id: "about" },
  { name: "Work", href: "#work", id: "work" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Contact", href: "#contact", id: "contact" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    navItems.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // ⌘K / Ctrl+K opens the menu, Escape closes it.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md print:hidden">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4">
          <Link href="#top" className="font-mono text-sm font-bold">
            SM
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "rounded-md px-2.5 py-1 font-mono text-xs transition-colors",
                  active === item.id
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-md border border-input bg-background px-2.5 py-1.5 font-mono text-xs transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Command className="size-3.5" />
              <span className="hidden sm:inline">Menu</span>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-background/70 p-4 pt-[20vh] backdrop-blur-sm print:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md overflow-hidden rounded-lg border border-muted bg-card shadow-lg"
          >
            <div className="flex items-center justify-between border-b border-muted px-3 py-2">
              <span className="font-mono text-xs text-muted-foreground">
                Jump to section
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="p-1.5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 font-mono text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
