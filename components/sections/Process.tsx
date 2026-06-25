"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useI18n } from "@/components/i18n/I18nProvider"

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Process() {
  const { t } = useI18n()
  const p = t.process
  const reduce = useReducedMotion()
  const vp = { once: true, amount: 0.2 } as const

  return (
    <section id="process" className="section">
      <div className="container">

        {/* Kicker */}
        <div className="mb-10">
          <div className="border-t border-black/10" />
          <p className="mt-3 text-[11px] font-medium tracking-[0.18em] uppercase text-black/40 ml-[2%]">
            {p.kicker}
          </p>
        </div>

        {/* Título + intro */}
        <div className="ml-[2%] mb-16">
          <motion.h2
            className="mb-6 text-[30px] leading-[1.7] text-black/50 max-w-[40ch]"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, ease }}
          >
            {p.title}
          </motion.h2>
          <motion.p
            className="text-[15px] leading-[1.8] text-black/40 lg:whitespace-nowrap"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ delay: 0.1, duration: 0.6, ease }}
          >
            {p.intro}
          </motion.p>
        </div>

        {/* 4 steps */}
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {p.steps.map((step, i) => (
            <motion.li
              key={i}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={reduce ? { duration: 0 } : { delay: i * 0.1, duration: 0.6, ease }}
              className="grid grid-cols-[48px_1fr] gap-6 border border-black/10 py-8 px-6 -mt-px -ml-px"
            >
              {/* Número */}
              <div className="flex flex-col items-start pt-1">
                <span className="text-[11px] tabular-nums tracking-[0.14em] text-black/25 font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < p.steps.length - 1 && (
                  <motion.div
                    className="w-px bg-[hsl(150,60%,30%)]/40 mt-3 ml-[5px]"
                    initial={reduce ? { height: 40 } : { height: 0 }}
                    whileInView={{ height: 40 }}
                    viewport={{ once: true }}
                    transition={reduce ? { duration: 0 } : { delay: i * 0.1 + 0.3, duration: 0.4, ease }}
                  />
                )}
              </div>

              {/* Contenido */}
              <div>
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-black/30 mb-3">
                  {step.step}
                </p>
                <h3 className="text-[22px] font-medium tracking-[-0.03em] text-black mb-3">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-[1.8] text-black/55 max-w-[52ch] mb-4">
                  {step.desc}
                </p>
                {step.bullets.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {step.bullets.map((b, bi) => (
                      <span
                        key={bi}
                        className="text-[11px] tracking-[0.06em] text-[hsl(150,60%,30%)] border border-[hsl(150,60%,30%)]/20 px-3 py-1"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.li>
          ))}
        </ol>

        {/* Footer note */}
        {p.footer && (
          <motion.p
            className="ml-[2%] mt-10 text-[13px] leading-[1.8] text-black/35 max-w-[48ch]"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ delay: 0.2, duration: 0.6, ease }}
          >
            {p.footer}
          </motion.p>
        )}

      </div>
    </section>
  )
}