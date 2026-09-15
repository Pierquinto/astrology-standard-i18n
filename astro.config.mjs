import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://example.com',
  output: 'static',
  prefetch: { defaultStrategy: 'hover' },
  image: { layout: 'constrained', responsiveStyles: true },
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: { prefixDefaultLocale: false, fallbackType: 'redirect' }
  }
})
