export const languages = ["en", "de", "es"] as const
export type Lang = (typeof languages)[number]

export type Dictionary = {
  hero: {
    t1: string; t2: string; t3: string; t4: string
    p1: string; p2: string; start: string; view: string
    based: string; issue: string; place: string; est: string
    principle: string; m1: string; m2: string; m3: string; available: string
  }

  nav: {
    about: string; work: string; services: string; process: string
    contact: string; processCta: string; contactCta: string
    menu: string; close: string
  }

  about: {
    kicker: string; title: string; p1: string; p2: string
    bullets: readonly string[]
  }

  work: {
    kickerLeft: string; kickerRight: string; title: string; desc: string
    more: string; sideNote: string; viewLive: string; linkOnRequest: string
    items: readonly {
      id: string; name: string; meta: string; status: string
      description: string; href?: string
      image?: string
      previews?: readonly { src: string; alt: string }[]
    }[]
  }

  services: {
    kicker: string; title: string; intro: string
    howItWorks: { kicker: string; bullets: readonly string[]; cta: string }
    blocks: readonly {
      title: string; time: string; desc: string
      bullets: readonly string[]; cta: string
    }[]
    close: string
  }

  process: {
    kicker: string
    title: string
    intro: string
    intro2: string
    rail: readonly { title: string; body: string }[]
    toggleOpen: string
    toggleView: string
    footer: string
    steps: readonly {
      step: string
      title: string
      desc: string
      bullets: readonly string[]
    }[]
  }

  footer: {
    brand: string; claim: string
    links: { items: readonly { label: string; href: string }[] }
    contact: { email: string; location: string }
    bottom: string
  }

  contact: {
    kicker: string; title: string; body: string
    ctaEmail: string; ctaWhatsapp: string
    form: { name: string; email: string; details: string; submit: string }
    footerNote: string
  }
}

