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

  const cvHref = "/cv.pdf"
  const primaryHref = cvHref

  return (
    <section id="hero" className="pt-16 md:pt-20 lg:pt-24 pb-14 md:pb-16">
      <Container>
        <div className="grid lg:grid-cols-2 gap-y-12 lg:gap-x-16 items-start">
          
          {/* LEFT */}
          <motion.div variants={col} initial="hidden" whileInView="show" viewport={vp}>
            <div className="mb-10 h-px w-16 bg-black/50" />

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

            {/* TEXTO FIX (NO CORRIDO) */}
            <div className="mt-8 max-w-[44ch] space-y-4">
              <p className="text-[1.05rem] leading-[1.75] text-black/75">
                {h.p1}
              </p>
              <p className="text-[1.05rem] leading-[1.75] text-black/60">
                {h.p2}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a
                href={primaryHref}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {h.start}
              </a>

              <a
                href={`/${lang}#work`}
                className="text-xs uppercase tracking-[0.18em] underline underline-offset-4 text-black/60 hover:text-black/85 transition"
              >
                {h.view}
              </a>
            </div>

            <p className="mt-8 text-[12px] tracking-[0.18em] uppercase text-black/50">
              {h.based}
            </p>
          </motion.div>

          {/* RIGHT */}
          <aside className="lg:border-l lg:border-black/10 lg:pl-12">
            <div className="lg:hidden border-t border-black/10 pt-10" />

            <motion.div
              className="flex flex-col gap-8"
              variants={col}
              initial="hidden"
              whileInView="show"
              viewport={vp}
            >
              <div className="space-y-5 max-w-[38ch]">
                <div className="kicker">{h.issue}</div>
                <div className="kicker">{h.place}</div>
                <div className="kicker">{h.est}</div>
              </div>

              <div className="max-w-[38ch]">
                <div className="kicker">{h.principle}</div>
                <div className="mt-4 text-[17px] leading-[1.7] font-medium">
                  <div>{h.m1}</div>
                  <div>{h.m2}</div>
                  <div>{h.m3}</div>
                </div>
              </div>

              <div className="max-w-[38ch]">
                <div className="kicker">{h.available}</div>
              </div>
            </motion.div>
          </aside>

        </div>
      </Container>
    </section>
  )
}