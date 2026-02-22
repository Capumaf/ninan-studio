// content/i18n.ts

export const languages = ["en", "de", "es"] as const
export type Lang = (typeof languages)[number]

export type Dictionary = {
  hero: {
    t1: string
    t2: string
    t3: string
    t4: string
    p1: string
    p2: string
    start: string
    view: string
    based: string
    issue: string
    place: string
    est: string
    principle: string
    m1: string
    m2: string
    m3: string
    available: string
  }

  nav: {
    about: string
    work: string
    services: string
    process: string
    contact: string
    processCta: string
    contactCta: string
    menu: string
    close: string
  }

  about: {
    kicker: string
    title: string
    p1: string
    p2: string
    bullets: readonly string[]
  }

  work: {
    kickerLeft: string
    kickerRight: string
    title: string
    desc: string
    more: string
    sideNote: string
    viewLive: string
    linkOnRequest: string
    items: readonly {
      id: string
      name: string
      meta: string
      status: string
      description: string
      href?: string
    }[]
  }

  services: {
    kicker: string
    title: string
    intro: string
    howItWorks: {
      kicker: string
      bullets: readonly string[]
      cta: string
    }
    blocks: readonly {
      title: string
      time: string
      desc: string
      bullets: readonly string[]
      cta: string
    }[]
    close: string
  }

  process: {
    kicker: string
    title: string
    intro: string
    footer: string
    steps: readonly {
      step: string
      title: string
      desc: string
      bullets: readonly string[]
    }[]
  }

  contact: {
    kicker: string
    title: string
    body: string
    ctaEmail: string
    ctaWhatsapp: string
    form: {
      name: string
      email: string
      details: string
      submit: string
    }
    footerNote: string
  }
}

