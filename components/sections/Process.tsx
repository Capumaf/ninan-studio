// components/sections/Process.tsx
export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="p-muted">PROCESS</p>
            <h2 className="h2 mt-3">How we work</h2>
            <p className="p mt-4">A structured, transparent workflow — designed for trust.</p>
          </div>

          <div className="lg:col-span-8">
            <ol className="space-y-8">
              {[
                ["Discovery", "Goals, constraints, content and positioning."],
                ["Design", "Typography, layout, interactions and brand tone."],
                ["Build", "Next.js + Tailwind implementation, QA and performance."],
                ["Launch", "Deploy on Vercel, checks and handoff."],
              ].map(([title, desc]) => (
                <li key={title} className="border-t border-[hsla(var(--shadow),0.10)] pt-8">
                  <p className="p-muted">Step</p>
                  <h3 className="h3 mt-2">{title}</h3>
                  <p className="p mt-3">{desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
