# Cursor Kickstart Prompt

Paste everything below into Cursor's AI chat (Cmd+L) to brief it on this project.

---

You are working on **Amy Photography**, a live portfolio website for a portraits & family photographer. The project is complete as a v1 and already deployed via GitHub Pages from this repo (`varunmoka7/amy-photography`, branch `main`, root).

## Stack & structure
- Pure static HTML/CSS/JS — no frameworks, no build step. Keep it that way.
- `index.html` — single-page site: nav, hero, portfolio gallery, about, services/pricing cards, testimonials, contact (email), footer, lightbox.
- `css/style.css` — all styling. Design system uses CSS variables in `:root`: warm cream/sand palette, terracotta accent, Cormorant Garamond for headings, Jost for body. Respect this system for any new styles.
- `js/main.js` — mobile nav toggle, gallery lightbox.
- `images/` — currently SVG placeholders, to be replaced with real JPGs.
- Booking is email-only via `mailto:` links — no Formspree or form backend.

## Conventions
- Mobile-responsive via the existing media queries (900px, 640px breakpoints).
- Images: lazy-loaded, ~1600px max width, JPG quality ~80.
- Accessible: keep alt text, aria attributes, and semantic HTML intact.
- Deploy = commit + push to `main`; GitHub Pages redeploys automatically.

## Pending work (in priority order)
1. Replace placeholder SVGs in `images/` with Amy's real photos (update `src` paths in `index.html`).
2. Replace placeholder text: bio, prices, testimonials, Instagram handle. (Contact email is real: `amyteng_@hotmail.com`.)
3. Custom domain: add CNAME via GitHub Pages settings + DNS at registrar (A records 185.199.108.153 / .109 / .110 / .111, www CNAME → varunmoka7.github.io).
4. Nice-to-haves later: SEO meta/OG tags, favicon, image optimization, Instagram link-out section.

Do not introduce build tools, npm, or frameworks without asking. Confirm before restructuring files.

---
