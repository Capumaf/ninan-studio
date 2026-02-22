"use client"

import { useI18n } from "@/components/i18n/I18nProvider"

export default function Process() {
  const { t } = useI18n()
  const p = t.process

  return (
    <section id="process" className="section">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12">
          
          {/* LEFT */}
          <div className="lg:col-span-4">
            <p className="p-muted">{p.kicker}</p>
            <h2 className="h2 mt-3">{p.title}</h2>
            <p className="p mt-4 max-w-md">{p.intro}</p>
          </div>

          {/* RIGHT — aligned like Services */}
          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="space-y-10">
              {p.steps.map((step) => (
                <li
                  key={step.title}
                  className="border-t border-[hsla(var(--shadow),0.10)] pt-10"
                >
                  <p className="p-muted uppercase tracking-[0.2em]">
                    {step.step}
                  </p>

                  <h3 className="h3 mt-3">{step.title}</h3>

                  <p className="p mt-4 max-w-prose">
                    {step.desc}
                  </p>

                  {step.bullets.length > 0 && (
                    <ul className="mt-5 space-y-3 text-[0.95rem] leading-relaxed">
                      {step.bullets.map((b) => (
                        <li
                          key={b}
                          className="border-l border-black/10 pl-4"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>

            <div className="border-t border-[hsla(var(--shadow),0.10)] pt-10 mt-14">
              <p className="p-muted max-w-prose">
                {p.footer}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}