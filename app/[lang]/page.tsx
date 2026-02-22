import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Work from "@/components/sections/Work"
import Services from "@/components/sections/Services"
import Process from "@/components/sections/Process"
import Contact from "@/components/sections/Contact"

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Services />
      <Process />
      <Contact />
    </main>
  )
}