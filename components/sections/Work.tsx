"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { useI18n } from "@/components/i18n/I18nProvider"

export default function Work() {
  const { t } = useI18n()
  const w = t.work

  const reduceMotion = useReducedMotion()
  const [openId, setOpenId] = useState<string | null>(
    w.items.length ? w.items[0].id : null
  )

  const easeEditorial: [number, number, number, number] = [0.16, 1, 0.3, 1]

  const itemVariants = useMemo(
    () => ({
      hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
      show: reduceMotion
        ? { opacity: 1, y: 0 }
        : {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: easeEditorial },
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

  const statusVariants = useMemo(
    () => ({
      hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 },
      show: reduceMotion
        ? { opacity: 1, y: 0 }
        : {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: easeEditorial },
          },
    }),
    [reduceMotion]
  )

  return (
    <section id="work" className="section !before:hidden">
      <div className="container">
        {/* Masthead (spread system): kicker arriba + hairline debajo */}
        <div className="mb-10 lg:mb-12">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-black/40">
            {w.kickerRight}
          </p>
          <div className="mt-3 border-t border-black/10" />
        </div>

        {/* Spread grid 50/50 (constante) */}
        <div className="grid lg:grid-cols-2 gap-y-10 lg:gap-x-14 xl:gap-x-16 items-start">
          {/* LEFT — sticky narrativa (constante) */}
          <div className="lg:sticky lg:top-24 xl:top-28 self-start">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.025em]">
              {w.title}
            </h2>

            <div className="mt-6 lg:mt-7 max-w-[52ch]">
              <p className="text-base leading-[1.75] text-black/70">{w.desc}</p>
            </div>
          </div>

          {/* RIGHT — rail fijo (constante) */}
          <div className="lg:border-l lg:border-black/10 lg:pl-12 xl:pl-14">
            {/* Hairline en mobile cuando desaparece el rail */}
            <div className="lg:hidden border-t border-black/10 pt-10" />

            <div className="max-w-[52ch]">
              <ul className="divide-y divide-black/10">
                {w.items.map((item, idx) => {
                  const isOpen = openId === item.id
                  const hasStatus = !!(item.status && item.status.trim().length > 0)
                  const indexLabel = String(idx + 1).padStart(2, "0")

                  return (
                    <motion.li
                      key={item.id}
                      className="group"
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-10%" }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenId(isOpen ? null : item.id)}
                        className="w-full py-7 text-left focus:outline-none sm:py-8"
                        aria-expanded={isOpen}
                        aria-controls={`work-panel-${item.id}`}
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
                                {item.name}
                              </h3>

                              {hasStatus && (
                                <motion.span
                                  className="whitespace-nowrap text-[11px] font-medium tracking-[0.18em] uppercase text-black/40"
                                  variants={statusVariants}
                                  initial="hidden"
                                  whileInView="show"
                                  viewport={{ once: true, margin: "-10%" }}
                                >
                                  {item.status}
                                </motion.span>
                              )}
                            </div>

                            <motion.p
                              className="mt-2 text-sm leading-[1.7] text-black/60"
                              variants={metaVariants}
                              initial="hidden"
                              whileInView="show"
                              viewport={{ once: true, margin: "-10%" }}
                            >
                              {item.meta}
                            </motion.p>
                          </div>
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key={`panel-${item.id}`}
                            id={`work-panel-${item.id}`}
                            initial={
                              reduceMotion ? { opacity: 1, height: "auto" } : { height: 0, opacity: 0 }
                            }
                            animate={
                              reduceMotion ? { opacity: 1, height: "auto" } : { height: "auto", opacity: 1 }
                            }
                            exit={
                              reduceMotion ? { opacity: 1, height: "auto" } : { height: 0, opacity: 0 }
                            }
                            transition={
                              reduceMotion
                                ? { duration: 0 }
                                : {
                                    duration: 0.58,
                                    ease: easeEditorial,
                                    opacity: { duration: 0.22, ease: easeEditorial },
                                  }
                            }
                            className="overflow-hidden"
                          >
                            <div className="pb-8">
                              <p className="text-base leading-[1.75] text-black/70">
                                {item.description}
                              </p>

                              <div className="mt-6 flex flex-wrap items-center gap-6">
                                {item.href ? (
                                  <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[11px] font-medium tracking-[0.18em] uppercase underline underline-offset-4 text-black/80"
                                  >
                                    {w.viewLive}
                                  </a>
                                ) : (
                                  <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-black/40">
                                    {w.linkOnRequest}
                                  </span>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  )
                })}
              </ul>

              <p className="mt-8 text-sm text-black/60">{w.more}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}