export const ui = {
  it: { brand: 'Il tuo sito', about: 'Chi siamo', articles: 'Articoli', starter: 'Astrology Standard', hero: 'Costruisci qualcosa di utile.', lede: 'Una base calma, accessibile e veloce per il tuo prossimo sito.', cta: 'Scopri lo starter', journal: 'Journal' },
  en: { brand: 'Your site', about: 'About', articles: 'Articles', starter: 'Astrology Standard', hero: 'Build the useful thing.', lede: 'A calm, accessible and fast foundation for your next website.', cta: 'Meet the starter', journal: 'Journal' }
} as const
export type Locale = keyof typeof ui
export function t(locale: Locale) { return ui[locale] }
