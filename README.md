# Amy Photography — Website

Portraits & family photography portfolio. Pure HTML/CSS/JS — no build step, no dependencies. Booking is email-only for now.

## Structure

```
index.html        — the whole site (single page)
css/style.css     — all styling
js/main.js        — nav, gallery lightbox
images/           — placeholder SVGs (swap with real photos)
```

## Open in Cursor

File → Open Folder → select this folder. Preview by opening `index.html` in a browser, or run a local server from Cursor's terminal:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Swap in real content

1. **Photos**: drop JPGs into `images/` (e.g. `hero.jpg`, `amy.jpg`, `portfolio-1.jpg`…) and update the `src` paths in `index.html`. Export at ~1600px wide max, JPG quality ~80, for fast loading.
2. **Text**: edit bio, prices, testimonials, and contact details directly in `index.html`.
3. **Contact email**: replace the placeholder `hello@amyphotography.com` mailto links with Amy's real address.

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial site"
# create a public repo on github.com first, then:
git remote add origin https://github.com/YOUR_USERNAME/amy-photography.git
git branch -M main
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save.**
Site goes live at `https://YOUR_USERNAME.github.io/amy-photography/` within a couple of minutes.

## Connect the custom domain

1. GitHub repo → **Settings → Pages → Custom domain** → enter your domain → Save (this creates a `CNAME` file in the repo).
2. At your domain registrar, add DNS records:
   - **Apex domain** (`amyphotography.com`): four A records →
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **www** subdomain: CNAME record → `YOUR_USERNAME.github.io`
3. Back in GitHub Pages settings, tick **Enforce HTTPS** once the certificate is issued (can take up to an hour).

## Updating the site later

Edit files → commit → push. GitHub Pages redeploys automatically.
