# Project Map

## Purpose
Personal website for Mustafa Kaan Güngör about their interests; hosted on GitHub Pages with a custom domain.

## Requirements
Static site; keep the CNAME file intact (CLAUDE.md).

## Components
- index.html: loads css/style.css, a particles.js container (#particles-js), a #mycelium canvas, an SVG grain filter; the page layout (wrapper/panels) is commented out.
- js/main.js: loads particles.js config from assets/particles.json; draws a recursive mycelium-like branching pattern on the canvas via recurseMycelium(x, y, direction, length, depth) starting at (500, 500).
- css/style.css, assets/ (images, fonts: Syne, Eczar, Spectral, textures), CNAME.

## Main Flow
index.html -> particles.js (CDN) + js/main.js -> particles-js div (assets/particles.json) and #mycelium canvas (recursive draw). Layout panels: commented out / unknown.

## Data and Trust Boundaries
No storage or backend observed. External: jsdelivr CDN for particles.js.

## Build and Deployment
No build step observed; static files deployed via GitHub Pages (per CLAUDE.md).

## Unknowns
Final page layout/content, how the mycelium will be animated or styled, whether further sections/pages are planned.
