"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { useI18n } from "@/components/i18n/I18nProvider"

export default function Process() {
  const { t } = useI18n()
  const p = t.process

  const reduceMotion = useReducedMotion()

  // Cleaner first impression: start collapsed.
  const [openId, setOpenId] = useState<number | null>(null)

  const easeEditorial: [number, number, number, number] = [0.16, 1, 0.3, 1]

  const itemVariants = useMemo(
    () => ({
      hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
      show: reduceMotion
        ? { opacity: 1 }
        : {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: easeEditorial },
          },
    }),
    [reduceMotion]
  )

  return (
    <section id="process" className="section !before:hidden">
      <div className="container">
        {/* Masthead */}
        <div className="mb-12 flex items-center gap-6 lg:mb-16">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-black/40 shrink-0">
            {p.kicker}
          </p>
          <div className="h-px flex-1 bg-black/10" />
        </div>

        {/* Grid 50/50 — mismo eje que Work */}
        <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          {/* LEFT — sticky narrativa */}
          <div className="lg:sticky lg:top-24">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.025em]">
              {p.title}
            </h2>

            <div className="mt-7 max-w-[52ch]">
              <p className="text-base leading-[1.75] text-black/70">
                {p.intro}
              </p>
            </div>
          </div>

          {/* RIGHT — lomo */}
          <div className="lg:border-l lg:border-black/10 lg:pl-12">
            <div className="mb-8 h-px w-full bg-black/10 lg:hidden" />

            <div className="max-w-[52ch]">
              <ol className="divide-y divide-black/10">
                {p.steps.map((step, i) => {
                  const isOpen = openId === i

                  return (
                    <motion.li
                      key={`${step.step}-${i}`}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-5%" }}
                      className="py-8 sm:py-9"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenId(isOpen ? null : i)}
                        className="w-full text-left focus:outline-none"
                        aria-expanded={isOpen}
                        aria-controls={`process-panel-${i}`}
                      >
                        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-black/40">
                          {step.step}
                        </p>

                        <h3 className="mt-3 text-lg font-medium leading-[1.25] md:text-xl">
                          {step.title}
                        </h3>

                        {!isOpen && (
                          <p className="mt-4 line-clamp-2 text-base leading-[1.75] text-black/60">
                            {step.desc}
                          </p>
                        )}
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key={`panel-${i}`}
                            id={`process-panel-${i}`}
                            initial={
                              reduceMotion
                                ? { opacity: 1 }
                                : { height: 0, opacity: 0 }
                            }
                            animate={
                              reduceMotion
                                ? { opacity: 1 }
                                : { height: "auto", opacity: 1 }
                            }
                            exit={
                              reduceMotion
                                ? { opacity: 1 }
                                : { height: 0, opacity: 0 }
                            }
                            transition={
                              reduceMotion
                                ? { duration: 0 }
                                : {
                                    duration: 0.55,
                                    ease: easeEditorial,
                                    opacity: { duration: 0.2 },
                                  }
                            }
                            className="overflow-hidden"
                          >
                            <div className="pt-4">
                              <p className="text-base leading-[1.75] text-black/70">
                                {step.desc}
                              </p>

                              {step.bullets.length > 0 && (
                                <ul className="mt-6 space-y-3">
                                  {step.bullets.map((b, bi) => (
                                    <li
                                      key={`${bi}-${b}`}
                                      className="grid grid-cols-[28px_minmax(0,1fr)] gap-4"
                                    >
                                      <span
                                        aria-hidden
                                        className="mt-[9px] tabular-nums text-[10px] font-medium tracking-[0.14em] text-black/25"
                                      >
                                        {String(bi + 1).padStart(2, "0")}
                                      </span>
                                      <p className="text-sm leading-[1.8] text-black/70">
                                        {b}
                                      </p>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  )
                })}
              </ol>

              <div className="mt-10 border-t border-black/10 pt-8">
                <p className="text-sm leading-[1.7] text-black/60">
                  {p.footer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}