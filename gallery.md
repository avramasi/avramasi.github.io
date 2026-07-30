---
layout: page
title: Research Gallery
eyebrow: Gallery
description: >-
  Visual outputs from simulations — spinodal decomposition, grain growth,
  dendrites, PFDD, PFC, and elastic fields.
---

<div class="grid grid-3">
{% for g in site.data.gallery %}
<div class="gallery-item reveal">
  <div class="placeholder">
    <div class="placeholder-tag">Placeholder</div>
    {{ g.title }}<br>simulation output
  </div>
  <h3>{{ g.title }}</h3>
  <p>{{ g.description }}</p>
</div>
{% endfor %}
</div>

<div class="section-tight reveal">
  <p class="mono" style="font-size:.8rem; color:var(--text-faint);">
    Drop your simulation renders / GIFs into <code>assets/img/gallery/</code> using the filenames in
    <code>_data/gallery.yml</code>, then swap each <code>.placeholder</code> block for an <code>&lt;img&gt;</code> tag.
  </p>
</div>
