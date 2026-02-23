"use client"

import { useMemo } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { useI18n } from "@/components/i18n/I18nProvider"

export default function Services() {
  const { lang, t } = useI18n()
  const s = t.services

  const reduceMotion = useReducedMotion()
  const easeEditorial: [number, number, number, number] = [0.16, 1, 0.3, 1]

  // Base como Work: una respiración por bloque (no “UI cascade”)
  const itemVariants = useMemo(
    () => ({
      hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
      show: reduceMotion
        ? { opacity: 1 }
        : {
            opacity: 1,
            y: 0,
            transition: { duration: 0.62, ease: easeEditorial },
          },
    }),
    [reduceMotion]
  )

  // Metadata 6px (solo si la usas en algunos puntos)
  const metaVariants = useMemo(
    () => ({
      hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 },
      show: reduceMotion
        ? { opacity: 1 }
        : {
            opacity: 1,
            y: 0,
            transition: { duration: 0.52, ease: easeEditorial },
          },
    }),
    [reduceMotion]
  )

  return (
    <section id="services" className="section !before:hidden">
      <div className="container">
        {/* Masthead — MISMA BASE QUE WORK */}
        <div className="mb-12 flex items-center gap-6 lg:mb-16">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-black/40 shrink-0">
            {s.kicker}
          </p>
          <div className="h-px flex-1 bg-black/10" />
        </div>

        {/* Grid — MISMA BASE QUE WORK: 50/50 + tensión (gap más contenido) */}
        <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          {/* LEFT — sticky narrativa (como Work) */}
          <div className="lg:sticky lg:top-24">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.025em]">
              {s.title}
            </h2>

            <div className="mt-7 max-w-[52ch]">
              <p className="text-base leading-[1.75] text-black/70">{s.intro}</p>
            </div>
          </div>

          {/* RIGHT — lomo estructural + contenido (como Work) */}
          <div className="lg:border-l lg:border-black/10 lg:pl-12">
            {/* Hairline mobile cuando desaparece border lateral (como Work) */}
            <div className="mb-8 h-px w-full bg-black/10 lg:hidden" />

            {/* Contenido capado (sistema) */}
            <div className="max-w-[52ch]">
              {/* Una estructura clara: divide-y (hairlines estructurales, no decorativas) */}
              <ul className="divide-y divide-black/10">
                {/* HOW IT WORKS — integrado en la columna de contenido (no un “bloque aparte”) */}
                <motion.li
                  className="py-8"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-5%" }}
                >
                  <motion.p
                    className="text-[11px] font-medium tracking-[0.18em] uppercase text-black/40"
                    variants={metaVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-5%" }}
                  >
                    {s.howItWorks.kicker}
                  </motion.p>

                  <ul className="mt-6 space-y-4">
                    {s.howItWorks.bullets.map((b, i) => (
                      <li
                        key={`${i}-${b}`}
                        className="grid grid-cols-[40px_minmax(0,1fr)] gap-5"
                      >
                        <span aria-hidden className="mt-[10px] h-px w-10 bg-black/20" />
                        <p className="text-sm leading-[1.7] text-black/70">{b}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <a
                      href={`/${lang}#contact`}
                      className="text-[11px] font-medium tracking-[0.18em] uppercase underline underline-offset-4 text-black/80"
                    >
                      {s.howItWorks.cta}
                    </a>
                  </div>
                </motion.li>

                {/* OFFERS — cada bloque como capítulo/entrada editorial */}
                {s.blocks.map((b, bi) => (
                  <motion.li
                    key={`${bi}-${b.title}`}
                    className="py-8"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-5%" }}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-6">
                      <h3 className="text-lg font-medium leading-[1.25] md:text-xl">
                        {b.title}
                      </h3>

                      <motion.p
                        className="whitespace-nowrap text-[11px] font-medium tracking-[0.18em] uppercase text-black/40"
                        variants={metaVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-5%" }}
                      >
                        {b.time}
                      </motion.p>
                    </div>

                    <p className="mt-6 text-base leading-[1.75] text-black/70">
                      {b.desc}
                    </p>

                    <ul className="mt-7 space-y-4">
                      {b.bullets.map((x, xi) => (
                        <li
                          key={`${xi}-${x}`}
                          className="grid grid-cols-[40px_minmax(0,1fr)] gap-5"
                        >
                          <span aria-hidden className="mt-[10px] h-px w-10 bg-black/20" />
                          <p className="text-sm leading-[1.7] text-black/70">{x}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <a
                        href={`/${lang}#contact`}
                        className="text-[11px] font-medium tracking-[0.18em] uppercase underline underline-offset-4 text-black/80"
                      >
                        {b.cta}
                      </a>
                    </div>
                  </motion.li>
                ))}

                {/* CLOSE */}
                <motion.li
                  className="py-8"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-5%" }}
                >
                  <p className="text-base leading-[1.75] text-black/70">{s.close}</p>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}