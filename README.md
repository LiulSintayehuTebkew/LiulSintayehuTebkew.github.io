# Liul Sintayehu Tebkew — Portfolio

A modern, dependency-free Jekyll portfolio for a cybersecurity master's student. The site is built with the custom **Sentinel** theme: no service worker, no external CSS/JS/CDNs, and no analytics by default.

## Structure

- `index.html` — landing page with professional focus, categories, and recent work.
- `_tabs/` — About, Projects, and Posts pages.
- `_posts/` — project write-ups. Add new posts with `categories` slugs from `portfolio_categories` in `_config.yml`.
- `_notes/` — blog posts. Each Markdown file becomes a card on `/posts/` that opens into the full article.
- `projects/` — category pages nested under `/projects/`.
- `_layouts/` and `_includes/` — the Sentinel theme.
- `assets/css/style.css` and `assets/js/main.js` — all styling and behavior, self-hosted.

## Categories

Categories are defined once in `_config.yml` under `portfolio_categories`. Each entry has a `slug`, display `name`, `icon`, and `description`. To file a post or project under a category, add the slug to its `categories` list:

```yaml
categories: [cybersecurity]
```

The three current categories are `cybersecurity`, `salesforce`, and `data-analysis`. Cybersecurity and Salesforce have projects; Data Analysis shows a friendly empty state.

The Projects page groups work by those three categories. The `/projects/` page is only a category index; there is no separate all-projects page.

## Posts

Add a Markdown file to `_notes/` to publish a post. Use this front matter as a template:

```yaml
---
title: "What I learned from investigating a phishing email"
date: 2026-11-26
description: "A short summary that appears on the Posts index."
category: cybersecurity
tags: [Phishing, Email Security, Investigation]
---

Your post starts here. Use headings, lists, and links like a normal article.
```

Posts appear as cards on `/posts/` automatically, newest first. Clicking a card opens the full article at `/posts/<title>/`.

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
