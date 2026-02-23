import type { Dictionary } from "@/content/i18n"

type Props = {
  a: Dictionary["about"]
}

export default function AboutSection({ a }: Props) {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Hairline superior con kicker — ancla la sección */}
        <div className="flex items-center gap-6 mb-16 lg:mb-20">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-black/40 shrink-0">
            {a.kicker}
          </p>
          <div className="h-px flex-1 bg-black/10" />
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-24">
          {/* LEFT — narrativa (H2 sticky + texto) */}
          <div className="lg:sticky lg:top-28">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.025em]">
              {a.title}
            </h2>

            <div className="mt-10 max-w-[52ch]">
              <p className="text-base leading-[1.75] text-black/70">{a.p1}</p>
              <p className="text-base leading-[1.75] text-black/70 mt-6">
                {a.p2}
              </p>
            </div>
          </div>

          {/* RIGHT — lista (estructura) */}
          <div className="lg:border-l lg:border-black/10 lg:pl-14">
            {/* Hairline en mobile para mantener el ritmo sin borde lateral */}
            <div className="h-px w-full bg-black/10 mb-10 lg:hidden" />

            {/* Ancho controlado para que no se sienta “vacío” */}
            <div className="max-w-[52ch]">
              <ol>
                {a.bullets.map((b, i) => (
                  <li
                    key={`${i}-${b}`}
                    className="grid grid-cols-[20px_minmax(0,1fr)] gap-5 py-5 border-b border-black/10"
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