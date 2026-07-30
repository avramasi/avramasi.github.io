---
layout: page
title: Timeline
eyebrow: Journey
description: >-
  Education, industry, PhD, postdocs, and what's next.
---

<div class="timeline">
{% for t in site.data.timeline %}
<div class="timeline-item reveal" data-phase="{{ t.phase }}">
  <div class="timeline-year">{{ t.year }}</div>
  <h3>{{ t.title }}</h3>
  <div class="timeline-place">{{ t.place }}</div>
  <p>{{ t.description }}</p>
</div>
{% endfor %}
</div>
