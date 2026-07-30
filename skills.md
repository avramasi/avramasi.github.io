---
layout: page
title: Skills
eyebrow: Capabilities
description: >-
  Organised by what I can do, not by which language I did it in.
---

<div class="grid grid-3">
{% for cat in site.data.skills %}
<div class="card skill-card reveal">
  <div class="card-icon">{{ forloop.index }}</div>
  <h3>{{ cat.category }}</h3>
  <ul>
    {% for item in cat.items %}<li>{{ item }}</li>{% endfor %}
  </ul>
</div>
{% endfor %}
</div>
