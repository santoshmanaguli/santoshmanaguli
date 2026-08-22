import { cn } from "@/lib/utils"

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-muted bg-card p-4 text-card-foreground shadow-sm transition-all duration-300 hover:shadow",
        className
      )}
      {...props}
    />
  )
}
