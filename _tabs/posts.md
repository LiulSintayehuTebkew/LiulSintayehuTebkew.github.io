---
layout: page
title: Posts
order: 4
permalink: /posts/
shell: false
---

<div class="container">
  <header class="page-head">
    <p class="eyebrow">ARTICLES &amp; FIELD NOTES</p>
    <h1>Posts</h1>
    <p>Short articles and longer write-ups about what I'm learning, building, and investigating. Open any card to read the full post.</p>
  </header>

  {% assign articles = site.notes | reverse %}

  {% if articles.size > 0 %}
    <div class="notes-list">
      {% for article in articles %}
        {% assign article_category = site.portfolio_categories | where: 'slug', article.category | first %}
        {% assign words = article.content | number_of_words %}
        {% assign minutes = words | divided_by: 220 | plus: 1 %}

        <article class="note-card">
          <p class="card-meta">
            <time datetime="{{ article.date | date_to_xmlschema }}">{{ article.date | date: '%B %d, %Y' }}</time>
            {% if article.category %}<span class="chip chip-accent">{{ article_category.name | default: article.category | escape }}</span>{% endif %}
            <span>{{ minutes }} min read</span>
          </p>
          <h2><a href="{{ article.url | relative_url }}">{{ article.title | escape }}</a></h2>
          {% if article.description %}
            <p>{{ article.description | escape }}</p>
          {% else %}
            <p>{{ article.excerpt | strip_html | truncate: 260 | escape }}</p>
          {% endif %}
          <div class="note-card-foot">
            <ul class="chip-list">
              {% for tag in article.tags %}
                <li class="chip">#{{ tag | escape }}</li>
              {% endfor %}
            </ul>
            <a class="card-link" href="{{ article.url | relative_url }}">Read post →</a>
          </div>
        </article>
      {% endfor %}
    </div>
  {% else %}
    <div class="empty-state">
      <h2>Posts are coming soon</h2>
      <p>Published posts will appear here as cards that open into the full article. Add a Markdown file to the <code>_notes</code> collection and it will show up automatically.</p>
    </div>
  {% endif %}
</div>
