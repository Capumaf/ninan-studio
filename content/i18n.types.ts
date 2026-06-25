export const languages = ["en", "de", "es"] as const
export type Lang = (typeof languages)[number]

export type Dictionary = {
  hero: {
    t1: string; t2: string; t3: string; t4: string
    p1: string; p2: string; start: string; view: string
    based: string; issue: string; place: string; est: string
    principle: string; m1: string; m2: string; m3: string; available: string
  }

  nav: {
    about: string; work: string; services: string; process: string
    contact: string; processCta: string; contactCta: string
    menu: string; close: string
  }

  about: {
    kicker: string; title: string; p1: string
    bullets: readonly string[]
  }

  work: {
    kickerLeft: string; kickerRight: string; title: string; desc: string
    more: string; sideNote: string; viewLive: string; linkOnRequest: string
    items: readonly {
      id: string; name: string; meta: string; status: string
      description: string; href?: string
      image?: string
      previews?: readonly { src: string; alt: string }[]
    }[]
  }

  services: {
    kicker: string; title: string; intro: string
    howItWorks: { kicker: string; bullets: readonly string[]; cta: string }
    blocks: readonly {
      title: string; time: string; desc: string
      bullets: readonly string[]; cta: string
    }[]
    close: string
  }

  process: {
    kicker: string; title: string; intro: string; intro2: string
    rail: readonly { title: string; body: string }[]
    toggleOpen: string; toggleView: string; footer: string
    steps: readonly {
      step: string; title: string; desc: string
      bullets: readonly string[]
    }[]
  }

  footer: {
    brand: string; claim: string
    links: { items: readonly { label: string; href: string }[] }
    contact: { email: string; location: string }
    bottom: string
  }

  contact: {
    kicker: string; title: string; body: string
    ctaEmail: string; ctaWhatsapp: string
    form: { name: string; email: string; details: string; submit: string }
    footerNote: string
  }
}