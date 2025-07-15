import { en } from './translations/en'
import { de } from './translations/de'

export const translations = {
  en,
  de
}

export type Locale = keyof typeof translations
export type TranslationKey = keyof typeof translations.en 