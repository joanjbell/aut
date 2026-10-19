# J. Bell Price — structural refresh v3

## What changed

- Replaced the accumulated, overlapping CSS override layers with one organized `css/styles.css` source of truth.
- Re-established a restrained type scale: the main headline tops out near 58px on desktop, section titles near 38px, and card/work titles around 24–34px.
- Removed oversized section-header grids and the large negative-spacing trick around the bookshelf.
- Standardized the sage/ivory palette, muted blue and mauve accents, labels, navigation, cards, work metadata, filters, and footer spacing.
- Made the selected-work layout repeatable: images may alternate sides, while titles and descriptions maintain a consistent alignment. Text-only works use the same rhythm without an empty image column.
- Gave the theme index an intentional order and a quiet numbered-label treatment. Matched the Works page theme filters to the same order and accepted both `theme` and `themes` data fields.
- Repaired the legacy Instagram page so it follows the current site's visual identity instead of presenting a separate gray/black layout.
- Rebuilt the five book detail pages around one shared renderer using `data/books.json`, replacing repeated “Book Title” placeholders and broken cover-image paths. The one title missing from the current bookshelf data now gets an honest unavailable-state instead of a broken image.
- Changed the empty `data/products.json` file to valid empty JSON so the shop can show its designed empty state instead of a parse error.
- Applied the shared layout to the privacy-policy page while preserving its existing copy. That page still contains generic placeholders and should be reviewed before being published as a live policy.
- Kept the established colors, fonts, selected work content, bookshelf interaction, page templates, and existing images/data. Removed unreferenced duplicate CSS files so there is one stylesheet to maintain.

## Files to maintain

- `css/styles.css` — shared design system
- `index.html` — homepage layout and data-driven theme/works renderers
- `works.html` — recent-work carousel, filters, and archive index
- `data/content.json` — writing and artwork metadata (the currently wired source for the homepage, archive, and theme pages)
- `data/books.json` — bookshelf data

`data/works.json` is an older, currently unreferenced data file. I left it intact rather than deleting user data; the live page templates use `data/content.json`.

## Deployment notes

This bundle has not been published to joanjbell.com. Back up the current live site, preview the package through a static server, and upload the package contents to the existing website root only after reviewing it.
