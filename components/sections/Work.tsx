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
        {/* Masthead */}
        <div className="mb-10 lg:mb-12">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-black/40">
            {w.kickerLeft} / {w.kickerRight}
          </p>

          <div className="mt-3 border-t border-black/10" />
        </div>

        {/* Editorial spread 40 / 60 */}
        
          {/* LEFT */}
          <div className="w-full self-start lg:sticky lg:top-24 xl:top-28">
            <h2 className="w-full text-[clamp(4rem,7.5vw,7.25rem)] font-light leading-[0.9] tracking-[-0.075em]">
              {w.title}
            </h2>

            <div className="mt-10 w-full space-y-10 lg:mt-12">
              <p className="max-w-[42ch] text-[20px] leading-[1.6] tracking-[-0.025em] text-black/68">
                {w.desc}
              </p>

              <p className="max-w-[34ch] text-[12px] font-medium uppercase leading-[2] tracking-[0.2em] text-black/38">
                {w.sideNote}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:border-l lg:border-black/10 lg:pl-10 xl:pl-12">
            {/* Mobile hairline */}
            <div className="lg:hidden border-t border-black/10 pt-10" />

            <div className="w-full">
              {w.items.map((item, index) => {
                const isOpen = open === item.id
                const desktopImage = item.image
                const mobilePreviews = item.previews ?? []

                return (
                  <article
                    key={item.id}
                    className="border-b border-black/10"
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : item.id)}
                      className="grid w-full grid-cols-[20px_minmax(0,1fr)_18px] gap-5 py-6 text-left lg:py-7"
                    >
                      {/* INDEX */}
                      <span
                        aria-hidden="true"
                        className="mt-[6px] tabular-nums text-[10px] font-medium tracking-[0.14em] text-black/25"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* CONTENT */}
                      <div className="min-w-0">
                        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-4 sm:gap-y-2">
                          <h3 className="text-[clamp(1.15rem,2vw,1.7rem)] font-medium leading-[1.12] tracking-[-0.035em] text-black">
                            {item.name}
                          </h3>

                          {item.status && (
                            <span className="text-[10px] uppercase tracking-[0.16em] text-black/35">
                              {item.status}
                            </span>
                          )}
                        </div>

                        <p className="mt-4 text-[11px] uppercase leading-[1.75] tracking-[0.16em] text-black/40">
                          {item.meta}
                        </p>
                      </div>

                      {/* TOGGLE */}
                      <span className="mt-[2px] text-right text-[15px] leading-none text-black/40">
                        {isOpen ? "—" : "+"}
                      </span>
                    </button>

                    {/* EXPANDED */}
                    {isOpen && (
                      <div className="pb-7 pl-[45px] lg:pb-8">
                        <div className="border-t border-black/10 pt-5">
                          <p className="text-sm leading-[1.85] text-black/70">
                            {item.description}
                          </p>

                          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
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
        </div>
      </Container>

      {/* PREVIEW MODAL */}
      {preview && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[#f5f5f3]/90 px-5 py-14 backdrop-blur-sm sm:px-6 sm:py-16"
          onClick={() => setPreview(null)}
        >
          <button
            type="button"
            onClick={() => setPreview(null)}
            className="absolute right-6 top-6 z-10 text-[11px] uppercase tracking-[0.18em] text-black/55 transition hover:text-black sm:right-8 sm:top-8"
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