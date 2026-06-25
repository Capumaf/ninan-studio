"use client"

import { useId, useMemo, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { useI18n } from "@/components/i18n/I18nProvider"

const EMAIL_TO = "cesarpumayalla@ninan-studio.com"

function buildMailto(params: { to: string; subject: string; body: string }) {
  const { to, subject, body } = params
  return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Contact() {
  const { t } = useI18n()
  const c = t.contact

  const nameId = useId()
  const emailId = useId()
  const messageId = useId()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [feedback, setFeedback] = useState("")

  const reduce = useReducedMotion()

  const vp = { once: true, amount: 0.2 } as const

  const resetFeedbackOnInput = () => {
    if (status === "sent" || status === "error") {
      setStatus("idle")
      setFeedback("")
    }
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === "sending") return

    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus("error")
      setFeedback("Please complete all fields before sending.")
      return
    }

    setStatus("sending")
    setFeedback("")

    const subject = `Portfolio inquiry — ${trimmedName}`
    const body = `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, email: trimmedEmail, message: trimmedMessage }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok || data?.success !== true) {
        setStatus("error")
        setFeedback("Couldn't send via the form. Please try again or email me directly.")
        window.location.href = buildMailto({ to: EMAIL_TO, subject, body })
        return
      }

      setStatus("sent")
      setFeedback("Thank you — your message has been sent. I'll get back to you as soon as possible.")
      setName("")
      setEmail("")
      setMessage("")
    } catch {
      setStatus("error")
      setFeedback("Couldn't send via the form. Please try again or email me directly.")
      window.location.href = buildMailto({ to: EMAIL_TO, subject, body })
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">

        {/* Kicker */}
        <div className="mb-10 ml-[2%]">
          <div className="border-t border-black/10" />
          <p className="mt-3 text-[11px] font-medium tracking-[0.18em] uppercase text-black/40">
            {c.kicker}
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-x-2 items-start ml-[2%]">

          {/* LEFT — título + descripción + links */}
          <div className="self-start mb-12 lg:mb-0 flex flex-col justify-between min-h-[300px]">
            <motion.h2
              className="text-[clamp(2rem,4vw,2rem)] font-light leading-[1.1] tracking-[-0.03em] text-black mb-6"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, ease }}
            >
              {c.title}
            </motion.h2>

            <motion.p
              className="text-[16px] leading-[1.8] text-black/50 max-w-[46ch] mt-2"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: 0.1, duration: 0.6, ease }}
            >
              {c.body}
            </motion.p>
            


               <div className="border-t border-black/10 pt-8 max-w-[280px]">
              <div className="flex flex-wrap gap-6 mb-4">
                <a
                  href={`mailto:${EMAIL_TO}`}
                  className="text-[11px] font-medium tracking-[0.18em] uppercase underline underline-offset-4 text-black/60 hover:text-black transition"
                >
                  {c.ctaEmail}
                </a>
                
                <a
                  href="https://wa.me/491722722723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-medium tracking-[0.18em] uppercase underline underline-offset-4 text-black/60 hover:text-black transition"
                >
                  {c.ctaWhatsapp}
                </a>
              </div>
              <p className="text-[13px] leading-[1.7] text-black/35 mt-2">{c.footerNote}</p>
            </div>
          </div>

          {/* RIGHT — form */}
          <motion.form
            onSubmit={onSubmit}
            className="space-y-6 max-w-[480px]"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ delay: 0.15, duration: 0.6, ease }}
          >
            <div>
              <label
                htmlFor={nameId}
                className="text-[11px] font-medium tracking-[0.18em] uppercase text-black/40 block mb-3"
              >
                {c.form.name}
              </label>
              <input
                id={nameId}
                type="text"
                required
                value={name}
                onChange={(e) => { setName(e.target.value); resetFeedbackOnInput() }}
                disabled={status === "sending"}
                className="w-full border-b border-black/20 bg-transparent pb-3 outline-none disabled:opacity-70"
              />
            </div>

            <div>
              <label
                htmlFor={emailId}
                className="text-[11px] font-medium tracking-[0.18em] uppercase text-black/40 block mb-3"
              >
                {c.form.email}
              </label>
              <input
                id={emailId}
                type="email"
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value); resetFeedbackOnInput() }}
                disabled={status === "sending"}
                className="w-full border-b border-black/20 bg-transparent pb-3 outline-none disabled:opacity-70"
              />
            </div>

            <div>
              <label
                htmlFor={messageId}
                className="text-[11px] font-medium tracking-[0.18em] uppercase text-black/40 block mb-3"
              >
                {c.form.details}
              </label>
              <textarea
                id={messageId}
                rows={5}
                required
                value={message}
                onChange={(e) => { setMessage(e.target.value); resetFeedbackOnInput() }}
                disabled={status === "sending"}
                className="w-full border-b border-black/20 bg-transparent pb-3 outline-none resize-none disabled:opacity-70"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="text-[11px] font-medium tracking-[0.18em] uppercase underline underline-offset-4 text-black/80 hover:text-black transition disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : c.form.submit}
            </button>

            {feedback && (
              <p aria-live="polite" className="text-sm leading-[1.7] text-black/60">
                {feedback}
              </p>
            )}
          </motion.form>

        </div>

      </div>
    </section>
  )
}