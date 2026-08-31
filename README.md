# Voyage Sensoriel — Independent Massage Therapy Website

A calm, warm, multilingual marketing website for an independent massage
therapist, built with **Astro 7**, **Tailwind CSS 4** and **DaisyUI**.

> Template credit: this project started from the [HealNet](https://github.com/anastasiiaxfr/HealNet)
> Astro template by [anastasiiaxfr](https://github.com/anastasiiaxfr), and was
> substantially redesigned and rewritten for an independent wellness practice
> (new information architecture, copy, content model, i18n, theming and
> booking integration). See [LICENSE](./LICENSE).

## Features

- 🌍 Multilingual from the start: English, French, German (`/en`, `/fr`, `/de`)
- 📅 Booking via an embedded [Cal.com](https://cal.com) page (`/book`), centrally configured
- 🎨 One place to rebrand: [`src/config/site.ts`](./src/config/site.ts)
- 🗣️ One place to translate: [`src/i18n/`](./src/i18n)
- 🧾 Content-driven services & testimonials via Astro content collections
- ♿ Accessible, keyboard-friendly, reduced-motion aware
- ⚡ Static output, minimal JavaScript (Cal.com iframe is the one exception)

## Project structure

```text
src/
├── components/        Reusable, translation-driven UI components
│   └── homepage/       Homepage section components
├── config/
│   ├── site.ts          Central brand/business configuration
│   └── calcom.ts        Cal.com URL (reads PUBLIC_CALCOM_URL)
├── content/
│   ├── services/{en,fr,de}/   Treatment data (slug, price, duration, ...)
│   └── testimonials/{en,fr,de}/
├── i18n/
│   ├── en.ts, fr.ts, de.ts    Translation dictionaries
│   ├── config.ts              Locales list & helpers
│   └── types.ts                Shared `Translations` shape
├── layouts/
│   └── MainLayout.astro
└── pages/
    ├── 404.astro, 500.astro
    └── [lang]/            en / fr / de routes (index, services, about, faq, contact, book, privacy, legal)
```

## Commands

| Command           | Action                                       |
| ------------------ | -------------------------------------------- |
| `npm install`       | Install dependencies                         |
| `npm run dev`       | Start the local dev server at `localhost:4321` |
| `npm run build`     | Build the production site to `./dist/`       |
| `npm run preview`   | Preview the production build locally         |
| `npm run check`     | Run the Astro type checker                   |

## Deploying to Cloudflare Pages

This static site is deployed automatically by the GitHub Actions workflow at
[`.github/workflows/deploy-cloudflare-pages.yml`](./.github/workflows/deploy-cloudflare-pages.yml).
Every push to the `main` branch runs the Astro checks, builds `dist/`, and
uploads it to the Cloudflare Pages project named `maison-serein`. The workflow
can also be run manually from the **Actions** tab in GitHub.

Before the first deployment:

1. In Cloudflare, create a Pages project named `maison-serein`. Do not connect
   it to GitHub; GitHub Actions performs deployments directly.
2. Create a Cloudflare API token with **Account > Cloudflare Pages > Edit**
   permission.
3. In the GitHub repository, add these **Actions secrets**:
   - `CLOUDFLARE_API_TOKEN`: the Cloudflare API token.
   - `CLOUDFLARE_ACCOUNT_ID`: the account ID from the Cloudflare dashboard.
4. Add `PUBLIC_CALCOM_URL` as a GitHub **Actions variable** with the public
   Cal.com booking URL. It is a variable, not a secret, because it is embedded
   in the website's client-visible HTML.
5. After the first successful deployment, set the real `pages.dev` or custom
   domain URL as `site` in [`astro.config.mjs`](./astro.config.mjs). This keeps
   the sitemap URLs correct.

Cloudflare Pages hosting and its `pages.dev` address are free. A custom domain
must be registered separately, which typically has an annual cost.

## Configuring the business (branding)

Edit [`src/config/site.ts`](./src/config/site.ts): business name, therapist
name, tagline, contact details, address, service area, social links, and
brand colors. Most components read from this file instead of hardcoding
values.

Brand colors, radii and typography live in
[`src/styles/global.css`](./src/styles/global.css) as a DaisyUI 5 CSS theme
(`@plugin "daisyui/theme"`). Update the `--color-*` and `--radius-*` custom
properties there to restyle the whole site.

## Configuring Cal.com booking

1. Copy `.env.example` to `.env`.
2. Set `PUBLIC_CALCOM_URL` to your Cal.com booking link, e.g.
   `https://cal.com/your-handle/session`.
3. The `/book` page and the `BookingEmbed` component
   ([`src/components/BookingEmbed.astro`](./src/components/BookingEmbed.astro))
   automatically use this URL. No other file needs to change, and no secrets
   are exposed client-side (only a public booking URL is embedded).

## Adding or editing services

Add a Markdown file under `src/content/services/<locale>/<slug>.md` (use the
**same slug** in all three locale folders so the language switcher can map
between translations). See existing files for the required frontmatter
fields (`title`, `shortDescription`, `duration`, `price`, `image`,
`suitableFor`, `whatToExpect`, etc.).

## Adding another language

1. Add the locale code to `locales` in [`src/i18n/config.ts`](./src/i18n/config.ts).
2. Create `src/i18n/<locale>.ts` implementing the `Translations` interface.
3. Register it in [`src/i18n/index.ts`](./src/i18n/index.ts).
4. Add matching content files under `src/content/services/<locale>/` and
   `src/content/testimonials/<locale>/`.

No page or component code needs to change — routes are generated dynamically
for every locale in `locales`.

## Remaining placeholders before going live

- Replace all imagery in `public/images/placeholders/` with real photography.
- Replace the therapist biography, qualifications and approach text in
  `src/i18n/*.ts` (`about` section) with verified, real information.
- Replace the cancellation policy placeholder in the FAQ section.
- Replace the legal notice and privacy policy placeholder text.
- Set real contact details, address, and social links in `src/config/site.ts`.
- Set `PUBLIC_CALCOM_URL` to a real Cal.com booking link.
- Update `site` in `astro.config.mjs` to the real production domain.

## License

MIT — see [LICENSE](./LICENSE). Original template © anastasiiaxfr
([HealNet](https://github.com/anastasiiaxfr/HealNet)).



Update https://maison-serein.example with real information.
