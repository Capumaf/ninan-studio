"use client"

import { useId } from "react"
import { useI18n } from "@/components/i18n/I18nProvider"

export default function Contact() {
  const { t } = useI18n()
  const c = t.contact

  const nameId = useId()
  const emailId = useId()
  const messageId = useId()

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="max-w-[70ch]">
          <p className="p-muted">{c.kicker}</p>
          <h2 className="h2 mt-3">{c.title}</h2>
          <p className="p mt-4">{c.body}</p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="btn"
              href="mailto:contact@ninanstudio.com"
            >
              {c.ctaEmail}
            </a>

            <a
              className="btn btn-ghost"
              href="https://wa.me/491722722723"
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.ctaWhatsapp}
            </a>
          </div>

          <div className="border-t border-[hsla(var(--shadow),0.10)] my-10" />

          {/* FORM */}
          <form
            action="mailto:contact@ninanstudio.com"
            method="POST"
            encType="text/plain"
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label
                htmlFor={nameId}
                className="p-muted block mb-2"
              >
                {c.form.name}
              </label>

              <input
                id={nameId}
                type="text"
                name="name"
                required
                autoComplete="name"
                className="w-full border border-[hsla(var(--shadow),0.15)] bg-transparent px-4 py-3 outline-none focus:border-[hsla(var(--shadow),0.35)] transition"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor={emailId}
                className="p-muted block mb-2"
              >
                {c.form.email}
              </label>

              <input
                id={emailId}
                type="email"
                name="email"
                required
                autoComplete="email"
                className="w-full border border-[hsla(var(--shadow),0.15)] bg-transparent px-4 py-3 outline-none focus:border-[hsla(var(--shadow),0.35)] transition"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor={messageId}
                className="p-muted block mb-2"
              >
                {c.form.details}
              </label>

              <textarea
                id={messageId}
                name="message"
                rows={5}
                required
                className="w-full border border-[hsla(var(--shadow),0.15)] bg-transparent px-4 py-3 outline-none resize-none focus:border-[hsla(var(--shadow),0.35)] transition"
              />
            </div>

            <button type="submit" className="btn">
              {c.form.submit}
            </button>
          </form>

          <p className="p-muted mt-6">{c.footerNote}</p>
        </div>
      </div>
    </section>
  )
}
