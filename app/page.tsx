import { Navigation } from "@/components/navigation"
import { IntroSplash } from "@/components/intro-splash"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Skills } from "@/components/sections/skills"
import { Education } from "@/components/sections/education"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <IntroSplash />
      <Navigation />
      <main className="mx-auto w-full max-w-4xl space-y-8 px-4 pb-16 pt-24 print:space-y-6 print:pt-0">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
