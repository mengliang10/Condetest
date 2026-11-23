# Intriq Journal

A slow-travel editorial concept, designed for the screen and composed for the page. Two pages
(an issue cover and a long-read feature), five languages, and a print layout that produces a
two-page A4 magazine PDF.

## View the published website

**Public URL:** https://mengliang10.github.io/Condetest/

This is the GitHub Pages project URL. The site is accessible when GitHub Pages deployment is enabled and the workflow succeeds.

## Pages

| File | What it is |
| --- | --- |
| `index.html` | The issue cover, editor's note and contents |
| `story.html` | The long-read feature, plus the two-page A4 print edition |

## Run it locally

No build step is needed for the website. Serve the folder with any static server:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

The "Download PDF" links point to `magazine.pdf` (and `magazine.<lang>.pdf`). Those files are
generated, so they return 404 locally until you run the PDF build below.

## Build the PDFs

```bash
npm install
npx playwright install chromium
npm run build:pdf
```

This renders `story.html` in print mode for each language and writes `magazine.pdf`,
`magazine.zh-CN.pdf`, `magazine.zh-TW.pdf`, `magazine.ko.pdf` and `magazine.ja.pdf`.
Print-quality photography and the print typeface (Cormorant Garamond) are fetched only when
someone clicks Print / PDF, or when the renderer runs.

## How the code is organised

| File | Role |
| --- | --- |
| `styles.css` | All screen and print styles. The final section holds accessibility and navigation refinements |
| `i18n.js` | Language switcher. English stays in the HTML (good for indexing and as a fallback); other languages are loaded on demand from `lang/` |
| `lang/keys.js` | The ordered list of English source strings |
| `lang/<code>.js` | One dictionary per language, in the same order as `keys.js` |
| `print.js` | Loads print-only assets and opens the print dialog |
| `ui.js` | Reading-progress bar on the feature page |
| `render-pdf.mjs` | Playwright script that produces the PDFs |

### Changing copy or adding a language

Translations are matched to the page by the exact English text. If you edit a sentence in an HTML
file, make the same edit in `lang/keys.js`, then update the matching position in every
`lang/<code>.js` file. To add a language, create `lang/<code>.js` following the existing files and
register it in the `languages` list in `i18n.js` and in the `locales` list in `render-pdf.mjs`.

## Deployment

Pushing to `main` runs `.github/workflows/pages.yml`, which builds the PDFs and publishes only the
site files (not `node_modules`) to GitHub Pages.

## Known trade-offs

- Photography is hotlinked from Unsplash. For production, download the images, store them in the
  repository and update the `src`, `srcset` and `data-print-src` attributes.
- Fonts load from Google Fonts. Self-host them if you need to avoid third-party requests.
- Languages are switched in the browser, so each translated version shares one URL
  (`?lang=` changes what is shown). Search engines index the English source.
