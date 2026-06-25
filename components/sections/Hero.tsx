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

  return (
    <section id="hero" className="pt-4 md:pt-6 lg:pt-8 pb-10 md:pb-26">
      <Container>
        <div className="grid items-start gap-y-10 lg:min-h-[54vh] lg:grid-cols-[minmax(0,1.22fr)_minmax(320px,0.78fr)] lg:gap-x-12">
          <motion.div
            variants={col}
            initial="hidden"
            whileInView="show"
            viewport={vp}
            className="flex h-full flex-col gap-10"
          >
            <div>
              <div className="mb-7 h-px w-16 bg-black/50" />

              <h1 className="h1 max-w-[16ch]">
                <span className="block">{h.t1}</span>

                <span className="block accent relative inline-block">
                  {h.t2}
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 bottom-[-0.08em] h-px bg-current opacity-20"
                  />
                </span>

                <span className="block">{h.t3}</span>

               {h.t4 && (
                <span className="mt-3 block text-[0.72em] leading-[0.9] tracking-[-0.04em] text-black/25 font-[560] whitespace-nowrap">
                {h.t4}
               </span>
                  )}
              </h1>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-8">
                <a href={`/${lang}#contact`} className="btn">
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

          <aside className="hidden lg:block lg:border-l lg:border-black/10 lg:pl-8 lg:pt-16">
            <motion.div
              className="flex h-full flex-col gap-10"
              variants={col}
              initial="hidden"
              whileInView="show"
              viewport={vp}
            >
              <div>
                <div className="kicker mb-4">{h.principle}</div>

                <div className="space-y-3 text-[15px] leading-[1.7] font-medium">
                  <div>{h.m1}</div>
                  <div>{h.m2}</div>
                  <div>{h.m3}</div>
                </div>
              </div>

              <div>
                <div className="kicker">{h.available}</div>
              </div>
            </motion.div>
          </aside>
        </div>
      </Container>
    </section>
  )
}