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
- **Booking**: email-only for now (`mailto:` links in the contact section) — no Formspree or form backend

## Current status / TODO

1. [~] Swap placeholder SVGs in `images/` for Amy's real photos — About photo (`amy.jpg`) done; hero + portfolio in progress (album downloaded to `documents/`, untracked)
2. [~] Replace placeholder text — bio done (real About text from Amy); still placeholder: prices, testimonials, contact email, Instagram handle
3. [x] GitHub Pages verified: live at varunmoka7.github.io/amy-photography, built from main/root, HTTPS enforced
4. [ ] Custom domain: **amyteng.com** (purchased by Amy). CNAME in Pages settings; DNS at registrar — A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; `www` CNAME → `varunmoka7.github.io`; enforce HTTPS
5. [ ] SEO: meta description per section, Open Graph tags, favicon
6. [ ] Later: Instagram feed section, client gallery links, testimonial photos
7. [ ] Later (optional): booking form backend if email-only becomes insufficient

## Guardrails

- Ask before deleting files, restructuring folders, or changing the design system
- Never commit real client photos without confirming usage rights
- Placeholder contact details (`hello@amyphotography.com`, `@amy.photography`) are not real — confirm actual details before publishing them