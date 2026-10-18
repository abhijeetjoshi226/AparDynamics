# Apar Dynamics — Corporate Website

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · lucide-react. A fast marketing site for **Apar Dynamics** (engineering, automation and fabrication, Pune) and its portable-structures brand **Just Porta**. No database.

## Run locally

```bash
npm install
cp .env.example .env.local   # then fill in values (see below)
npm run dev                  # http://localhost:3000
```

Checks: `npm run lint` · `npm run typecheck` · `npm run build` · `npm start`

## Where to edit content

| What | File |
| --- | --- |
| Company details, address, phone, stats, machinery, values, ISO text | `src/data/site.ts` |
| Navigation | `src/data/navigation.ts` |
| Engineering services (cards + detail pages) | `src/data/services.ts` |
| Industries | `src/data/industries.ts` |
| Just Porta categories and product pages | `src/data/just-porta.ts` |
| Gallery items and labels | `src/data/gallery.ts` |
| Process steps, "Why choose us" | `src/data/process.ts` |
| Design tokens (colours, fonts, shadows) | `src/app/globals.css` (`@theme`) |

Images live in `public/images/` (`brand`, `facility`, `solutions`, `just-porta`). Replace a file with the same name to swap an image, or add new entries to the data files.

## Quote form — activate email delivery

Submissions go to `POST /api/quote`, which validates on the server and sends email through [Resend](https://resend.com). **Until configured, the form shows an honest "not available" message and nothing is reported as sent.**

1. Create a Resend account, verify your sending domain, create an API key.
2. Set (locally in `.env.local`, and in Vercel → Project → Settings → Environment Variables):
   - `RESEND_API_KEY`
   - `QUOTE_TO_EMAIL` (comma-separated allowed)
   - `QUOTE_FROM_EMAIL` (on the verified domain, e.g. `Apar Dynamics Website <quotes@apardynamics.com>`)
   - `NEXT_PUBLIC_SITE_URL` (e.g. `https://www.apardynamics.com`)
3. Redeploy.

Attachments are limited to 4 MB (Vercel's request-body limit). Spam protection: hidden honeypot + a best-effort per-IP rate limit; add Vercel Firewall rules for stronger protection. WhatsApp enquiry buttons use `wa.me/917507361156` with a prefilled message.

## Deploy to Vercel

1. Push the repo to GitHub and import it at vercel.com/new (framework auto-detected as Next.js; no build settings needed).
2. Add the environment variables above.
3. Deploy, then add the `apardynamics.com` domain and set `NEXT_PUBLIC_SITE_URL` to the final URL.
4. Submit `https://<your-domain>/sitemap.xml` in Google Search Console.

## SEO

Per-page titles/descriptions, canonical URLs, Open Graph/Twitter cards, `sitemap.xml`, `robots.txt`, LocalBusiness / Service / Breadcrumb JSON-LD (verified details only).

## Content to confirm before launch

- **ISO certificate**: the profile says "ISO certified" only. Set `company.iso.standard` in `src/data/site.ts` (e.g. `ISO 9001:2015`) once verified.
- **Postal address**: uses the full address on the profile's Location slide. The Just Porta brochures print "Talwade-Dehu road" — confirm which is canonical.
- **Facility headline figures** come from the profile: 20+ years (team experience), 10,000 sq ft set up in 2024, 2 robotic welding units, tube laser 6,500 mm / 150 mm / 1.5 kW.
- **Imagery**: facility photos are from the profile's "Unit set up" slide. CAD renders and stainless-steel product images were taken from the profile and are labelled "CAD render" / "Product range" — replace with your own project photography where possible. Just Porta cabin and cottage images come from the supplied brochures and look like illustrative renders; the gallery labels them "Just Porta cabin". A high-resolution hero photo of the shop floor would improve the home page.
- The profile's engineering poster shows another company's logo (SOES) and was **not** used. The profile's "Others" capability (seed planting, physical therapy, 3D printing) looks like template text and was omitted.
- **Social links**: only Just Porta's YouTube and Instagram (from the brochures) are linked. Add company LinkedIn etc. in `src/data/site.ts` when confirmed.
- **Privacy Policy** is a plain-language starting point; have it reviewed before publishing.
