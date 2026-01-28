// content/sections.ts

export type SectionId = "about" | "work" | "services" | "process" | "contact";

export const sections: Array<{
  id: SectionId;
  label: { en: string; de: string };
}> = [
  { id: "about", label: { en: "About", de: "Über" } },
  { id: "work", label: { en: "work", de: "arbeit" } },
  { id: "services", label: { en: "Services", de: "Leistungen" } },
  { id: "process", label: { en: "Process", de: "Prozess" } },
  { id: "contact", label: { en: "Contact", de: "Kontakt" } },
];
