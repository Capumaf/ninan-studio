"use client"

import { useI18n } from "@/components/i18n/I18nProvider"
import Container from "@/components/layout/Container"

export default function Hero() {
  const { lang, t } = useI18n()
  const h = t.hero

  return (
    <section id="hero" className="pt-6 md:pt-8 lg:pt-10 pb-14 md:pb-16">
      <Container>
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,68%)_minmax(0,32%)]">
          
          {/* LEFT */}
          <div className="lg:pl-6">
            <div className="mb-8 h-px w-16 bg-black/50" />

            <h1 className="h1">
              <span className="block">{h.t1}</span>
              <span className="block">{h.t2}</span>
              <span className="block accent">{h.t3}</span>
              {h.t4 ? <span className="block">{h.t4}</span> : null}
            </h1>

            <p className="p mt-8 max-w-[60ch]">
              {h.p1}
              <br />
              {h.p2}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a href={`/${lang}#contact`} className="btn">
                {h.start}
              </a>

              <a
                href={`/${lang}#process`}
                className="text-xs uppercase tracking-[0.18em] underline underline-offset-4 opacity-70 hover:opacity-100 transition"
              >
                {h.view}
              </a>
            </div>

            <p className="p-muted mt-8">{h.based}</p>
          </div>

          {/* RIGHT */}
          <aside
            className="
              border-l border-black/10
              pl-8
              flex flex-col gap-10
              max-lg:border-l-0
              max-lg:pl-0
              max-lg:border-t
              max-lg:pt-8
            "
          >
            <div className="space-y-6">
              <div className="kicker">{h.issue}</div>
              <div className="kicker">{h.place}</div>
              <div className="kicker">{h.est}</div>
            </div>

            <div>
              <div className="kicker">{h.principle}</div>
              <div className="mt-4 max-w-[24ch] text-[15px] leading-[1.9] font-medium tracking-[-0.01em]">
                <div>{h.m1}</div>
                <div>{h.m2}</div>
                <div>{h.m3}</div>
              </div>
            </div>

            <div>
              <div className="kicker">{h.available}</div>
            </div>
          </aside>

        </div>
      </Container>
    </section>
  )
}