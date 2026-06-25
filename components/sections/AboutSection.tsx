"use client"

import type { Dictionary } from "@/content/i18n"
import { motion, useReducedMotion } from "framer-motion"
import { TextReveal } from "@/components/motion/TextReveal"

type Props = {
  a: Dictionary["about"]
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]
const vp = { once: true, amount: 0.2 } as const

export default function AboutSection({ a }: Props) {
  const reduce = useReducedMotion()

  const fadeUp = (delay = 0) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: vp,
    transition: reduce ? { duration: 0 } : { delay, duration: 0.6, ease },
  })

  return (
    <section id="about" className="section">
      <div className="container">

        {/* Kicker */}
        <motion.div {...fadeUp()} className="mb-10">
          <div className="border-t border-black/10" />
          <p className="mt-3 text-[11px] font-medium tracking-[0.18em] uppercase text-black/40 ml-[4%]">
            {a.kicker}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-x-24 ml-[4%] items-start">

          {/* LEFT */}
          <motion.div {...fadeUp(0.1)} className="self-start">
            <h2 className="text-[26px] leading-[1.8] text-black/70 max-w-[44ch] mb-10">
            <TextReveal text={a.title} delay={0.1} />
            </h2>
            <p className="text-[15px] leading-[1.6] tracking-[-0.01em] font-light text-black mt-4 text-right">
              {a.p1}
            </p>
          </motion.div>

          {/* RIGHT — core pillars */}
          <ol className="flex flex-col gap-3">
            {a.bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={reduce ? { duration: 0 } : { delay: i * 0.1, duration: 0.6, ease }}
                className="group flex items-start gap-6 border border-black/[0.08] px-6 py-5 max-w-[400px] hover:border-black/20 hover:bg-black/[0.015] transition-all duration-300"
              >
                <span className="text-[11px] tabular-nums tracking-[0.14em] text-accent font-medium mt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[16px] font-medium tracking-[-0.02em] text-black mb-1 transition-transform duration-300 group-hover:translate-x-1">
                    {b.split(" — ")[0]}
                  </h3>
                  <p className="text-[13px] leading-[1.7] text-black/50">
                    {b.split(" — ")[1]}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>

        </div>

      </div>
    </section>
  )
}