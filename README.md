# One-page version — mosarrufhossain.github.io

An alternate, single-page version of the site. Same person, same design
system (fonts/colors reused from the main site), different shape: one
scrolling page instead of eight, everything reachable from a dropdown
menu, and the full multi-page site's prose cut down to what's needed.

Live section order: **Hero → Research → Publications → CV → Contact.**
Education, Experience, Teaching, Projects, and the long-form research
narrative aren't here — the embedded CV covers all of that in full.

## What's different from the main site

- **One page.** All four sections (`#research`, `#publications`, `#cv`,
  `#contact`) live in `index.html`, navigated by a dropdown menu — the
  same trigger on desktop and mobile, not just a mobile fallback.
- **CV is embedded, not just linked.** The PDF renders inline in an
  `<iframe>` under CV, backed by Download and Open-in-new-tab buttons.
  Inline PDF rendering is inconsistent across browsers — mobile Safari
  in particular often won't render a PDF inside an iframe — so the
  buttons are the reliable path and the embed is a bonus for browsers
  that support it. The `<iframe>` also has a text fallback with a
  download link for browsers that render nothing at all.
- **Far less text.** Publication entries dropped their one-line summaries;
  there's one short paragraph for research interests instead of a
  research statement; no news feed, no teaching philosophy, no project
  write-ups. What's left is reused directly from the main site's copy,
  not rewritten.
- **Same CV file, same path.** `assets/cv/Mosarruf-Hossain-Shawon-CV.pdf`
  is the identical file from the main site — if you swap this in as your
  live site, the CV URL doesn't change.

## Still open (same as the main site)

- `REPLACE_ME` → your Google Scholar profile id (hero + contact)
- `0000-0000-0000-0000` → your real ORCID iD (hero + contact)

Find them: `grep -n "REPLACE_ME\|0000-0000-0000-0000" index.html`

## Deploying this

**Option A — make it the live site.** Delete the multi-page site's files
from the repository root (`about.html`-era files if still present,
`research.html`, `publications.html`, `projects.html`, `experience.html`,
`teaching.html`, `contact.html`, `404.html`, the old `index.html`) and
upload everything in this folder in their place. Same repository, same
`mosarrufhossain.github.io` URL, same GitHub Pages settings — see the
main site's `DEPLOY.md` for the exact upload/publish steps, which apply
here unchanged.

**Option B — keep both.** Put this version's files in a subfolder of the
existing repo (e.g. `/brief/`) so it's reachable at
`mosarrufhossain.github.io/brief/` alongside the full multi-page site at
the root. If you do this, update the `canonical` and `og:url` tags in
`index.html` to include `/brief/`, and swap every `assets/...` reference
if you're not also duplicating the `assets/` folder into that subfolder.

**Option C — preview only.** Open `index.html` directly, or run
`python3 -m http.server 8000` from this folder and visit
`http://localhost:8000`, before deciding whether to publish it at all.

## Analytics

`assets/js/main.js` carries the same `ANALYTICS` config block as the main
site — same setup steps, see the main site's `ANALYTICS.md`. If you
deploy this as a second page under the same domain (Option B), your
existing analytics property already covers it; no separate setup needed.
