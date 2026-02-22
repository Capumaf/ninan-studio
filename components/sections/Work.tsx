"use client"

import { useState } from "react"
import { useI18n } from "@/components/i18n/I18nProvider"

export default function Work() {
  const { t } = useI18n()
  const w = t.work

  const [openId, setOpenId] = useState<string | null>(
    w.items.length ? w.items[0].id : null
  )

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,72ch)] lg:gap-20">
          {/* LEFT */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[hsl(var(--muted-2))]">
                {w.kickerLeft}
              </p>

              <div className="mt-8 h-px w-20 bg-black/20" />

              <p className="mt-8 max-w-[38ch] text-sm leading-[1.7] text-[hsl(var(--muted-2))]">
                {w.sideNote}
              </p>
            </div>
          </aside>

          {/* RIGHT */}
          <div className="lg:pl-10">
            <div className="max-w-[72ch]">
              <h2 className="text-3xl font-semibold tracking-tight leading-[1.05]">
                {w.title}
              </h2>

              <p className="p mt-6 max-w-[62ch]">
                {w.desc}
              </p>
            </div>

            <div className="mt-14">
              <div className="h-px w-full bg-black/10" />

              <ul className="divide-y divide-black/10">
                {w.items.map((item) => {
                  const isOpen = openId === item.id
                  const hasStatus = !!(item.status && item.status.trim().length > 0)

                  return (
                    <li key={item.id} className="group">
                      <button
                        type="button"
                        onClick={() => setOpenId(isOpen ? null : item.id)}
                        className="w-full text-left py-10 focus:outline-none"
                        aria-expanded={isOpen}
                        aria-controls={`work-panel-${item.id}`}
                      >
                        <div className="grid grid-cols-[44px_minmax(0,1fr)] gap-6 lg:grid-cols-[52px_minmax(0,1fr)]">
                          {/* Chevron circle */}
                          <span
                            aria-hidden
                            className={[
                              "mt-[2px] inline-flex h-9 w-9 items-center justify-center rounded-full",
                              "border border-black/15 text-black/80",
                              "transition-transform duration-200",
                              isOpen ? "rotate-180" : "rotate-0",
                            ].join(" ")}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                              <path
                                d="M6 9l6 6 6-6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>

                          {/* Title + meta */}
                          <div className="min-w-0">
                            <div className="flex items-baseline justify-between gap-6">
                              <h3 className="text-lg md:text-xl font-semibold tracking-tight leading-snug">
                                {item.name}
                              </h3>

                              {hasStatus && (
                                <span className="text-[11px] tracking-[0.18em] uppercase text-black/50 whitespace-nowrap">
                                  {item.status}
                                </span>
                              )}
                            </div>

                            <p className="mt-2 text-sm leading-[1.7] text-black/60">
                              {item.meta}
                            </p>
                          </div>
                        </div>
                      </button>

                      {/* Panel */}
                      <div
                        id={`work-panel-${item.id}`}
                        className={[
                          "overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
                          isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0",
                        ].join(" ")}
                      >
                        <div className="pb-10">
                          <div className="ml-[44px] lg:ml-[52px]">
                            <p className="p max-w-[62ch]">
                              {item.description}
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-6">
                              {item.href ? (
                                <a
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[11px] font-medium tracking-[0.18em] uppercase underline underline-offset-4"
                                >
                                  {w.viewLive} →
                                </a>
                              ) : (
                                <span className="text-[11px] tracking-[0.18em] uppercase text-[hsl(var(--muted-2))]">
                                  {w.linkOnRequest}
                                </span>
                              )}
                            </div>

                            <div className="mt-10 h-px w-full bg-black/10" />
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>

              <p className="mt-10 text-sm text-[hsl(var(--muted-2))]">
                {w.more}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}