// components/sections/Services.tsx
export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="p-muted">SERVICES</p>
            <h2 className="h2 mt-3">What I deliver</h2>
            <p className="p mt-4">Focused offers, no fluff. Built with Next.js, Tailwind and modern tooling.</p>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-10">
              <div className="border-t border-[hsla(var(--shadow),0.10)] pt-8">
                <h3 className="h3">Web</h3>
                <p className="p mt-3">
                  One-page landings, websites and web apps with strong UI/UX, performance and clean code.
                </p>
                <ul className="bullets mt-5">
                  <li>Next.js App Router + Tailwind</li>
                  <li>Design system + reusable components</li>
                  <li>Performance and accessibility</li>
                </ul>
              </div>

              <div className="border-t border-[hsla(var(--shadow),0.10)] pt-8">
                <h3 className="h3">Automation</h3>
                <p className="p mt-3">
                  Workflows and integrations that remove manual work and reduce operational friction.
                </p>
                <ul className="bullets mt-5">
                  <li>Zapier/Make-style flows or custom scripts</li>
                  <li>APIs, webhooks, dashboards</li>
                  <li>Reliability-first setup</li>
                </ul>
              </div>

              <div className="border-t border-[hsla(var(--shadow),0.10)] pt-8">
                <h3 className="h3">AI</h3>
                <p className="p mt-3">
                  Practical AI integrations that improve support, internal tools and customer journeys.
                </p>
                <ul className="bullets mt-5">
                  <li>AI-assisted flows (not gimmicks)</li>
                  <li>Chat/assistant UX patterns</li>
                  <li>Security and clarity in scope</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
