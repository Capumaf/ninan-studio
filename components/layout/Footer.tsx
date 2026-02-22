"use client"

import { useI18n } from "@/components/i18n/I18nProvider"

export default function Footer() {
  const { t } = useI18n()
  const f = t.footer

  return (
    <footer id="site-footer">
      <div className="container py-6">
        <p className="text-center text-[11px] uppercase tracking-[0.22em] text-black/60">
          {f.bottom}
        </p>
      </div>
    </footer>
  )
}