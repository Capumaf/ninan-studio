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
  en: {
    hero: {
      t1: "Frontend.",
      t2: "Next.js.",
      t3: "TypeScript.",
      t4: "React.",

      p1: "I build structured, performance-focused web interfaces with Next.js, React and TypeScript.",
      p2: "I focus on clean UI architecture, maintainable components and production-ready implementations. Ninan Studio is my personal label — I apply as an individual developer.",

      start: "Download CV",
      view: "View work",

      based: "Berlin, Germany · Open to Germany / EU roles · EN / DE / ES",

      issue: "Portfolio",
      place: "Berlin / EU",
      est: "Currently building a Next.js + Spring Boot project",

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
      title: "Frontend developer focused on clear structure and real delivery.",
      p1: "I’m Cesar Pumayalla — a frontend developer focused on building structured interfaces with Next.js, React and TypeScript. My work emphasizes clean UI architecture, performance awareness and accessibility fundamentals.",
      p2: "My background is non-traditional (marketing → digital → product). I transitioned into development through hands-on projects and continue expanding my full-stack knowledge through a Next.js + Spring Boot project.",
      bullets: [
        "Core: Next.js (App Router), React, TypeScript, Tailwind",
        "Quality: semantic HTML, performance awareness, accessibility basics",
        "Tooling: Git/GitHub, Vercel CI/CD, DNS/domains, basic security",
        "Working backend knowledge: Spring Boot REST + SQL",
      ],
    },

    work: {
      kickerLeft: "SELECTED",
      kickerRight: "WORK",
      title: "Work",
      desc: "A focused selection of projects that show how I build: structure, readability, performance and real delivery.",
      more: "More code samples and project context are available on request.",
      sideNote: "One featured direction + shipped production websites.",
      viewLive: "View live",
      linkOnRequest: "Repo on request.",
      items: [
        {
          id: "flagship",
          name: "Client Portal Lite — Next.js + Spring Boot",
          meta: "Full-stack portfolio project · JWT auth · REST API · Postgres",
          status: "IN PROGRESS (MVP SHIPPED)",
          description:
            "A full-stack portfolio project built to demonstrate practical engineering skills: authentication, CRUD workflows, pagination and a structured dashboard interface. Focus: typed contracts, predictable error handling and production-style architecture.",
        },
        {
          id: "pp",
          name: "P&P Remodeling — production website",
          meta: "Next.js + TypeScript · Structured pages · Real deploy",
          status: "SHIPPED",
          description:
            "A production website built with Next.js and TypeScript. The project focuses on clear structure, fast loading and readable content hierarchy, delivered with a maintainable component system and deployed on Vercel.",
          href: "https://www.pnp-remodeling.com/",
        },
        {
          id: "guillermo",
          name: "Psychotherapy practice website",
          meta: "Production delivery · Content structure · Accessibility details",
          status: "SHIPPED",
          description:
            "A calm, content-focused website designed for clarity and trust. The implementation prioritizes readable typography, clean hierarchy and SEO-ready structure.",
          href: "https://guillermo-rios.com",
        },
        {
          id: "wp",
          name: "WordPress / PHP — production work",
          meta: "Client delivery · SEO setup · Pragmatic fixes",
          status: "",
          description:
            "Production work delivered with WordPress. Projects included implementation, SEO setup, security plugins, performance improvements and pragmatic fixes in PHP and CSS.",
        },
        {
          id: "rfc-abogados",
          name: "RFC Abogados — landing in production",
          meta: "WordPress / Elementor · Custom HTML/CSS blocks · SEO basics",
          status: "SHIPPED",
          description:
            "Landing page for a legal firm delivered in WordPress (Elementor) with custom HTML/CSS sections. Focus: clear hierarchy, readable structure and practical production delivery.",
          href: "https://rfcabogados.com/",
        },
      ],
    },

    services: {
      kicker: "CAPABILITIES",
      title: "What I build",
      intro:
        "These are the areas where I deliver most consistently: structured frontend implementation, production websites and practical full-stack foundations.",
      howItWorks: {
        kicker: "HOW I WORK",
        bullets: [
          "Clarify scope → define a clean structure",
          "Build with predictable components and typed interfaces",
          "Ship, validate and refine",
        ],
        cta: "See work",
      },
      blocks: [
        {
          title: "Frontend (Next.js / React / TypeScript)",
          time: "CORE",
          desc: "Structured frontend implementation with clean components, consistent patterns and production-ready delivery.",
          bullets: [
            "Component systems + consistent patterns",
            "Responsive layouts + clear hierarchy",
            "Performance and accessibility basics",
          ],
          cta: "View projects",
        },
        {
          title: "Working backend knowledge (Spring Boot / SQL)",
          time: "PRACTICAL",
          desc: "Practical backend foundations that support collaboration across the stack and small full-stack builds.",
          bullets: [
            "REST endpoints + validation + error handling",
            "SQL basics (relations, queries, migrations)",
            "Auth concepts (JWT basics)",
          ],
          cta: "Featured full-stack project",
        },
        {
          title: "Production websites (WordPress / PHP)",
          time: "DELIVERY",
          desc: "Client delivery experience across implementation, maintenance, SEO setup and pragmatic fixes.",
          bullets: [
            "Elementor builds + structure improvements",
            "SEO basics + forms + tracking setup",
            "Deploy, DNS, domains, basic security",
          ],
          cta: "See production work",
        },
      ],
      close:
        "I’m targeting frontend roles with Next.js, React and TypeScript, while continuing to strengthen my full-stack range through practical project work.",
    },

    process: {
      kicker: "PROCESS",
      title: "How I work",
      intro: "A simple workflow focused on clarity, structure and reliable delivery.",
      footer: "Focus: maintainable structure, predictable UI and shipped results.",
      steps: [
        {
          step: "STEP 01",
          title: "Scope & structure",
          desc: "Clarify the problem, define the information architecture and set clear constraints.",
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
          desc: "Ship with clear Next.js and TypeScript patterns, QA and performance checks.",
          bullets: ["Clean App Router structure", "A11y/performance pass", "Error/edge states"],
        },
        {
          step: "STEP 04",
          title: "Deploy & refine",
          desc: "Deploy, verify and improve based on feedback.",
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
          { label: "EMAIL", href: "mailto:cesarpumayalla@ninan-studio.com" },
        ],
      },
      contact: {
        email: "cesarpumayalla@ninan-studio.com",
        location: "Berlin, Germany · Open to Germany / EU · Full-time / Contract",
      },
      bottom: "© 2026 Cesar Pumayalla — Ninan Studio (personal label).",
    },

    contact: {
      kicker: "CONTACT",
      title: "Get in touch",
      body: "For roles or project discussions, feel free to send a short message with some context about the position or opportunity. I usually reply within 24–48 hours.",
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
      t2: "Next.js.",
      t3: "TypeScript.",
      t4: "React.",

      p1: "Ich entwickle strukturierte, performante Web-Interfaces mit Next.js (App Router), React und TypeScript.",
      p2: "Ergänzend arbeite ich mit Backend-Technologien wie Spring Boot und SQL und baue meine Full-Stack-Kenntnisse kontinuierlich aus. Ninan Studio ist mein persönliches Label — ich bewerbe mich als individueller Entwickler.",

      start: "Lebenslauf",
      view: "Projekte ansehen",

      based: "Berlin, Deutschland · Offen für DE / EU Rollen · EN / DE / ES",

      issue: "Portfolio",
      place: "Berlin / EU",
      est: "Aktuell Next.js + Spring Boot Projekt",

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
      title: "Frontend Developer mit Fokus auf klare Struktur und echte Delivery.",
      p1: "Ich bin Cesar Pumayalla — Frontend Developer mit Fokus auf strukturierte Interfaces mit Next.js, React und TypeScript. Im Mittelpunkt stehen saubere UI-Architektur, Performance-Bewusstsein und Accessibility-Grundlagen.",
      p2: "Mein Background ist nicht klassisch (Marketing → Digital → Produkt). Den Wechsel in Development habe ich über praxisnahe Projekte gemacht und erweitere meine Full-Stack-Kenntnisse kontinuierlich über ein Next.js + Spring Boot Projekt.",
      bullets: [
        "Core: Next.js (App Router), React, TypeScript, Tailwind",
        "Qualität: semantisches HTML, Performance-Bewusstsein, Accessibility-Basics",
        "Tooling: Git/GitHub, Vercel CI/CD, DNS/Domains, Basic Security",
        "Praktische Backend-Kenntnisse: Spring Boot REST + SQL",
      ],
    },

    work: {
      kickerLeft: "AUSWAHL",
      kickerRight: "ARBEITEN",
      title: "Arbeiten",
      desc: "Eine fokussierte Auswahl an Projekten, die zeigt, wie ich arbeite: Struktur, Lesbarkeit, Performance und echte Delivery.",
      more: "Mehr Code-Beispiele und Projektkontext auf Anfrage.",
      sideNote: "Eine Featured-Richtung + ausgelieferte Production Websites.",
      viewLive: "Live ansehen",
      linkOnRequest: "Repo auf Anfrage.",
      items: [
        {
          id: "flagship",
          name: "Client Portal Lite — Next.js + Spring Boot",
          meta: "Full-stack Portfolio · JWT Auth · REST API · Postgres",
          status: "IN ARBEIT (MVP GELIEFERT)",
          description:
            "Ein Full-Stack-Portfolio-Projekt zur Demonstration praktischer Engineering-Skills: Authentifizierung, CRUD-Workflows, Pagination und eine strukturierte Dashboard-Oberfläche. Fokus: typisierte Schnittstellen, konsistentes Error-Handling und produktionsnahe Architektur.",
        },
        {
          id: "pp",
          name: "P&P Remodeling — Production Website",
          meta: "Next.js + TypeScript · Strukturierte Seiten · Real Deploy",
          status: "GELIEFERT",
          description:
            "Eine Production Website mit Next.js und TypeScript. Fokus: klare Struktur, schnelle Ladezeiten und gut lesbare Content-Hierarchie, umgesetzt mit einem wartbaren Component-System und Deploy auf Vercel.",
          href: "https://www.pnp-remodeling.com/",
        },
        {
          id: "guillermo",
          name: "Website für Psychotherapie-Praxis",
          meta: "Production Delivery · Content-Struktur · Accessibility-Details",
          status: "GELIEFERT",
          description:
            "Eine ruhige, content-orientierte Website mit Fokus auf Klarheit und Vertrauen. Die Umsetzung priorisiert lesbare Typografie, saubere Hierarchie und SEO-fähige Struktur.",
          href: "https://guillermo-rios.com",
        },
        {
          id: "wp",
          name: "WordPress / PHP — Production Work",
          meta: "Kunden-Delivery · SEO Setup · Pragmatic Fixes",
          status: "",
          description:
            "Production Work mit WordPress. Dazu gehörten Umsetzung, SEO-Setup, Security-Plugins, Performance-Verbesserungen sowie pragmatische Fixes in PHP und CSS.",
        },
        {
          id: "rfc-abogados",
          name: "RFC Abogados — Landing (Production)",
          meta: "WordPress / Elementor · Custom HTML/CSS · SEO Basics",
          status: "GELIEFERT",
          description:
            "Landing Page für eine Kanzlei, umgesetzt in WordPress (Elementor) mit Custom HTML/CSS Sections. Fokus: klare Hierarchie, lesbare Struktur und pragmatische Delivery in Production.",
          href: "https://rfcabogados.com/",
        },
      ],
    },

    services: {
      kicker: "FÄHIGKEITEN",
      title: "Was ich baue",
      intro:
        "Das sind die Bereiche, in denen ich am zuverlässigsten liefere: strukturierte Frontend-Implementierung, Production Websites und praktische Full-Stack-Grundlagen.",
      howItWorks: {
        kicker: "ARBEITSWEISE",
        bullets: [
          "Scope klären → saubere Struktur definieren",
          "Mit konsistenten Komponenten und Typisierung bauen",
          "Liefern, prüfen und verfeinern",
        ],
        cta: "Projekte ansehen",
      },
      blocks: [
        {
          title: "Frontend (Next.js / React / TypeScript)",
          time: "CORE",
          desc: "Strukturierte Frontend-Implementierung mit sauberen Komponenten, konsistenten Patterns und produktionsnaher Delivery.",
          bullets: [
            "Komponentensysteme + konsistente Patterns",
            "Responsive Layouts + klare Hierarchie",
            "Performance- und Accessibility-Basics",
          ],
          cta: "Projekte ansehen",
        },
        {
          title: "Praktische Backend-Kenntnisse (Spring Boot / SQL)",
          time: "PRAKTISCH",
          desc: "Praktische Backend-Grundlagen für Zusammenarbeit über den Stack hinweg und kleinere Full-Stack-Builds.",
          bullets: [
            "REST Endpoints + Validation + Error-Handling",
            "SQL Basics (Relationen, Queries, Migrationen)",
            "Auth-Konzepte (JWT Basics)",
          ],
          cta: "Featured Full-stack Projekt",
        },
        {
          title: "Production Websites (WordPress / PHP)",
          time: "DELIVERY",
          desc: "Erfahrung in Kundenprojekten über Umsetzung, Maintenance, SEO-Setup und pragmatische Fixes.",
          bullets: [
            "Elementor Builds + Struktur verbessern",
            "SEO Basics + Forms + Tracking Setup",
            "Deploy, DNS, Domains, Basic Security",
          ],
          cta: "Production Work",
        },
      ],
      close:
        "Ich fokussiere mich auf Frontend-Rollen mit Next.js, React und TypeScript und erweitere meine Full-Stack-Range kontinuierlich über praktische Projektarbeit.",
    },

    process: {
      kicker: "PROZESS",
      title: "Wie ich arbeite",
      intro: "Ein einfacher Workflow mit Fokus auf Klarheit, Struktur und zuverlässige Delivery.",
      footer: "Fokus: wartbare Struktur, vorhersehbares UI und ausgelieferte Ergebnisse.",
      steps: [
        {
          step: "SCHRITT 01",
          title: "Scope & Struktur",
          desc: "Problem klären, Informationsarchitektur definieren und klare Constraints setzen.",
          bullets: ["Ziele + Content Map", "Route/Section-Struktur", "Plan + Constraints"],
        },
        {
          step: "SCHRITT 02",
          title: "UI-System",
          desc: "Ein kleines, konsistentes Set an Komponenten und Layout-Regeln aufbauen.",
          bullets: ["Typografie + Spacing", "Reusable Components", "Responsive Verhalten"],
        },
        {
          step: "SCHRITT 03",
          title: "Implementierung",
          desc: "Mit klaren Next.js- und TypeScript-Patterns umsetzen, testen und prüfen.",
          bullets: ["Saubere App Router Struktur", "A11y/Performance Pass", "Error/Edge States"],
        },
        {
          step: "SCHRITT 04",
          title: "Deploy & Verfeinerung",
          desc: "Deployen, verifizieren und auf Basis von Feedback verbessern.",
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
          { label: "EMAIL", href: "mailto:cesarpumayalla@ninan-studio.com" },
        ],
      },
      contact: {
        email: "cesarpumayalla@ninan-studio.com",
        location: "Berlin, Deutschland · Offen für DE / EU · Full-time / Contract",
      },
      bottom: "© 2026 Cesar Pumayalla — Ninan Studio (persönliches Label).",
    },

    contact: {
      kicker: "KONTAKT",
      title: "Kontakt",
      body: "Für Rollen oder Projektgespräche kannst du mir gern eine kurze Nachricht mit etwas Kontext zur Position oder Möglichkeit schicken. Ich antworte in der Regel innerhalb von 24–48 Stunden.",
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
      t2: "Next.js.",
      t3: "TypeScript.",
      t4: "React.",

      p1: "Construyo interfaces web estructuradas y orientadas al rendimiento con Next.js, React y TypeScript.",
      p2: "Me enfoco en arquitectura UI limpia, componentes mantenibles e implementaciones listas para producción. Ninan Studio es mi etiqueta personal — aplico como developer individual.",

      start: "Descargar CV",
      view: "Ver proyectos",

      based: "Berlín, Alemania · Abierto a roles en DE / UE · EN / DE / ES",

      issue: "Portfolio",
      place: "Berlín / UE",
      est: "Proyecto actual: Next.js + Spring Boot",

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
      title: "Frontend developer con enfoque en estructura clara y entrega real.",
      p1: "Soy Cesar Pumayalla — frontend developer enfocado en construir interfaces estructuradas con Next.js, React y TypeScript. Mi trabajo prioriza arquitectura UI limpia, criterio de performance y fundamentos de accesibilidad.",
      p2: "Mi background no es tradicional (marketing → digital → producto). Hice la transición a development a través de proyectos prácticos y sigo ampliando mi rango full-stack con un proyecto en Next.js + Spring Boot.",
      bullets: [
        "Core: Next.js (App Router), React, TypeScript, Tailwind",
        "Calidad: HTML semántico, criterio de performance, accesibilidad básica",
        "Tooling: Git/GitHub, Vercel CI/CD, DNS/dominios, seguridad básica",
        "Conocimiento práctico de backend: Spring Boot REST + SQL",
      ],
    },

    work: {
      kickerLeft: "SELECCIÓN",
      kickerRight: "TRABAJOS",
      title: "Trabajos",
      desc: "Una selección enfocada de proyectos que muestra cómo construyo: estructura, legibilidad, performance y entrega real.",
      more: "Más ejemplos de código y contexto del proyecto disponibles a petición.",
      sideNote: "Una dirección principal + websites ya entregados en producción.",
      viewLive: "Ver en vivo",
      linkOnRequest: "Repo a petición.",
      items: [
        {
          id: "flagship",
          name: "Client Portal Lite — Next.js + Spring Boot",
          meta: "Full-stack portfolio · JWT auth · REST API · Postgres",
          status: "EN PROGRESO (MVP ENTREGADO)",
          description:
            "Proyecto full-stack de portfolio construido para demostrar habilidades prácticas de ingeniería: autenticación, flujos CRUD, paginación e interfaz de dashboard estructurada. Foco: contratos tipados, manejo de errores predecible y arquitectura tipo producción.",
        },
        {
          id: "pp",
          name: "P&P Remodeling — website en producción",
          meta: "Next.js + TypeScript · Páginas estructuradas · Deploy real",
          status: "ENTREGADO",
          description:
            "Website en producción construida con Next.js y TypeScript. El proyecto se enfoca en estructura clara, carga rápida y jerarquía de contenido legible, con un sistema de componentes mantenible y deploy en Vercel.",
          href: "https://www.pnp-remodeling.com/",
        },
        {
          id: "guillermo",
          name: "Website para práctica de psicoterapia",
          meta: "Entrega en producción · Estructura de contenido · Accesibilidad",
          status: "ENTREGADO",
          description:
            "Un sitio calmado y centrado en el contenido, diseñado para transmitir claridad y confianza. La implementación prioriza tipografía legible, jerarquía limpia y estructura preparada para SEO.",
          href: "https://guillermo-rios.com",
        },
        {
          id: "wp",
          name: "WordPress / PHP — trabajo en producción",
          meta: "Delivery a clientes · SEO setup · Fixes pragmáticos",
          status: "",
          description:
            "Trabajo en producción entregado con WordPress. Incluyó implementación, setup SEO, plugins de seguridad, mejoras de performance y fixes pragmáticos en PHP y CSS.",
        },
        {
          id: "rfc-abogados",
          name: "RFC Abogados — landing en producción",
          meta: "WordPress / Elementor · Bloques HTML/CSS custom · SEO básico",
          status: "ENTREGADO",
          description:
            "Landing para estudio jurídico desarrollada en WordPress (Elementor) con secciones HTML/CSS custom. Foco: jerarquía clara, estructura legible y entrega práctica en producción.",
          href: "https://rfcabogados.com/",
        },
      ],
    },

    services: {
      kicker: "CAPACIDADES",
      title: "Lo que construyo",
      intro:
        "Estas son las áreas donde entrego con mayor consistencia: implementación frontend estructurada, websites en producción y bases prácticas de full-stack.",
      howItWorks: {
        kicker: "CÓMO TRABAJO",
        bullets: [
          "Aclaro alcance → defino estructura limpia",
          "Construyo con componentes predecibles e interfaces tipadas",
          "Entrego, valido y refino",
        ],
        cta: "Ver trabajos",
      },
      blocks: [
        {
          title: "Frontend (Next.js / React / TypeScript)",
          time: "CORE",
          desc: "Implementación frontend estructurada con componentes limpios, patrones consistentes y entrega lista para producción.",
          bullets: [
            "Sistemas de componentes + patrones consistentes",
            "Layouts responsive + jerarquía clara",
            "Performance y accesibilidad básica",
          ],
          cta: "Ver proyectos",
        },
        {
          title: "Conocimiento práctico de backend (Spring Boot / SQL)",
          time: "PRÁCTICO",
          desc: "Bases prácticas de backend para colaborar a través del stack y construir proyectos full-stack pequeños.",
          bullets: [
            "Endpoints REST + validación + manejo de errores",
            "SQL básico (relaciones, queries, migraciones)",
            "Conceptos de auth (JWT básico)",
          ],
          cta: "Proyecto full-stack",
        },
        {
          title: "Websites en producción (WordPress / PHP)",
          time: "DELIVERY",
          desc: "Experiencia de entrega a clientes en implementación, mantenimiento, setup SEO y fixes pragmáticos.",
          bullets: [
            "Elementor + mejoras de estructura",
            "SEO básico + formularios + tracking",
            "Deploy, DNS, dominios, seguridad básica",
          ],
          cta: "Ver producción",
        },
      ],
      close:
        "Estoy apuntando a roles frontend con Next.js, React y TypeScript, mientras sigo fortaleciendo mi rango full-stack a través de trabajo práctico en proyectos.",
    },

    process: {
      kicker: "PROCESO",
      title: "Cómo trabajo",
      intro: "Un flujo simple con foco en claridad, estructura y entrega confiable.",
      footer: "Foco: estructura mantenible, UI predecible y resultados entregados.",
      steps: [
        {
          step: "PASO 01",
          title: "Alcance y estructura",
          desc: "Aclaro el problema, defino la arquitectura de información y establezco restricciones claras.",
          bullets: ["Objetivos + mapa de contenido", "Estructura de rutas/secciones", "Plan + restricciones"],
        },
        {
          step: "PASO 02",
          title: "Sistema UI",
          desc: "Construyo un set pequeño y consistente de componentes y reglas de layout.",
          bullets: ["Tipografía + spacing", "Componentes reutilizables", "Comportamiento responsive"],
        },
        {
          step: "PASO 03",
          title: "Implementación",
          desc: "Entrego con patrones claros de Next.js y TypeScript, QA y revisión de performance.",
          bullets: ["Estructura limpia App Router", "Revisión a11y/performance", "Estados de error/edge"],
        },
        {
          step: "PASO 04",
          title: "Deploy y refinamiento",
          desc: "Hago deploy, verifico y mejoro en base al feedback.",
          bullets: ["Deploy en Vercel + previews", "Checks SEO", "Iteración pequeña"],
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
          { label: "EMAIL", href: "mailto:cesarpumayalla@ninan-studio.com" },
        ],
      },
      contact: {
        email: "cesarpumayalla@ninan-studio.com",
        location: "Berlín, Alemania · Abierto a DE / UE · Full-time / Contract",
      },
      bottom: "© 2026 Cesar Pumayalla — Ninan Studio (etiqueta personal).",
    },

    contact: {
      kicker: "CONTACTO",
      title: "Contacto",
      body: "Para roles o conversaciones sobre proyectos, puedes enviarme un mensaje corto con algo de contexto sobre la posición o la oportunidad. Normalmente respondo dentro de 24–48 horas.",
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