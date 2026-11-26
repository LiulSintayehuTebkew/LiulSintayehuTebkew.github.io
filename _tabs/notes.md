---
layout: page
title: Notes
order: 4
permalink: /notes/
shell: false
---

<div class="container">
  <header class="page-head">
    <p class="eyebrow">FIELD NOTES</p>
    <h1>Notes</h1>
    <p>Long-form thinking on cybersecurity, networking, Salesforce, and data analysis — written like articles, organized like a notebook.</p>
  </header>

  {% assign notes = site.notes | reverse %}

  {% if notes.size > 0 %}
    <div class="notes-list">
      {% for note in notes %}
        {% assign note_category = site.portfolio_categories | where: 'slug', note.category | first %}
        {% assign words = note.content | number_of_words %}
        {% assign minutes = words | divided_by: 220 | plus: 1 %}

        <article class="note-card">
          <p class="card-meta">
            <time datetime="{{ note.date | date_to_xmlschema }}">{{ note.date | date: '%B %d, %Y' }}</time>
            {% if note.category %}<span class="chip chip-accent">{{ note_category.name | default: note.category | escape }}</span>{% endif %}
            <span>{{ minutes }} min read</span>
          </p>
          <h2><a href="{{ note.url | relative_url }}">{{ note.title | escape }}</a></h2>
          {% if note.description %}
            <p>{{ note.description | escape }}</p>
          {% else %}
            <p>{{ note.excerpt | strip_html | truncate: 260 | escape }}</p>
          {% endif %}
          <div class="note-card-foot">
            <ul class="chip-list">
              {% for tag in note.tags %}
                <li class="chip">#{{ tag | escape }}</li>
              {% endfor %}
            </ul>
            <a class="card-link" href="{{ note.url | relative_url }}">Read note →</a>
          </div>
        </article>
      {% endfor %}
    </div>
  {% else %}
    <div class="empty-state">
      <h2>Notes are coming soon</h2>
      <p>Published notes will appear here as clean, long-form articles. Add a Markdown file to the <code>_notes</code> collection and it will show up automatically.</p>
    </div>
  {% endif %}
</div>
