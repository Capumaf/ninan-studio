"use client"

import { useId, useMemo, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { useI18n } from "@/components/i18n/I18nProvider"

const EMAIL_TO = "cesarpumayallaf@ninanstudio.com"

function buildMailto(params: { to: string; subject: string; body: string }) {
  const { to, subject, body } = params
  return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function Contact() {
  const { t } = useI18n()
  const c = t.contact

  const nameId = useId()
  const emailId = useId()
  const messageId = useId()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

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

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = `Portfolio inquiry — ${name || "No name"}`
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`

    window.location.href = buildMailto({
      to: EMAIL_TO,
      subject,
      body,
    })
  }

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

        {/* Grid 50/50 */}
        <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">

          {/* LEFT */}
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

            <motion.form
              onSubmit={onSubmit}
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
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border-b border-black/20 bg-transparent pb-3 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 text-[11px] font-medium tracking-[0.18em] uppercase underline underline-offset-4 text-black/80 hover:text-black transition"
              >
                {c.form.submit}
              </button>
            </motion.form>
          </div>

          {/* RIGHT */}
          <div className="lg:border-l lg:border-black/10 lg:pl-12">
            <div className="mb-8 h-px w-full bg-black/10 lg:hidden" />

            <motion.div
              className="max-w-[52ch]"
              variants={blockVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-5%" }}
            >
              <div className="mb-10 h-px w-full bg-black/10" />

              <p className="text-base leading-[1.75] text-black/70">
                {c.body}
              </p>

              <div className="mt-8 flex flex-wrap gap-6">
                <a
                  href={`mailto:${EMAIL_TO}`}
                  className="text-[11px] font-medium tracking-[0.18em] uppercase underline underline-offset-4 text-black/80 hover:text-black transition"
                >
                  {c.ctaEmail}
                </a>

                <a
                  href="https://wa.me/491722722723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-medium tracking-[0.18em] uppercase underline underline-offset-4 text-black/80 hover:text-black transition"
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