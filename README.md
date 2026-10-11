# Wissenaire.com domain acquisition landing page

A responsive static website built with HTML, CSS and vanilla JavaScript. It is designed to present **Wissenaire.com only** as a domain acquisition opportunity. It does not claim affiliation with IIT Bhubaneswar or festival organizers.

## Files

- `index.html` — page content and metadata
- `styles.css` — responsive layout, typography, colors and components
- `script.js` — mobile navigation, current year, and inquiry email behavior
- `assets/wissenaire-hero.png` — hero banner image

## Preview locally

1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. For best local testing, run a static server from this folder, e.g. `python -m http.server 8000`, then visit `http://localhost:8000`.

## Before publishing — required setup

1. Open `script.js`.
2. Replace `YOUR_EMAIL@example.com` in `OWNER_EMAIL` with the email address where you want acquisition inquiries delivered.
3. Test the inquiry form. It uses the visitor's default email application (`mailto:`); it does not send email directly from the browser.
4. If you want submissions without a visitor email app, connect the form to a form backend or your hosting provider's form service. Do not put email passwords or API secrets in client-side code.
5. Replace any contact wording with your actual preferred contact route, and test every navigation link and button.

## Deploy

Upload `index.html`, `styles.css`, `script.js`, and the complete `assets` folder to any static web host or your domain hosting directory. Keep the relative paths unchanged.

## Design details

- Navy/cyan technology palette
- Responsive desktop and mobile layouts
- Mobile navigation
- Accessible FAQ accordions using native `<details>`
- Inquiry form validation and email draft preparation
- Reduced-motion support
- No external JavaScript libraries

## Legal/accuracy note

The page is an independent domain acquisition listing. It explicitly avoids claiming affiliation with IIT Bhubaneswar or any festival organizer. Domain ownership, trademark rights, and intended use are separate matters; verify applicable rights before marketing or completing a sale.
