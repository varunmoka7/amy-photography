# CLAUDE.md

Guidance for AI assistants (Claude, Cursor, etc.) working in this repository.

## Project

Portfolio + booking website for **Amy Photography** (portraits & family photographer).
Live via **GitHub Pages** from `varunmoka7/amy-photography`, branch `main`, root folder.
A custom domain will be attached (owner: Varun, varunmoka7@gmail.com).

## Stack

Pure static **HTML/CSS/JS**. No frameworks, no npm, no build step — this is deliberate.
Do not introduce build tools, package managers, or frameworks without explicit approval.

## File map

| Path | Purpose |
|---|---|
| `index.html` | Entire site (single page): nav, hero, portfolio, about, services, testimonials, contact (email), footer, lightbox |
| `css/style.css` | All styling; design tokens as CSS variables in `:root` |
| `js/main.js` | Mobile nav, gallery lightbox |
| `images/` | Site images (currently SVG placeholders awaiting real photos) |
| `README.md` | Human docs: local preview, deploy, DNS setup |
| `CURSOR-KICKSTART.md` | Onboarding prompt for Cursor chat |

## Design system

- Palette (CSS vars): `--cream #faf6f0`, `--sand #f1e8dc`, `--ink #3d3630`, `--terracotta #c47a5a`
- Fonts: Cormorant Garamond (headings), Jost (body) — loaded from Google Fonts
- Rounded cards (`--radius: 10px`), soft shadows, generous whitespace
- Tone: warm, personal, unpretentious — matches portraits & family niche

## Conventions

- Semantic HTML; preserve `alt` text, `aria-*` attributes, and heading hierarchy
- Responsive breakpoints: 900px (tablet) and 640px (mobile) — extend these, don't add new ones arbitrarily
- Images: `loading="lazy"`, max ~1600px wide, JPG quality ~80
- Keep everything dependency-free; vanilla JS only
- One page: new sections go into `index.html`, styled in `style.css`

## Workflows

- **Preview locally**: `python3 -m http.server 8000` → http://localhost:8000
- **Deploy**: commit + push to `main`; GitHub Pages redeploys automatically (~1 min)
- **Booking**: by email (`mailto:` CTA card in #book). The Web3Forms form was removed until an access key can be registered for `amyteng_@hotmail.com` — restore form markup + JS from git history and add the key to reactivate. Form field CSS kept in style.css for that restore.

## Current status / TODO

1. [x] Real photos live: About (`amy.jpg`), 5-slide hero slideshow, and 50-photo editorial masonry gallery (`images/portfolio/`). All images re-encoded to JPG q78 (2026-08-06); regenerate from `documents/album/` originals rather than re-compressing. Legacy `portfolio-1..6.jpg` and `cyberpunk/` deleted.
2. [x] Placeholder text — contact email now real (`amyteng_@hotmail.com`); Instagram (@captivate.amy) is real; prices/testimonials sections were removed
3. [x] GitHub Pages verified: live at varunmoka7.github.io/amy-photography, built from main/root, HTTPS enforced
4. [ ] Custom domain: **amyteng.com** (purchased by Amy). DNS FIRST at registrar — A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; `www` CNAME → `varunmoka7.github.io` — THEN CNAME in Pages settings; enforce HTTPS
5. [x] SEO: Berlin-targeted title/meta, LocalBusiness JSON-LD, canonical, OG/Twitter tags, favicon. Note: og:url/og:image/canonical/JSON-LD urls point at varunmoka7.github.io — update all when amyteng.com goes live.
6. [ ] Before launch (waiting on Amy): Impressum/Datenschutz page. Contact form parked (no Web3Forms key obtainable yet) — booking is email-only for now; re-add form + consent checkbox + captcha when the key arrives. Real email done (`amyteng_@hotmail.com`)
7. [ ] Later: Instagram feed section, client gallery links, testimonial photos, German-language page

## Guardrails

- Ask before deleting files, restructuring folders, or changing the design system
- Never commit real client photos without confirming usage rights
- Contact details are real: email `amyteng_@hotmail.com`, Instagram @captivate.amy — confirm any new contact details before publishing them