export const i18n = {
  en: {
    hero: {
      t1: "Clarity.",
      t2: "Structure.",
      t3: "Trust.",
      t4: "",
      p1: "Editorial websites for artists, independent professionals, and small businesses.",
      p2: "Built to be taken seriously — calm, structured, and conversion-ready.",
      start: "Start project",
      view: "View process",
      based: "EU / Berlin · English / German / Spanish",
      issue: "Issue 01",
      place: "EU / Berlin",
      est: "Est. 2026",
      principle: "Studio principle",
      m1: "Clarity over decoration.",
      m2: "Structure over noise.",
      m3: "Execution over theory.",
      available: "Available for projects",
    },

    nav: {
      about: "About",
      work: "Work",
      services: "Services",
      process: "Process",
      contact: "Contact",
      processCta: "Process",
      contactCta: "Contact",
      menu: "Menu",
      close: "Close",
    },

    about: {
      kicker: "ABOUT",
      title: "Clarity, structure and execution.",
      p1: "Ninan Studio is an independent digital studio building structured, performance-driven websites and automation systems for modern professionals.",
      p2: "With a background in Innovation Design Management and strategic marketing, I combine positioning, UX thinking and technical execution.",
      bullets: [
        "International communication (English / German / Spanish)",
        "Strategic positioning + real implementation",
        "Clean systems: scalable UI, structured code",
        "Automation and AI used where they add real value",
      ],
    },

    work: {
      kickerLeft: "BUILT TO FIT",
      kickerRight: "WORK",
      title: "Work",
      desc: "A curated selection. Titles stay minimal—open a project to read the context.",
      more: "More work available on request.",
      sideNote: "A small archive of work across identity, interface and build.",
      viewLive: "View live",
      linkOnRequest: "Link on request.",
      items: [
        {
          id: "ingrid",
          name: "Ingrid Pumayalla — Artist website",
          meta: "Editorial website · Visual identity · Development",
          status: "IN PROGRESS",
          description:
            "A quiet, content-led website designed around pacing and typography. The interface stays restrained — navigation is intentionally minimal, and the layout gives space to image-led sequences, text blocks and archival sections without visual noise.",
          href: "https://ingridpumayalla.vercel.app/",
        },
        {
          id: "guillermo",
          name: "Guillermo Ríos — Psychotherapy practice",
          meta: "Visual identity · Website · Production delivery",
          status: "",
          description:
            "A calm institutional site focused on trust and clarity. Built with a clean reading rhythm, careful hierarchy and a visual system that stays consistent across sections — professional without becoming clinical.",
          href: "https://guillermo-rios.com",
        },
        {
          id: "rfc",
          name: "RFC Estudio & Abogados",
          meta: "Visual identity · Website · Full-stack (light)",
          status: "",
          description:
            "Identity + website for a legal practice with an emphasis on structure: areas of practice, clear navigation and direct contact paths. Implemented end-to-end, including the frontend build and light backend/database work where required.",
          href: "https://rfcabogados.com/",
        },
        {
          id: "pp",
          name: "P&P Remodeling",
          meta: "Visual identity · Website",
          status: "",
          description:
            "A service website designed for fast scanning and confident navigation. Clear service structure, restrained UI and a layout that avoids clutter — built to present services cleanly and keep the experience frictionless.",
          href: "https://www.pnp-remodeling.com/",
        },
      ],
    },

    services: {
      kicker: "SERVICES",
      title: "Structured digital systems",
      intro:
        "Editorial design + performance + automation — packaged as clear, outcome-driven engagements.",
      howItWorks: {
        kicker: "HOW IT WORKS",
        bullets: ["Short strategy call", "Fixed scope + timeline", "Build → launch → polish"],
        cta: "Request availability",
      },
      blocks: [
        {
          title: "Web",
          time: "2–4 WEEKS",
          desc: "One-page landings and structured websites — calm, editorial and built to perform.",
          bullets: [
            "Next.js App Router + Tailwind",
            "Design system + reusable components",
            "Performance + accessibility",
          ],
          cta: "Request availability",
        },
        {
          title: "Automation",
          time: "1–2 WEEKS",
          desc: "Workflows and integrations that remove manual work and reduce operational friction.",
          bullets: [
            "Zapier/Make-style flows or custom scripts",
            "APIs, webhooks, dashboards",
            "Reliability-first setup",
          ],
          cta: "Discuss automation",
        },
        {
          title: "AI",
          time: "1–2 WEEKS",
          desc: "Practical AI integrations that improve support, internal tools and customer journeys.",
          bullets: [
            "AI-assisted flows (not gimmicks)",
            "Chat/assistant UX patterns",
            "Scope clarity + security",
          ],
          cta: "Explore AI use-cases",
        },
      ],
      close:
        "Engagements are scoped to fit the problem. Clear plan, timeline and fixed-scope proposal.",
    },

    process: {
      kicker: "PROCESS",
      title: "How we work",
      intro: "A structured workflow — refined, transparent and designed for reliable delivery.",
      footer: "Typical timeline: 2–4 weeks depending on scope.",
      steps: [
        {
          step: "STEP 01",
          title: "Discovery",
          desc: "Goals, constraints, content and positioning.",
          bullets: ["Project scope definition", "Content structure", "Strategic alignment"],
        },
        {
          step: "STEP 02",
          title: "Design",
          desc: "Typography, layout and interaction refinement.",
          bullets: ["Editorial hierarchy", "Responsive layout system", "Interface detailing"],
        },
        {
          step: "STEP 03",
          title: "Build",
          desc: "Next.js + Tailwind implementation, QA and performance.",
          bullets: ["Clean component architecture", "Accessibility checks", "Performance optimisation"],
        },
        {
          step: "STEP 04",
          title: "Launch",
          desc: "Deployment, testing and handoff.",
          bullets: ["Vercel deployment", "Final QA", "Documentation if required"],
        },
      ],
    },

    contact: {
      kicker: "CONTACT",
      title: "Let’s talk",
      body: "Briefly describe your project, timeline and goals.",
      ctaEmail: "Email",
      ctaWhatsapp: "WhatsApp",
      form: {
        name: "Name",
        email: "Email",
        details: "Project details",
        submit: "Send inquiry",
      },
      footerNote: "Response time: 24–48h · English / German / Spanish · Germany",
    },
  },

  de: {
    hero: {
      t1: "Klarheit.",
      t2: "Struktur.",
      t3: "Vertrauen.",
      t4: "",
      p1: "Editoriale Websites für Künstler:innen, unabhängige Professionals und kleine Unternehmen.",
      p2: "Gemacht, um ernst genommen zu werden — ruhig, strukturiert und conversion-ready.",
      start: "Projekt starten",
      view: "Prozess ansehen",
      based: "EU / Berlin · Englisch / Deutsch / Spanisch",
      issue: "Ausgabe 01",
      place: "EU / Berlin",
      est: "Gegr. 2026",
      principle: "Studio-Prinzip",
      m1: "Klarheit statt Dekoration.",
      m2: "Struktur statt Lärm.",
      m3: "Umsetzung statt Theorie.",
      available: "Verfügbar für Projekte",
    },

    nav: {
      about: "Über",
      work: "Arbeiten",
      services: "Leistungen",
      process: "Prozess",
      contact: "Kontakt",
      processCta: "Prozess",
      contactCta: "Kontakt",
      menu: "Menü",
      close: "Schließen",
    },

    about: {
      kicker: "ÜBER",
      title: "Klarheit, Struktur und Umsetzung.",
      p1: "Ninan Studio ist ein unabhängiges Digitalstudio und entwickelt strukturierte, performance-orientierte Websites und Automationssysteme für moderne Professionals.",
      p2: "Mit einem Hintergrund in Innovation Design Management und strategischem Marketing verbinde ich Positionierung, UX-Denken und technische Umsetzung.",
      bullets: [
        "Internationale Kommunikation (Englisch / Deutsch / Spanisch)",
        "Strategische Positionierung + echte Umsetzung",
        "Saubere Systeme: skalierbare UI, strukturierter Code",
        "Automation und KI nur dort, wo sie echten Mehrwert bringen",
      ],
    },

    work: {
      kickerLeft: "PASSGENAU GEBAUT",
      kickerRight: "ARBEITEN",
      title: "Arbeiten",
      desc: "Eine kuratierte Auswahl. Titel bleiben minimal — öffne ein Projekt, um den Kontext zu lesen.",
      more: "Mehr Arbeiten auf Anfrage verfügbar.",
      sideNote: "Ein kleines Archiv aus Identity, Interface und Build.",
      viewLive: "Live ansehen",
      linkOnRequest: "Link auf Anfrage.",
      items: [
        {
          id: "ingrid",
          name: "Ingrid Pumayalla — Künstlerwebsite",
          meta: "Editorial Website · Visuelle Identität · Entwicklung",
          status: "IN ARBEIT",
          description:
            "Eine ruhige, inhaltsgeführte Website mit Fokus auf Rhythmus und Typografie. Minimale Navigation und ein strukturiertes Layout schaffen Raum für Bildsequenzen, Textblöcke und Archivbereiche — ohne visuelles Rauschen.",
          href: "https://ingridpumayalla.vercel.app/",
        },
        {
          id: "guillermo",
          name: "Guillermo Ríos — Psychotherapie Praxis",
          meta: "Visuelle Identität · Website · Umsetzung",
          status: "",
          description:
            "Eine ruhige, institutionelle Website mit Fokus auf Vertrauen und Klarheit. Sauberer Lesefluss, präzise Hierarchie und ein konsistentes visuelles System — professionell, ohne klinisch zu wirken.",
          href: "https://guillermo-rios.com",
        },
        {
          id: "rfc",
          name: "RFC Estudio & Abogados",
          meta: "Visuelle Identität · Website · Full-stack (light)",
          status: "",
          description:
            "Identität + Website für eine Kanzlei mit starkem Struktur-Fokus: Rechtsgebiete, klare Navigation und direkte Kontaktwege. End-to-end umgesetzt, inkl. Frontend und leichter Backend/Database-Arbeit, wo nötig.",
          href: "https://rfcabogados.com/",
        },
        {
          id: "pp",
          name: "P&P Remodeling",
          meta: "Visuelle Identität · Website",
          status: "",
          description:
            "Service-Website für schnelles Scannen und sichere Navigation. Klare Service-Struktur, reduzierte UI und ein Layout ohne Überladung — gebaut für saubere Präsentation und geringe Reibung.",
          href: "https://www.pnp-remodeling.com/",
        },
      ],
    },

    services: {
      kicker: "LEISTUNGEN",
      title: "Strukturierte digitale Systeme",
      intro:
        "Editorial Design + Performance + Automation — als klare, outcome-getriebene Engagements verpackt.",
      howItWorks: {
        kicker: "SO FUNKTIONIERT’S",
        bullets: ["Kurzer Strategie-Call", "Fester Umfang + Timeline", "Build → Launch → Feinschliff"],
        cta: "Verfügbarkeit anfragen",
      },
      blocks: [
        {
          title: "Web",
          time: "2–4 WOCHEN",
          desc: "Onepager und strukturierte Websites — ruhig, editorial und performance-orientiert.",
          bullets: [
            "Next.js App Router + Tailwind",
            "Designsystem + wiederverwendbare Komponenten",
            "Performance + Accessibility",
          ],
          cta: "Verfügbarkeit anfragen",
        },
        {
          title: "Automation",
          time: "1–2 WOCHEN",
          desc: "Workflows und Integrationen, die manuelle Arbeit reduzieren und Reibung entfernen.",
          bullets: [
            "Zapier/Make-Flows oder Custom Scripts",
            "APIs, Webhooks, Dashboards",
            "Stabilität zuerst",
          ],
          cta: "Automation besprechen",
        },
        {
          title: "KI",
          time: "1–2 WOCHEN",
          desc: "Praktische KI-Integrationen für Support, interne Tools und Customer Journeys.",
          bullets: [
            "KI-gestützte Abläufe (ohne Gimmicks)",
            "Chat/Assistant UX-Patterns",
            "Scope-Klarheit + Sicherheit",
          ],
          cta: "KI Use-Cases prüfen",
        },
      ],
      close:
        "Engagements werden passend zum Problem definiert. Klarer Plan, Timeline und Fixed-Scope-Angebot.",
    },

    process: {
      kicker: "PROZESS",
      title: "So arbeiten wir",
      intro: "Ein strukturierter Workflow — verfeinert, transparent und für verlässliche Lieferung gemacht.",
      footer: "Typische Timeline: 2–4 Wochen je nach Umfang.",
      steps: [
        {
          step: "SCHRITT 01",
          title: "Discovery",
          desc: "Ziele, Rahmenbedingungen, Inhalte und Positionierung.",
          bullets: ["Scope definieren", "Content-Struktur", "Strategische Ausrichtung"],
        },
        {
          step: "SCHRITT 02",
          title: "Design",
          desc: "Typografie, Layout und Interaktionen werden präzise ausgearbeitet.",
          bullets: ["Editorial Hierarchie", "Responsives Layoutsystem", "Detailarbeit im Interface"],
        },
        {
          step: "SCHRITT 03",
          title: "Build",
          desc: "Next.js + Tailwind Umsetzung, QA und Performance.",
          bullets: ["Saubere Komponenten-Architektur", "Accessibility Checks", "Performance-Optimierung"],
        },
        {
          step: "SCHRITT 04",
          title: "Launch",
          desc: "Deployment, Tests und Handoff.",
          bullets: ["Vercel Deployment", "Finale QA", "Dokumentation bei Bedarf"],
        },
      ],
    },

    contact: {
      kicker: "KONTAKT",
      title: "Lass uns sprechen",
      body: "Beschreibe kurz dein Projekt, deine Timeline und deine Ziele.",
      ctaEmail: "E-Mail",
      ctaWhatsapp: "WhatsApp",
      form: {
        name: "Name",
        email: "E-Mail",
        details: "Projektdetails",
        submit: "Anfrage senden",
      },
      footerNote: "Antwortzeit: 24–48h · Englisch / Deutsch / Spanisch · Deutschland",
    },
  },

  es: {
    hero: {
      t1: "Claridad.",
      t2: "Estructura.",
      t3: "Confianza.",
      t4: "",
      p1: "Websites editoriales para artistas, profesionales independientes y pequeños negocios.",
      p2: "Diseñadas para que te tomen en serio — calmadas, estructuradas y listas para convertir.",
      start: "Iniciar proyecto",
      view: "Ver proceso",
      based: "UE / Berlín · Inglés / Alemán / Español",
      issue: "Edición 01",
      place: "UE / Berlín",
      est: "Est. 2026",
      principle: "Principio del estudio",
      m1: "Claridad sobre decoración.",
      m2: "Estructura sobre ruido.",
      m3: "Ejecución sobre teoría.",
      available: "Disponible para proyectos",
    },

    nav: {
      about: "Nosotros",
      work: "Trabajos",
      services: "Servicios",
      process: "Proceso",
      contact: "Contacto",
      processCta: "Proceso",
      contactCta: "Contacto",
      menu: "Menú",
      close: "Cerrar",
    },

    about: {
      kicker: "ACERCA DE",
      title: "Claridad, estructura y ejecución.",
      p1: "Ninan Studio es un estudio digital independiente que crea websites estructuradas, orientadas al rendimiento, y sistemas de automatización para profesionales modernos.",
      p2: "Con formación en Innovation Design Management y marketing estratégico, combino posicionamiento, pensamiento UX y ejecución técnica.",
      bullets: [
        "Comunicación internacional (Inglés / Alemán / Español)",
        "Posicionamiento estratégico + implementación real",
        "Sistemas limpios: UI escalable, código estructurado",
        "Automatización e IA solo donde aportan valor real",
      ],
    },

    work: {
      kickerLeft: "HECHO A MEDIDA",
      kickerRight: "TRABAJOS",
      title: "Trabajos",
      desc: "Una selección curada. Los títulos se mantienen mínimos — abre un proyecto para leer el contexto.",
      more: "Más trabajos disponibles a petición.",
      sideNote: "Un pequeño archivo de identidad, interfaz y construcción.",
      viewLive: "Ver en vivo",
      linkOnRequest: "Enlace bajo petición.",
      items: [
        {
          id: "ingrid",
          name: "Ingrid Pumayalla — Sitio de artista",
          meta: "Sitio editorial · Identidad visual · Desarrollo",
          status: "EN PROCESO",
          description:
            "Un sitio silencioso guiado por contenido, diseñado alrededor del ritmo y la tipografía. La interfaz se mantiene contenida — navegación mínima y un layout que deja espacio para secuencias de imagen, bloques de texto y secciones de archivo sin ruido visual.",
          href: "https://ingridpumayalla.vercel.app/",
        },
        {
          id: "guillermo",
          name: "Guillermo Ríos — Consulta de psicoterapia",
          meta: "Identidad visual · Website · Entrega",
          status: "",
          description:
            "Un sitio institucional calmado, enfocado en confianza y claridad. Ritmo de lectura limpio, jerarquía cuidada y un sistema visual consistente — profesional sin volverse clínico.",
          href: "https://guillermo-rios.com",
        },
        {
          id: "rfc",
          name: "RFC Estudio & Abogados",
          meta: "Identidad visual · Website · Full-stack (ligero)",
          status: "",
          description:
            "Identidad + website para un estudio legal con énfasis en estructura: áreas de práctica, navegación clara y vías directas de contacto. Implementación end-to-end, incluyendo frontend y trabajo ligero de backend/base de datos cuando fue necesario.",
          href: "https://rfcabogados.com/",
        },
        {
          id: "pp",
          name: "P&P Remodeling",
          meta: "Identidad visual · Website",
          status: "",
          description:
            "Website de servicios diseñada para escaneo rápido y navegación segura. Estructura clara, UI contenida y un layout sin saturación — hecha para presentar servicios con limpieza y reducir fricción.",
          href: "https://www.pnp-remodeling.com/",
        },
      ],
    },

    services: {
      kicker: "SERVICIOS",
      title: "Sistemas digitales estructurados",
      intro:
        "Diseño editorial + rendimiento + automatización — empaquetado como servicios claros y orientados a resultados.",
      howItWorks: {
        kicker: "CÓMO FUNCIONA",
        bullets: ["Llamada breve de estrategia", "Alcance fijo + cronograma", "Construcción → lanzamiento → pulido"],
        cta: "Solicitar disponibilidad",
      },
      blocks: [
        {
          title: "Web",
          time: "2–4 SEMANAS",
          desc: "Landings y websites estructuradas — calmadas, editoriales y con rendimiento real.",
          bullets: [
            "Next.js App Router + Tailwind",
            "Sistema de diseño + componentes reutilizables",
            "Rendimiento + accesibilidad",
          ],
          cta: "Solicitar disponibilidad",
        },
        {
          title: "Automatización",
          time: "1–2 SEMANAS",
          desc: "Flujos e integraciones que eliminan trabajo manual y reducen fricción operativa.",
          bullets: [
            "Flujos tipo Zapier/Make o scripts custom",
            "APIs, webhooks, dashboards",
            "Setup primero confiable",
          ],
          cta: "Hablar de automatización",
        },
        {
          title: "IA",
          time: "1–2 SEMANAS",
          desc: "Integraciones prácticas de IA para soporte, herramientas internas y journeys de cliente.",
          bullets: [
            "Flujos asistidos por IA (sin gimmicks)",
            "Patrones UX de chat/asistente",
            "Alcance claro + seguridad",
          ],
          cta: "Ver casos de IA",
        },
      ],
      close:
        "Los proyectos se definen según el problema. Plan claro, cronograma y propuesta de alcance fijo.",
    },

    process: {
      kicker: "PROCESO",
      title: "Cómo trabajamos",
      intro: "Un flujo de trabajo estructurado — refinado, transparente y diseñado para entregar con fiabilidad.",
      footer: "Cronograma típico: 2–4 semanas según el alcance.",
      steps: [
        {
          step: "PASO 01",
          title: "Discovery",
          desc: "Objetivos, restricciones, contenido y posicionamiento.",
          bullets: ["Definición de alcance", "Estructura de contenido", "Alineación estratégica"],
        },
        {
          step: "PASO 02",
          title: "Design",
          desc: "Tipografía, layout e interacciones con precisión editorial.",
          bullets: ["Jerarquía editorial", "Sistema responsive", "Detalle de interfaz"],
        },
        {
          step: "PASO 03",
          title: "Build",
          desc: "Implementación con Next.js + Tailwind, QA y rendimiento.",
          bullets: ["Arquitectura limpia", "Revisión de accesibilidad", "Optimización de performance"],
        },
        {
          step: "PASO 04",
          title: "Launch",
          desc: "Deploy, pruebas finales y entrega.",
          bullets: ["Deploy en Vercel", "QA final", "Documentación si aplica"],
        },
      ],
    },

    contact: {
      kicker: "CONTACTO",
      title: "Hablemos",
      body: "Describe brevemente tu proyecto, tu cronograma y tus objetivos.",
      ctaEmail: "Email",
      ctaWhatsapp: "WhatsApp",
      form: {
        name: "Nombre",
        email: "Email",
        details: "Detalles del proyecto",
        submit: "Enviar consulta",
      },
      footerNote: "Tiempo de respuesta: 24–48h · Inglés / Alemán / Español · Alemania",
    },
  },
} as const satisfies Record<Lang, Dictionary>