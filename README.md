# arjunvarmar.github.io — redesign

A from-scratch Jekyll site (kept on the conventional Jekyll + GitHub Pages
architecture: `_config.yml`, `_layouts`, `_includes`, `_data`, `_posts`,
`assets`) replacing the old `academic-jekyll-theme` build.

No Ruby gems beyond what `github-pages` already whitelists were used, so
this should build on GitHub Pages exactly as pushed — no custom plugins,
no build step beyond Jekyll's own Sass processing.

---

## 1. How to deploy this on your existing repo

Your current site lives at `arjunvarmar/arjunvarmar.github.io` on the
`gh-pages` branch (GitHub Pages serves whichever branch is configured in
**Settings → Pages**).

**Recommended: do this on a new branch first, then merge.**

```bash
git clone https://github.com/arjunvarmar/arjunvarmar.github.io.git
cd arjunvarmar.github.io
git checkout -b site-redesign

# remove the old academic-theme files (back them up first if you want
# to keep any content, e.g. old blog posts, people.md, courses.md)
git rm -r _includes _layouts _sass _data _posts assets vendor \
  academic.gemspec CHANGELOG.md blog.md courses.md cv.md gallery.md \
  index.md people.md projects.md publications.md 2>/dev/null

# copy in every file from this package (unzip it into the repo root)
cp -r /path/to/unzipped/site/. .

git add -A
git commit -m "Redesign: new IA, dark/light mode, glassmorphism, interactive demos"
git push origin site-redesign
```

Open a PR (or just merge locally) into `gh-pages` once you're happy with
a local preview (step 2) or a GitHub Pages preview deploy.

If your repo doesn't already have a `.bundle/`, `vendor/bundle` from the
old theme — good, this package doesn't need them; `github-pages` gem
resolves everything from `Gemfile`.

## 2. Preview locally before pushing

You need Ruby + Bundler installed (see https://jekyllrb.com/docs/installation/
for your OS).

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

I was not able to run a live Jekyll build in the environment I built this
in, so **please do this local build before pushing** — it's the fastest
way to catch any remaining Liquid/YAML typo. If `bundle exec jekyll serve`
throws an error, the error message will point at the exact file/line;
most likely causes would be a YAML indentation slip in one of the
`_data/*.yml` files if you've started editing them.

Alternatively, just push to a branch and check the **Actions** tab (or
**Settings → Pages** build status) on GitHub — Pages will build it for
you and show the same errors.

## 3. What you need to fill in

Everything marked `PLACEHOLDER` needs your real content. The fastest way
to find all of them:

```bash
grep -rn "PLACEHOLDER" --include="*.md" --include="*.yml" .
```

Priority order:

1. **`_config.yml`** — your real email, Google Scholar URL, ORCID URL, CV filename.
2. **`_data/metrics.yml`** — real publication/software/years/CPU-hour counts.
3. **`assets/cv/arjun-varma-r-cv.pdf`** — upload your actual CV PDF (filename must match `_config.yml`).
4. **`_data/publications.yml`** — swap in your 6–8 real featured papers, DOIs, and cover images (`assets/img/publications/`).
5. **`_data/projects.yml`** — real project summaries, GitHub links, and images/GIFs (`assets/img/projects/`).
6. **`_data/gallery.yml`** — simulation renders for spinodal decomposition, grain growth, dendrites, PFDD, PFC, elastic fields (`assets/img/gallery/`).
7. **`_data/industry.yml`** — replace generic problem/method/benefit text with real case studies once you have them.
8. **`_data/testimonials.yml`** — real quotes, **with explicit permission** from each person, plus headshots.
9. **`contact.md`** — the contact form currently has `action="#"` (does nothing). Wire it to [Formspree](https://formspree.io) or [Static Forms](https://www.staticforms.xyz/) (both free, no backend needed) by replacing that attribute with your form endpoint.
10. **`for-recruiters.md`** — relocation preferences and availability.

Everywhere you see a dashed placeholder box (`.placeholder` blocks) in
image spots — those are intentional so the layout looks right before you
have real images. Once you have an image, replace the block, e.g.:

```html
<!-- before -->
<div class="placeholder">
  <div class="placeholder-tag">Placeholder</div>
  Cover / figure image
</div>

<!-- after -->
<img src="{{ '/assets/img/publications/pub-01.png' | relative_url }}" alt="...">
```

## 4. Structure reference

```
_config.yml          site settings, nav, author info
_data/                content that drives the templates (edit these, not the HTML)
  metrics.yml          homepage stats strip
  research_interests.yml
  skills.yml            skills-by-capability
  timeline.yml           interactive timeline entries
  projects.yml            featured project cards
  publications.yml        featured papers
  industry.yml             problem/method/benefit per sector
  gallery.yml               research gallery grid
  testimonials.yml
  software.yml
_includes/            reusable HTML partials (nav, footer, head, divider)
_layouts/             page templates
_sass/                 design tokens + component styles (imported by assets/css/main.scss)
assets/js/
  simulations.js         diffusion / Cahn-Hilliard / Allen-Cahn / grain-growth engines
  demos.js                wires those engines to the /demos/ page UI
  hero-canvas.js           homepage background animation
  main.js                   theme toggle, mobile nav, scroll-reveal
_posts/                blog posts (add new ones here, same filename format)
*.md                  top-level pages (index, research, industry, projects, ...)
```

## 5. Design notes

- Dark mode is the default; toggle persists via `localStorage` (this is a
  plain static site, not a Claude Artifact, so `localStorage` is fine
  here).
- The color palette (teal `#49D4C4` / amber `#F0A868`) and the canvas
  simulations are deliberately drawn from your own subject matter —
  phase-field concentration maps — rather than a generic gradient.
- All four `/demos/` simulations run client-side in plain Canvas/JS on
  small grids for responsiveness; they're built for visual intuition,
  not research accuracy. Swap in a real WASM-compiled solver later if
  you want research-grade versions.
- Typography: Fraunces (display) + IBM Plex Sans (body) + IBM Plex Mono
  (data/citations/labels), loaded from Google Fonts.