export const i18n = {
  en: {
    hero: {
      t1: "Digital systems",
      t2: "for startups.",
      t3: "Built with clarity.",
      t4: "Product / Frontend / AI Workflows",

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
      title: "A startup-focused digital builder working across product, frontend, automation and operations.",
      p1: "I’m Cesar Pumayalla — a multidisciplinary digital builder with experience across frontend development, product-oriented systems, business workflows and startup execution. My work connects interface implementation with practical business needs, operational structure and clear user journeys.",
      p2: "I bring together frontend skills, marketing background, logistics exposure, AI workflow experimentation and product thinking. This allows me to support teams not only by building interfaces, but also by understanding how digital systems support sales, operations, communication and growth.",
      bullets: [
        "Frontend: Next.js, React, TypeScript, Tailwind and responsive UI systems",
        "Product: user flows, information structure, MVP thinking and execution",
        "Automation: AI-assisted workflows, lead qualification and operational logic",
        "Business: marketing, startup operations, logistics coordination and client communication",
      ],
    },

    work: {
      kickerLeft: "SELECTED",
      kickerRight: "WORK",
      title: "Work",
      desc: "Digital systems, frontend interfaces, AI workflows and production websites.",
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
        },
        {
          id: "amazon-fba",
          name: "Amazon FBA Operations — sourcing & logistics system",
          meta: "Product operations · Supplier coordination · Logistics workflows",
          status: "ACTIVE BUSINESS CASE",
          description:
            "Operational work around a private-label Amazon FBA product, including supplier coordination, sample evaluation, inspection planning, shipping workflows and fulfillment preparation. The project shows business execution, logistics understanding and structured operational thinking.",
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
          previews: [
            {
              src: "/work/P&Premodeling-responsive.webp",
              alt: "P&P Remodeling responsive preview",
            },
          ],
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
          previews: [
            {
              src: "/work/Psychotherapy-Mobile.webp",
              alt: "Psychotherapy mobile preview",
            },
          ],
        },
        {
          id: "rfc-abogados",
          name: "RFC Abogados — landing in production",
          meta: "WordPress / Elementor · Custom HTML/CSS blocks · SEO basics",
          status: "SHIPPED",
          description:
            "Landing page for a legal firm built in WordPress with Elementor and custom HTML/CSS sections. The work focused on content hierarchy, clarity and practical production delivery within real business constraints.",
          href: "https://rfcabogados.com/",
          image: "/work/RFC-Desktop.webp",
          previews: [
            {
              src: "/work/RFC-Mobile.webp",
              alt: "RFC mobile preview",
            },
          ],
        },
      ],
    },

    services: {
      kicker: "CAPABILITIES",
      title: "Where I bring the most value",
      intro:
        "I work best at the intersection of product, frontend, automation and business execution — especially for startups and growing digital teams.",
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
      close:
        "I’m interested in roles and collaborations across product, business development, marketing technology, startup operations and frontend/product execution.",
    },

    process: {
      kicker: "PROCESS",
      title: "How I work",
      intro: "A clear workflow focused on structure, product thinking and practical delivery.",
      intro2:
        "From business context to execution, the process stays focused on clarity, useful systems and measurable progress.",
      rail: [
        {
          title: "Structure",
          body: "Define the goal, reduce ambiguity and create a cleaner foundation before building.",
        },
        {
          title: "Execution",
          body: "Translate decisions into interfaces, workflows and systems that are useful in real business contexts.",
        },
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
      title: "Let’s discuss the right fit",
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
  },

  de: {
    hero: {
      t1: "Digitale Systeme",
      t2: "für Startups.",
      t3: "Klar umgesetzt.",
      t4: "Product / Frontend / AI Workflows",

      p1: "Ich baue moderne digitale Systeme über Frontend-Interfaces, Produkt-Workflows, Automatisierung und Startup Operations hinweg.",
      p2: "NINAN ist eine unabhängige digitale Praxis, die Frontend Development, Product Thinking, AI-assisted Workflows und Business Execution verbindet.",

      start: "Projekt starten",
      view: "Ausgewählte Arbeiten",

      based: "Zwischen Europa und LATAM",

      issue: "Unabhängige digitale Praxis",
      place: "Remote — Europa / LATAM",
      est: "Fokus auf Startup Execution",

      principle: "Fähigkeiten",

      m1: "Product Systems & Startup Workflows",
      m2: "Frontend Interfaces & UI Implementation",
      m3: "AI-assisted Operations & Automation",

      available: "Verfügbar für Rollen, Freelance und ausgewählte Kollaborationen",
    },

    nav: {
      about: "Über",
      work: "Arbeiten",
      services: "Fähigkeiten",
      process: "Prozess",
      contact: "Kontakt",
      processCta: "Prozess",
      contactCta: "Kontakt",
      menu: "Menü",
      close: "Schließen",
    },

    about: {
      kicker: "ÜBER",
      title: "Ein startup-orientierter Digital Builder an der Schnittstelle von Product, Frontend, Automation und Operations.",
      p1: "Ich bin Cesar Pumayalla — ein multidisziplinärer Digital Builder mit Erfahrung in Frontend Development, produktorientierten Systemen, Business Workflows und Startup Execution.",
      p2: "Ich verbinde Frontend-Skills, Marketing-Background, Logistik-Erfahrung, AI-Workflow-Experimente und Product Thinking. Dadurch kann ich Teams nicht nur beim Bau von Interfaces unterstützen, sondern auch verstehen, wie digitale Systeme Sales, Operations, Kommunikation und Wachstum unterstützen.",
      bullets: [
        "Frontend: Next.js, React, TypeScript, Tailwind und responsive UI-Systeme",
        "Product: User Flows, Informationsstruktur, MVP Thinking und Execution",
        "Automation: AI-assisted Workflows, Lead Qualification und operative Logik",
        "Business: Marketing, Startup Operations, Logistik-Koordination und Client Communication",
      ],
    },

    work: {
      kickerLeft: "AUSGEWÄHLTE",
      kickerRight: "ARBEITEN",
      title: "Arbeiten",
      desc: "Digitale Systeme, Frontend Interfaces, AI Workflows und Production Websites.",
      more: "Weitere Kontexte, Demos und Projektdetails sind auf Anfrage verfügbar.",
      sideNote: "Startup-orientierte Umsetzung über Product, Frontend und Operations.",
      viewLive: "Projekt ansehen",
      linkOnRequest: "Repo oder Demo auf Anfrage.",
      items: [
        {
          id: "romia",
          name: "ROMIA — AI-assisted Real Estate Workflow System",
          meta: "AI Workflows · Lead Qualification · Sales Operations",
          status: "AKTIVE ENTWICKLUNG",
          description:
            "Ein produktorientiertes Workflow-System für Real Estate Sales Operations. ROMIA kombiniert Conversational AI, Lead-Qualification-Logik, Appointment Classification und Follow-up Workflows, um Sales Teams zu unterstützen.",
        },
        {
          id: "amazon-fba",
          name: "Amazon FBA Operations — Sourcing & Logistics System",
          meta: "Product Operations · Supplier Coordination · Logistics Workflows",
          status: "AKTIVER BUSINESS CASE",
          description:
            "Operative Arbeit rund um ein Private-Label Amazon FBA Produkt, einschließlich Supplier Coordination, Sample Evaluation, Inspection Planning, Shipping Workflows und Fulfillment Preparation.",
        },
        {
          id: "pp",
          name: "P&P Remodeling — Production Website",
          meta: "Next.js + TypeScript · Strukturierte Seiten · Real Deploy",
          status: "GELIEFERT",
          description:
            "Eine Production Website mit Next.js und TypeScript, aufgebaut rund um klare Seitenstruktur, schnelle Ladezeiten und lesbaren Content-Flow.",
          href: "https://www.pnp-remodeling.com/",
          image: "/work/P&Premodeling-Desktop.webp",
          previews: [
            {
              src: "/work/P&Premodeling-responsive.webp",
              alt: "P&P Remodeling responsive preview",
            },
          ],
        },
        {
          id: "guillermo",
          name: "Website für Psychotherapie-Praxis",
          meta: "Production Delivery · Content-Struktur · Accessibility-Details",
          status: "GELIEFERT",
          description:
            "Eine ruhige, content-getriebene Website, die Klarheit und Vertrauen unterstützen soll.",
          href: "https://guillermo-rios.com",
          image: "/work/Psychotherapy-Desktop.webp",
          previews: [
            {
              src: "/work/Psychotherapy-Mobile.webp",
              alt: "Psychotherapy mobile preview",
            },
          ],
        },
        {
          id: "rfc-abogados",
          name: "RFC Abogados — Landing in Production",
          meta: "WordPress / Elementor · Custom HTML/CSS Blocks · SEO Basics",
          status: "GELIEFERT",
          description:
            "Landing Page für eine Kanzlei, umgesetzt in WordPress mit Elementor und Custom HTML/CSS Sections.",
          href: "https://rfcabogados.com/",
          image: "/work/RFC-Desktop.webp",
          previews: [
            {
              src: "/work/RFC-Mobile.webp",
              alt: "RFC mobile preview",
            },
          ],
        },
      ],
    },

    services: {
      kicker: "FÄHIGKEITEN",
      title: "Wo ich den größten Mehrwert bringe",
      intro:
        "Ich arbeite am stärksten an der Schnittstelle von Product, Frontend, Automation und Business Execution — besonders für Startups und wachsende digitale Teams.",
      howItWorks: {
        kicker: "ARBEITSWEISE",
        bullets: [
          "Business Goal und User Workflow klären",
          "Product, Content und Execution Path strukturieren",
          "Bauen, validieren und pragmatisch verbessern",
        ],
        cta: "Projekte ansehen",
      },
      blocks: [
        {
          title: "Product Systems & Startup Workflows",
          time: "PRODUCT",
          desc: "Produktorientiertes Denken über digitale Workflows, operative Systeme und Early-stage Execution.",
          bullets: [
            "User Flows, Product Structure und MVP Logic",
            "Sales, Onboarding und Operational Workflows",
            "Klare Umsetzung zwischen Idee, System und Delivery",
          ],
          cta: "Systeme ansehen",
        },
        {
          title: "Frontend Interfaces & UI Implementation",
          time: "FRONTEND",
          desc: "Moderne Frontend-Umsetzung für Websites, Interfaces und digitale Product Experiences.",
          bullets: [
            "Next.js, React, TypeScript und Tailwind",
            "Responsive Layouts mit klarer Hierarchie",
            "Production-ready UI und Performance Fundamentals",
          ],
          cta: "Projekte ansehen",
        },
        {
          title: "AI-assisted Workflows & Automation",
          time: "AI / OPS",
          desc: "Workflow Thinking rund um Automatisierung, Lead Qualification, Follow-ups und operative Unterstützung.",
          bullets: [
            "AI-assisted Customer Interaction Flows",
            "Lead Qualification und Classification Logic",
            "Automation Systems für Sales und Operations",
          ],
          cta: "ROMIA ansehen",
        },
      ],
      close:
        "Ich interessiere mich für Rollen und Kollaborationen in Product, Business Development, Marketing Technology, Startup Operations und Frontend/Product Execution.",
    },

    process: {
      kicker: "PROZESS",
      title: "Wie ich arbeite",
      intro: "Ein klarer Workflow mit Fokus auf Struktur, Product Thinking und pragmatische Delivery.",
      intro2:
        "Vom Business Context bis zur Umsetzung bleibt der Prozess auf Klarheit, nützliche Systeme und messbaren Fortschritt ausgerichtet.",
      rail: [
        {
          title: "Struktur",
          body: "Das Ziel definieren, Unklarheit reduzieren und vor der Umsetzung eine saubere Grundlage schaffen.",
        },
        {
          title: "Execution",
          body: "Entscheidungen in Interfaces, Workflows und Systeme übersetzen, die in realen Business-Kontexten nützlich sind.",
        },
      ],
      toggleOpen: "Offen",
      toggleView: "Ansehen",
      footer: "Fokus: nützliche Systeme, klare Workflows und gelieferte Ergebnisse.",
      steps: [
        {
          step: "SCHRITT 01",
          title: "Kontext & Ziele",
          desc: "Business Problem, User Need und operativen Kontext verstehen, bevor die Lösung definiert wird.",
          bullets: ["Business Goal", "User Journey", "Operational Constraints"],
        },
        {
          step: "SCHRITT 02",
          title: "Struktur & Strategie",
          desc: "Information, Workflow und Execution Path in ein klares System bringen.",
          bullets: ["Product Structure", "Workflow Map", "Content- und Interface-Hierarchie"],
        },
        {
          step: "SCHRITT 03",
          title: "Build & Implementierung",
          desc: "Strategie in Frontend Interfaces, Workflow Logic oder operative Systeme übersetzen.",
          bullets: ["Frontend Implementation", "Automation Logic", "QA und Iteration"],
        },
        {
          step: "SCHRITT 04",
          title: "Launch & Verbesserung",
          desc: "Deployen, validieren und durch fokussierte Iteration verbessern.",
          bullets: ["Deploy oder Handoff", "Feedback Loop", "Refinement und Next Steps"],
        },
      ],
    },

    footer: {
      brand: "CESAR PUMAYALLA",
      claim: "Unabhängige digitale Praxis für Product Systems, Frontend Interfaces und AI-assisted Workflows.",
      links: {
        items: [
          { label: "ARBEITEN", href: "/de#work" },
          { label: "GITHUB", href: "https://github.com/Capumaf" },
          { label: "LINKEDIN", href: "https://www.linkedin.com/in/cesarpumayalla/" },
          { label: "EMAIL", href: "mailto:cesarpumayalla@ninan-studio.com" },
        ],
      },
      contact: {
        email: "cesarpumayalla@ninan-studio.com",
        location: "Berlin, Deutschland · Verfügbar für DE / EU · Full-time / Contract / Freelance",
      },
      bottom: "© 2026 Cesar Pumayalla — Ninan Studio.",
    },

    contact: {
      kicker: "KONTAKT",
      title: "Lass uns über den passenden Fit sprechen",
      body: "Für Rollen, Freelance-Projekte, Business Development, Product Collaborations oder ausgewählte digitale Projekte kannst du mir gern mit etwas Kontext schreiben.",
      ctaEmail: "E-Mail",
      ctaWhatsapp: "WhatsApp",
      form: {
        name: "Name",
        email: "E-Mail",
        details: "Nachricht / Rollen-Details",
        submit: "Senden",
      },
      footerNote: "Berlin · EN / DE / ES · Antwortzeit: 24–48h",
    },
  },

  es: {
    hero: {
      t1: "Sistemas digitales",
      t2: "para startups.",
      t3: "Construidos con claridad.",
      t4: "Producto / Frontend / AI Workflows",

      p1: "Construyo sistemas digitales modernos entre interfaces frontend, flujos de producto, automatización y operaciones para startups.",
      p2: "NINAN es una práctica digital independiente que combina desarrollo frontend, pensamiento de producto, workflows con IA y ejecución de negocio para startups y equipos en crecimiento.",

      start: "Iniciar proyecto",
      view: "Trabajos seleccionados",

      based: "Entre Europa y LATAM",

      issue: "Práctica digital independiente",
      place: "Remote — Europa / LATAM",
      est: "Enfocado en ejecución startup",

      principle: "Capacidades",

      m1: "Sistemas de producto & workflows startup",
      m2: "Interfaces frontend & UI implementation",
      m3: "Operaciones con IA & automatización",

      available: "Disponible para roles, freelance y colaboraciones seleccionadas",
    },

    nav: {
      about: "Acerca de",
      work: "Trabajos",
      services: "Capacidades",
      process: "Proceso",
      contact: "Contacto",
      processCta: "Proceso",
      contactCta: "Contacto",
      menu: "Menú",
      close: "Cerrar",
    },

    about: {
      kicker: "ACERCA DE",
      title: "Un digital builder enfocado en startups, producto, frontend, automatización y operaciones.",
      p1: "Soy Cesar Pumayalla — un perfil digital multidisciplinario con experiencia en desarrollo frontend, sistemas orientados a producto, workflows de negocio y ejecución startup. Mi trabajo conecta implementación de interfaces con necesidades reales de negocio, estructura operativa y recorridos de usuario claros.",
      p2: "Combino habilidades frontend, background en marketing, experiencia en logística, experimentación con workflows de IA y pensamiento de producto. Eso me permite apoyar a equipos no solo construyendo interfaces, sino entendiendo cómo los sistemas digitales ayudan a ventas, operaciones, comunicación y crecimiento.",
      bullets: [
        "Frontend: Next.js, React, TypeScript, Tailwind y sistemas UI responsive",
        "Producto: user flows, estructura de información, MVP thinking y ejecución",
        "Automatización: workflows con IA, calificación de leads y lógica operativa",
        "Negocio: marketing, startup operations, coordinación logística y comunicación con clientes",
      ],
    },

    work: {
      kickerLeft: "SELECCIÓN",
      kickerRight: "TRABAJOS",
      title: "Trabajos",
      desc: "Sistemas digitales, interfaces frontend, workflows con IA y websites en producción.",
      more: "Más contexto, demos y detalles de proyecto disponibles a petición.",
      sideNote: "Ejecución orientada a startups entre producto, frontend y operaciones.",
      viewLive: "Ver proyecto",
      linkOnRequest: "Repo o demo a petición.",
      items: [
        {
          id: "romia",
          name: "ROMIA — sistema de workflow inmobiliario asistido por IA",
          meta: "AI workflows · Lead qualification · Sales operations",
          status: "DESARROLLO ACTIVO",
          description:
            "Un sistema orientado a producto para operaciones comerciales inmobiliarias. ROMIA combina IA conversacional, lógica de calificación de leads, clasificación de citas y workflows de seguimiento para apoyar equipos de ventas y mejorar la atención de clientes por canales digitales.",
        },
        {
          id: "amazon-fba",
          name: "Amazon FBA Operations — sourcing & logistics system",
          meta: "Product operations · Supplier coordination · Logistics workflows",
          status: "CASO DE NEGOCIO ACTIVO",
          description:
            "Trabajo operativo alrededor de un producto private label para Amazon FBA, incluyendo coordinación con proveedores, evaluación de muestras, planificación de inspección, workflows de shipping y preparación para fulfillment. El proyecto muestra ejecución de negocio, entendimiento logístico y pensamiento operativo estructurado.",
        },
        {
          id: "pp",
          name: "P&P Remodeling — website en producción",
          meta: "Next.js + TypeScript · Páginas estructuradas · Deploy real",
          status: "ENTREGADO",
          description:
            "Un website en producción construido con Next.js y TypeScript, diseñado alrededor de una estructura clara de páginas, carga rápida y flujo de contenido legible.",
          href: "https://www.pnp-remodeling.com/",
          image: "/work/P&Premodeling-Desktop.webp",
          previews: [
            {
              src: "/work/P&Premodeling-responsive.webp",
              alt: "P&P Remodeling responsive preview",
            },
          ],
        },
        {
          id: "guillermo",
          name: "Website para práctica de psicoterapia",
          meta: "Entrega en producción · Estructura de contenido · Detalles de accesibilidad",
          status: "ENTREGADO",
          description:
            "Un sitio calmado y guiado por el contenido, diseñado para reforzar claridad y confianza.",
          href: "https://guillermo-rios.com",
          image: "/work/Psychotherapy-Desktop.webp",
          previews: [
            {
              src: "/work/Psychotherapy-Mobile.webp",
              alt: "Psychotherapy mobile preview",
            },
          ],
        },
        {
          id: "rfc-abogados",
          name: "RFC Abogados — landing en producción",
          meta: "WordPress / Elementor · Bloques HTML/CSS custom · SEO básico",
          status: "ENTREGADO",
          description:
            "Landing page para un estudio jurídico desarrollada en WordPress con Elementor y secciones custom en HTML/CSS.",
          href: "https://rfcabogados.com/",
          image: "/work/RFC-Desktop.webp",
          previews: [
            {
              src: "/work/RFC-Mobile.webp",
              alt: "RFC mobile preview",
            },
          ],
        },
      ],
    },

    services: {
      kicker: "CAPACIDADES",
      title: "Dónde aporto más valor",
      intro:
        "Trabajo mejor en la intersección entre producto, frontend, automatización y ejecución de negocio — especialmente para startups y equipos digitales en crecimiento.",
      howItWorks: {
        kicker: "CÓMO TRABAJO",
        bullets: [
          "Aclaro el objetivo de negocio y el workflow del usuario",
          "Estructuro el producto, contenido y camino de ejecución",
          "Construyo, valido y mejoro con entrega práctica",
        ],
        cta: "Ver trabajos",
      },
      blocks: [
        {
          title: "Sistemas de producto & workflows startup",
          time: "PRODUCTO",
          desc: "Pensamiento orientado a producto aplicado a workflows digitales, sistemas operativos y ejecución temprana.",
          bullets: [
            "User flows, estructura de producto y lógica MVP",
            "Workflows de ventas, onboarding y operaciones",
            "Ejecución clara entre idea, sistema y entrega",
          ],
          cta: "Ver sistemas",
        },
        {
          title: "Interfaces frontend & UI implementation",
          time: "FRONTEND",
          desc: "Implementación frontend moderna para websites, interfaces y experiencias de producto digital.",
          bullets: [
            "Next.js, React, TypeScript y Tailwind",
            "Layouts responsive con jerarquía clara",
            "UI lista para producción y fundamentos de performance",
          ],
          cta: "Ver proyectos",
        },
        {
          title: "AI-assisted workflows & automation",
          time: "AI / OPS",
          desc: "Pensamiento de workflow alrededor de automatización, calificación de leads, follow-ups y soporte operativo.",
          bullets: [
            "Flujos de interacción con clientes asistidos por IA",
            "Lógica de calificación y clasificación de leads",
            "Sistemas de automatización para ventas y operaciones",
          ],
          cta: "Ver ROMIA",
        },
      ],
      close:
        "Estoy interesado en roles y colaboraciones en producto, business development, marketing technology, startup operations y frontend/product execution.",
    },

    process: {
      kicker: "PROCESO",
      title: "Cómo trabajo",
      intro: "Un flujo claro con foco en estructura, pensamiento de producto y entrega práctica.",
      intro2:
        "Desde el contexto de negocio hasta la ejecución, el proceso se mantiene enfocado en claridad, sistemas útiles y progreso medible.",
      rail: [
        {
          title: "Estructura",
          body: "Definir el objetivo, reducir ambigüedad y crear una base más limpia antes de construir.",
        },
        {
          title: "Ejecución",
          body: "Traducir decisiones en interfaces, workflows y sistemas útiles para contextos reales de negocio.",
        },
      ],
      toggleOpen: "Abierto",
      toggleView: "Ver",
      footer: "Foco: sistemas útiles, workflows claros y resultados entregados.",
      steps: [
        {
          step: "PASO 01",
          title: "Contexto y objetivos",
          desc: "Entiendo el problema de negocio, la necesidad del usuario y el contexto operativo antes de definir la solución.",
          bullets: ["Objetivo de negocio", "User journey", "Restricciones operativas"],
        },
        {
          step: "PASO 02",
          title: "Estructura y estrategia",
          desc: "Organizo la información, workflow y camino de ejecución en un sistema claro.",
          bullets: ["Estructura de producto", "Mapa de workflow", "Jerarquía de contenido e interfaz"],
        },
        {
          step: "PASO 03",
          title: "Build e implementación",
          desc: "Traduzco la estrategia en interfaces frontend, lógica de workflow o sistemas operativos.",
          bullets: ["Frontend implementation", "Lógica de automatización", "QA e iteración"],
        },
        {
          step: "PASO 04",
          title: "Launch y mejora",
          desc: "Hago deploy, valido y mejoro a través de iteración enfocada.",
          bullets: ["Deploy o handoff", "Feedback loop", "Refinamiento y siguientes pasos"],
        },
      ],
    },

    footer: {
      brand: "CESAR PUMAYALLA",
      claim: "Práctica digital independiente para construir sistemas de producto, interfaces frontend y workflows asistidos por IA.",
      links: {
        items: [
          { label: "TRABAJOS", href: "/es#work" },
          { label: "GITHUB", href: "https://github.com/Capumaf" },
          { label: "LINKEDIN", href: "https://www.linkedin.com/in/cesarpumayalla/" },
          { label: "EMAIL", href: "mailto:cesarpumayalla@ninan-studio.com" },
        ],
      },
      contact: {
        email: "cesarpumayalla@ninan-studio.com",
        location: "Berlín, Alemania · Disponible para DE / UE · Full-time / Contract / Freelance",
      },
      bottom: "© 2026 Cesar Pumayalla — Ninan Studio.",
    },

    contact: {
      kicker: "CONTACTO",
      title: "Hablemos del encaje correcto",
      body: "Para roles, trabajo freelance, business development, colaboraciones de producto o proyectos digitales seleccionados, puedes escribirme con algo de contexto.",
      ctaEmail: "Email",
      ctaWhatsapp: "WhatsApp",
      form: {
        name: "Nombre",
        email: "Email",
        details: "Mensaje / detalles del rol",
        submit: "Enviar",
      },
      footerNote: "Berlín · EN / DE / ES · Respuesta: 24–48h",
    },
  },
} as const satisfies Record<Lang, Dictionary>