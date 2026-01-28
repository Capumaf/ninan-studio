// content/site.ts

export type SiteLang = "en" | "de";

export const siteCopy = {
  hero: {
    en: {
      kicker: "Ninan Studio · Web / Automation / AI",
      h1: "Digital studio. High-impact, innovative execution.",
      subheadline:
        "Web, automation and practical AI—strategic design and production-ready delivery.",
      ctaPrimary: "Start a project",
      ctaSecondary: "View process",
      meta: "Based in EU timezone · Working with international clients · English / German",
    },
    de: {
      kicker: "Ninan Studio · Web / Automatisierung / KI",
      h1: "Digitalstudio. Wirkungsstarke, innovative Umsetzung.",
      subheadline:
        "Web, Automatisierung und praxisnahe KI – strategisches Design und produktionsreife Umsetzung.",
      ctaPrimary: "Projekt starten",
      ctaSecondary: "Prozess ansehen",
      meta: "EU-Zeitzone · Internationale Zusammenarbeit · Englisch / Deutsch",
    },
  },
} as const;
