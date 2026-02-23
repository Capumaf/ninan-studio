"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"
import { languages, type Lang } from "@/content/i18n"
import { useI18n } from "@/components/i18n/I18nProvider"

const HIDE_DELAY_MS = 1200

type NavLink = {
  id: "about" | "work" | "services" | "process" | "contact"
  label: string
}

function isLangSegment(x: string): x is Lang {
  return (languages as readonly string[]).includes(x)
}

function buildLangHref(pathname: string, next: Lang) {
  const raw = pathname && pathname.startsWith("/") ? pathname : "/" + pathname
  const parts = raw.split("/").filter(Boolean)
  const first = parts[0]
  const restParts = first && isLangSegment(first) ? parts.slice(1) : parts
  if (restParts.length === 0) return "/" + next
  return "/" + next + "/" + restParts.join("/")
}

function TriggerIcon() {
  return (
    <span aria-hidden="true" className="flex items-center gap-[5px]">
      <span className="block w-[14px] h-[1px] bg-current" />
      <span className="block w-[3px] h-[3px] rounded-full bg-current" />
    </span>
  )
}

export default function Header() {
  const { lang: ctxLang, t } = useI18n()
  const pathname = usePathname() || "/" + ctxLang
  const nav = t.nav

  const activeLang: Lang = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean)
    const first = parts[0]
    return first && isLangSegment(first) ? first : ctxLang
  }, [pathname, ctxLang])

  const links: NavLink[] = useMemo(
    () => [
      { id: "about", label: nav.about },
      { id: "work", label: nav.work },
      { id: "services", label: nav.services },
      { id: "process", label: nav.process },
      { id: "contact", label: nav.contact },
    ],
    [nav]
  )

  const hrefForLang = (next: Lang) => buildLangHref(pathname, next)
  const hrefToSection = (id: NavLink["id"]) => "/" + activeLang + "#" + id

  // ─── Estado ───────────────────────────────────────────────────────────────
  const [heroOut, setHeroOut] = useState(false)
  const [showBottom, setShowBottom] = useState(false)
  const [footerInView, setFooterInView] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // ─── Refs ────────────────────────────────────────────────────────────────
  const heroOutRef = useRef(false)
  const footerInViewRef = useRef(false)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rafLock = useRef(false)
  const lastScrollYRef = useRef(0)

  useEffect(() => {
    heroOutRef.current = heroOut
  }, [heroOut])

  useEffect(() => {
    footerInViewRef.current = footerInView
  }, [footerInView])

  const clearHideTimer = () => {
    if (hideTimer.current !== null) {
      clearTimeout(hideTimer.current)
      hideTimer.current = null
    }
  }

  // solo arma el autohide; NO decide cuándo aparece (eso lo decide el scroll-up)
  const showAndArmHide = () => {
    if (!heroOutRef.current || footerInViewRef.current) return
    setShowBottom(true)
    clearHideTimer()
    hideTimer.current = setTimeout(() => setShowBottom(false), HIDE_DELAY_MS)
  }

  // ─── Observer del Hero ────────────────────────────────────────────────────
  // Importante: aquí NO mostramos la pill automáticamente.
  useEffect(() => {
    const hero =
      document.getElementById("hero") ||
      (document.querySelector("main > :first-child") as HTMLElement | null)
    if (!hero) return

    const observer = new IntersectionObserver(
      (entries) => {
        const ratio = entries[0].intersectionRatio
        const out = ratio < 0.2

        heroOutRef.current = out
        setHeroOut(out)

        if (!out) {
          // cerca / dentro del hero → pill fuera SIEMPRE
          setShowBottom(false)
          clearHideTimer()
        } else {
          // fuera del hero → NO la muestres aquí (solo con scroll up)
          setShowBottom(false)
          clearHideTimer()
        }
      },
      { threshold: [0, 0.2, 1], rootMargin: "-60px 0px 0px 0px" }
    )

    observer.observe(hero)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ─── Observer del Footer ──────────────────────────────────────────────────
  // Importante: aquí NO mostramos la pill automáticamente.
  useEffect(() => {
    const footer = document.getElementById("site-footer")
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting

        footerInViewRef.current = inView
        setFooterInView(inView)

        if (inView) {
          // footer visible → pill fuera SIEMPRE
          setShowBottom(false)
          clearHideTimer()
        } else {
          // footer fuera → NO la muestres aquí (solo con scroll up)
          setShowBottom(false)
          clearHideTimer()
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(footer)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ─── Scroll: SOLO UP muestra la pill ──────────────────────────────────────
  useEffect(() => {
    lastScrollYRef.current = window.scrollY || 0

    const onScroll = () => {
      if (rafLock.current) return
      rafLock.current = true

      requestAnimationFrame(() => {
        rafLock.current = false

        // si hero está en vista o footer visible, nunca mostramos pill
        if (!heroOutRef.current || footerInViewRef.current) {
          setShowBottom(false)
          clearHideTimer()
          lastScrollYRef.current = window.scrollY || 0
          return
        }

        const currentY = window.scrollY || 0
        const prevY = lastScrollYRef.current
        const delta = currentY - prevY

        // actualizar SIEMPRE para no romper dirección
        lastScrollYRef.current = currentY

        // anti-flicker
        if (Math.abs(delta) < 10) return

        if (delta < 0) {
          // UP → aparece (y arma autohide)
          showAndArmHide()
        } else {
          // DOWN → desaparece
          setShowBottom(false)
          clearHideTimer()
        }
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ─── Mobile menu ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return
    document.documentElement.style.overflow = "hidden"
    return () => {
      document.documentElement.style.overflow = ""
    }
  }, [mobileOpen])

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)")
    const onChange = () => {
      if (mq.matches) setMobileOpen(false)
    }
    onChange()
    mq.addEventListener?.("change", onChange)
    return () => mq.removeEventListener?.("change", onChange)
  }, [])

  // ─── Clases ───────────────────────────────────────────────────────────────
  const navItemTop =
    "text-[11px] uppercase font-normal tracking-[0.16em] text-neutral-700 hover:text-neutral-950 transition-colors duration-200"
  const brandTop =
    "text-[12px] uppercase font-medium tracking-[0.28em] text-neutral-950"
  const langTop = (l: Lang) =>
    [
      "text-[11px] uppercase tracking-[0.20em] transition-colors duration-200",
      l === activeLang ? "text-neutral-950" : "text-neutral-500 hover:text-neutral-950",
    ].join(" ")

  const navItemFloat =
    "text-[11px] uppercase font-normal tracking-[0.18em] text-neutral-600 hover:text-neutral-950 transition-colors duration-200"
  const brandFloat =
    "text-[11px] uppercase font-medium tracking-[0.32em] text-neutral-950"
  const langFloat = (l: Lang) =>
    [
      "text-[11px] uppercase font-normal tracking-[0.22em] transition-colors duration-200",
      l === activeLang ? "text-neutral-950" : "text-neutral-500 hover:text-neutral-950",
    ].join(" ")

  const MobileTrigger = ({ className = "" }: { className?: string }) => (
    <button
      type="button"
      aria-label="Open menu"
      onClick={() => setMobileOpen(true)}
      className={[
        "md:hidden inline-flex items-center justify-center p-1",
        "text-neutral-500 hover:text-neutral-950 transition-colors duration-200",
        className,
      ].join(" ")}
    >
      <TriggerIcon />
    </button>
  )

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <>
      {/* TOP HEADER — se mantiene como lo tenías: visible cuando hero está en pantalla */}
      <header
        className={[
          "sticky top-0 z-50 border-b border-black/10 bg-white/75 backdrop-blur-sm transition-opacity duration-300",
          showBottom || footerInView ? "opacity-0 pointer-events-none" : "opacity-100",
        ].join(" ")}
      >
        <div className="mx-auto w-full max-w-[1500px] px-6 lg:px-10 2xl:px-12 h-16 flex items-center justify-between">
          <Link href={"/" + activeLang} className={brandTop}>
            Ninan Studio
          </Link>

          <MobileTrigger />

          <div className="hidden md:flex items-center gap-x-10">
            <nav className="flex items-center gap-x-9">
              {links.map((l) => (
                <Link key={l.id} href={hrefToSection(l.id)} className={navItemTop}>
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="h-5 w-px bg-black/10" />
            <div className="flex items-center gap-x-5">
              {languages.map((l) => (
                <Link key={String(l)} href={hrefForLang(l as Lang)} className={langTop(l as Lang)}>
                  {String(l).toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* FLOATING PILL — SOLO UP + hero out + footer out */}
      <div
        className={[
          "fixed bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-50",
          "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          showBottom && !footerInView
            ? "translate-y-0 opacity-100"
            : "translate-y-3 opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div
          className="
            h-14
            w-[min(1120px,calc(100vw-1.5rem))]
            rounded-full
            bg-white
            border border-black/10
            ring-1 ring-black/[0.02]
            shadow-[0_16px_45px_rgba(0,0,0,0.12)]
            flex items-center justify-between
            px-5 sm:px-7
            overflow-hidden
          "
        >
          <Link href={"/" + activeLang} className={brandFloat}>
            Ninan Studio
          </Link>

          <MobileTrigger />

          <div className="hidden md:flex items-center min-w-0 flex-1 ml-8">
            <nav className="flex-1 min-w-0">
              <div className="flex items-center gap-x-10 overflow-x-auto whitespace-nowrap pr-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {links.map((l) => (
                  <Link key={l.id} href={hrefToSection(l.id)} className={navItemFloat}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </nav>
            <span aria-hidden="true" className="flex items-center gap-[5px] mx-6 flex-none text-black/90">
              <span className="block w-[14px] h-[1px] bg-current" />
              <span className="block w-[3px] h-[3px] rounded-full bg-current" />
            </span>
            <div className="flex items-center gap-x-4 flex-none">
              {languages.map((l) => (
                <Link key={String(l)} href={hrefForLang(l as Lang)} className={langFloat(l as Lang)}>
                  {String(l).toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60]">
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="
              absolute left-1/2 -translate-x-[40%] top-16
              w-[min(280px,calc(100vw-2rem))]
              rounded-xl
              bg-white/80 backdrop-blur-md
              border border-black/10
              shadow-[0_8px_32px_rgba(0,0,0,0.10)]
              p-5
            "
          >
            <div className="flex items-center justify-between">
              <Link
                href={"/" + activeLang}
                onClick={() => setMobileOpen(false)}
                className="text-[12px] uppercase font-medium tracking-[0.28em] text-neutral-950"
              >
                Ninan Studio
              </Link>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setMobileOpen(false)}
                className="h-8 w-8 rounded-full border border-black/10 bg-white/60 hover:bg-white/90 transition flex items-center justify-center relative"
              >
                <span className="sr-only">Close</span>
                <span className="block h-[1px] w-3.5 bg-neutral-900 rotate-45 absolute" />
                <span className="block h-[1px] w-3.5 bg-neutral-900 -rotate-45 absolute" />
              </button>
            </div>

            <div className="mt-4 border-t border-black/8 pt-4">
              <nav className="grid gap-0">
                {links.map((l) => (
                  <Link
                    key={l.id}
                    href={hrefToSection(l.id)}
                    onClick={(e) => {
                      e.stopPropagation()
                      setMobileOpen(false)
                      setTimeout(() => {
                        document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })
                      }, 150)
                    }}
                    className="flex items-center gap-2.5 py-2.5 text-[11px] uppercase font-normal tracking-[0.18em] text-neutral-800 hover:text-neutral-950 transition-colors group"
                  >
                    <span className="flex items-center gap-[4px] text-neutral-300 group-hover:text-neutral-500 transition-colors flex-none">
                      <span className="block w-[10px] h-[1px] bg-current" />
                      <span className="block w-[2.5px] h-[2.5px] rounded-full bg-current" />
                    </span>
                    {l.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-4 border-t border-black/8 pt-4 flex items-center gap-x-4">
                {languages.map((l) => (
                  <Link
                    key={String(l)}
                    href={hrefForLang(l as Lang)}
                    onClick={() => setMobileOpen(false)}
                    className={[
                      "text-[11px] uppercase font-normal tracking-[0.22em] transition-colors",
                      l === activeLang ? "text-neutral-950" : "text-neutral-400 hover:text-neutral-950",
                    ].join(" ")}
                  >
                    {String(l).toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}