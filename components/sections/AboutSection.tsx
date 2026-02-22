import type { Dictionary } from "@/content/i18n"

type Props = {
  a: Dictionary["about"]
}

export default function AboutSection({ a }: Props) {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,72ch)] lg:gap-20">
          {/* LEFT — editorial margin */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[hsl(var(--muted-2))]">
                {a.kicker}
              </p>

              <div className="mt-8 h-px w-20 bg-black/20" />

              <h2 className="mt-8 text-2xl md:text-3xl font-semibold tracking-tight leading-[1.08] max-w-[22ch]">
                {a.title}
              </h2>
            </div>
          </aside>

          {/* RIGHT — content */}
          <div className="lg:pl-10">
            {/* Mobile header (porque el aside se oculta) */}
            <div className="lg:hidden">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[hsl(var(--muted-2))]">
                {a.kicker}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight leading-[1.08] max-w-[26ch]">
                {a.title}
              </h2>
              <div className="mt-8 h-px w-full bg-black/10" />
            </div>

            <div className="max-w-[72ch]">
              <div className="max-w-[62ch]">
                <p className="p">{a.p1}</p>
                <p className="p mt-6">{a.p2}</p>
              </div>

              {/* Editorial cut */}
              <div className="mt-12 h-px w-full bg-black/10" />

              {/* Bullets → lista editorial (sin bullets UI) */}
              <ul className="mt-10 space-y-6">
                {a.bullets.map((b) => (
                  <li
                    key={b}
                    className="grid grid-cols-[44px_minmax(0,1fr)] gap-6 lg:grid-cols-[52px_minmax(0,1fr)]"
                  >
                    <span aria-hidden className="mt-[10px] h-px w-10 bg-black/20" />
                    <p className="text-sm leading-[1.7] text-black/80">{b}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}