"use client"

import { useI18n } from "@/components/i18n/I18nProvider"
import Container from "@/components/layout/Container"
import { motion, useReducedMotion } from "framer-motion"

export default function Hero() {
  const { lang, t } = useI18n()
  const h = t.hero

  const reduce = useReducedMotion()
  const easeSettle: [number, number, number, number] = [0.16, 1, 0.3, 1]
  const easeInk: [number, number, number, number] = [0.22, 1, 0.36, 1]

  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0 },
  } as const

  const line = {
    hidden: reduce ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0.7 },
    show: { opacity: 1, scaleX: 1 },
  } as const

  const tSettle = (delay = 0, duration = 1.05) =>
    reduce ? { duration: 0 } : { delay, duration, ease: easeSettle }

  // viewport config — reanima cada vez que el hero vuelve al viewport
  const vp = { once: false, amount: 0.2 }

  return (
    <section id="hero" className="pt-6 md:pt-8 lg:pt-10 pb-14 md:pb-16">
      <Container>
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,60%)_minmax(0,40%)]">
          {/* LEFT */}
          <div className="lg:pl-6">
            <motion.div
              className="mb-8 h-px w-16 bg-black/50"
              variants={line}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              transition={tSettle(0.08, 0.7)}
              style={{ transformOrigin: "left" }}
            />

            <h1 className="h1">
              <motion.span
                className="block"
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={vp}
                transition={tSettle(0.22, 1.05)}
              >
                {h.t1}
              </motion.span>

              <motion.span
                className="block"
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={vp}
                transition={tSettle(0.34, 1.05)}
              >
                {h.t2}
              </motion.span>

              {/* Verde + micro ink underline */}
              <motion.span
                className="block accent"
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={vp}
                transition={tSettle(0.46, 1.05)}
                style={{ position: "relative", display: "inline-block" }}
              >
                {h.t3}
                <motion.span
                  aria-hidden
                  initial={reduce ? { opacity: 0, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 0.28, scaleX: 1 }}
                  viewport={vp}
                  transition={reduce ? { duration: 0 } : { delay: 1.15, duration: 0.9, ease: easeInk }}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: "-0.08em",
                    height: "1px",
                    background: "currentColor",
                    transformOrigin: "left",
                    pointerEvents: "none",
                  }}
                />
              </motion.span>

              {h.t4 ? (
                <motion.span
                  className="block"
                  variants={item}
                  initial="hidden"
                  whileInView="show"
                  viewport={vp}
                  transition={tSettle(0.58, 1.05)}
                >
                  {h.t4}
                </motion.span>
              ) : null}
            </h1>

            <motion.p
              className="p mt-8 max-w-[60ch]"
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              transition={tSettle(0.72, 1.0)}
            >
              {h.p1}
              <br />
              {h.p2}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-8"
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              transition={tSettle(0.9, 0.95)}
            >
              <a href={`/${lang}#contact`} className="btn">
                {h.start}
              </a>
              <a
                href={`/${lang}#process`}
                className="text-xs uppercase tracking-[0.18em] underline underline-offset-4 opacity-70 hover:opacity-100 transition"
              >
                {h.view}
              </a>
            </motion.div>

            <motion.p
              className="p-muted mt-8"
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              transition={tSettle(1.12, 0.9)}
            >
              {h.based}
            </motion.p>
          </div>

          {/* RIGHT */}
          <aside className="
            border-l border-black/10
            pl-8
            flex flex-col gap-10
            max-lg:border-l-0
            max-lg:pl-0
            max-lg:border-t
            max-lg:pt-8
          ">
            <motion.div
              className="space-y-6"
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              transition={tSettle(0.98, 0.95)}
            >
              <div className="kicker">{h.issue}</div>
              <div className="kicker">{h.place}</div>
              <div className="kicker">{h.est}</div>
            </motion.div>

            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              transition={tSettle(1.12, 1.0)}
            >
              <div className="kicker">{h.principle}</div>
              <div className="mt-4 max-w-[24ch] text-[15px] leading-[1.9] font-medium tracking-[-0.01em]">
                <div>{h.m1}</div>
                <div>{h.m2}</div>
                <div>{h.m3}</div>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              transition={tSettle(1.26, 0.95)}
            >
              <div className="kicker">{h.available}</div>
            </motion.div>
          </aside>
        </div>
      </Container>
    </section>
  )
}