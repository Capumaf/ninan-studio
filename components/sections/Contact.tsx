"use client"

import { useId, useMemo } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { useI18n } from "@/components/i18n/I18nProvider"

export default function Contact() {
  const { t } = useI18n()
  const c = t.contact

  const nameId = useId()
  const emailId = useId()
  const messageId = useId()

  const reduceMotion = useReducedMotion()
  const easeEditorial: [number, number, number, number] = [0.16, 1, 0.3, 1]

  const blockVariants = useMemo(
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
    <section id="contact" className="section !before:hidden">
      <div className="container">
        {/* Masthead */}
        <div className="mb-12 flex items-center gap-6 lg:mb-16">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-black/40 shrink-0">
            {c.kicker}
          </p>
          <div className="h-px flex-1 bg-black/10" />
        </div>

        {/* Spread 50/50 */}
        <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          {/* LEFT — titular + form (protagonista) */}
          <div className="lg:sticky lg:top-24">
            <motion.h2
              className="font-light leading-[1.05] tracking-[-0.025em] text-[clamp(2rem,4vw,3.25rem)]"
              variants={blockVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-5%" }}
            >
              {c.title}
            </motion.h2>

            {/* FORM — debajo del titular, como cuerpo editorial */}
            <motion.form
              action="mailto:contact@ninanstudio.com"
              method="POST"
              encType="text/plain"
              className="mt-10 max-w-[52ch] space-y-8"
              variants={blockVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-5%" }}
            >
              <div>
                <motion.label
                  htmlFor={nameId}
                  className="text-[11px] font-medium tracking-[0.18em] uppercase text-black/40 block mb-3"
                  variants={metaVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-5%" }}
                >
                  {c.form.name}
                </motion.label>

                <input
                  id={nameId}
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full border-b border-black/20 bg-transparent pb-3 outline-none"
                />
              </div>

              <div>
                <motion.label
                  htmlFor={emailId}
                  className="text-[11px] font-medium tracking-[0.18em] uppercase text-black/40 block mb-3"
                  variants={metaVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-5%" }}
                >
                  {c.form.email}
                </motion.label>

                <input
                  id={emailId}
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full border-b border-black/20 bg-transparent pb-3 outline-none"
                />
              </div>

              <div>
                <motion.label
                  htmlFor={messageId}
                  className="text-[11px] font-medium tracking-[0.18em] uppercase text-black/40 block mb-3"
                  variants={metaVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-5%" }}
                >
                  {c.form.details}
                </motion.label>

                <textarea
                  id={messageId}
                  name="message"
                  rows={5}
                  required
                  className="w-full border-b border-black/20 bg-transparent pb-3 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 text-[11px] font-medium tracking-[0.18em] uppercase underline underline-offset-4 text-black/80"
              >
                {c.form.submit}
              </button>
            </motion.form>
          </div>

          {/* RIGHT — lomo + info (notas / metadatos) */}
          <div className="lg:border-l lg:border-black/10 lg:pl-12">
            {/* Hairline mobile cuando desaparece border lateral */}
            <div className="mb-8 h-px w-full bg-black/10 lg:hidden" />

            <motion.div
              className="max-w-[52ch]"
              variants={blockVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-5%" }}
            >
              {/* Regla estructural única dentro del capítulo */}
              <div className="mb-10 h-px w-full bg-black/10" />

              <p className="text-base leading-[1.75] text-black/70">{c.body}</p>

              <div className="mt-8 flex flex-wrap gap-6">
                <a
                  href="mailto:contact@ninanstudio.com"
                  className="text-[11px] font-medium tracking-[0.18em] uppercase underline underline-offset-4 text-black/80"
                >
                  {c.ctaEmail}
                </a>

                <a
                  href="https://wa.me/491722722723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-medium tracking-[0.18em] uppercase underline underline-offset-4 text-black/80"
                >
                  {c.ctaWhatsapp}
                </a>
              </div>

              <p className="mt-10 text-sm leading-[1.7] text-black/60">
                {c.footerNote}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}