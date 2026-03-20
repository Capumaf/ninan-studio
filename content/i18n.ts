// content/i18n.ts
// Ninan Studio — i18n EN + ES + DE
// Personal brand: name first, studio as secondary label

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
    kicker: string
    title: string
    intro: string
    intro2: string
    rail: readonly {
      title: string
      body: string
    }[]
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
      t1: "Frontend.",
      t2: "Systems.",
      t3: "Clarity.",
      t4: "Execution.",

      p1: "I build structured digital interfaces with Next.js, React and TypeScript — focused on clarity, reliability and real production use.",
      p2: "My work combines frontend engineering, content structure and system thinking to create websites and product interfaces that are easier to use, maintain and scale.",

      start: "Start a conversation",
      view: "View work",

      based: "Berlin, Germany · Available for freelance and selected Germany / EU roles · EN / DE / ES",

      issue: "Independent practice",
      place: "Berlin / EU",
      est: "Focused on production-ready frontend systems and practical full-stack range",

      principle: "Working principles",
      m1: "Clarity over cleverness.",
      m2: "Structure over noise.",
      m3: "Build, validate, refine.",
      available: "Available for freelance and selected roles",
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
      title: "Frontend systems focused on structure, usability and reliable execution.",
      p1: "I’m Cesar Pumayalla — a frontend developer building digital interfaces with Next.js, React and TypeScript. My work focuses on structure, readability and implementation quality across production websites and product-oriented builds.",
      p2: "I approach frontend as part of a broader system: content, hierarchy, interaction and technical decisions need to work together. My background across marketing, digital and product has shaped a practical perspective on how interfaces support both users and business goals.",
      bullets: [
        "Core: Next.js (App Router), React, TypeScript, Tailwind",
        "Focus: structure, readability, responsive behavior, implementation quality",
        "Tooling: Git/GitHub, Vercel CI/CD, DNS/domains, basic security",
        "Expanding full-stack range: Spring Boot REST, SQL, auth and CRUD workflows",
      ],
    },

    work: {
      kickerLeft: "SELECTED",
      kickerRight: "WORK",
      title: "Work",
      desc: "A selection of projects focused on structure, usability and production-minded execution.",
      more: "Additional code samples and project context are available on request.",
      sideNote: "Product-oriented direction + shipped production websites.",
      viewLive: "View live",
      linkOnRequest: "Repo on request.",
      items: [
        {
          id: "flagship",
          name: "Client Portal Lite — Next.js + Spring Boot",
          meta: "Full-stack portfolio project · JWT auth · REST API · Postgres",
          status: "IN PROGRESS (MVP SHIPPED)",
          description:
            "A full-stack project built to demonstrate practical product engineering: authentication, CRUD workflows, pagination and a structured dashboard experience. The focus is on typed contracts, predictable behavior and production-style architecture.",
        },
        {
          id: "pp",
          name: "P&P Remodeling — production website",
          meta: "Next.js + TypeScript · Structured pages · Real deploy",
          status: "SHIPPED",
          description:
            "A production website built with Next.js and TypeScript, designed around clear page structure, fast loading and readable content flow. Delivered with a maintainable component setup and deployed on Vercel.",
          href: "https://www.pnp-remodeling.com/",
        },
        {
          id: "guillermo",
          name: "Psychotherapy practice website",
          meta: "Production delivery · Content structure · Accessibility details",
          status: "SHIPPED",
          description:
            "A calm, content-led website designed to support clarity and trust. The implementation prioritizes readable typography, clean hierarchy and a structure prepared for SEO and long-term maintainability.",
          href: "https://guillermo-rios.com",
        },
        {
          id: "wp",
          name: "WordPress / PHP — production work",
          meta: "Client delivery · SEO setup · Pragmatic fixes",
          status: "",
          description:
            "Production work delivered through WordPress projects, including implementation, SEO setup, security plugins, performance improvements and pragmatic fixes in PHP and CSS across real client environments.",
        },
        {
          id: "rfc-abogados",
          name: "RFC Abogados — landing in production",
          meta: "WordPress / Elementor · Custom HTML/CSS blocks · SEO basics",
          status: "SHIPPED",
          description:
            "Landing page for a legal firm built in WordPress with Elementor and custom HTML/CSS sections. The work focused on content hierarchy, clarity and practical production delivery within real business constraints.",
          href: "https://rfcabogados.com/",
        },
      ],
    },

    services: {
      kicker: "CAPABILITIES",
      title: "Where I bring the most value",
      intro:
        "The areas where I deliver most consistently: structured frontend implementation, production websites and practical full-stack foundations.",
      howItWorks: {
        kicker: "HOW I WORK",
        bullets: [
          "Clarify scope and define a clean structure",
          "Build with consistent components and typed interfaces",
          "Ship, validate and refine",
        ],
        cta: "See work",
      },
      blocks: [
        {
          title: "Frontend systems (Next.js / React / TypeScript)",
          time: "CORE",
          desc: "Structured frontend implementation with clean components, consistent patterns and production-ready delivery.",
          bullets: [
            "Component systems and scalable UI patterns",
            "Responsive layouts with clear hierarchy",
            "Performance and accessibility fundamentals",
          ],
          cta: "View projects",
        },
        {
          title: "Practical full-stack foundations (Spring Boot / SQL)",
          time: "PRACTICAL",
          desc: "Backend knowledge that supports better product thinking, cross-stack collaboration and small full-stack builds.",
          bullets: [
            "REST endpoints, validation and predictable error handling",
            "SQL basics: relations, queries and migrations",
            "Auth concepts and CRUD workflows",
          ],
          cta: "Featured full-stack project",
        },
        {
          title: "Production websites (WordPress / PHP)",
          time: "DELIVERY",
          desc: "Client delivery experience across implementation, maintenance, SEO setup and pragmatic production fixes.",
          bullets: [
            "Elementor builds and structure improvements",
            "SEO basics, forms and tracking setup",
            "Deploy, DNS, domains and basic security",
          ],
          cta: "See production work",
        },
      ],
      close:
        "I’m focused on frontend roles with Next.js, React and TypeScript, while continuing to strengthen my full-stack range through practical project work.",
    },

    process: {
      kicker: "PROCESS",
      title: "How I work",
      intro: "A clear workflow focused on structure, implementation quality and reliable delivery.",
      intro2:
        "From scope to deployment, the process stays focused on clarity, predictable execution and practical delivery.",
      rail: [
        {
          title: "Structure",
          body: "Define the problem, reduce ambiguity and create a cleaner foundation before building.",
        },
        {
          title: "Delivery",
          body: "Translate decisions into interfaces that are consistent, maintainable and ready for real use.",
        },
      ],
      toggleOpen: "Open",
      toggleView: "View",
      footer: "Focus: maintainable systems, predictable UI and shipped results.",
      steps: [
        {
          step: "STEP 01",
          title: "Scope & structure",
          desc: "Clarify the problem, define the information architecture and set clear constraints before building.",
          bullets: ["Goals and content map", "Route and section structure", "Plan and constraints"],
        },
        {
          step: "STEP 02",
          title: "UI system",
          desc: "Build a small, consistent set of components and layout rules that can scale without adding noise.",
          bullets: ["Typography and spacing", "Reusable components", "Responsive behavior"],
        },
        {
          step: "STEP 03",
          title: "Implementation",
          desc: "Ship with clear Next.js and TypeScript patterns, QA passes and attention to performance and edge states.",
          bullets: ["Clean App Router structure", "A11y and performance pass", "Error and edge states"],
        },
        {
          step: "STEP 04",
          title: "Deploy & refine",
          desc: "Deploy, verify and improve through focused iteration.",
          bullets: ["Vercel previews and deploy", "SEO sanity checks", "Small iteration loop"],
        },
      ],
    },

    footer: {
      brand: "CESAR PUMAYALLA",
      claim: "Independent frontend practice building structured digital systems with Next.js, React and TypeScript.",
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
      body: "For freelance work, roles, collaborations or selected projects, feel free to reach out with brief context. I’m most interested in opportunities where structure, product thinking and implementation quality matter.",
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
      t1: "Frontend.",
      t2: "Systeme.",
      t3: "Klarheit.",
      t4: "Umsetzung.",

      p1: "Ich entwickle strukturierte digitale Interfaces mit Next.js, React und TypeScript — mit Fokus auf Klarheit, Verlässlichkeit und reale Nutzung in Produktion.",
      p2: "Meine Arbeit verbindet Frontend Engineering, Content-Struktur und Systemdenken, um Websites und Produktinterfaces zu schaffen, die leichter nutzbar, wartbar und skalierbar sind.",

      start: "Gespräch starten",
      view: "Projekte ansehen",

      based: "Berlin, Deutschland · Verfügbar für Freelance und ausgewählte DE / EU Rollen · EN / DE / ES",

      issue: "Unabhängige Praxis",
      place: "Berlin / EU",
      est: "Fokus auf produktionsreife Frontend-Systeme und praktische Full-stack-Weiterentwicklung",

      principle: "Arbeitsprinzipien",
      m1: "Klarheit statt Cleverness.",
      m2: "Struktur statt Lärm.",
      m3: "Bauen, prüfen, verfeinern.",
      available: "Verfügbar für Freelance und ausgewählte Rollen",
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
      title: "Frontend-Systeme mit Fokus auf Struktur, Nutzbarkeit und zuverlässige Umsetzung.",
      p1: "Ich bin Cesar Pumayalla — Frontend Developer und entwickle digitale Interfaces mit Next.js, React und TypeScript. Meine Arbeit konzentriert sich auf Struktur, Lesbarkeit und saubere Umsetzung über Production Websites und produktorientierte Builds hinweg.",
      p2: "Ich betrachte Frontend als Teil eines größeren Systems: Content, Hierarchie, Interaktion und technische Entscheidungen müssen zusammen funktionieren. Mein Background in Marketing, Digital und Product hat meinen praktischen Blick darauf geprägt, wie Interfaces sowohl Nutzer als auch Business-Ziele unterstützen.",
      bullets: [
        "Core: Next.js (App Router), React, TypeScript, Tailwind",
        "Fokus: Struktur, Lesbarkeit, Responsive Behavior, Umsetzungsqualität",
        "Tooling: Git/GitHub, Vercel CI/CD, DNS/Domains, Basic Security",
        "Ausbau Full-stack Range: Spring Boot REST, SQL, Auth und CRUD-Workflows",
      ],
    },

    work: {
      kickerLeft: "AUSGEWÄHLTE",
      kickerRight: "ARBEITEN",
      title: "Arbeiten",
      desc: "Eine Auswahl an Projekten mit Fokus auf Struktur, Nutzbarkeit und produktionsnahe Umsetzung.",
      more: "Weitere Code-Beispiele und Projektkontext sind auf Anfrage verfügbar.",
      sideNote: "Produktorientierte Richtung + gelieferte Production Websites.",
      viewLive: "Live ansehen",
      linkOnRequest: "Repo auf Anfrage.",
      items: [
        {
          id: "flagship",
          name: "Client Portal Lite — Next.js + Spring Boot",
          meta: "Full-stack Portfolio-Projekt · JWT Auth · REST API · Postgres",
          status: "IN ARBEIT (MVP GELIEFERT)",
          description:
            "Ein Full-stack-Projekt, das praktische Product-Engineering-Skills zeigt: Authentifizierung, CRUD-Workflows, Pagination und eine strukturierte Dashboard-Erfahrung. Im Fokus stehen typisierte Verträge, vorhersehbares Verhalten und produktionsnahe Architektur.",
        },
        {
          id: "pp",
          name: "P&P Remodeling — Production Website",
          meta: "Next.js + TypeScript · Strukturierte Seiten · Real Deploy",
          status: "GELIEFERT",
          description:
            "Eine Production Website mit Next.js und TypeScript, aufgebaut rund um klare Seitenstruktur, schnelle Ladezeiten und lesbaren Content-Flow. Geliefert mit wartbarem Komponenten-Setup und Deploy auf Vercel.",
          href: "https://www.pnp-remodeling.com/",
        },
        {
          id: "guillermo",
          name: "Website für Psychotherapie-Praxis",
          meta: "Production Delivery · Content-Struktur · Accessibility-Details",
          status: "GELIEFERT",
          description:
            "Eine ruhige, content-getriebene Website, die Klarheit und Vertrauen unterstützen soll. Die Umsetzung priorisiert lesbare Typografie, saubere Hierarchie und eine Struktur, die für SEO und langfristige Wartbarkeit vorbereitet ist.",
          href: "https://guillermo-rios.com",
        },
        {
          id: "wp",
          name: "WordPress / PHP — Production Work",
          meta: "Client Delivery · SEO Setup · Pragmatic Fixes",
          status: "",
          description:
            "Production Work in WordPress-Projekten, einschließlich Umsetzung, SEO-Setup, Security-Plugins, Performance-Verbesserungen und pragmatischen Fixes in PHP und CSS in realen Kundenumgebungen.",
        },
        {
          id: "rfc-abogados",
          name: "RFC Abogados — Landing in Production",
          meta: "WordPress / Elementor · Custom HTML/CSS Blocks · SEO Basics",
          status: "GELIEFERT",
          description:
            "Landing Page für eine Kanzlei, umgesetzt in WordPress mit Elementor und Custom HTML/CSS Sections. Der Fokus lag auf Content-Hierarchie, Klarheit und pragmatischer Production Delivery innerhalb realer Business-Constraints.",
          href: "https://rfcabogados.com/",
        },
      ],
    },

    services: {
      kicker: "FÄHIGKEITEN",
      title: "Wo ich den größten Mehrwert bringe",
      intro:
        "Die Bereiche, in denen ich am konstantesten liefere: strukturierte Frontend-Umsetzung, Production Websites und praktische Full-stack-Grundlagen.",
      howItWorks: {
        kicker: "ARBEITSWEISE",
        bullets: [
          "Scope klären und saubere Struktur definieren",
          "Mit konsistenten Komponenten und typisierten Interfaces bauen",
          "Liefern, prüfen und verfeinern",
        ],
        cta: "Projekte ansehen",
      },
      blocks: [
        {
          title: "Frontend-Systeme (Next.js / React / TypeScript)",
          time: "CORE",
          desc: "Strukturierte Frontend-Umsetzung mit sauberen Komponenten, konsistenten Patterns und produktionsnaher Delivery.",
          bullets: [
            "Komponentensysteme und skalierbare UI-Patterns",
            "Responsive Layouts mit klarer Hierarchie",
            "Performance- und Accessibility-Grundlagen",
          ],
          cta: "Projekte ansehen",
        },
        {
          title: "Praktische Full-stack-Grundlagen (Spring Boot / SQL)",
          time: "PRAKTISCH",
          desc: "Backend-Kenntnisse, die besseres Product Thinking, Zusammenarbeit über den Stack und kleinere Full-stack-Builds unterstützen.",
          bullets: [
            "REST Endpoints, Validation und vorhersehbares Error Handling",
            "SQL Basics: Relationen, Queries und Migrationen",
            "Auth-Konzepte und CRUD-Workflows",
          ],
          cta: "Featured Full-stack Projekt",
        },
        {
          title: "Production Websites (WordPress / PHP)",
          time: "DELIVERY",
          desc: "Erfahrung in Client Delivery über Umsetzung, Maintenance, SEO-Setup und pragmatische Production Fixes.",
          bullets: [
            "Elementor Builds und Strukturverbesserungen",
            "SEO Basics, Forms und Tracking Setup",
            "Deploy, DNS, Domains und Basic Security",
          ],
          cta: "Production Work ansehen",
        },
      ],
      close:
        "Mein Fokus liegt auf Frontend-Rollen mit Next.js, React und TypeScript, während ich meine Full-stack-Range weiter durch praktische Projektarbeit ausbaue.",
    },

    process: {
      kicker: "PROZESS",
      title: "Wie ich arbeite",
      intro: "Ein klarer Workflow mit Fokus auf Struktur, Umsetzungsqualität und zuverlässige Delivery.",
      intro2:
        "Vom Scope bis zum Deploy bleibt der Prozess auf Klarheit, vorhersehbare Umsetzung und pragmatische Delivery ausgerichtet.",
      rail: [
        {
          title: "Struktur",
          body: "Das Problem definieren, Unklarheit reduzieren und vor dem Bauen eine sauberere Grundlage schaffen.",
        },
        {
          title: "Delivery",
          body: "Entscheidungen in Interfaces übersetzen, die konsistent, wartbar und für den realen Einsatz bereit sind.",
        },
      ],
      toggleOpen: "Offen",
      toggleView: "Ansehen",
      footer: "Fokus: wartbare Systeme, vorhersehbares UI und gelieferte Ergebnisse.",
      steps: [
        {
          step: "SCHRITT 01",
          title: "Scope & Struktur",
          desc: "Problem klären, Informationsarchitektur definieren und vor dem Bauen klare Constraints setzen.",
          bullets: ["Ziele und Content Map", "Route- und Section-Struktur", "Plan und Constraints"],
        },
        {
          step: "SCHRITT 02",
          title: "UI-System",
          desc: "Ein kleines, konsistentes Set aus Komponenten und Layout-Regeln aufbauen, das skalieren kann, ohne unnötige Komplexität hinzuzufügen.",
          bullets: ["Typografie und Spacing", "Reusable Components", "Responsive Behavior"],
        },
        {
          step: "SCHRITT 03",
          title: "Implementierung",
          desc: "Mit klaren Next.js- und TypeScript-Patterns umsetzen, QA-Passes durchführen und auf Performance sowie Edge States achten.",
          bullets: ["Saubere App Router Struktur", "A11y- und Performance-Pass", "Error- und Edge States"],
        },
        {
          step: "SCHRITT 04",
          title: "Deploy & Verfeinerung",
          desc: "Deployen, verifizieren und durch fokussierte Iteration verbessern.",
          bullets: ["Vercel Previews und Deploy", "SEO Sanity Checks", "Kleine Iterationsschleife"],
        },
      ],
    },

    footer: {
      brand: "CESAR PUMAYALLA",
      claim: "Unabhängige Frontend-Praxis für strukturierte digitale Systeme mit Next.js, React und TypeScript.",
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
      body: "Für Freelance-Projekte, Rollen, Kollaborationen oder ausgewählte Projekte kannst du mir gern mit etwas Kontext schreiben. Besonders interessant sind für mich Möglichkeiten, bei denen Struktur, Product Thinking und Umsetzungsqualität zählen.",
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
      t1: "Frontend.",
      t2: "Sistemas.",
      t3: "Claridad.",
      t4: "Ejecución.",

      p1: "Construyo interfaces digitales estructuradas con Next.js, React y TypeScript — con foco en claridad, confiabilidad y uso real en producción.",
      p2: "Mi trabajo combina frontend engineering, estructura de contenido y pensamiento sistémico para crear websites e interfaces de producto más fáciles de usar, mantener y escalar.",

      start: "Iniciar conversación",
      view: "Ver proyectos",

      based: "Berlín, Alemania · Disponible para freelance y roles seleccionados en DE / UE · EN / DE / ES",

      issue: "Práctica independiente",
      place: "Berlín / UE",
      est: "Enfocado en sistemas frontend listos para producción y crecimiento práctico en full-stack",

      principle: "Principios de trabajo",
      m1: "Claridad sobre trucos.",
      m2: "Estructura sobre ruido.",
      m3: "Construir, validar, refinar.",
      available: "Disponible para freelance y roles seleccionados",
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
      title: "Sistemas frontend enfocados en estructura, usabilidad y ejecución confiable.",
      p1: "Soy Cesar Pumayalla — frontend developer y construyo interfaces digitales con Next.js, React y TypeScript. Mi trabajo se centra en estructura, legibilidad y calidad de implementación en websites en producción y proyectos orientados a producto.",
      p2: "Entiendo el frontend como parte de un sistema más amplio: contenido, jerarquía, interacción y decisiones técnicas deben funcionar en conjunto. Mi background en marketing, digital y producto me ha dado una perspectiva práctica sobre cómo las interfaces pueden apoyar tanto a los usuarios como a los objetivos de negocio.",
      bullets: [
        "Core: Next.js (App Router), React, TypeScript, Tailwind",
        "Foco: estructura, legibilidad, comportamiento responsive, calidad de implementación",
        "Tooling: Git/GitHub, Vercel CI/CD, DNS/dominios, seguridad básica",
        "Ampliando rango full-stack: Spring Boot REST, SQL, auth y flujos CRUD",
      ],
    },

    work: {
      kickerLeft: "SELECCIÓN",
      kickerRight: "TRABAJOS",
      title: "Trabajos",
      desc: "Una selección de proyectos con foco en estructura, usabilidad y ejecución orientada a producción.",
      more: "Más ejemplos de código y contexto del proyecto disponibles a petición.",
      sideNote: "Dirección orientada a producto + websites ya entregados en producción.",
      viewLive: "Ver en vivo",
      linkOnRequest: "Repo a petición.",
      items: [
        {
          id: "flagship",
          name: "Client Portal Lite — Next.js + Spring Boot",
          meta: "Proyecto full-stack de portfolio · JWT auth · REST API · Postgres",
          status: "EN PROGRESO (MVP ENTREGADO)",
          description:
            "Un proyecto full-stack construido para demostrar habilidades prácticas de product engineering: autenticación, flujos CRUD, paginación y una experiencia de dashboard estructurada. El foco está en contratos tipados, comportamiento predecible y arquitectura estilo producción.",
        },
        {
          id: "pp",
          name: "P&P Remodeling — website en producción",
          meta: "Next.js + TypeScript · Páginas estructuradas · Deploy real",
          status: "ENTREGADO",
          description:
            "Un website en producción construido con Next.js y TypeScript, diseñado alrededor de una estructura clara de páginas, carga rápida y flujo de contenido legible. Entregado con un sistema de componentes mantenible y deploy en Vercel.",
          href: "https://www.pnp-remodeling.com/",
        },
        {
          id: "guillermo",
          name: "Website para práctica de psicoterapia",
          meta: "Entrega en producción · Estructura de contenido · Detalles de accesibilidad",
          status: "ENTREGADO",
          description:
            "Un sitio calmado y guiado por el contenido, diseñado para reforzar claridad y confianza. La implementación prioriza tipografía legible, jerarquía limpia y una estructura preparada para SEO y mantenimiento a largo plazo.",
          href: "https://guillermo-rios.com",
        },
        {
          id: "wp",
          name: "WordPress / PHP — trabajo en producción",
          meta: "Entrega a clientes · Setup SEO · Fixes pragmáticos",
          status: "",
          description:
            "Trabajo en producción entregado a través de proyectos en WordPress, incluyendo implementación, setup SEO, plugins de seguridad, mejoras de performance y fixes pragmáticos en PHP y CSS dentro de entornos reales de cliente.",
        },
        {
          id: "rfc-abogados",
          name: "RFC Abogados — landing en producción",
          meta: "WordPress / Elementor · Bloques HTML/CSS custom · SEO básico",
          status: "ENTREGADO",
          description:
            "Landing page para un estudio jurídico desarrollada en WordPress con Elementor y secciones custom en HTML/CSS. El trabajo se enfocó en jerarquía de contenido, claridad y entrega práctica dentro de restricciones reales de negocio.",
          href: "https://rfcabogados.com/",
        },
      ],
    },

    services: {
      kicker: "CAPACIDADES",
      title: "Dónde aporto más valor",
      intro:
        "Las áreas donde entrego con mayor consistencia: implementación frontend estructurada, websites en producción y bases prácticas de full-stack.",
      howItWorks: {
        kicker: "CÓMO TRABAJO",
        bullets: [
          "Aclaro el alcance y defino una estructura limpia",
          "Construyo con componentes consistentes e interfaces tipadas",
          "Entrego, valido y refino",
        ],
        cta: "Ver trabajos",
      },
      blocks: [
        {
          title: "Sistemas frontend (Next.js / React / TypeScript)",
          time: "CORE",
          desc: "Implementación frontend estructurada con componentes limpios, patrones consistentes y entrega lista para producción.",
          bullets: [
            "Sistemas de componentes y patrones UI escalables",
            "Layouts responsive con jerarquía clara",
            "Fundamentos de performance y accesibilidad",
          ],
          cta: "Ver proyectos",
        },
        {
          title: "Bases prácticas de full-stack (Spring Boot / SQL)",
          time: "PRÁCTICO",
          desc: "Conocimiento de backend que mejora el pensamiento de producto, la colaboración a través del stack y los builds full-stack pequeños.",
          bullets: [
            "Endpoints REST, validación y manejo de errores predecible",
            "SQL básico: relaciones, queries y migraciones",
            "Conceptos de auth y flujos CRUD",
          ],
          cta: "Proyecto full-stack destacado",
        },
        {
          title: "Websites en producción (WordPress / PHP)",
          time: "DELIVERY",
          desc: "Experiencia de entrega a clientes en implementación, mantenimiento, setup SEO y fixes pragmáticos en producción.",
          bullets: [
            "Builds en Elementor y mejoras de estructura",
            "SEO básico, formularios y tracking",
            "Deploy, DNS, dominios y seguridad básica",
          ],
          cta: "Ver trabajo en producción",
        },
      ],
      close:
        "Estoy enfocado en roles frontend con Next.js, React y TypeScript, mientras sigo fortaleciendo mi rango full-stack a través de trabajo práctico en proyectos.",
    },

    process: {
      kicker: "PROCESO",
      title: "Cómo trabajo",
      intro: "Un flujo claro con foco en estructura, calidad de implementación y entrega confiable.",
      intro2:
        "Desde el alcance hasta el deploy, el proceso se mantiene enfocado en claridad, ejecución predecible y entrega práctica.",
      rail: [
        {
          title: "Estructura",
          body: "Definir el problema, reducir ambigüedad y crear una base más limpia antes de construir.",
        },
        {
          title: "Entrega",
          body: "Traducir decisiones en interfaces consistentes, mantenibles y listas para uso real.",
        },
      ],
      toggleOpen: "Abierto",
      toggleView: "Ver",
      footer: "Foco: sistemas mantenibles, UI predecible y resultados entregados.",
      steps: [
        {
          step: "PASO 01",
          title: "Alcance y estructura",
          desc: "Aclaro el problema, defino la arquitectura de información y establezco restricciones claras antes de construir.",
          bullets: ["Objetivos y mapa de contenido", "Estructura de rutas y secciones", "Plan y restricciones"],
        },
        {
          step: "PASO 02",
          title: "Sistema UI",
          desc: "Construyo un set pequeño y consistente de componentes y reglas de layout que pueda escalar sin añadir ruido.",
          bullets: ["Tipografía y spacing", "Componentes reutilizables", "Comportamiento responsive"],
        },
        {
          step: "PASO 03",
          title: "Implementación",
          desc: "Entrego con patrones claros de Next.js y TypeScript, QA y atención a performance y edge states.",
          bullets: ["Estructura limpia con App Router", "Revisión de a11y y performance", "Estados de error y edge"],
        },
        {
          step: "PASO 04",
          title: "Deploy y refinamiento",
          desc: "Hago deploy, verifico y mejoro a través de iteración enfocada.",
          bullets: ["Previews y deploy en Vercel", "Checks básicos de SEO", "Loop corto de iteración"],
        },
      ],
    },

    footer: {
      brand: "CESAR PUMAYALLA",
      claim: "Práctica independiente de frontend para construir sistemas digitales estructurados con Next.js, React y TypeScript.",
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
      body: "Para trabajo freelance, roles, colaboraciones o proyectos seleccionados, puedes escribirme con algo de contexto. Me interesan especialmente oportunidades donde importen la estructura, el pensamiento de producto y la calidad de implementación.",
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