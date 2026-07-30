---
layout: page
title: Blog
eyebrow: Blog
description: >-
  Notes on CALPHAD, phase-field modelling, Cahn–Hilliard and Allen–Cahn
  equations, scientific ML, GPU computing, and tutorials.
---

{% for post in site.posts %}
<div class="post-list-item reveal">
  <div class="post-date">{{ post.date | date: "%d %B %Y" }}{% if post.topic %} · {{ post.topic }}{% endif %}</div>
  <h3 style="margin: .3em 0 .4em;"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
  <p>{{ post.excerpt | strip_html | truncatewords: 32 }}</p>
</div>
{% endfor %}

<div class="section-tight reveal">
  <p class="mono" style="font-size:.8rem; color:var(--text-faint);">
    Suggested future topics: CALPHAD in practice, phase-field modelling fundamentals, the Cahn–Hilliard
    equation, scientific ML for materials, GPU computing for field solvers, and step-by-step tutorials.
    Add new posts as markdown files in <code>_posts/</code>.
  </p>
</div>
