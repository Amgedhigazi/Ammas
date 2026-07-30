# Browniz — Project Notes

## Live URLs
- **Vercel (primary):** https://browniz.vercel.app
- **GitHub Pages (secondary, CDN lag after rename):** https://amgedhigazi.github.io/Browniz/
- **GitHub repo:** https://github.com/Amgedhigazi/Browniz
- **Local path:** `F:\Ammas`

---

## Stack
Static HTML — 5 pages, no build tool, no framework.

| File | Page |
|---|---|
| `index.html` | Home |
| `Menu.html` | Menu |
| `Service and Event.html` | Services & Events |
| `Team.html` | Team |
| `Contact and reservaion.html` | Contact & Reservation |

**Single-file JS/CSS pattern:**
- `js/site.js` — injects header (logo + nav) and footer into every page dynamically
- `Css/shared.css` — single source of truth for nav, typography, footer, lightbox
- Page-specific CSS: `styleweb.css`, `Menustyleweb.css`, `Servicestyleweb.css`, `Teamstyleweb.css`

---

## Typography System
| Font | Role |
|---|---|
| MonteCarlo | h1, hero headings, brand name in nav |
| Aladdin | h2, h4, section headings, card titles, "Coffee House" nav sub |
| Playfair Display italic | Hero paragraph lines, specialty descriptions |
| Inter | Body text, nav labels |

Google Fonts loaded on every page:
```
family=Aladdin&family=MonteCarlo&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@400;500;600
```

---

## Design Decisions
- **Nav:** Stacked icon + label pills, all in `shared.css` — page CSS files have NO nav rules
- **Homepage hero:** Dark left fade + animated MonteCarlo h1 + Playfair italic lines appearing one by one
- **Hero background:** `img/TO/Aamassteak.jpg` (2.9MB night photo, CSS: `url('../img/TO/Aamassteak.jpg')`)
- **Combo menu layout:** Side-by-side 70% width (`flex-direction: row` in Menustyleweb.css)
- **Lightbox:** Shared across all pages via shared.css + inline JS per page
- **Footer:** Dynamic via site.js — rich 3-column layout with social links, address, hours

---

## Deployment
### Vercel (recommended)
```
cd F:\Ammas
vercel deploy --prod --yes
```
Deploys immediately, CDN invalidates instantly.

### GitHub Pages
Push to `main` triggers a Pages rebuild automatically (legacy mode, source: `/` on `main`).
⚠️ After the repo was renamed Brownies → Browniz, GitHub Pages CDN was stuck for hours serving old content. Use Vercel as primary.

```
git add -u
git commit -m "message"
git push origin main
```

---

## Known Issues / Gotchas
- **Case sensitivity on Linux servers:** All image files in `img/mz fotos to print/` with uppercase `.JPG` extension must be referenced with uppercase in HTML. Fixed `DSC_4652.JPG` for Chef Muzamel.
- **`img/Brownies logo.png`** — filename kept as-is (with space and old spelling). Both `site.js` and HTML `<link rel="icon">` reference it. Do NOT rename without updating both.
- **`img/DSC05693.JPG`** (18MB) — excluded via `.gitignore`, too large for web use.
- **GitHub Pages workflow:** Repo has `.github/workflows/deploy.yml` but Pages is set to legacy mode. The workflow file is harmless but unused.
- **`Contact and reservaion.html`** — intentional typo in filename; do not rename (nav links in site.js depend on it).

---

## .gitignore
```
*.tif
*.TIF
*.pdf
img/DSC05693.JPG
.vercel
```

---

## Session Work (2026-07-29 / 30)
- Full nav redesign — stacked icon + label, pill active state
- Spelling corrected: Brownies → Browniz sitewide
- Homepage hero: dark background with animated text
- Typography system: MonteCarlo / Aladdin / Playfair Display
- Unique hero copy on every page
- Combo menu: side-by-side row layout
- Cleaned 31 unused/old files from repo
- Fixed GitHub repo rename (Brownies → Browniz via API)
- Deployed to Vercel (primary live URL)
- Fixed Chef Muzamel image case sensitivity (.jpg → .JPG)
