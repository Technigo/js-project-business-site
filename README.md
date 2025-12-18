# Walantu
African portal for handymen and women.

## What changed (recent updates)

### Navigation + mobile hamburger menu
- **Replaced `<a href="#">` hamburger controls with `<button>`** so opening/closing the menu does not jump the page.
- **Sidebar open/close is now class-based** (`.is-open`) instead of using inline `style.display`.
- **Improved close behaviors**:
  - Press **Escape** to close
  - Click/tap **outside** the sidebar to close
  - Auto-close when resizing back to desktop width
- **Accessibility improvements**:
  - Sidebar uses `aria-hidden`
  - Hamburger button uses `aria-controls` + `aria-expanded`

### Layout + styling
- **Introduced CSS variables** for consistent theme + spacing (`--page-max`, `--brand`, `--page-bg`, `--section-gap`, etc.).
- **Improved typography** (system font stack, readable line-height, consistent heading styles).
- **Full-bleed hero/header**:
  - Hero background image spans full viewport width
  - Subtle **fade** from hero into page background
  - Reduced spacing between stacked hero `<h1>` headings
  - Hero text shifted upward inside the header for better composition
- **Full-bleed nav bar**:
  - Nav background spans full viewport width
  - Nav contents remain centered to `--page-max`
- **Content symmetry + spacing**:
  - Intro + articles styled as consistent “card” sections
  - Reduced vertical gaps between sections and tightened the header → main spacing
- **Articles now display in 3 columns** on desktop with responsive breakpoints (2 columns → 1 column on smaller screens).
- **Images fill their containers** (100% width; consistent cropping via `object-fit` + `aspect-ratio` where used).

### Form improvements
- **Form section styling matches the rest of the site** (card background/border/radius/spacing).
- **Polished inputs** (consistent borders, focus ring, better label styling).
- Removed always-on green/red validation borders (keeps UI cleaner).

### HTTPS
- **Updated the demo form endpoint** to use HTTPS:
  - `index.html` form action: `https://httpbin.org/anything`

## Project structure
- **`index.html`**: main page
- **`script.js`**: sidebar (hamburger menu) behaviors
- **`styles/styles.css`**: all site styling (layout, typography, responsive rules)
- **`images/`**: site images and logos

## Running locally
This is a static site. Open `index.html` in a browser, or serve the folder using any static server (recommended for consistent behavior).

## Deploying with HTTPS
This project is static (HTML/CSS/JS). Switching the *site* from **HTTP to HTTPS** is done in your **hosting / domain** settings (SSL/TLS certificate + “force HTTPS” option).

In the codebase, make sure any external URLs use `https://` when available (example: the demo form endpoint in `index.html`).
