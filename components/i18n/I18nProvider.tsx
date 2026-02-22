"use client"

import React, { createContext, useContext } from "react"
import type { Lang, Dictionary } from "@/content/i18n"
import { i18n } from "@/content/i18n"

const I18nContext = createContext<{ lang: Lang; t: Dictionary } | null>(null)

export function I18nProvider({
  lang,
  children,
}: {
  lang: Lang
  children: React.ReactNode
}) {
  const dict = Object.keys(i18n[lang]).length > 0
    ? i18n[lang]
    : i18n["en"]

  return (
    <I18nContext.Provider value={{ lang, t: dict as Dictionary }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>")
  return ctx
}