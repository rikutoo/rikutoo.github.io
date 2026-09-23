# Academic research website

A responsive, single-page academic website for GitHub Pages. No dependencies or build step are required.

## Edit the content

All content lives in `index.html`. Bracketed text and “Your Name” are placeholders for your details.

- Update your name, position, university, bio, research interests, and contact information.
- Your emails are featured directly under your name and affiliation, and repeated in Contact. Keep the addresses and their `mailto:` links in sync in both places.
- The CV link beside your emails opens `files/cv.pdf`. Edit `cv/CV_RO.tex` and run `make cv` to rebuild it; see `cv/README.md` for details. The source preserves the supplied CV's July 16, 2026 snapshot.
- Copy a research `<article>` for each paper and give its heading a unique `id` (also update `aria-labelledby`).
- For work in progress, copy a complete `<li>…</li>` inside `.project-list`. Each item contains one article, with coauthors below its title. Spacing and dividers are applied automatically between items; keep publications in their separate research group.
- Add paper links when drafts are available. Put local PDFs in a `files/` directory.
- LinkedIn and X links appear beside Contact in the bio; edit their `href` values to update the destinations.
- Remove research groups you do not need, or add a publications group using the same structure.
- Update the page title and description in `<head>` when changing your profile.
- The portrait beside your introduction uses `files/rikuto-onishi.jpg`, a smaller web copy of `files/Rikuto_007.jpg`. To replace it, update the web copy and its descriptive alt text in `index.html`. The layout stacks the photo below your name and contact links on mobile.

`styles.css` contains the responsive layout and Solarized-inspired palettes. `script.js` handles the theme toggle, local preference storage, and active section navigation. Section links and abstracts work without JavaScript. Light mode is the default; a chosen theme is remembered on the visitor's device.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open <http://127.0.0.1:8000>.

## Publish

Push the finished files to the branch configured for GitHub Pages in the repository's Settings → Pages. The website is served directly from this repository; no package installation is needed.
