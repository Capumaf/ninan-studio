"use client"

import { useEffect, useState } from "react"
import { useI18n } from "@/components/i18n/I18nProvider"
import Container from "@/components/layout/Container"

type PreviewState = {
  src: string
  alt: string
}

export default function Work() {
  const { t } = useI18n()
  const w = t.work

  const [open, setOpen] = useState<string | null>(null)
  const [preview, setPreview] = useState<PreviewState | null>(null)

  useEffect(() => {
    if (!preview) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreview(null)
      }
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
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(260px,0.4fr)_minmax(0,0.6fr)] lg:gap-16 xl:gap-20">
          <aside className="lg:sticky lg:top-28">
            <div className="kicker">
              {w.kickerLeft} / {w.kickerRight}
            </div>

            <h2 className="h2 mt-8">{w.title}</h2>

            <p className="mt-10 max-w-[28ch] text-[17px] leading-[1.8] text-black/60">
              {w.desc}
            </p>

            <div className="mt-12 max-w-[20ch]">
              <div className="kicker leading-[2] text-black/45">
                {w.sideNote}
              </div>
            </div>
          </aside>

          <div className="w-full border-t border-black/10">
            {w.items.map((item, index) => {
              const isOpen = open === item.id
              const desktopImage = item.image
              const mobilePreviews = item.previews ?? []

              return (
                <article key={item.id} className="border-b border-black/10">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : item.id)}
                    className="grid w-full grid-cols-[2.25rem_minmax(0,1fr)_1.5rem] gap-5 py-7 text-left sm:grid-cols-[2.75rem_minmax(0,1fr)_1.5rem] sm:gap-8 lg:py-8"
                  >
                    <span className="kicker pt-1 text-black/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                        <h3 className="text-[clamp(1.35rem,2vw,1.8rem)] font-[560] leading-[1.08] tracking-[-0.035em] text-black">
                          {item.name}
                        </h3>

                        {item.status && (
                          <span className="text-[11px] uppercase tracking-[0.18em] text-black/40">
                            {item.status}
                          </span>
                        )}
                      </div>

                      <p className="mt-5 max-w-[68ch] text-[12px] uppercase leading-[1.7] tracking-[0.18em] text-black/45">
                        {item.meta}
                      </p>
                    </div>

                    <span className="kicker pt-1 text-right text-black/45">
                      {isOpen ? "—" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-8 pl-[3.5rem] sm:pl-[4.75rem]">
                      <div className="max-w-[68ch] border-t border-black/10 pt-6">
                        <p className="text-[15px] leading-[1.85] text-black/70">
                          {item.description}
                        </p>

                        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
                          {desktopImage && (
                            <button
                              type="button"
                              onClick={() =>
                                setPreview({
                                  src: desktopImage,
                                  alt: `${item.name} desktop preview`,
                                })
                              }
                              className="text-[11px] uppercase tracking-[0.18em] text-black/60 underline underline-offset-4 transition hover:text-black"
                            >
                              Preview desktop
                            </button>
                          )}

                          {mobilePreviews.map((previewItem, previewIndex) => (
                            <button
                              key={previewItem.src}
                              type="button"
                              onClick={() =>
                                setPreview({
                                  src: previewItem.src,
                                  alt: previewItem.alt,
                                })
                              }
                              className="text-[11px] uppercase tracking-[0.18em] text-black/60 underline underline-offset-4 transition hover:text-black"
                            >
                              {previewIndex === 0
                                ? "Preview mobile"
                                : `Preview ${previewIndex + 1}`}
                            </button>
                          ))}

                          {item.href ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] uppercase tracking-[0.18em] text-black/70 underline underline-offset-4 transition hover:text-black"
                            >
                              {w.viewLive}
                            </a>
                          ) : (
                            <span className="text-[11px] uppercase tracking-[0.18em] text-black/35">
                              {w.linkOnRequest}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </Container>

      {preview && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-#f5f5f3]/90 px-6 py-16 backdrop-blur-sm"
          onClick={() => setPreview(null)}
        >
          <button
            type="button"
            onClick={() => setPreview(null)}
            className="absolute right-8 top-8 z-10 text-[11px] uppercase tracking-[0.18em] text-black/55 transition hover:text-black sm:right-8 sm:top-8"
          >
            Close
          </button>

          <div
            className="flex max-h-[82vh] w-full max-w-[92vw] items-center justify-center sm:max-w-[84vw] lg:max-w-[72vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={preview.src}
              alt={preview.alt}
              className="max-h-[82vh] max-w-full object-contain shadow-[0_24px_90px_rgba(0,0,0,0.16)]"
            />
          </div>
        </div>
      )}
    </section>
  )
}