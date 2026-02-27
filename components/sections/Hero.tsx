"use client"

import { useI18n } from "@/components/i18n/I18nProvider"
import Container from "@/components/layout/Container"
import { motion, useReducedMotion } from "framer-motion"

export default function Hero() {
  const { lang, t } = useI18n()
  const h = t.hero

  const reduce = useReducedMotion()
  const easeSettle: [number, number, number, number] = [0.16, 1, 0.3, 1]

  // Editorial settle: one breath per column (no internal cascade)
  const col = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
    show: reduce
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, transition: { duration: 0.72, ease: easeSettle } },
  } as const

  const vp = { once: true, amount: 0.28 } as const

  // If you add /public/cv.pdf this becomes a strong hiring CTA.
  // Keep it simple and predictable for recruiters.
  const cvHref = "/cv.pdf"
  const primaryHref = cvHref // change to `/${lang}#contact` if you don't want a PDF yet

  return (
    <section id="hero" className="pt-6 md:pt-8 lg:pt-10 pb-14 md:pb-16">
      <Container>
        {/* Spread 50/50 — eje fijo */}
        <div className="grid lg:grid-cols-2 gap-y-10 lg:gap-x-14 xl:gap-x-16">
          {/* LEFT */}
          <motion.div variants={col} initial="hidden" whileInView="show" viewport={vp}>
            {/* Hairline (structural) */}
            <div className="mb-10 lg:mb-12 h-px w-16 bg-black/50" />

            <h1 className="h1 max-w-[20ch]">
              <span className="block">{h.t1}</span>
              <span className="block">{h.t2}</span>

              {/* Accent line: ink, not animation */}
              <span className="block accent" style={{ position: "relative", display: "inline-block" }}>
                {h.t3}
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: "-0.08em",
                    height: "1px",
                    background: "currentColor",
                    opacity: 0.22,
                    pointerEvents: "none",
                  }}
                />
              </span>

              {h.t4 ? <span className="block">{h.t4}</span> : null}
            </h1>

            <p className="p mt-8 max-w-[52ch]">
              {h.p1}
              <br />
              {h.p2}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a
                href={primaryHref}
                className="btn"
                // open PDF in new tab is recruiter-friendly; remove if you prefer same tab
                target={primaryHref.endsWith(".pdf") ? "_blank" : undefined}
                rel={primaryHref.endsWith(".pdf") ? "noopener noreferrer" : undefined}
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

            <p className="p-muted mt-8">{h.based}</p>
          </motion.div>

          {/* RIGHT — rail aligned + tighter rhythm */}
          <aside className="lg:border-l lg:border-black/10 lg:pl-12 xl:pl-14">
            {/* Hairline mobile cuando desaparece el rail */}
            <div className="lg:hidden border-t border-black/10 pt-10" />

            <motion.div
              className="flex flex-col gap-8 lg:gap-9"
              variants={col}
              initial="hidden"
              whileInView="show"
              viewport={vp}
            >
              {/* Meta block */}
              <div className="space-y-6 max-w-[40ch]">
                <div className="kicker">{h.issue}</div>
                <div className="kicker">{h.place}</div>
                <div className="kicker">{h.est}</div>
              </div>

              {/* Principle block */}
              <div className="max-w-[40ch]">
                <div className="kicker">{h.principle}</div>
                <div className="mt-4 max-w-[24ch] text-[18px] leading-[1.7] font-medium tracking-[-0.01em]">
                  <div>{h.m1}</div>
                  <div>{h.m2}</div>
                  <div>{h.m3}</div>
                </div>
              </div>

              {/* Availability */}
              <div className="max-w-[40ch]">
                <div className="kicker">{h.available}</div>
              </div>
            </motion.div>
          </aside>
        </div>
      </Container>
    </section>
  )
}