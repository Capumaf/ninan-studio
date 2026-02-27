"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { useI18n } from "@/components/i18n/I18nProvider"
import type { Dictionary } from "@/content/i18n"

type ServiceBlock = Dictionary["services"]["blocks"][number]

export default function Services() {
  const { lang, t } = useI18n()
  const s = t.services

  const reduceMotion = useReducedMotion()

  // Cleaner first impression (employment-friendly): start collapsed.
  const [openId, setOpenId] = useState<string | null>(null)

  const easeEditorial: [number, number, number, number] = [0.16, 1, 0.3, 1]
  const vp = { once: true, margin: "-10%" } as const

  const itemVariants = useMemo(
    () => ({
      hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
      show: reduceMotion
        ? { opacity: 1, y: 0 }
        : {
            opacity: 1,
            y: 0,
            transition: { duration: 0.68, ease: easeEditorial },
          },
    }),
    [reduceMotion]
  )

  const metaVariants = useMemo(
    () => ({
      hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 },
      show: reduceMotion
        ? { opacity: 1, y: 0 }
        : {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, ease: easeEditorial },
          },
    }),
    [reduceMotion]
  )

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="mb-10 lg:mb-12">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-black/40">
            {s.kicker}
          </p>
          <div className="mt-3 border-t border-black/10" />
        </div>

        <div className="grid lg:grid-cols-2 gap-y-10 lg:gap-x-14 xl:gap-x-16 items-start">
          {/* LEFT */}
          <div className="lg:sticky lg:top-24 xl:top-28 self-start">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.025em]">
              {s.title}
            </h2>

            <div className="mt-6 lg:mt-7 max-w-[52ch]">
              <p className="text-base leading-[1.75] text-black/70">{s.intro}</p>
            </div>

            <div className="mt-10 max-w-[52ch]">
              <motion.p
                className="text-[11px] font-medium tracking-[0.18em] uppercase text-black/40"
                variants={metaVariants}
                initial="hidden"
                whileInView="show"
                viewport={vp}
              >
                {s.howItWorks.kicker}
              </motion.p>

              <ul className="mt-6 space-y-4">
                {s.howItWorks.bullets.map((b, i) => (
                  <li key={`${i}-${b}`} className="grid grid-cols-[40px_minmax(0,1fr)] gap-5">
                    <span aria-hidden className="mt-[10px] h-px w-10 bg-black/20" />
                    <p className="text-sm leading-[1.7] text-black/70">{b}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href={`/${lang}#work`}
                  className="text-[11px] font-medium tracking-[0.18em] uppercase underline underline-offset-4 text-black/80 hover:text-black transition"
                >
                  {s.howItWorks.cta}
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:border-l lg:border-black/10 lg:pl-12 xl:pl-14">
            <div className="lg:hidden border-t border-black/10 pt-10" />

            <div className="max-w-[52ch]">
              <ul className="divide-y divide-black/10">
                {s.blocks.map((b: ServiceBlock, idx: number) => {
                  // Stable id independent from translation/title
                  const id = `b-${idx + 1}`
                  const isOpen = openId === id
                  const indexLabel = String(idx + 1).padStart(2, "0")
                  const hasMeta = !!(b.time && b.time.trim().length > 0)

                  return (
                    <motion.li
                      key={id}
                      className="group"
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={vp}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenId(isOpen ? null : id)}
                        className="w-full py-8 text-left focus:outline-none"
                        aria-expanded={isOpen}
                        aria-controls={`services-panel-${id}`}
                      >
                        <div className="grid grid-cols-[20px_minmax(0,1fr)] gap-5">
                          <span
                            aria-hidden="true"
                            className="mt-[3px] tabular-nums text-[10px] font-medium tracking-[0.14em] text-black/25"
                          >
                            {indexLabel}
                          </span>

                          <div className="min-w-0">
                            <div className="flex items-baseline justify-between gap-6">
                              <h3 className="text-lg font-medium leading-[1.25] md:text-xl">
                                {b.title}
                              </h3>

                              {hasMeta && (
                                <span className="whitespace-nowrap text-[11px] font-medium tracking-[0.18em] uppercase text-black/40">
                                  {b.time}
                                </span>
                              )}
                            </div>

                            {b.desc ? (
                              <p className="mt-2 text-sm leading-[1.7] text-black/60">
                                {b.desc}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key={`panel-${id}`}
                            id={`services-panel-${id}`}
                            initial={
                              reduceMotion
                                ? { opacity: 1, height: "auto" }
                                : { opacity: 0, height: 0 }
                            }
                            animate={
                              reduceMotion
                                ? { opacity: 1, height: "auto" }
                                : { opacity: 1, height: "auto" }
                            }
                            exit={
                              reduceMotion
                                ? { opacity: 1, height: "auto" }
                                : { opacity: 0, height: 0 }
                            }
                            transition={
                              reduceMotion
                                ? { duration: 0 }
                                : {
                                    duration: 0.56,
                                    ease: easeEditorial,
                                    opacity: { duration: 0.22, ease: easeEditorial },
                                  }
                            }
                            className="overflow-hidden"
                          >
                            <div className="pb-8">
                              {b.bullets?.length ? (
                                <ul className="mt-1 space-y-4">
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
                              ) : null}

                              {b.cta ? (
                                <div className="mt-8">
                                  <a
                                    href={`/${lang}#work`}
                                    className="text-[11px] font-medium tracking-[0.18em] uppercase underline underline-offset-4 text-black/80 hover:text-black transition"
                                  >
                                    {b.cta}
                                  </a>
                                </div>
                              ) : null}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  )
                })}

                {s.close ? (
                  <motion.li
                    className="py-8"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={vp}
                  >
                    <p className="text-base leading-[1.75] text-black/70">{s.close}</p>
                  </motion.li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}