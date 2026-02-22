import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { languages, type Lang } from "@/content/i18n"

const defaultLang: Lang = "en"

function isLang(x: string): x is Lang {
  return (languages as readonly string[]).includes(x)
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  const segments = pathname.split("/").filter(Boolean)
  const maybeLang = segments[0]

  if (!maybeLang) {
    const url = req.nextUrl.clone()
    url.pathname = `/${defaultLang}`
    return NextResponse.redirect(url)
  }

  if (!isLang(maybeLang)) {
    const url = req.nextUrl.clone()
    url.pathname = `/${defaultLang}/${segments.slice(1).join("/")}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}