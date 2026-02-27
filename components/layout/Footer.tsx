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
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-neutral-950">
              {f.brand}
            </div>

            {f.claim ? (
              <p className="mt-4 max-w-[58ch] text-sm leading-[1.75] text-black/70">
                {f.claim}
              </p>
            ) : null}

            <div className="mt-6 space-y-2 text-sm text-black/60">
              <p>
                <span className="text-black/40">Email:</span>{" "}
                <a
                  className="underline underline-offset-4 hover:text-black/85 transition"
                  href={`mailto:${f.contact.email}`}
                >
                  {f.contact.email}
                </a>
              </p>
              <p>
                <span className="text-black/40">Location:</span> {f.contact.location}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:border-l lg:border-black/10 lg:pl-12 xl:pl-14">
            <div className="grid gap-3">
              {f.links.items.map((it) => {
                const isExternal =
                  it.href.startsWith("http") ||
                  it.href.startsWith("mailto:") ||
                  it.href.startsWith("https://")

                const cls =
                  "text-[11px] uppercase font-normal tracking-[0.18em] text-black/60 hover:text-black/90 transition-colors"

                if (isExternal) {
                  return (
                    <a
                      key={it.label}
                      href={it.href}
                      target={it.href.startsWith("http") ? "_blank" : undefined}
                      rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={cls}
                    >
                      {it.label}
                    </a>
                  )
                }

                // internal
                return (
                  <Link key={it.label} href={it.href} className={cls}>
                    {it.label}
                  </Link>
                )
              })}
            </div>

            <div className="mt-10 border-t border-black/10 pt-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-black/50">
                {f.bottom}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}