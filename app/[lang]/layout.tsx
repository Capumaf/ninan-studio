import type { ReactNode } from "react"
import { languages, type Lang } from "@/content/i18n"
import { I18nProvider } from "@/components/i18n/I18nProvider"
import Header from "@/components/nav/Header"
import Footer from "@/components/layout/Footer"

function isLang(x: string): x is Lang {
  return (languages as readonly string[]).includes(x)
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params
  const lang = resolvedParams?.lang
  const safeLang: Lang = lang && isLang(lang) ? lang : "en"

  return (
    <I18nProvider key={safeLang} lang={safeLang}>
      <Header />
      <main className="pt-12 md:pt-14">{children}</main>
      <Footer />
    </I18nProvider>
  )
}