# Baby's First Birthday — Liquid Glass GitHub Pages Template

A single-page, mobile-first first birthday invitation template designed for GitHub Pages.

## Edit these first
Open `index.html` and replace:
- `[Baby Name]`
- `[MONTH] [DAY], [YEAR]`
- `[CITY]`
- `[Saturday, Month Day]`
- `[12:00 PM]`
- `[Venue Name]`
- `[Street Address, City]`

Also replace the Google Maps and RSVP links in the two `<a href="...">` buttons.

## Replace photos
Put your photos in the `assets` folder and update these paths in `index.html`:
- `assets/hero-placeholder.svg`
- `assets/photo-1.svg`
- `assets/photo-2.svg`
- `assets/photo-3.svg`
- `assets/photo-4.svg`
- `assets/photo-5.svg`

JPG, PNG, and WebP all work. WebP is recommended for faster loading.

## Publish on GitHub Pages
1. Create a new GitHub repository.
2. Upload all files in this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your main branch and `/ (root)`.
6. Save.

GitHub will provide a public URL after deployment.

## Customize the look
Most colors and sizes are defined at the top of `styles.css` under `:root`.

The liquid-glass effect uses:
- `backdrop-filter: blur(...)`
- translucent white gradients
- white borders
- soft shadows
- ambient blurred background shapes

## Notes
Google Fonts are loaded from the web. If you want a fully self-contained site, switch to system fonts in `styles.css`.
