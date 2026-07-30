---
layout: page
title: Testimonials
eyebrow: Recommendations
description: >-
  What supervisors and collaborators say — with their permission.
---

<div class="grid grid-3">
{% for t in site.data.testimonials %}
<div class="card testimonial-card reveal">
  <p class="testimonial-quote">&ldquo;{{ t.quote }}&rdquo;</p>
  <div class="testimonial-person">
    <div class="testimonial-avatar">PH</div>
    <div>
      <div class="testimonial-name">{{ t.name }}</div>
      <div class="testimonial-role">{{ t.role }}</div>
    </div>
  </div>
</div>
{% endfor %}
</div>

<div class="section-tight reveal">
  <p class="mono" style="font-size:.8rem; color:var(--text-faint);">
    Edit <code>_data/testimonials.yml</code> with real quotes — always get explicit permission before
    publishing someone's name and words. Add headshots to <code>assets/img/misc/</code>.
  </p>
</div>
