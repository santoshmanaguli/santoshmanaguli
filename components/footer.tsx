import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} Santosh Managuli. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Link
              href="https://cursor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Cursor
            </Link>
            <span>❤️</span>
            <span className="mx-2">•</span>
            <span>Built with</span>
            <span className="text-primary">Next.js</span>
            <span>and</span>
            <span className="text-primary">TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

