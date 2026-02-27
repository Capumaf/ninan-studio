// content/i18n.ts
// Ninan Studio — i18n EN + ES + DE (portfolio-focused)
// Personal brand: name first, studio as secondary label
// Feb 2026

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
    kicker: string; title: string; intro: string; footer: string
    steps: readonly {
      step: string; title: string; desc: string; bullets: readonly string[]
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
  // ═══════════════════════════════════════════════════════════════════════════
  // ENGLISH
  // ═══════════════════════════════════════════════════════════════════════════
  en: {
    hero: {
      t1: "Frontend.",
      t2: "Next.js.",
      t3: "TypeScript.",
      t4: "React.",

      p1: "I build clean, fast web interfaces with strong fundamentals — focused on Next.js (App Router), React and TypeScript.",
      p2: "Backend exposure: Spring Boot CRUD + SQL (junior level, actively improving). Ninan Studio is my personal label — I apply as an individual developer.",

      start: "Download CV",
      view: "View work",

      based: "Berlin, Germany · Open to Germany / EU roles · EN / DE / ES",

      issue: "Portfolio",
      place: "Berlin / EU",
      est: "Active since 2026",

      principle: "Working principles",
      m1: "Clarity over cleverness.",
      m2: "Structure over hype.",
      m3: "Ship, measure, refine.",
      available: "Open to roles",
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
      title: "Frontend developer with strong delivery focus.",
      p1: "I’m Cesar Pumayalla — a developer focused on frontend (Next.js / React / TypeScript). I care about clean UI architecture, performance, and accessibility, with a minimal editorial approach that supports content rather than marketing.",
      p2: "My background is non-traditional (marketing → digital → product/innovation), and I transitioned into development through bootcamps and hands-on projects. I also have backend exposure (Spring Boot CRUD + SQL) and I’m building full-stack skills without overstating my level.",
      bullets: [
        "Core: Next.js (App Router), React, TypeScript, Tailwind",
        "Quality: semantic HTML, performance mindset, WCAG basics",
        "Tooling: Git/GitHub, Vercel CI/CD, DNS/domains, basic security",
        "Backend exposure: Spring Boot REST + SQL (junior, improving)",
      ],
    },

    work: {
      kickerLeft: "SELECTED",
      kickerRight: "WORK",
      title: "Work",
      desc: "A small set of projects that show how I build: structure, readability, performance, and real delivery.",
      more: "More code samples and context available on request.",
      sideNote: "One featured direction + shipped production sites.",
      viewLive: "View live",
      linkOnRequest: "Repo on request.",
      items: [
        {
          id: "flagship",
          name: "Client Portal Lite — Next.js + Spring Boot",
          meta: "Full-stack portfolio project · JWT auth · REST API · Postgres",
          status: "IN PROGRESS (MVP SHIPPED)",
          description:
            "A product-style portal to show practical engineering: authentication (JWT), simple roles, CRUD workflows, pagination, and a clean dashboard UI. Focus: typed contracts, predictable error handling, and production-style structure.",
        },
        {
          id: "pp",
          name: "P&P Remodeling — production website",
          meta: "Next.js + TypeScript · Structured pages · Real deploy",
          status: "SHIPPED",
          description:
            "A service website built with Next.js + TypeScript, focused on clear structure and quick scanning. Delivered with production deployment on Vercel and a maintainable component setup.",
          href: "https://www.pnp-remodeling.com/",
        },
        {
          id: "guillermo",
          name: "Psychotherapy practice website",
          meta: "Production delivery · Content structure · Accessibility details",
          status: "SHIPPED",
          description:
            "A calm, trust-focused site built for readability and clear information architecture. Priorities: clean hierarchy, performance, and SEO-ready structure.",
          href: "https://guillermo-rios.com",
        },
        {
          id: "wp",
          name: "WordPress / PHP — production work",
          meta: "Client delivery · SEO setup · Pragmatic fixes",
          status: "",
          description:
            "I’ve shipped and maintained WordPress sites (Elementor/Plugins) with real delivery constraints: structure, SEO basics, security plugins, performance fixes, and pragmatic PHP/CSS adjustments. I position this as production experience — my core stack remains Next.js/React/TypeScript.",
        },
      ],
    },

    services: {
      kicker: "CAPABILITIES",
      title: "What I build",
      intro:
        "I’m applying as a frontend developer. These are the areas where I deliver reliably — without agency positioning.",
      howItWorks: {
        kicker: "HOW I WORK",
        bullets: [
          "Clarify scope → define a clean structure",
          "Build with predictable components and typed interfaces",
          "Ship, validate, iterate (performance + UX details)",
        ],
        cta: "See work",
      },
      blocks: [
        {
          title: "Frontend (Next.js / React / TypeScript)",
          time: "CORE",
          desc: "Clean UI architecture and fast delivery with Next.js App Router and TypeScript.",
          bullets: [
            "Component systems + consistent patterns",
            "Responsive layouts + editorial hierarchy",
            "Performance and accessibility basics",
          ],
          cta: "View projects",
        },
        {
          title: "Backend exposure (Spring Boot / SQL)",
          time: "JUNIOR",
          desc: "CRUD APIs and SQL basics — enough to collaborate cross-stack and build small services.",
          bullets: [
            "REST endpoints + validation + error handling",
            "SQL basics (relations, queries, migrations)",
            "Auth concepts (JWT basics)",
          ],
          cta: "Featured full-stack project",
        },
        {
          title: "Production websites (WordPress / PHP)",
          time: "PRACTICAL",
          desc: "Client delivery experience: implementation, fixes, maintenance, SEO setup and deployments.",
          bullets: [
            "Elementor builds + structure improvements",
            "SEO basics + forms + tracking setup",
            "Deploy, DNS, domains, basic security",
          ],
          cta: "See production work",
        },
      ],
      close:
        "Targeting frontend roles (Next.js/React/TS). Backend is positioned honestly as exposure and improved through a focused full-stack project.",
    },

    process: {
      kicker: "PROCESS",
      title: "How I work",
      intro: "A simple workflow that mirrors team work: clarity first, then delivery and iteration.",
      footer: "Focus: maintainable structure, predictable UI, and shipped results.",
      steps: [
        {
          step: "STEP 01",
          title: "Scope & structure",
          desc: "Clarify the problem, define minimal information architecture, and set constraints.",
          bullets: ["Goals + content map", "Route/section structure", "Plan + constraints"],
        },
        {
          step: "STEP 02",
          title: "UI system",
          desc: "Build a small, consistent set of components and layout rules.",
          bullets: ["Typography + spacing", "Reusable components", "Responsive behavior"],
        },
        {
          step: "STEP 03",
          title: "Implementation",
          desc: "Ship with Next.js/TypeScript patterns, QA, and performance checks.",
          bullets: ["Clean App Router structure", "A11y/performance pass", "Error/edge states"],
        },
        {
          step: "STEP 04",
          title: "Deploy & iterate",
          desc: "Deploy, verify, and improve based on feedback.",
          bullets: ["Vercel previews + deploy", "SEO sanity checks", "Small iteration loop"],
        },
      ],
    },

    footer: {
      brand: "CESAR PUMAYALLA",
      claim: "Frontend developer (Next.js / React / TypeScript). Ninan Studio is my personal label.",
      links: {
        items: [
          { label: "WORK", href: "/en#work" },
          { label: "GITHUB", href: "https://github.com/Capumaf" },
          { label: "LINKEDIN", href: "https://www.linkedin.com/in/cesarpumayalla/" },
          { label: "EMAIL", href: "mailto:cesarpumayallaf@ninanstudio.com" },
        ],
      },
      contact: {
        email: "cesarpumayallaf@ninanstudio.com",
        location: "Berlin, Germany · Open to Germany / EU · Full-time / Contract",
      },
      bottom: "© 2026 Cesar Pumayalla — Ninan Studio (personal label).",
    },

    contact: {
      kicker: "CONTACT",
      title: "Reach out",
      body: "For roles or introductions: send a short message with the job link and what you’re hiring for. I reply within 24–48h.",
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

  // ═══════════════════════════════════════════════════════════════════════════
  // DEUTSCH
  // ═══════════════════════════════════════════════════════════════════════════
  de: {
    hero: {
      t1: "Frontend.",
      t2: "Next.js.",
      t3: "TypeScript.",
      t4: "React.",

      p1: "Ich entwickle schnelle, saubere Web-UIs mit soliden Basics — Fokus auf Next.js (App Router), React und TypeScript.",
      p2: "Backend-Exposure: Spring Boot CRUD + SQL (Junior-Level, aktiv im Aufbau). Ninan Studio ist mein persönliches Label — ich bewerbe mich als Einzelentwickler.",

      start: "Lebenslauf",
      view: "Projekte ansehen",

      based: "Berlin, Deutschland · Offen für DE / EU Rollen · EN / DE / ES",

      issue: "Portfolio",
      place: "Berlin / EU",
      est: "Aktiv seit 2026",

      principle: "Arbeitsprinzipien",
      m1: "Klarheit statt Cleverness.",
      m2: "Struktur statt Hype.",
      m3: "Liefern, messen, verbessern.",
      available: "Offen für Rollen",
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
      title: "Frontend Developer mit Delivery-Fokus.",
      p1: "Ich bin Cesar Pumayalla — Developer mit Fokus auf Frontend (Next.js / React / TypeScript). Wichtig sind mir saubere UI-Architektur, Performance und Accessibility, kombiniert mit einem minimalistischen Editorial-Ansatz.",
      p2: "Mein Background ist nicht klassisch (Marketing → Digital → Produkt/Innovation). Den Übergang in Development habe ich über Bootcamps und praxisnahe Projekte gemacht. Zusätzlich habe ich Backend-Exposure (Spring Boot CRUD + SQL) und baue Full-Stack-Skills aus — ohne mein Level zu übertreiben.",
      bullets: [
        "Core: Next.js (App Router), React, TypeScript, Tailwind",
        "Qualität: semantisches HTML, Performance-Mindset, WCAG-Basics",
        "Tooling: Git/GitHub, Vercel CI/CD, DNS/Domains, Basic Security",
        "Backend-Exposure: Spring Boot REST + SQL (Junior, im Aufbau)",
      ],
    },

    work: {
      kickerLeft: "AUSWAHL",
      kickerRight: "ARBEITEN",
      title: "Arbeiten",
      desc: "Wenige Projekte mit hohem Signal: Struktur, Lesbarkeit, Performance und echte Lieferung.",
      more: "Mehr Code-Beispiele und Kontext auf Anfrage.",
      sideNote: "Ein Featured-Projekt + ausgelieferte Production Sites.",
      viewLive: "Live ansehen",
      linkOnRequest: "Repo auf Anfrage.",
      items: [
        {
          id: "flagship",
          name: "Client Portal Lite — Next.js + Spring Boot",
          meta: "Full-stack Portfolio · JWT Auth · REST API · Postgres",
          status: "IN ARBEIT (MVP GELIEFERT)",
          description:
            "Portal im Produkt-Stil zur Demonstration praktischer Engineering-Arbeit: Auth (JWT), einfache Rollen, CRUD-Workflows, Pagination und sauberes Dashboard-UI. Fokus: typisierte Schnittstellen, konsistentes Error-Handling und Production-Struktur.",
        },
        {
          id: "pp",
          name: "P&P Remodeling — Production Website",
          meta: "Next.js + TypeScript · Strukturierte Seiten · Real Deploy",
          status: "GELIEFERT",
          description:
            "Service-Website mit Next.js + TypeScript, Fokus auf klare Struktur und schnelles Scanning. Production-Deployment auf Vercel und wartbares Component-Setup.",
          href: "https://www.pnp-remodeling.com/",
        },
        {
          id: "guillermo",
          name: "Website für Psychotherapie-Praxis",
          meta: "Production Delivery · Content-Struktur · Accessibility-Details",
          status: "GELIEFERT",
          description:
            "Ruhige Website mit Fokus auf Vertrauen und Klarheit. Prioritäten: saubere Hierarchie, Performance und SEO-Struktur.",
          href: "https://guillermo-rios.com",
        },
        {
          id: "wp",
          name: "WordPress / PHP — Production Work",
          meta: "Kunden-Delivery · SEO Setup · Pragmatic Fixes",
          status: "",
          description:
            "WordPress-Sites in echten Projekten: Umsetzung (Elementor/Plugins), Struktur/SEO-Basics, Security-Plugins, Performance-Fixes und pragmatische PHP/CSS-Anpassungen. WordPress als Production-Erfahrung — Kern-Stack bleibt Next.js/React/TypeScript.",
        },
      ],
    },

    services: {
      kicker: "FÄHIGKEITEN",
      title: "Was ich baue",
      intro:
        "Ich bewerbe mich als Frontend Developer. Das sind die Bereiche, in denen ich zuverlässig liefere — ohne Agency-Positionierung.",
      howItWorks: {
        kicker: "ARBEITSWEISE",
        bullets: [
          "Scope klären → saubere Struktur definieren",
          "Mit konsistenten Komponenten und Typisierung bauen",
          "Liefern, prüfen, iterieren (Performance + UX-Details)",
        ],
        cta: "Projekte ansehen",
      },
      blocks: [
        {
          title: "Frontend (Next.js / React / TypeScript)",
          time: "CORE",
          desc: "Saubere UI-Architektur und schnelle Delivery mit Next.js App Router und TypeScript.",
          bullets: [
            "Komponentensysteme + konsistente Patterns",
            "Responsive Layouts + Editorial Hierarchie",
            "Performance & Accessibility Basics",
          ],
          cta: "Projekte ansehen",
        },
        {
          title: "Backend-Exposure (Spring Boot / SQL)",
          time: "JUNIOR",
          desc: "CRUD APIs und SQL Basics — genug für Zusammenarbeit cross-stack und kleine Services.",
          bullets: [
            "REST Endpoints + Validation + Error-Handling",
            "SQL Basics (Relationen, Queries, Migrationen)",
            "Auth-Konzepte (JWT Basics)",
          ],
          cta: "Featured Full-stack Projekt",
        },
        {
          title: "Production Websites (WordPress / PHP)",
          time: "PRAKTISCH",
          desc: "Kunden-Delivery: Umsetzung, Fixes, Maintenance, SEO Setup und Deployments.",
          bullets: [
            "Elementor Builds + Struktur verbessern",
            "SEO Basics + Forms + Tracking Setup",
            "Deploy, DNS, Domains, Basic Security",
          ],
          cta: "Production Work",
        },
      ],
      close:
        "Ziel: Frontend-Rollen (Next.js/React/TS). Backend ist ehrlich als Exposure positioniert und wird aktiv ausgebaut.",
    },

    process: {
      kicker: "PROZESS",
      title: "Wie ich arbeite",
      intro: "Ein schlanker Workflow wie im Team: Klarheit zuerst, dann Lieferung und Iteration.",
      footer: "Fokus: wartbare Struktur, vorhersehbares UI und echte Ergebnisse.",
      steps: [
        {
          step: "SCHRITT 01",
          title: "Scope & Struktur",
          desc: "Problem klären, minimale Informationsarchitektur definieren, Constraints setzen.",
          bullets: ["Ziele + Content Map", "Route/Section-Struktur", "Plan + Constraints"],
        },
        {
          step: "SCHRITT 02",
          title: "UI-System",
          desc: "Kleines, konsistentes Set an Komponenten und Layout-Regeln.",
          bullets: ["Typografie + Spacing", "Reusable Components", "Responsive Verhalten"],
        },
        {
          step: "SCHRITT 03",
          title: "Implementierung",
          desc: "Mit Next.js/TypeScript Patterns liefern, QA, Performance-Checks.",
          bullets: ["Saubere App Router Struktur", "A11y/Performance Pass", "Error/Edge States"],
        },
        {
          step: "SCHRITT 04",
          title: "Deploy & Iteration",
          desc: "Deployen, verifizieren, und per Feedback verbessern.",
          bullets: ["Vercel Previews + Deploy", "SEO Checks", "Kleine Iterationsschleife"],
        },
      ],
    },

    footer: {
      brand: "CESAR PUMAYALLA",
      claim: "Frontend Developer (Next.js / React / TypeScript). Ninan Studio ist mein persönliches Label.",
      links: {
        items: [
          { label: "ARBEITEN", href: "/de#work" },
          { label: "GITHUB", href: "https://github.com/Capumaf" },
          { label: "LINKEDIN", href: "https://www.linkedin.com/in/cesarpumayalla/" },
          { label: "EMAIL", href: "mailto:cesarpumayallaf@ninanstudio.com" },
        ],
      },
      contact: {
        email: "cesarpumayallaf@ninanstudio.com",
        location: "Berlin, Deutschland · Offen für DE / EU · Full-time / Contract",
      },
      bottom: "© 2026 Cesar Pumayalla — Ninan Studio (persönliches Label).",
    },

    contact: {
      kicker: "KONTAKT",
      title: "Kontakt",
      body: "Für Rollen oder Intro: sende kurz den Job-Link und was ihr sucht. Ich antworte in 24–48h.",
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

  // ═══════════════════════════════════════════════════════════════════════════
  // ESPAÑOL
  // ═══════════════════════════════════════════════════════════════════════════
  es: {
    hero: {
      t1: "Frontend.",
      t2: "Next.js.",
      t3: "TypeScript.",
      t4: "React.",

      p1: "Construyo interfaces limpias y rápidas con fundamentos sólidos — foco en Next.js (App Router), React y TypeScript.",
      p2: "Exposición backend: Spring Boot CRUD + SQL (nivel junior, mejorando). Ninan Studio es mi etiqueta personal — aplico como developer individual.",

      start: "Descargar CV",
      view: "Ver proyectos",

      based: "Berlín, Alemania · Abierto a roles en DE / UE · EN / DE / ES",

      issue: "Portfolio",
      place: "Berlín / UE",
      est: "Activo desde 2026",

      principle: "Principios de trabajo",
      m1: "Claridad sobre trucos.",
      m2: "Estructura sobre hype.",
      m3: "Entregar, medir, mejorar.",
      available: "Disponible para roles",
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
      title: "Frontend developer con enfoque en entrega.",
      p1: "Soy Cesar Pumayalla — developer enfocado en frontend (Next.js / React / TypeScript). Me importa la arquitectura limpia, el rendimiento y la accesibilidad, con una estética editorial minimal que apoya el contenido sin marketing agresivo.",
      p2: "Mi background no es tradicional (marketing → digital → producto/innovación). La transición a development la hice con bootcamps y proyectos reales. También tengo exposición backend (Spring Boot CRUD + SQL) y estoy construyendo habilidades full-stack sin inflar el nivel.",
      bullets: [
        "Core: Next.js (App Router), React, TypeScript, Tailwind",
        "Calidad: HTML semántico, performance mindset, WCAG básico",
        "Tooling: Git/GitHub, Vercel CI/CD, DNS/dominios, seguridad básica",
        "Exposición backend: Spring Boot REST + SQL (junior, mejorando)",
      ],
    },

    work: {
      kickerLeft: "SELECCIÓN",
      kickerRight: "TRABAJOS",
      title: "Trabajos",
      desc: "Pocos proyectos con señal alta: estructura, legibilidad, performance y entrega real.",
      more: "Más ejemplos y contexto disponibles a petición.",
      sideNote: "Un proyecto featured + sitios en producción.",
      viewLive: "Ver en vivo",
      linkOnRequest: "Repo a petición.",
      items: [
        {
          id: "flagship",
          name: "Client Portal Lite — Next.js + Spring Boot",
          meta: "Full-stack portfolio · JWT auth · REST API · Postgres",
          status: "EN PROGRESO (MVP ENTREGADO)",
          description:
            "Portal estilo producto para demostrar ingeniería práctica: auth (JWT), roles simples, flujos CRUD, paginación y UI de dashboard limpia. Foco: contratos tipados, manejo de errores consistente y estructura tipo producción.",
        },
        {
          id: "pp",
          name: "P&P Remodeling — website en producción",
          meta: "Next.js + TypeScript · Páginas estructuradas · Deploy real",
          status: "ENTREGADO",
          description:
            "Website de servicios construida con Next.js + TypeScript, enfocada en estructura clara y escaneo rápido. Deploy en producción con Vercel y setup mantenible.",
          href: "https://www.pnp-remodeling.com/",
        },
        {
          id: "guillermo",
          name: "Website para práctica de psicoterapia",
          meta: "Entrega en producción · Estructura de contenido · Accesibilidad",
          status: "ENTREGADO",
          description:
            "Sitio calmado enfocado en confianza y claridad. Prioridades: jerarquía limpia, performance y estructura SEO.",
          href: "https://guillermo-rios.com",
        },
        {
          id: "wp",
          name: "WordPress / PHP — trabajo en producción",
          meta: "Delivery a clientes · SEO setup · Fixes pragmáticos",
          status: "",
          description:
            "He entregado y mantenido sitios WordPress (Elementor/Plugins) con restricciones reales: estructura, SEO básico, plugins de seguridad, fixes de performance y ajustes pragmáticos en PHP/CSS. WordPress como experiencia de producción — mi core stack es Next.js/React/TypeScript.",
        },
      ],
    },

    services: {
      kicker: "CAPACIDADES",
      title: "Lo que construyo",
      intro:
        "Estoy aplicando como frontend developer. Estas son mis áreas de entrega real — sin posicionamiento de agencia.",
      howItWorks: {
        kicker: "CÓMO TRABAJO",
        bullets: [
          "Aclaro alcance → defino estructura limpia",
          "Construyo con componentes consistentes y tipado",
          "Entrego, valido e itero (performance + detalles UX)",
        ],
        cta: "Ver trabajos",
      },
      blocks: [
        {
          title: "Frontend (Next.js / React / TypeScript)",
          time: "CORE",
          desc: "Arquitectura limpia y entrega rápida con Next.js App Router y TypeScript.",
          bullets: [
            "Sistemas de componentes + patrones consistentes",
            "Layouts responsive + jerarquía editorial",
            "Performance + accesibilidad básica",
          ],
          cta: "Ver proyectos",
        },
        {
          title: "Exposición backend (Spring Boot / SQL)",
          time: "JUNIOR",
          desc: "CRUD APIs y SQL básico — para colaborar cross-stack y construir servicios pequeños.",
          bullets: [
            "Endpoints REST + validación + manejo de errores",
            "SQL (relaciones, queries, migraciones)",
            "Conceptos de auth (JWT básico)",
          ],
          cta: "Proyecto full-stack",
        },
        {
          title: "Websites en producción (WordPress / PHP)",
          time: "PRÁCTICO",
          desc: "Delivery real a clientes: implementación, fixes, mantenimiento, SEO setup y deployments.",
          bullets: [
            "Elementor + mejoras de estructura",
            "SEO básico + formularios + tracking",
            "Deploy, DNS, dominios, seguridad básica",
          ],
          cta: "Ver producción",
        },
      ],
      close:
        "Si estás contratando: apunto a roles frontend (Next.js/React/TS). Mi backend está posicionado honestamente como exposure y lo estoy mejorando con un proyecto full-stack enfocado.",
    },

    process: {
      kicker: "PROCESO",
      title: "Cómo trabajo",
      intro: "Un flujo simple tipo equipo: claridad primero, luego entrega e iteración.",
      footer: "Foco: estructura mantenible, UI predecible y resultados entregados.",
      steps: [
        {
          step: "PASO 01",
          title: "Alcance y estructura",
          desc: "Aclarar el problema, definir arquitectura mínima de información y restricciones.",
          bullets: ["Objetivos + mapa de contenido", "Estructura de rutas/secciones", "Plan + restricciones"],
        },
        {
          step: "PASO 02",
          title: "Sistema UI",
          desc: "Construir un set pequeño y consistente de componentes y reglas de layout.",
          bullets: ["Tipografía + spacing", "Componentes reutilizables", "Comportamiento responsive"],
        },
        {
          step: "PASO 03",
          title: "Implementación",
          desc: "Entregar con patrones Next.js/TypeScript, QA y performance.",
          bullets: ["Estructura limpia App Router", "Revisión a11y/performance", "Estados de error/edge"],
        },
        {
          step: "PASO 04",
          title: "Deploy e iteración",
          desc: "Deploy, verificación y mejoras iterativas.",
          bullets: ["Deploy en Vercel + previews", "Checks SEO", "Iteración pequeña por feedback"],
        },
      ],
    },

    footer: {
      brand: "CESAR PUMAYALLA",
      claim: "Frontend developer (Next.js / React / TypeScript). Ninan Studio es mi etiqueta personal.",
      links: {
        items: [
          { label: "TRABAJOS", href: "/es#work" },
          { label: "GITHUB", href: "https://github.com/Capumaf" },
          { label: "LINKEDIN", href: "https://www.linkedin.com/in/cesarpumayalla/" },
          { label: "EMAIL", href: "mailto:cesarpumayallaf@ninanstudio.com" },
        ],
      },
      contact: {
        email: "cesarpumayallaf@ninanstudio.com",
        location: "Berlín, Alemania · Abierto a DE / UE · Full-time / Contract",
      },
      bottom: "© 2026 Cesar Pumayalla — Ninan Studio (etiqueta personal).",
    },

    contact: {
      kicker: "CONTACTO",
      title: "Contacto",
      body: "Para roles o introducciones: envía el link del puesto y qué están buscando. Respondo en 24–48h.",
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