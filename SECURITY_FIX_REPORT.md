# Medico Pharma — Security / Production Cleanup

Prepared: 11 September 2026
Repository preserved: `https://github.com/dynsimulationofficial/medico_pharma_seo.git`
Branch preserved: `main`

## Fixes merged into the original website

- Updated Next.js / Next ESLint packages from `16.3.2` to `16.3.4` in `package.json` and `package-lock.json`.
- Added production security headers: CSP, HSTS, anti-framing, MIME sniffing protection, referrer policy and permissions policy.
- Removed Google Analytics and Microsoft Clarity runtime scripts during the security-review cleanup, reducing third-party JavaScript surface.
- Hardened `/api/contact` with strict SMTP TLS certificate verification, input length/format validation, HTML escaping, origin checks, request-size checks, rate limiting, honeypot protection, minimum form-fill time, and generic server errors.
- Replaced the homepage GET enquiry form (which could place contact details into the URL) with a secure POST-based form that uses `/api/contact`.
- Added anti-bot and validation controls to the main contact form.
- Removed developer/template text accidentally visible on production pages.
- Changed `Enroll now` to `Enquire now`.
- Removed the public `Before publishing` legal-template note.
- Replaced direct medicine pricing and external IndiaMART/source buttons on dynamic product catalogue pages with verified B2B enquiry language.
- Prevented catalogue pages from loading third-party remote product images; local product images are used instead.
- Added visible B2B / regulated-product notices and clarified that the website does not provide medical advice or direct-to-consumer prescription sales.
- Added a clean `/terms-and-conditions` route and redirected the legacy ampersand URL.
- Redirected old `/product-01` to `/product-04` routes to `/products`.
- Updated sitemap / robots rules.
- Fixed the footer year and inconsistent placeholder phone values.
- Fixed the missing Services hero image reference and one missing local product-image path.
- Confirmed there are no obvious runtime `iframe`, `window.location`, `eval`, `atob`, `document.write`, Google Tag Manager, or Microsoft Clarity injections in `src` after cleanup.

## Validation performed

- Original `.git` directory retained.
- Git remote verified as `https://github.com/dynsimulationofficial/medico_pharma_seo.git`.
- Branch verified as `main`.
- TypeScript / TSX syntax transpilation check passed across `src`.
- `package-lock.json` parses successfully and is pinned to Next.js `16.3.4`.
- All direct local image references in `src` resolve to existing files under `public`.

A full `npm install && npm run build` could not be executed in the packaging sandbox because its npm registry network access was unavailable. Run those two commands locally before deployment; the project files and lockfile are prepared for them.

## After deployment

1. Run `npm install` and `npm run build` locally.
2. Deploy this clean project from the existing repository.
3. Rotate SMTP / deployment secrets if the previous vulnerable deployment may have been exposed.
4. Purge old hosting/CDN caches or remove old deployment files if your host keeps them.
5. Check Search Console → Security Issues example URLs.
6. Request Google Security Review only after the clean deployment is live.
