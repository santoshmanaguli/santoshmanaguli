import { cn } from "@/lib/utils"

type BadgeVariant = "default" | "secondary" | "outline"

const variants: Record<BadgeVariant, string> = {
  default: "border-transparent bg-primary text-primary-foreground",
  secondary:
    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60",
  outline: "text-foreground",
}

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant
}

/** Compact mono pill — the reference site's core repeating element. */
export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xs font-semibold text-nowrap transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
