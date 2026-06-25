import type { Dictionary } from "./i18n.types"

export const es: Dictionary = {
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
  title: "NINAN is an independent digital practice by\u00A0Cesar\u00A0Pumayalla — a designer, marketer and frontend developer with a Master in Innovation & Design Management, combining strategic thinking, visual design and modern web development to build products, systems and workflows that actually work for startups and growing teams.",
  p1: "Diseñar, construir y entregar.",
  bullets: [
    "Tecnología — Sistemas frontend con Next.js, React y TypeScript.",
    "Producto — User flows, MVP thinking y ejecución estructurada.",
    "Automatización — Workflows con IA y eficiencia operativa.",
    "Operaciones — Procesos, coordinación y sistemas que soportan el crecimiento.",
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
        meta: "Product operations · Internal OS · Logistics workflows",
        status: "CASO DE NEGOCIO ACTIVO",
        description:
          "Operación end-to-end de un producto private label para Amazon FBA — el DV180, Magnetic Dryer Vent Connector Kit: research y coordinación con proveedores, evaluación de muestras, gestión de shipments multi-almacén, y un sistema interno (Commerce OS) construido en Next.js + Prisma + PostgreSQL.",
        href: "https://ninancommerce.com",
        image: "/work/NinanCommerce-Desktop.webp",
        previews: [{ src: "/work/NinanCommerce-responsive.webp", alt: "NinanCommerce responsive" }],
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
        previews: [{ src: "/work/P&Premodeling-responsive.webp", alt: "P&P Remodeling responsive preview" }],
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
        previews: [{ src: "/work/Psychotherapy-Mobile.webp", alt: "Psychotherapy mobile preview" }],
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
        previews: [{ src: "/work/RFC-Mobile.webp", alt: "RFC mobile preview" }],
      },
    ],
  },

  services: {
    kicker: "CAPACIDADES",
    title: "Dónde aporto más valor",
    intro: "Trabajo mejor en la intersección entre producto, frontend, automatización y ejecución de negocio — especialmente para startups y equipos digitales en crecimiento.",
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
    close: "Estoy interesado en roles y colaboraciones en producto, business development, marketing technology, startup operations y frontend/product execution.",
  },

  process: {
    kicker: "PROCESO",
    title: "Cómo trabajo",
    intro: "Un flujo claro con foco en estructura, pensamiento de producto y entrega práctica.",
    intro2: "Desde el contexto de negocio hasta la ejecución, el proceso se mantiene enfocado en claridad, sistemas útiles y progreso medible.",
    rail: [
      { title: "Estructura", body: "Definir el objetivo, reducir ambigüedad y crear una base más limpia antes de construir." },
      { title: "Ejecución", body: "Traducir decisiones en interfaces, workflows y sistemas útiles para contextos reales de negocio." },
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
}
