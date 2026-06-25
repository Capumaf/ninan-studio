export { languages } from "./i18n.types"
export type { Lang, Dictionary } from "./i18n.types"

import { en } from "./i18n.en"
import { de } from "./i18n.de"
import { es } from "./i18n.es"

export const i18n = { en, de, es } as const