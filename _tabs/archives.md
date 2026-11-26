---
layout: page
title: Archives
icon: fas fa-archive
order: 3
permalink: /archives/
shell: false
---

<div class="container">
  <header class="page-head">
    <p class="eyebrow">ALL PROJECTS</p>
    <h1>Archives</h1>
    <p>Every documented project and technical write-up, grouped by year.</p>
  </header>

  {% assign current_year = '' %}
  {% for post in site.posts %}
    {% assign year = post.date | date: '%Y' %}
    {% if year != current_year %}
      {% if current_year != empty %}
        </div>
      {% endif %}
      <h2 class="section-title">{{ year }}</h2>
      <div class="grid grid-2">
      {% assign current_year = year %}
    {% endif %}
    {% include card.html item=post %}
  {% endfor %}
  {% if current_year != empty %}
    </div>
  {% endif %}
</div>
