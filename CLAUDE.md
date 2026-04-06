# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SPARKTEX Pte Ltd company website — a static site hosted on GitHub Pages. Migrated from Wix. The domain `www.sparktexsg.com` is registered through Wix with DNS pointing to GitHub Pages.

## Architecture

Pure static site with no build step, bundler, or framework. All files are served directly by GitHub Pages.

- `index.html` — Homepage (video hero, slideshow, CTA, marquee gallery)
- `about.html` — About Us (mission/vision/approach team quotes)
- `contact.html` — Contact form powered by Formspree (endpoint: `https://formspree.io/f/mzdkyjwn`)
- `privacy.html` — Privacy policy
- `css/style.css` — All styles (single file, no preprocessor)
- `js/main.js` — All interactivity: sticky header, hamburger menu, slideshow carousel, Formspree form submission
- `assets/images/` — Logo, favicon, gallery strip, hero poster
- `assets/videos/hero-bg.mp4` — Homepage hero background video
- `CNAME` — GitHub Pages custom domain config (`www.sparktexsg.com`)

## Deployment

Pushing to `main` automatically deploys to GitHub Pages. No CI/CD pipeline or build commands — GitHub serves the files directly.

## Development

Open `index.html` in a browser to preview locally. No dependencies to install, no build to run.

## Key Details

- **Domain**: `sparktexsg.com` (note the "sg" — not sparktex.com)
- **Fonts**: Pixelify Sans (brand font, loaded from Google Fonts), Poppins (body text)
- **Brand color**: `#05DAFF` (cyan accent)
- **Contact form**: Submissions go through Formspree to `admin@sparktexsg.com`
- Header/nav is shared across all pages but not templated — changes must be applied to all 4 HTML files
- Inner pages (`about.html`, `contact.html`, `privacy.html`) use class `scrolled` on the header by default (solid dark background)
