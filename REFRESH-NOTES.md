# J. Bell Price — editorial cohesion refresh

This is a design-system refresh of the existing site, intended to preserve the original identity while making the pages feel more related.

## What changed
- Added a shared editorial styling layer to `css/styles.css`: consistent spacing, typography, borders, metadata labels, interaction states, responsive behavior, and reduced-motion support.
- Unified the navigation across pages, including a consistent active-page state and working home link on the wordmark.
- Added a restrained shared colophon to pages using the site navigation.
- Refined homepage section labels to reinforce the archive concept.
- Kept the sage/ivory palette, existing font pairing, archive data, page structure, and tactile bookshelf feature.
- Kept the book spines upright and standardized corners and image treatments.

## Deployment
Upload the contents of this folder to the same location that currently serves the website. Keep a copy of the current deployment so you can roll back if needed. The archive includes the existing content and media assets; no content JSON was intentionally rewritten.

## Notes
This package updates the local code only; it does not publish changes to the live website. External font loading still uses Google Fonts, as in the original.
