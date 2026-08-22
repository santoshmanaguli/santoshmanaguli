import { cn } from "@/lib/utils"

interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("flex min-h-0 scroll-mt-16 flex-col gap-y-3", className)}
    >
      <h2 className="text-xl font-bold">{title}</h2>
      {children}
    </section>
  )
}
