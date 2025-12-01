"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "Trinesis",
    role: "Software Engineer L2",
    location: "Pune, India",
    period: "Feb 2022 - Oct 2024",
    description: [
      "Promoted from Software Engineer to Software Engineer L2, demonstrating consistent performance and technical growth",
      "Implemented complex UI and reusable components in the app for better optimization and handled state management using Vuex",
      "Built a multi-functional task manager feature which would handle multiple users according to their roles",
      "Built a data visualization dashboard using Highchartsvue",
      "Built a feature wherein we integrated a Google calendar-like calendar component from Vuetify which would support multiple features",
      "Developed the core MVP of the app's AI Assistant using prompt engineering with OpenAI API",
      "Integrated Stripe for payment gateway and also redesigned the whole UI for the app's payment page with responsiveness",
      "Maintained the responsive design of the app using CSS libraries like Bootstrap, Vuetify and also using media queries across all devices",
      "Built various features for various roles according to application demand",
      "Streamlined existing processes, resulting in increased efficiency and reduced operational costs",
      "Performance optimization and lazy loading of components",
      "Built responsive web apps and integrated backend API for smooth working of the application",
      "Integration of social accounts to the web application like Login with Google/Facebook",
    ],
    technologies: [
      "JavaScript",
      "Vue.js",
      "Vuex",
      "Vuetify",
      "vue-router",
      "Vue CLI",
      "Angular",
      "RxJs",
      "Angular Material",
      "React.js",
      "Redux",
      "Chart.js",
    ],
  },
  {
    company: "Mobiloitte",
    role: "Freelance Developer",
    location: "Remote",
    period: "2021 - 2022",
    description: [
      "Helped in developing webapp using Vue.js and Vuex for ushacook.com",
      "Enhanced user experience and performance of the application",
    ],
    technologies: ["Vue.js", "Vuex", "JavaScript"],
  },
  {
    company: "Indegene",
    role: "UI Developer",
    location: "Pune, India",
    period: "2020 - 2021",
    description: [
      "Developed interactive, responsive user interfaces using React.js and JavaScript",
      "Collaborated with backend teams to integrate REST APIs and optimize application performance",
      "Ensured code quality and maintainability by following best practices in state management, component reusability, and UI optimization",
    ],
    technologies: ["React.js", "Redux", "Material-UI", "JavaScript"],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{exp.role}</CardTitle>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                        </div>
                        <div className="mt-2">
                          <span className="text-sm text-muted-foreground">
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

