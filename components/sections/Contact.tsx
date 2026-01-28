// components/sections/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="max-w-[70ch]">
          <p className="p-muted">CONTACT</p>
          <h2 className="h2 mt-3">Let’s talk</h2>
          <p className="p mt-4">Share a brief about your project and I’ll reply with next steps.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn" href="mailto:hello@ninanstudio.com">
              Email
            </a>
            <a className="btn btn-ghost" href="#hero">
              Back to top
            </a>
          </div>

          <p className="p-muted mt-6">Response time: 24–48h · English / German</p>
        </div>
      </div>
    </section>
  );
}
