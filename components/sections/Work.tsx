"use client";

import { useMemo, useState } from "react";

type WorkItem = {
  id: string;
  title: string;
  meta: string;
  description: string;
  href?: string;
  note?: string;
  status?: "in-progress";
};

export default function Work() {
  const items = useMemo<WorkItem[]>(
    () => [
      {
        id: "ingrid",
        title: "Ingrid Pumayalla — Artist website",
        meta: "Editorial website · Visual identity · Development",
        description:
          "A quiet, content-led website designed around pacing and typography. The interface stays restrained—navigation is intentionally minimal, and the layout gives space to image-led sequences, text blocks, and archival sections without visual noise.",
        status: "in-progress",
        note: "In progress.",
      },
      {
        id: "guillermo",
        title: "Guillermo Ríos — Psychotherapy practice",
        meta: "Visual identity · Website · Production delivery",
        description:
          "A calm institutional site focused on trust and clarity. Built with a clean reading rhythm, careful hierarchy, and a visual system that stays consistent across sections. Designed to feel professional without becoming clinical.",
        href: "https://guillermo-rios.com",
      },
      {
        id: "rfc",
        title: "RFC Estudio & Abogados",
        meta: "Visual identity · Website · Full-stack (light)",
        description:
          "Identity + website for a legal practice with an emphasis on structure: areas of practice, clear navigation, and direct contact paths. Implemented end-to-end, including the frontend build and light backend/database work where required.",
        href: "https://rfcabogados.com/",
      },
      {
        id: "pp",
        title: "P&P Remodeling",
        meta: "Visual identity · Website",
        description:
          "A service website designed for fast scanning and confident navigation. Clear service structure, restrained UI, and a layout that avoids clutter. Built to present services cleanly and keep the experience frictionless.",
        href: "https://www.pnp-remodeling.com/",
      },
    ],
    []
  );

  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <section id="work" className="section">
      <div className="container">
        {/* Two-column editorial layout */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,70ch)] lg:gap-16">
          {/* LEFT — abstract/editorial margin */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-sm font-medium tracking-tight text-[hsl(var(--muted-2))]">
                Built to fit
              </p>
              <div className="mt-6 h-[1px] w-24 bg-[hsla(var(--shadow),0.10)]" />
              <p className="mt-6 text-sm leading-relaxed text-[hsl(var(--muted-2))]">
                A small archive of work across identity, interface and build.
              </p>
            </div>
          </aside>

          {/* RIGHT — content */}
          <div>
            {/* Intro */}
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight">Work</h2>
              <p className="p mt-4">
                A curated selection. Titles stay minimal—open a project to read
                the context.
              </p>
            </div>

            {/* List */}
            <div className="mt-16">
              <div className="rule mb-8" />

              <ul className="space-y-2">
                {items.map((item) => {
                  const isOpen = openId === item.id;

                  return (
                    <li key={item.id} className="group">
                      <button
                        type="button"
                        onClick={() => setOpenId(isOpen ? null : item.id)}
                        className={[
                          "w-full text-left rounded-[16px] px-4 py-4 transition",
                          "hover:bg-[hsla(var(--shadow),0.04)]",
                          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsla(var(--accent),0.35)]",
                        ].join(" ")}
                        aria-expanded={isOpen}
                        aria-controls={`work-panel-${item.id}`}
                      >
                        {/* LEFT icon + RIGHT text (editorial) */}
                        <div className="flex items-start gap-6">
                          {/* LEFT — chevron */}
                          <span
                            aria-hidden
                            className={[
                              "mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                              "border border-[hsla(var(--shadow),0.10)] bg-[hsla(0,0%,100%,0.6)]",
                              "transition-transform duration-200",
                              isOpen ? "rotate-180" : "rotate-0",
                            ].join(" ")}
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M6 9l6 6 6-6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>

                          {/* RIGHT — titles */}
                          <div className="min-w-0 pl-2">
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                              <h3
                                className={[
                                  "text-lg font-semibold tracking-tight transition",
                                  "group-hover:text-[hsl(var(--ink))]",
                                ].join(" ")}
                              >
                                {item.title}
                              </h3>

                              {item.status === "in-progress" && (
                                <span className="pill">In progress</span>
                              )}
                            </div>

                            <p className="p-muted mt-1">{item.meta}</p>
                          </div>
                        </div>
                      </button>

                      {/* Panel */}
                      <div
                        id={`work-panel-${item.id}`}
                        className={[
                          "overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
                          isOpen
                            ? "max-h-[460px] opacity-100"
                            : "max-h-0 opacity-0",
                        ].join(" ")}
                      >
                        <div className="px-4 pb-6 pt-2">
                          {/* match the left offset: chevron(32) + gap(24) + pl(8) ~= 64px */}
                          <div className="pl-[64px]">
                            <p className="p max-w-3xl">{item.description}</p>

                            <div className="mt-5 flex flex-wrap items-center gap-4">
                              {item.href ? (
                                <a
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm font-medium underline underline-offset-4"
                                >
                                  View live
                                </a>
                              ) : (
                                <span className="text-sm text-[hsl(var(--muted-2))]">
                                  {item.note ?? "Link on request."}
                                </span>
                              )}

                              {item.status === "in-progress" && item.note && (
                                <span className="text-sm text-[hsl(var(--muted-2))]">
                                  {item.note}
                                </span>
                              )}
                            </div>

                            <div className="rule mt-8" />
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Footer micro-note */}
              <p className="mt-10 text-sm text-[hsl(var(--muted-2))]">
                More work available on request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}