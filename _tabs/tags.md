---
layout: page
title: Tags
icon: fas fa-tags
order: 2
permalink: /tags/
shell: false
---

<div class="container">
  <header class="page-head">
    <p class="eyebrow">TOPIC INDEX</p>
    <h1>Tags</h1>
    <p>Fine-grained topics across the portfolio. Use categories for broader security domains.</p>
  </header>

  {% assign all_tags = '' | split: '' %}
  {% for post in site.posts %}
    {% for tag in post.tags %}
      {% unless all_tags contains tag %}
        {% assign all_tags = all_tags | push: tag %}
      {% endunless %}
    {% endfor %}
  {% endfor %}
  {% assign sorted_tags = all_tags | sort %}

  <div class="grid grid-3">
    {% for tag in sorted_tags %}
      {% assign count = 0 %}
      {% for post in site.posts %}
        {% if post.tags contains tag %}
          {% assign count = count | plus: 1 %}
        {% endif %}
      {% endfor %}
      <div class="card" id="{{ tag | slugify }}">
        <h3><a href="#{{ tag | slugify }}">#{{ tag | escape }}</a></h3>
        <p>{{ count }} item{% unless count == 1 %}s{% endunless %}</p>
      </div>
    {% endfor %}
  </div>
</div>
