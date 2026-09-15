# Astrology Standard i18n

The multilingual variant of Astrology Standard: Lumos components and tokens, Astro's native i18n routing, typed UI copy and localized content collections.

## Routing policy

Italian is the unprefixed primary locale (`/`, `/about`); English is available under `/en/`. This lets a monolingual Italian site adopt English later without breaking its original URLs.

## What you get

- Lumos component primitives, local fonts, responsive layouts and accessibility patterns.
- Semantic tokens in `src/styles/tokens.css`, editable through Astrology's Style Guide.
- Native Astro i18n configuration, UI dictionaries and localised article entries linked by `translationKey`.
- Static output, sitemap, robots route, CI and Dependabot.

## Use it

Select **Astrology Standard i18n** when creating a project in Astrology, or use this repository as a GitHub template. Use Node 22.12+.

Read `LUMOS.md` before building new components or CSS. This template is based on [Lumos for Astro](https://github.com/lumosframework/lumos-for-astro) and retains its MIT license.
