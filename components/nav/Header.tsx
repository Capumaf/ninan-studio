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

/** Mobile trigger icon (zigzag) — replaces the circle hamburger */
function ZigZagButtonIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 18 18" fill="none" className="block">
      <path
        d="M3 6 L7 6 L5.5 9 L12.5 9 L11 12 L15 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Divider editorial zigzag (desktop: between nav and langs) */
function ZigZagDivider({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={["hidden md:inline-flex items-center", className].join(" ")}>
      <svg width="10" height="28" viewBox="0 0 10 28" fill="none" className="block">
        <path
          d="M5 1 L2 5 L8 9 L2 13 L8 17 L2 21 L5 27"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
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

  // --- Floating behavior (ambient) ---
  const [heroOut, setHeroOut] = useState(false)
  const [showBottom, setShowBottom] = useState(false)
  const hideTimer = useRef<number | null>(null)
  const rafLock = useRef(false)

  // NEW: hide everything when footer is present
  const [footerInView, setFooterInView] = useState(false)

  const clearHideTimer = () => {
    if (hideTimer.current !== null) {
      window.clearTimeout(hideTimer.current)
      hideTimer.current = null
    }
  }

  const showAndArmHide = () => {
    // CHANGED: do not show when footer is visible
    if (!heroOut || footerInView) return
    setShowBottom(true)
    clearHideTimer()
    hideTimer.current = window.setTimeout(() => setShowBottom(false), HIDE_DELAY_MS)
  }

  // Detect hero exit
  useEffect(() => {
    const hero =
      document.getElementById("hero") ||
      (document.querySelector("main > :first-child") as HTMLElement | null)

    if (!hero) return

    const observer = new IntersectionObserver(
      (entries) => {
        const ratio = entries[0].intersectionRatio
        const out = ratio < 0.2
        setHeroOut(out)

        if (!out) {
          setShowBottom(false)
          clearHideTimer()
        } else {
          showAndArmHide()
        }
      },
      { threshold: [0, 0.2, 1], rootMargin: "-60px 0px 0px 0px" }
    )

    observer.observe(hero)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // NEW: Detect footer presence and force hide
  useEffect(() => {
    const footer = document.getElementById("site-footer")
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting
        setFooterInView(inView)

        if (inView) {
          // force silence: no floating, no timers
          setShowBottom(false)
          clearHideTimer()
        } else {
          // if user is still below hero, allow the ambient behavior again
          if (heroOut) showAndArmHide()
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(footer)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroOut])

  // Re-show on user activity while hero is out
  useEffect(() => {
    // CHANGED: if footer is visible, do nothing
    if (!heroOut || footerInView) return

    const onActivity = () => {
      if (rafLock.current) return
      rafLock.current = true
      requestAnimationFrame(() => {
        rafLock.current = false
        showAndArmHide()
      })
    }

    window.addEventListener("scroll", onActivity, { passive: true })
    window.addEventListener("wheel", onActivity, { passive: true })
    window.addEventListener("touchstart", onActivity, { passive: true })
    window.addEventListener("pointerdown", onActivity, { passive: true })

    return () => {
      window.removeEventListener("scroll", onActivity)
      window.removeEventListener("wheel", onActivity)
      window.removeEventListener("touchstart", onActivity)
      window.removeEventListener("pointerdown", onActivity)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroOut, footerInView])

  // --- Mobile menu ---
  const [mobileOpen, setMobileOpen] = useState(false)

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

  // close mobile menu when switching to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)")
    const onChange = () => {
      if (mq.matches) setMobileOpen(false)
    }
    onChange()
    mq.addEventListener?.("change", onChange)
    return () => mq.removeEventListener?.("change", onChange)
  }, [])

  // --- Classes (editorial / luxury minimal) ---
  const navItemTop =
    "text-[11px] uppercase font-normal tracking-[0.16em] text-neutral-700 hover:text-neutral-950 transition-colors duration-200"
  const brandTop = "text-[12px] uppercase font-medium tracking-[0.28em] text-neutral-950"
  const langTop = (l: Lang) =>
    [
      "text-[11px] uppercase tracking-[0.20em] transition-colors duration-200",
      l === activeLang ? "text-neutral-950" : "text-neutral-500 hover:text-neutral-950",
    ].join(" ")

  const navItemFloat =
    "text-[11px] uppercase font-normal tracking-[0.18em] text-neutral-600 hover:text-neutral-950 transition-colors duration-200"
  const brandFloat = "text-[11px] uppercase font-medium tracking-[0.32em] text-neutral-950"
  const langFloat = (l: Lang) =>
    [
      "text-[11px] uppercase font-normal tracking-[0.22em] transition-colors duration-200",
      l === activeLang ? "text-neutral-950" : "text-neutral-500 hover:text-neutral-950",
    ].join(" ")

  const MobileTriggerButton = ({ className = "" }: { className?: string }) => (
    <button
      type="button"
      aria-label="Open menu"
      onClick={() => setMobileOpen(true)}
      className={[
        "md:hidden inline-flex items-center justify-center",
        "p-2",
        "text-neutral-500 hover:text-neutral-950 transition-colors duration-200",
        className,
      ].join(" ")}
    >
      <ZigZagButtonIcon />
    </button>
  )

  return (
    <>
      {/* TOP HEADER (hidden when floating is visible OR footer is visible) */}
      <header
        className={[
          "sticky top-0 z-50 border-b border-black/10 bg-white/75 backdrop-blur-sm transition-opacity duration-300",
          // CHANGED:
          showBottom || footerInView ? "opacity-0 pointer-events-none" : "opacity-100",
        ].join(" ")}
      >
        <div className="mx-auto w-full max-w-[1500px] px-6 lg:px-10 2xl:px-12 h-16 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-3">
            <Link href={"/" + activeLang} className={brandTop}>
              Ninan Studio
            </Link>

            {/* Mobile: ONLY the zigzag trigger (no circle) */}
            <MobileTriggerButton />
          </div>

          {/* Desktop */}
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

      {/* FLOATING PILL HEADER (also hidden when footer is visible) */}
      <div
        className={[
          "fixed bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-50",
          // CHANGED:
          showBottom && !footerInView
            ? "translate-y-0 opacity-100"
            : "translate-y-3 opacity-0 pointer-events-none",
          "transition-all duration-300 ease-out",
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
            flex items-center
            px-5 sm:px-7
            gap-x-5
            overflow-hidden
          "
        >
          {/* Left */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href={"/" + activeLang} className={brandFloat}>
              Ninan Studio
            </Link>

            {/* Mobile: ONLY the zigzag trigger (no circle) */}
            <MobileTriggerButton />
          </div>

          {/* Desktop: 3-zone layout (stable) */}
          <div className="hidden md:flex items-center min-w-0 flex-1">
            {/* Center (flex): nav can scroll if needed */}
            <nav className="flex-1 min-w-0">
              <div className="flex items-center gap-x-10 overflow-x-auto whitespace-nowrap pr-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {links.map((l) => (
                  <Link key={l.id} href={hrefToSection(l.id)} className={navItemFloat}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Right (fixed): divider + langs */}
            <ZigZagDivider className="mx-6 text-black/18 flex-none" />

            <div className="flex items-center gap-x-4 flex-none">
              {languages.map((l) => (
                <Link
                  key={String(l)}
                  href={hrefForLang(l as Lang)}
                  className={langFloat(l as Lang)}
                >
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
            className="absolute inset-0 bg-black/20"
            onClick={() => setMobileOpen(false)}
          />

          <div
            className="
              absolute left-1/2 top-20 -translate-x-1/2
              w-[calc(100vw-1.5rem)]
              max-w-md
              rounded-2xl
              bg-white
              border border-black/10
              shadow-[0_20px_60px_rgba(0,0,0,0.18)]
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
                className="h-9 w-9 rounded-full border border-black/10 bg-white hover:bg-neutral-50 transition"
              >
                <span className="sr-only">Close</span>
                <span className="block h-[1px] w-4 bg-neutral-900 rotate-45 translate-y-[0.5px] mx-auto" />
                <span className="block h-[1px] w-4 bg-neutral-900 -rotate-45 -translate-y-[0.5px] mx-auto" />
              </button>
            </div>

            <div className="mt-5 border-t border-black/10 pt-4">
              <nav className="grid gap-3">
                {links.map((l) => (
                  <Link
                    key={l.id}
                    href={hrefToSection(l.id)}
                    onClick={() => setMobileOpen(false)}
                    className="text-[12px] uppercase font-normal tracking-[0.18em] text-neutral-800 hover:text-neutral-950 transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-5 border-t border-black/10 pt-4 flex items-center gap-x-4">
                {languages.map((l) => (
                  <Link
                    key={String(l)}
                    href={hrefForLang(l as Lang)}
                    onClick={() => setMobileOpen(false)}
                    className={[
                      "text-[11px] uppercase font-normal tracking-[0.22em] transition-colors",
                      l === activeLang ? "text-neutral-950" : "text-neutral-500 hover:text-neutral-950",
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