"use client"

import { useI18n } from "@/components/i18n/I18nProvider"

export default function Services() {
  const { lang, t } = useI18n()
  const s = t.services

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,72ch)] lg:gap-20">
          {/* LEFT — intro */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[hsl(var(--muted-2))]">
                {s.kicker}
              </p>

              <div className="mt-8 h-px w-20 bg-black/20" />

              <h2 className="mt-8 text-2xl md:text-3xl font-semibold tracking-tight leading-[1.08] max-w-[22ch]">
                {s.title}
              </h2>

              <p className="p mt-6 max-w-[38ch]">
                {s.intro}
              </p>

              {/* HOW IT WORKS (en left, editorial note) */}
              <div className="mt-12">
                <div className="h-px w-full bg-black/10" />

                <p className="mt-8 text-[11px] font-medium tracking-[0.18em] uppercase text-[hsl(var(--muted-2))]">
                  {s.howItWorks.kicker}
                </p>

                <ul className="mt-6 space-y-4">
                  {s.howItWorks.bullets.map((b) => (
                    <li
                      key={b}
                      className="grid grid-cols-[44px_minmax(0,1fr)] gap-6"
                    >
                      <span aria-hidden className="mt-[10px] h-px w-10 bg-black/20" />
                      <p className="text-sm leading-[1.7] text-black/80">{b}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href={`/${lang}#contact`}
                    className="text-[11px] font-medium tracking-[0.18em] uppercase underline underline-offset-4"
                  >
                    {s.howItWorks.cta} →
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT — offers */}
          <div className="lg:pl-10">
            {/* Mobile header (porque aside se oculta) */}
            <div className="lg:hidden">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[hsl(var(--muted-2))]">
                {s.kicker}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight leading-[1.08]">
                {s.title}
              </h2>
              <p className="p mt-6 max-w-[62ch]">
                {s.intro}
              </p>

              <div className="mt-10 h-px w-full bg-black/10" />

              <p className="mt-8 text-[11px] font-medium tracking-[0.18em] uppercase text-[hsl(var(--muted-2))]">
                {s.howItWorks.kicker}
              </p>

              <ul className="mt-6 space-y-4">
                {s.howItWorks.bullets.map((b) => (
                  <li
                    key={b}
                    className="grid grid-cols-[44px_minmax(0,1fr)] gap-6"
                  >
                    <span aria-hidden className="mt-[10px] h-px w-10 bg-black/20" />
                    <p className="text-sm leading-[1.7] text-black/80">{b}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href={`/${lang}#contact`}
                  className="text-[11px] font-medium tracking-[0.18em] uppercase underline underline-offset-4"
                >
                  {s.howItWorks.cta} →
                </a>
              </div>

              <div className="mt-12 h-px w-full bg-black/10" />
            </div>

            {/* Offers list (matches your static example but driven by s.blocks) */}
            <div className="space-y-12">
              {s.blocks.map((b) => (
                <div key={b.title} className="pt-10">
                  <div className="h-px w-full bg-black/10" />

                  <div className="mt-8 flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-lg md:text-xl font-semibold tracking-tight leading-snug">
                      {b.title}
                    </h3>
                    <p className="text-[11px] tracking-[0.18em] uppercase text-black/50">
                      {b.time}
                    </p>
                  </div>

                  <p className="p mt-6 max-w-[62ch]">
                    {b.desc}
                  </p>

                  <ul className="mt-8 space-y-4">
                    {b.bullets.map((x) => (
                      <li
                        key={x}
                        className="grid grid-cols-[44px_minmax(0,1fr)] gap-6"
                      >
                        <span aria-hidden className="mt-[10px] h-px w-10 bg-black/20" />
                        <p className="text-sm leading-[1.7] text-black/80">{x}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <a
                      href={`/${lang}#contact`}
                      className="text-[11px] font-medium tracking-[0.18em] uppercase underline underline-offset-4"
                    >
                      {b.cta} →
                    </a>
                  </div>
                </div>
              ))}

              <div className="pt-10">
                <div className="h-px w-full bg-black/10" />
                <p className="p mt-8 max-w-[62ch]">{s.close}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}