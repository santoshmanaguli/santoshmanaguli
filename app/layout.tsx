import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://santoshmanaguli.vercel.app"),
  title: {
    default: "Santosh Managuli | Software Engineer",
    template: "%s | Santosh Managuli",
  },
  description: "Software Engineer specializing in modern web development with Vue.js, React, and full-stack solutions",
  keywords: [
    "Software Engineer",
    "Web Developer",
    "Vue.js",
    "React",
    "Full Stack Developer",
    "Pune",
    "Frontend Developer",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Santosh Managuli" }],
  creator: "Santosh Managuli",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://santoshmanaguli.vercel.app",
    title: "Santosh Managuli | Software Engineer",
    description: "Software Engineer specializing in modern web development with Vue.js, React, and full-stack solutions",
    siteName: "Santosh Managuli",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santosh Managuli | Software Engineer",
    description: "Software Engineer specializing in modern web development",
    creator: "@santoshmanguli",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

