"use client";

import { useEffect, useState } from "react";
import { sections } from "@/content/sections";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  // Idioma fijo temporal
  const lang: "en" | "de" = "en";

  // Cinematic header (aparece cuando el hero sale de escena)
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 will-change-transform",
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none",
        ].join(" ")}
      >
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <div className="mt-4 flex items-center justify-between rounded-[18px] border border-[hsla(var(--shadow),0.10)] bg-[hsla(0,0%,100%,0.65)] px-4 py-3 backdrop-blur-md">
            {/* Brand */}
            <a href="#hero" className="text-sm font-semibold tracking-tight">
              Ninan{" "}
              <span className="font-medium text-[hsl(var(--muted))]">
                Studio
              </span>
            </a>

            {/* Desktop navigation */}
            <nav
              aria-label="Primary"
              className="hidden items-center gap-6 md:flex"
            >
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm text-[hsl(var(--muted))] transition hover:text-[hsl(var(--fg))]"
                >
                  {section.label[lang]}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 md:flex">
              <a href="#process" className="btn btn-ghost">
                Process
              </a>
              <a href="#contact" className="btn">
                Contact
              </a>
            </div>

            {/* Mobile menu button (editorial N icon) */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="md:hidden flex flex-col gap-1"
            >
              <span className="block h-[2px] w-4 bg-current rounded-full" />
              <span className="block h-[2px] w-6 bg-current rounded-full ml-2" />
              <span className="block h-[2px] w-4 bg-current rounded-full" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu panel */}
      {open && (
        <div
          className="fixed inset-0 z-20 bg-[hsla(0,0%,100%,0.9)] backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <div
            className="mx-auto mt-32 max-w-6xl px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-6">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold tracking-tight"
                >
                  {section.label[lang]}
                </a>
              ))}

              <div className="mt-8 flex gap-4">
                <a href="#process" className="btn btn-ghost">
                  Process
                </a>
                <a href="#contact" className="btn">
                  Contact
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
