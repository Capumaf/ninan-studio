"use client"

import { useI18n } from "@/components/i18n/I18nProvider"
import Container from "@/components/layout/Container"
import { motion, useReducedMotion } from "framer-motion"

export default function Hero() {
  const { lang, t } = useI18n()
  const h = t.hero

  const reduce = useReducedMotion()
  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

  const col = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
    show: reduce
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  } as const

  const vp = { once: true, amount: 0.3 } as const

  const primaryHref = `/${lang}#contact`

  return (
    <section id="hero" className="pt-4 md:pt-6 lg:pt-8 pb-10 md:pb-12">
      <Container>
        <div className="grid items-start gap-y-10 lg:min-h-[54vh] lg:grid-cols-[minmax(0,1.22fr)_minmax(320px,0.78fr)] lg:gap-x-12">
          <motion.div
            variants={col}
            initial="hidden"
            whileInView="show"
            viewport={vp}
            className="flex h-full flex-col gap-10 lg:gap-10"
          >
            <div>
              <div className="mb-7 h-px w-16 bg-black/50" />

              <h1 className="h1 max-w-[18ch]">
                <span className="block">{h.t1}</span>
                <span className="block">{h.t2}</span>

                <span className="block accent relative inline-block">
                  {h.t3}
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 bottom-[-0.08em] h-px bg-current opacity-20"
                  />
                </span>

                {h.t4 && <span className="block">{h.t4}</span>}
              </h1>

              <div className="mt-7 max-w-[44ch] space-y-4">
                <p className="text-[1.05rem] leading-[1.75] text-black/75">
                  {h.p1}
                </p>
                <p className="text-[1.05rem] leading-[1.75] text-black/60">
                  {h.p2}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex flex-wrap items-center gap-8">
                <a href={primaryHref} className="btn">
                  {h.start}
                </a>

                <a
                  href={`/${lang}#work`}
                  className="text-xs uppercase tracking-[0.18em] underline underline-offset-4 text-black/60 transition hover:text-black/85"
                >
                  {h.view}
                </a>
              </div>

              <p className="mt-7 text-[12px] tracking-[0.18em] uppercase text-black/50">
                {h.based}
              </p>
            </div>
          </motion.div>

          <aside className="lg:border-l lg:border-black/10 lg:pl-8">
            <div className="border-t border-black/10 pt-8 lg:hidden" />

            <motion.div
              className="flex h-full flex-col gap-10 lg:gap-10"
              variants={col}
              initial="hidden"
              whileInView="show"
              viewport={vp}
            >
              <div className="max-w-[44ch] space-y-4">
                <div className="kicker">{h.issue}</div>
                <div className="kicker">{h.place}</div>
                <div className="kicker">{h.est}</div>
              </div>

              <div className="max-w-[42ch]">
                <div className="kicker">{h.principle}</div>
                <div className="mt-4 space-y-1 text-[17px] leading-[1.7] font-medium">
                  <div>{h.m1}</div>
                  <div>{h.m2}</div>
                  <div>{h.m3}</div>
                </div>
              </div>

              <div className="max-w-[42ch]">
                <div className="kicker">{h.available}</div>
              </div>
            </motion.div>
          </aside>
        </div>
      </Container>
    </section>
  )
}