# J. Bell Price website

This is a static HTML/CSS/JavaScript site. The shared design system lives in `css/styles.css`; the main content data lives in `data/content.json` and `data/books.json`.

## Local preview

Serve this directory with any static file server (rather than opening the HTML files directly), so the fetch calls for JSON work.

## Updating the archive

Add or edit work entries in `data/content.json`. The homepage, Works index, theme pages, and individual work templates use that data. Book spines and related links are controlled by `data/books.json`.

## Deployment

Back up the current deployed site first. Upload the contents of this directory to the existing site root. The bundle does not publish itself to the live domain.
