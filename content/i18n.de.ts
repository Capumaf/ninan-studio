import type { Dictionary } from "./i18n.types"

export const de: Dictionary = {
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
  title: "NINAN ist eine unabhängige digitale Praxis von\u00A0Cesar\u00A0Pumayalla — Design, Marketing und Frontend-Entwicklung für Startups.",
  p1: "Gestalten, bauen und liefern.",
  bullets: [
    "Technologie — Frontend-Systeme mit Next.js, React und TypeScript.",
    "Produkt — User Flows, MVP-Denken und strukturierte Umsetzung.",
    "Automatisierung — KI-gestützte Workflows und operative Effizienz.",
    "Operations — Prozesse, Koordination und Systeme für Wachstum.",
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
        meta: "Product Operations · Internal OS · Logistics Workflows",
        status: "AKTIVER BUSINESS CASE",
        description:
          "End-to-End Betrieb eines Private-Label Amazon FBA Produkts — dem DV180, Magnetic Dryer Vent Connector Kit: Supplier Research und Koordination, Sample Evaluation, Multi-Warehouse Shipment Management und ein internes System (Commerce OS), gebaut mit Next.js + Prisma + PostgreSQL.",
        href: "https://ninancommerce.com",
        image: "/work/NinanCommerce-Desktop.webp",
        previews: [{ src: "/work/NinanCommerce-responsive.webp", alt: "Commerce responsive" }],
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
        previews: [{ src: "/work/P&Premodeling-responsive.webp", alt: "P&P Remodeling responsive preview" }],
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
        previews: [{ src: "/work/Psychotherapy-Mobile.webp", alt: "Psychotherapy mobile preview" }],
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
        previews: [{ src: "/work/RFC-Mobile.webp", alt: "RFC mobile preview" }],
      },
    ],
  },

  services: {
    kicker: "FÄHIGKEITEN",
    title: "Wo ich den größten Mehrwert bringe",
    intro: "Ich arbeite am stärksten an der Schnittstelle von Product, Frontend, Automation und Business Execution — besonders für Startups und wachsende digitale Teams.",
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
    close: "Ich interessiere mich für Rollen und Kollaborationen in Product, Business Development, Marketing Technology, Startup Operations und Frontend/Product Execution.",
  },

  process: {
    kicker: "PROZESS",
    title: "Wie ich arbeite",
    intro: "Ein klarer Workflow mit Fokus auf Struktur, Product Thinking und pragmatische Delivery.",
    intro2: "Vom Business Context bis zur Umsetzung bleibt der Prozess auf Klarheit, nützliche Systeme und messbaren Fortschritt ausgerichtet.",
    rail: [
      { title: "Struktur", body: "Das Ziel definieren, Unklarheit reduzieren und vor der Umsetzung eine saubere Grundlage schaffen." },
      { title: "Execution", body: "Entscheidungen in Interfaces, Workflows und Systeme übersetzen, die in realen Business-Kontexten nützlich sind." },
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
}