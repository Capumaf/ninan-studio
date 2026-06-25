import type { Dictionary } from "./i18n.types"

export const en: Dictionary = {
  hero: {
    t1: "Digital systems",
    t2: "for startups.",
    t3: "Built with clarity.",
    t4: "Digital Product Builder",

    p1: "I build modern digital systems across frontend interfaces, product workflows, automation and startup operations.",
    p2: "NINAN is an independent digital practice combining frontend development, product thinking, AI-assisted workflows and business execution for startups and growing teams.",

    start: "Start a project",
    view: "Selected work",

    based: "Based between Europe and LATAM",

    issue: "Independent digital practice",
    place: "Remote — Europe / LATAM",
    est: "Focused on startup execution",

    principle: "Capabilities",

    m1: "Product systems & startup workflows",
    m2: "Frontend interfaces & UI implementation",
    m3: "AI-assisted operations & automation",

    available: "Available for roles, freelance and selected collaborations",
  },

  nav: {
    about: "About",
    work: "Work",
    services: "Capabilities",
    process: "Process",
    contact: "Contact",
    processCta: "Process",
    contactCta: "Contact",
    menu: "Menu",
    close: "Close",
  },

  about: {
  kicker: "ABOUT",
  title: "NINAN Studio is an independent digital practice by\u00A0Cesar\u00A0Pumayalla — a digital product builder with a Master in Innovation & Design Management, combining strategic thinking, visual design and modern web development to build products, systems and workflows that actually work for startups and growing teams.",
  p1: "Design, code and ship.",
  bullets: [
    "Technology — Frontend systems built with Next.js, React and TypeScript.",
    "Product — User flows, MVP thinking and structured execution.",
    "Automation — AI-assisted workflows and operational efficiency.",
    "Operations — Processes, coordination and systems that support growth.",
  ],
},

  work: {
    kickerLeft: "SELECTED",
    kickerRight: "WORK",
    title: "Work",
    desc: "Digital products, frontend interfaces, AI workflows and production websites.",
    more: "Additional context, demos and project details are available on request.",
    sideNote: "Startup-oriented execution across product, frontend and operations.",
    viewLive: "View Project",
    linkOnRequest: "Repo or demo on request.",
    items: [
      {
        id: "romia",
        name: "ROMIA — AI-assisted real estate workflow system",
        meta: "AI workflows · Lead qualification · Sales operations",
        status: "ACTIVE DEVELOPMENT",
        description:
          "A product-oriented workflow system designed for real estate sales operations. ROMIA combines conversational AI, lead qualification logic, appointment classification and follow-up workflows to support sales teams and improve client handling across digital channels.",
          href: "https://romia.io",

      },
      {
        id: "amazon-fba",
        name: "Amazon FBA Operations — sourcing & logistics system",
        meta: "Product operations · Internal OS · Logistics workflows",
        status: "ACTIVE BUSINESS CASE",
        description:
          "End-to-end operation of a private-label Amazon FBA product — the DV180, Magnetic Dryer Vent Connector Kit: supplier research and coordination, sample evaluation, multi-warehouse shipment management, and an internal system (Commerce OS) built with Next.js + Prisma + PostgreSQL to track inventory, costs, PPC campaigns, and margins in real time.",
        href: "https://ninancommerce.com",
        image: "/work/NinanCommerce-Desktop.webp",
        previews: [{ src: "/work/NinanCommerce-responsive.webp", alt: "Responsive Preview" }],
      },

      {
       id: "ingrid",
        name: "Ingrid Pumayalla — artist portfolio",
        meta: "Next.js 15 · GSAP · Canvas animations · i18n EN/ES",
        status: "PRODUCTION IN PROGRESS",
         description: "A bilingual artist portfolio built with Next.js 15 and JavaScript, featuring custom GSAP canvas animations, quipu-inspired motion design, responsive image galleries and full EN/ES i18n.",
  href: "https://ingridpumayalla.com",
},


      {
        id: "pp",
        name: "P&P Remodeling — production website",
        meta: "Next.js + TypeScript · Structured pages · Real deploy",
        status: "SHIPPED",
        description:
          "A production website built with Next.js and TypeScript, designed around clear page structure, fast loading and readable content flow. Delivered with a maintainable component setup and deployed on Vercel.",
        href: "https://www.pnp-remodeling.com/",
        image: "/work/P&Premodeling-Desktop.webp",
        previews: [{ src: "/work/P&Premodeling-responsive.webp", alt: "P&P Remodeling responsive preview" }],
      },
      {
        id: "guillermo",
        name: "Psychotherapy practice website",
        meta: "Production delivery · Content structure · Accessibility details",
        status: "SHIPPED",
        description:
          "A calm, content-led website designed to support clarity and trust. The implementation prioritizes readable typography, clean hierarchy and a structure prepared for SEO and long-term maintainability.",
        href: "https://guillermo-rios.com",
        image: "/work/Psychotherapy-Desktop.webp",
        previews: [{ src: "/work/Psychotherapy-Mobile.webp", alt: "Psychotherapy mobile preview" }],
      },
      
    ],
  },

  services: {
    kicker: "CAPABILITIES",
    title: "Where I bring the most value",
    intro: "I work best at the intersection of product, frontend, automation and business execution — especially for startups and growing digital teams.",
    howItWorks: {
      kicker: "HOW I WORK",
      bullets: [
        "Clarify the business goal and user workflow",
        "Structure the product, content and execution path",
        "Build, validate and improve with practical delivery",
      ],
      cta: "See work",
    },
    blocks: [
      {
        title: "Product systems & startup workflows",
        time: "PRODUCT",
        desc: "Product-oriented thinking across digital workflows, operational systems and early-stage execution.",
        bullets: [
          "User flows, product structure and MVP logic",
          "Sales, onboarding and operational workflows",
          "Clear execution between idea, system and delivery",
        ],
        cta: "View systems",
      },
      {
        title: "Frontend interfaces & UI implementation",
        time: "FRONTEND",
        desc: "Modern frontend implementation for websites, interfaces and digital product experiences.",
        bullets: [
          "Next.js, React, TypeScript and Tailwind",
          "Responsive layouts with clear hierarchy",
          "Production-ready UI and performance fundamentals",
        ],
        cta: "View projects",
      },
      {
        title: "AI-assisted workflows & automation",
        time: "AI / OPS",
        desc: "Workflow thinking around automation, lead qualification, follow-ups and operational support.",
        bullets: [
          "AI-assisted customer interaction flows",
          "Lead qualification and classification logic",
          "Automation systems for sales and operations",
        ],
        cta: "View ROMIA",
      },
    ],
    close: "I'm interested in roles and collaborations across product, business development, marketing technology, startup operations and frontend/product execution.",
  },

  process: {
    kicker: "PROCESS",
    title: "How I work",
    intro: "A clear workflow focused on structure, product thinking and practical delivery.",
    intro2: "From business context to execution, the process stays focused on clarity, useful systems and measurable progress.",
    rail: [
      { title: "Structure", body: "Define the goal, reduce ambiguity and create a cleaner foundation before building." },
      { title: "Execution", body: "Translate decisions into interfaces, workflows and systems that are useful in real business contexts." },
    ],
    toggleOpen: "Open",
    toggleView: "View",
    footer: "Focus: useful systems, clear workflows and shipped results.",
    steps: [
      {
        step: "STEP 01",
        title: "Context & goals",
        desc: "Understand the business problem, user need and operational context before defining the solution.",
        bullets: ["Business goal", "User journey", "Operational constraints"],
      },
      {
        step: "STEP 02",
        title: "Structure & strategy",
        desc: "Organize the information, workflow and execution path into a clear system.",
        bullets: ["Product structure", "Workflow map", "Content and interface hierarchy"],
      },
      {
        step: "STEP 03",
        title: "Build & implement",
        desc: "Translate the strategy into frontend interfaces, workflow logic or operational systems.",
        bullets: ["Frontend implementation", "Automation logic", "QA and iteration"],
      },
      {
        step: "STEP 04",
        title: "Launch & improve",
        desc: "Deploy, validate and improve through focused iteration.",
        bullets: ["Deploy or handoff", "Feedback loop", "Refinement and next steps"],
      },
    ],
  },

  footer: {
    brand: "CESAR PUMAYALLA",
    claim: "Independent digital practice building product systems, frontend interfaces and AI-assisted workflows.",
    links: {
      items: [
        { label: "WORK", href: "/en#work" },
        { label: "GITHUB", href: "https://github.com/Capumaf" },
        { label: "LINKEDIN", href: "https://www.linkedin.com/in/cesarpumayalla/" },
        { label: "EMAIL", href: "mailto:cesarpumayalla@ninan-studio.com" },
      ],
    },
    contact: {
      email: "cesarpumayalla@ninan-studio.com",
      location: "Berlin, Germany · Available for Germany / EU · Full-time / Contract / Freelance",
    },
    bottom: "© 2026 Cesar Pumayalla — Ninan Studio.",
  },

  contact: {
    kicker: "CONTACT",
    title: "Let's discuss the right fit",
    body: "For roles, freelance work, business development, product collaborations or selected digital projects, feel free to reach out with brief context.",
    ctaEmail: "Email",
    ctaWhatsapp: "WhatsApp",
    form: {
      name: "Name",
      email: "Email",
      details: "Message / role details",
      submit: "Send",
    },
    footerNote: "Berlin · EN / DE / ES · Response time: 24–48h",
  },
}