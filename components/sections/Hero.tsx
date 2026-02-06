"use client";

export default function Hero() {
  return (
    <section id="hero" className="section">
      <div className="container">
        <div className="relative">
          <div className="relative z-10 grid items-start gap-10 lg:grid-cols-[minmax(0,70ch)_1fr]">
            {/* LEFT */}
            <div className="flex gap-8">
              <div
                aria-hidden
                className="mt-3 h-[150px] w-px shrink-0 rounded-full bg-black/25"
              />

              <div className="min-w-0">
                <h1 className="h1">
                  <span className="block">Digital studio.</span>
                  <span className="block accent">
                    High-impact, innovative execution.
                  </span>
                </h1>

                <p className="p mt-6">
                  Web, automation and practical AI—strategic design and
                  production-ready delivery.
                </p>

                <div className="mt-8 h-px w-24 bg-[hsla(var(--shadow),0.14)]" />

                <div className="mt-10 flex flex-wrap gap-3">
                  <a className="btn" href="#contact">
                    Start a project
                  </a>
                  <a className="btn btn-ghost" href="#process">
                    View process
                  </a>
                </div>

                <p className="p-muted mt-6">
                  Based in EU timezone · Working with international clients ·
                  English / German
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex justify-end">
              <div className="relative w-full">
                <div className="relative z-10 flex justify-end pb-3">
                  <div className="pill">
                    Ninan Studio · Web / Automation / AI
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[28px]">
                  <div
                    aria-hidden
                    className="hero-field h-[360px] sm:h-[420px] lg:h-[440px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-16 bg-gradient-to-t from-[hsl(var(--bg))] to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
