"use client"

import { useI18n } from "@/components/i18n/I18nProvider"
import AboutSection from "./AboutSection"

export default function About() {
  const { t } = useI18n()
  return <AboutSection a={t.about} />
}
