# Liul Sintayehu Tebkew — Portfolio

A modern, dependency-free Jekyll portfolio for a cybersecurity graduate student. The site is built with the custom **Sentinel** theme: no service worker, no external CSS/JS/CDNs, and no analytics by default.

## Structure

- `index.html` — landing page with professional focus, categories, and recent work.
- `_tabs/` — About, Projects, Categories, Archives, and Tags pages.
- `_posts/` — project write-ups. Add new posts with `categories` slugs from `portfolio_categories` in `_config.yml`.
- `categories/` — explicit category archive pages.
- `_layouts/` and `_includes/` — the Sentinel theme.
- `assets/css/style.css` and `assets/js/main.js` — all styling and behavior, self-hosted.

## Categories

Categories are defined once in `_config.yml` under `portfolio_categories`. Each entry has a `slug`, display `name`, `icon`, and `description`. To file a post or project under a category, add the slug to its `categories` list:

```yaml
categories: [cybersecurity, security-operations, threat-detection]
```

The Projects page uses the same slugs for its category filters.

## Security choices

- No service worker registration; `sw.min.js` is a one-time cleanup worker only.
- Strict per-page Content Security Policy allowing only same-origin assets.
- No external fonts, icons, analytics, comment systems, or script CDNs.
- All external links use `rel="noopener noreferrer"`.

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Deployments are handled by GitHub Actions on pushes to `main`.
