import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mx-auto w-full max-w-4xl px-4 pb-10 print:hidden">
      <div className="flex flex-col items-center justify-between gap-2 border-t border-muted pt-6 font-mono text-xs text-muted-foreground sm:flex-row">
        <p>© {currentYear} Santosh Managuli</p>
        <p>
          Built with <span className="text-foreground">Next.js</span> and{" "}
          <Link
            href="https://cursor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:underline"
          >
            Cursor
          </Link>
        </p>
      </div>
    </footer>
  )
}
