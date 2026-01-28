// components/sections/About.tsx
export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="p-muted">ABOUT</p>
            <h2 className="h2 mt-3">Strategy-first design, built to ship.</h2>
          </div>

          <div className="lg:col-span-8">
            <p className="p">
              Ninan Studio is a digital studio focused on high-impact execution—where brand, product
              thinking and delivery meet.
            </p>

            <p className="p mt-4">
              With a background in Innovation Design Management and strategic marketing, plus hands-on
              analytics and full-stack skills, I bridge direction and production without losing clarity.
            </p>

            <div className="mt-10 border-t border-[hsla(var(--shadow),0.10)] pt-8">
              <ul className="bullets">
                <li>International-ready communication (EN/DE), premium editorial taste</li>
                <li>Strategic positioning + practical delivery (not slides-only)</li>
                <li>Systems mindset: design consistency, scalable UI, clean architecture</li>
                <li>Automation & applied AI when it solves real problems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
