// app/page.tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <main>
      <Hero />
      <div className="rule" />

      <About />
      <div className="rule" />

      <Work />
      <div className="rule" />

      <Services />
      <div className="rule" />

      <Process />
      <div className="rule" />

      <Contact />
    </main>
  );
}
