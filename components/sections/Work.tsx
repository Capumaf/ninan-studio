"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useI18n } from "@/components/i18n/I18nProvider"
import Container from "@/components/layout/Container"

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Work() {
  const { t } = useI18n()
  const w = t.work
  const reduce = useReducedMotion()

  const [open, setOpen] = useState<string | null>(null)
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    if (!preview) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreview(null)
    }

    window.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [preview])

  return (
    <section id="work" className="section">
      <Container>
        <div className="mb-6 ml-[2%]">
        <div className="border-t border-black/10" />
        <p className="mt-6 text-[11px] font-medium tracking-[0.18em] uppercase text-black/40">
        {w.kickerLeft} / {w.kickerRight}
         </p>
         <p className="mt-8 text-[15px] leading-[4] text-black/40 max-w-[70ch] lg:ml-[15%]">
  {w.desc}
</p>
</div>

        <div className="mx-auto max-w-4xl">
          {w.items.map((item, index) => {
            const isOpen = open === item.id

            return (
              <motion.article
                key={item.id}
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { delay: index * 0.06, duration: 0.65, ease }
                }
                className="border-b border-black/10"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  className="group flex w-full items-start justify-between gap-10 py-8 text-left transition-colors duration-300 hover:bg-black/[0.015]"
                >
                  <div className="flex items-start gap-5 md:gap-7">
                    <span className="mt-2 shrink-0 tabular-nums text-[11px] tracking-[0.16em] text-black/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <h3 className="text-[22px] font-medium tracking-[-0.04em] text-black transition-transform duration-300 group-hover:translate-x-1">
                          {item.name}
                        </h3>

                        {item.status && (
                          <span className="text-[10px] uppercase tracking-[0.18em] text-black/30">
                            {item.status}
                          </span>
                        )}
                      </div>

                      <p className="mt-2 max-w-[72ch] text-[12px] uppercase leading-[1.75] tracking-[0.18em] text-black/35">
                        {item.meta}
                      </p>
                    </div>
                  </div>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease }}
                    className="mt-1 shrink-0 text-[24px] leading-none text-black/35"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-[42px] md:pl-[58px]">
                        <div className="max-w-[68ch] border-t border-black/10 pt-6">
                          <p className="text-sm leading-[1.9] text-black/60">
                            {item.description}
                          </p>

                          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
                            {item.image && (
                              <button
                                type="button"
                                onClick={() =>
                                  setPreview({
                                    src: item.image!,
                                    alt: `${item.name} desktop`,
                                  })
                                }
                                className="text-[11px] uppercase tracking-[0.18em] text-black/50 underline underline-offset-4 transition hover:text-black"
                              >
                                Preview desktop
                              </button>
                            )}

                            {(item.previews ?? []).map((p, pi) => (
                              <button
                                key={p.src}
                                type="button"
                                onClick={() =>
                                  setPreview({
                                    src: p.src,
                                    alt: p.alt,
                                  })
                                }
                                className="text-[11px] uppercase tracking-[0.18em] text-black/50 underline underline-offset-4 transition hover:text-black"
                              >
                                {pi === 0 ? "Preview mobile" : `Preview ${pi + 1}`}
                              </button>
                            ))}

                            {item.href ? (
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11px] uppercase tracking-[0.18em] text-black/60 underline underline-offset-4 transition hover:text-black"
                              >
                                {w.viewLive}
                              </a>
                            ) : (
                              <span className="text-[11px] uppercase tracking-[0.18em] text-black/30">
                                {w.linkOnRequest}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>
      </Container>

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-[#f5f5f3]/90 px-5 py-14 backdrop-blur-sm"
            onClick={() => setPreview(null)}
          >
            <button
              type="button"
              onClick={() => setPreview(null)}
              className="absolute right-6 top-6 text-[11px] uppercase tracking-[0.18em] text-black/55 transition hover:text-black"
            >
              Close
            </button>

            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease }}
              className="flex max-h-[82vh] w-full max-w-[72vw] items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={preview.src}
                alt={preview.alt}
                className="max-h-[82vh] max-w-full object-contain shadow-[0_24px_90px_rgba(0,0,0,0.16)]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}