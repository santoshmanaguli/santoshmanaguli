export const RESUME_URL =
  "https://docs.google.com/document/d/1THc7Fmxj7NFQYTPzXTCSUL1bcKmn5RYO/edit"

export const EMAIL = "santoshmanaguli98@gmail.com"

export const socials = [
  { name: "GitHub", url: "https://github.com/santoshmanaguli", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/santoshmanaguli", icon: "Linkedin" },
  { name: "Twitter", url: "https://x.com/santoshmanguli", icon: "Twitter" },
  { name: "Instagram", url: "https://instagram.com/santoshmanaguli.in", icon: "Instagram" },
  { name: "Email", url: `mailto:${EMAIL}`, icon: "Mail" },
] as const

export const TAGLINE =
  "Software Engineer, building modern web applications with Vue and React"

export const stats = [
  { value: "4+", label: "Years building" },
  { value: "3", label: "Companies" },
  { value: "20+", label: "Features shipped" },
]

export const stack = [
  "TypeScript",
  "Vue.js",
  "React",
  "Next.js",
  "Vuex",
  "Redux",
  "Angular",
  "RxJS",
  "Tailwind",
  "Vuetify",
  "Node.js",
  "Chart.js",
  "Stripe",
  "OpenAI API",
]

export interface Experience {
  company: string
  /** Initials shown in the timeline avatar. */
  initials: string
  url?: string
  role: string
  /** Rendered as a small badge, e.g. "On Site" / "Remote". */
  workMode: string
  location: string
  period: string
  summary: string
  highlights: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    company: "Trinesis",
    initials: "TR",
    workMode: "On Site",
    role: "Software Engineer L2",
    location: "Pune, India",
    period: "Feb 2022 — Oct 2024",
    summary:
      "Promoted from Software Engineer to L2 while owning large parts of a multi-role Vue application, from its task manager to its AI assistant.",
    highlights: [
      "Built a multi-functional task manager serving several user roles, with complex reusable UI components and Vuex state management",
      "Shipped a data-visualisation dashboard with Highcharts-Vue and a Google-Calendar-style scheduling component on Vuetify",
      "Developed the core MVP of the product's AI assistant using prompt engineering against the OpenAI API",
      "Integrated Stripe and redesigned the payments UI end to end, fully responsive",
      "Optimised performance through lazy loading and component-level code splitting",
      "Added social sign-in (Google, Facebook) and integrated backend APIs across the app",
    ],
    technologies: [
      "JavaScript",
      "Vue.js",
      "Vuex",
      "Vuetify",
      "vue-router",
      "Angular",
      "RxJS",
      "React.js",
      "Redux",
      "Chart.js",
    ],
  },
  {
    company: "Mobiloitte",
    initials: "MO",
    workMode: "Remote",
    role: "Freelance Developer",
    location: "Remote",
    period: "2021 — 2022",
    summary:
      "Contract work on ushacook.com, focused on the customer-facing storefront.",
    highlights: [
      "Developed the web app with Vue.js and Vuex",
      "Improved perceived performance and overall user experience",
    ],
    technologies: ["Vue.js", "Vuex", "JavaScript"],
  },
  {
    company: "Indegene",
    initials: "IN",
    workMode: "On Site",
    role: "UI Developer",
    location: "Pune, India",
    period: "2020 — 2021",
    summary:
      "First engineering role, building interactive interfaces for healthcare products.",
    highlights: [
      "Built responsive, interactive interfaces with React.js and JavaScript",
      "Integrated REST APIs with backend teams and tuned application performance",
      "Kept code maintainable through disciplined state management and component reuse",
    ],
    technologies: ["React.js", "Redux", "Material-UI", "JavaScript"],
  },
]

export const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "React.js",
      "Angular",
      "Next.js",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "State & Data",
    skills: ["Vuex", "Redux", "RxJS", "REST APIs", "Chart.js", "Highcharts"],
  },
  {
    category: "Styling",
    skills: ["Tailwind CSS", "Vuetify", "Material-UI", "Bootstrap", "SCSS"],
  },
  {
    category: "Tooling",
    skills: ["Git", "Vue CLI", "Vite", "Node.js", "Stripe", "OpenAI API"],
  },
]
