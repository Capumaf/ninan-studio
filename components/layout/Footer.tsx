"use client"

import Link from "next/link"
import { useI18n } from "@/components/i18n/I18nProvider"

export default function Footer() {
  const { lang, t } = useI18n()
  const f = t.footer

  return (
    <footer
      id="site-footer"
      className="border-t border-black/10 bg-white"
      aria-label="Site footer"
    >
      <div className="mx-auto w-full max-w-[1500px] px-6 lg:px-10 2xl:px-12 py-12">

        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-10">

          {/* LEFT */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-neutral-950 mb-4">
              {f.brand}
            </div>
            {f.claim && (
              <p className="max-w-[52ch] text-sm leading-[1.75] text-black/60 mb-6">
                {f.claim}
              </p>
            )}
           
          </div>

          {/* RIGHT — links + location */}
          <div className="flex flex-col items-start gap-3">
  <div className="flex flex-wrap gap-x-8 gap-y-3">
    {f.links.items.map((it) => {
      const isExternal = it.href.startsWith("http") || it.href.startsWith("mailto:")
      const cls = "text-[11px] uppercase font-normal tracking-[0.18em] text-black/50 hover:text-black/90 transition-colors"
      if (isExternal) {
        return (
          <a key={it.label} href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined} className={cls}>
            {it.label}
          </a>
        )
      }
      return <Link key={it.label} href={it.href} className={cls}>{it.label}</Link>
    })}
            </div>
            <p className="text-sm text-black/40 mt-4">{f.contact.location}</p>

             <a
              className="text-sm text-black/50 underline underline-offset-4 hover:text-black/80 transition "
              href={`mailto:${f.contact.email}`}
            >
              {f.contact.email}
            </a>
          </div>

        </div>

        {/* Bottom — copyright centrado */}
        <div className="border-t border-black/10 pt-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-black/35">
            {f.bottom}
          </p>
        </div>

      </div>
    </footer>
  )
}