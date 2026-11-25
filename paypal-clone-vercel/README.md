# PayPal Clone

A front-end recreation of the PayPal mobile app UI (dark theme), built as a
static site — plain HTML, CSS and vanilla JavaScript, no framework and no
backend. The entire interface (home feed, Send, profile, balance pages,
bottom sheets, flows) is rendered dynamically in `js/app.js`.

> This is a personal UI study. It has no real accounts, networking, or payment
> functionality — every screen is mock data.

## Project structure

```
paypal-clone/
├── index.html          # Shell markup + script/style links
├── css/
│   ├── fonts.css       # @font-face for Outfit (points at ../fonts/*.woff2)
│   └── styles.css      # All UI styles
├── js/
│   └── app.js          # The whole app: icons, data, nav, views, flows
├── fonts/
│   └── outfit-400…800.woff2   # Outfit, 5 weights
└── assets/             # Brand/tile images loaded by slot()
    ├── spotlight-*.png
    ├── gadget-*.png
    └── …
```

Originally this was a single ~1.7 MB `index.html` with the fonts and all 40
images inlined as base64. Those have been extracted to real files, so `app.js`
is now ~100 KB of readable code and every image is an editable asset.

## Running it

It's a static site, so any static server works. With Node installed:

```bash
npm start        # serves on http://localhost:5173
```

Or without Node:

```bash
python3 -m http.server 5173
```

## Deploying to Vercel

This is a zero-config static site — there is no build step. `package.json` sits
at the project root and has no `build` script, so Vercel serves the files as-is.

- **Drag & drop:** unzip, then drag the folder onto the Vercel dashboard
  ("Add New… → Project → deploy"), or
- **CLI:** `npm i -g vercel` then run `vercel` from the project root, or
- **Git:** push the folder to a repo and import it on Vercel. Framework preset:
  **Other**. Build command: *none*. Output directory: *leave as root*.

`vercel.json` just sets clean URLs and long cache headers for `/fonts` and
`/assets`. It deploys in seconds and costs nothing on the free tier.

Then open `http://localhost:5173`. The layout is designed for a phone — it's
capped at 430px wide and centered, so use your browser's device/responsive
mode for the intended look.

## Images: the `slot()` system

Tiles and brand marks are drawn by `slot(key)` in `js/app.js`. It loads
`assets/<key>.png`, falling back to `assets/<key>.jpg`, then to a neutral
initials placeholder if neither exists. To swap any image, just drop a file
with the matching name into `assets/` — no code change needed.

## Notes

- Fonts are the [Outfit](https://fonts.google.com/specimen/Outfit) family.
- Code is organized into commented sections in `app.js`
  (`ICONS`, `DATA`, `HELPERS`, `NAV`, `HOME`, `SEND`, …), which makes it
  straightforward to later split into ES modules if desired.
