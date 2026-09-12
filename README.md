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


## Typography

Jua is loaded from Google Fonts for headings, the baby name, month numbers, and key labels. Pretendard is loaded from a pinned CDN release for body text, navigation, buttons, dates, venue details, addresses, and the family message. Korean system sans-serif fallbacks keep text readable if either font service is unavailable. Jua uses its natural 400 weight without synthetic bold or italics.

Regular monthly photos use portrait 3:4 with object-fit: cover. The featured 12-month card retains its wide 16:7 desktop and 4:3 mobile treatment. Glass effects and responsive breakpoints are preserved.

For a primarily Korean invitation, change `<html lang="en">` to `<html lang="ko">`. Upload the contents of this folder to your GitHub Pages publishing root; no build step is required.
