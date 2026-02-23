import type { Dictionary } from "@/content/i18n"

type Props = {
  a: Dictionary["about"]
}

export default function AboutSection({ a }: Props) {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Masthead superior: kicker + hairline (1 regla por capítulo) */}
        <div className="mb-10 lg:mb-12">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-black/40">
            {a.kicker}
          </p>
          <div className="mt-3 border-t border-black/10" />
        </div>

        {/* Spread grid 50/50 — eje del lomo fijo */}
        <div className="grid lg:grid-cols-2 gap-y-10 lg:gap-x-14 xl:gap-x-16 items-start">
          {/* LEFT — narrativa (sticky) */}
          <div className="lg:sticky lg:top-24 xl:top-28 self-start">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.025em]">
              {a.title}
            </h2>

            <div className="mt-6 lg:mt-7 max-w-[52ch]">
              <p className="text-base leading-[1.75] text-black/70">{a.p1}</p>
              <p className="text-base leading-[1.75] text-black/70 mt-6">
                {a.p2}
              </p>
            </div>
          </div>

          {/* RIGHT — rail (border-l + pl constante) */}
          <div className="lg:border-l lg:border-black/10 lg:pl-12 xl:pl-14">
            {/* Hairline en mobile cuando desaparece el rail */}
            <div className="lg:hidden border-t border-black/10 pt-10" />

            <div className="max-w-[52ch]">
              <ol>
                {a.bullets.map((b, i) => (
                  <li
                    key={`${i}-${b}`}
                    className="grid grid-cols-[20px_minmax(0,1fr)] gap-5 py-6 border-b border-black/10"
                  >
                    <span
                      aria-hidden="true"
                      className="text-[10px] font-medium tracking-[0.14em] text-black/25 mt-[3px] tabular-nums"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm leading-[1.8] text-black/70">{b}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}