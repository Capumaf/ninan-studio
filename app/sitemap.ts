import type { MetadataRoute } from "next"
import { languages } from "@/content/i18n"

const baseUrl = "https://ninan-studio.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  return languages.map((lang) => ({
    url: `${baseUrl}/${lang}`,
    lastModified: new Date(),
  }))
}
