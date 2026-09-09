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
Pretendard Variable v1.3.9 is loaded from jsDelivr with dynamic subsets and font-display: swap. An internet connection is needed for the web font; if unavailable, the site uses installed Korean-capable system fonts (Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic) and other system fallbacks.

## Korean and English typography
- Body text, links, and headings share Pretendard for consistent Hangul and Latin styling.
- The baby name and quotation use a lighter, upright display treatment. Heading spacing and line height accommodate Hangul; Korean words stay together where possible, with emergency wrapping for unusually long text.
- Edit the existing English placeholders freely. For mostly Korean content, change `<html lang="en">` to `<html lang="ko">`. Tag passages in the other language, for example `<p lang="en">A tiny year.</p>`.
- Example heading: `<h1><span class="display-name">김하늘</span><br>첫 번째 생일</h1>`.
- Adjust `--font-text` in `styles.css` to change the typeface. To use only system fonts, remove the two jsDelivr links from the HTML head and remove Pretendard from the font stack.
- Font source and license information: https://github.com/orioncactus/pretendard (SIL Open Font License 1.1).
- No build step is needed; all site files and image paths remain GitHub Pages-ready.
