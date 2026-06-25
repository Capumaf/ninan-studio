"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { useI18n } from "@/components/i18n/I18nProvider"
import type { Dictionary } from "@/content/i18n"

type ServiceBlock = Dictionary["services"]["blocks"][number]

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Services() {
  const { lang, t } = useI18n()
  const s = t.services
  const reduce = useReducedMotion()
  const [openId, setOpenId] = useState<string | null>(null)

  const vp = { once: true, amount: 0.2 } as const

  return (
    <section id="services" className="section">
      <div className="container">

        {/* Kicker */}
        <div className="mb-10 ml-[2%]">
          <div className="border-t border-black/10" />
          <p className="mt-3 text-[11px] font-medium tracking-[0.18em] uppercase text-black/40">
            {s.kicker}
          </p>
        </div>

        {/* Grid: izquierda título + intro + close, derecha cards */}
        <div className="grid lg:grid-cols-2 gap-x-8 items-start">

          {/* LEFT — título + intro + close */}
          <div className="self-start mb-12 lg:mb-0 ml-[20%]">
            <motion.h2
              className="mb-6 text-[32px] leading-[1.7] text-black/70 max-w-[40ch]"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, ease }}
            >
              {s.title}
            </motion.h2>
            <motion.p
              className="text-[15px] leading-[1.8] text-black/50 max-w-[45ch]"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: 0.1, duration: 0.6, ease }}
            >
              {s.intro}
            </motion.p>

            {s.close && (
              <motion.p
                className="mt-10 text-[15px] leading-[1.8] text-black/50 max-w-[45ch]"
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: 0.2, duration: 0.6, ease }}
              >
                {s.close}
              </motion.p>
            )}
          </div>

          {/* RIGHT — 3 cards verticales */}
          <div className="flex flex-col gap-3">
            {s.blocks.map((b: ServiceBlock, idx) => {
              const id = `b-${idx + 1}`
              const isOpen = openId === id

              return (
                <motion.div
                  key={id}
                  className="border border-black/[0.08]"
                  initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={reduce ? { duration: 0 } : { delay: idx * 0.1, duration: 0.6, ease }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : id)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition-all duration-300 hover:bg-black/[0.015]"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-1 shrink-0 text-[11px] font-medium tabular-nums tracking-[0.14em] text-accent">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="mb-1 text-[16px] font-medium tracking-[-0.02em] text-black transition-transform duration-300 group-hover:translate-x-1">
                          {b.title}
                        </h3>
                        <p className="text-[13px] leading-[1.7] text-black/50">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease }}
                      className="mt-1 shrink-0 text-[20px] text-black/25"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduce ? false : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={reduce ? undefined : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.38, ease }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-black/[0.08] px-6 pb-5">
                          {b.bullets?.length ? (
                            <ul className="mt-4 space-y-3">
                              {b.bullets.map((x, xi) => (
                                <li key={xi} className="flex items-start gap-4">
                                  <span className="mt-[9px] h-px w-4 shrink-0 bg-black/20" />
                                  <p className="text-[13px] leading-[1.7] text-black/60">{x}</p>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                          {b.cta && (
                            <a
                              href={`/${lang}#work`}
                              className="mt-5 inline-block text-[11px] uppercase tracking-[0.18em] text-black/60 underline underline-offset-4 transition hover:text-black"
                            >
                              {b.cta}
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}