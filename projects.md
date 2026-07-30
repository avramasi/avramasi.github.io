---
layout: page
title: Featured Projects
eyebrow: Projects
description: >-
  Simulation codes and research software spanning phase-field modelling,
  dislocation dynamics, and CALPHAD-coupled microstructure evolution.
---

<div class="grid grid-2">
{% for p in site.data.projects %}
<div class="card reveal">
  <div class="placeholder" style="margin-bottom:1.2rem; aspect-ratio:16/10;">
    <div class="placeholder-tag">Placeholder</div>
    Animation / simulation image for<br>"{{ p.title }}"
  </div>
  <span class="status-pill">{{ p.status }}</span>
  <h3 style="margin-top:.6em;">{{ p.title }}</h3>
  <p style="font-size:.92rem;">{{ p.summary }}</p>
  <div class="tag-row" style="margin-bottom:1.1rem;">
    {% for t in p.technologies %}<span class="tag">{{ t }}</span>{% endfor %}
  </div>
  <div class="cta-row" style="margin-top:0;">
    {% if p.github and p.github != '#' %}<a class="btn btn-sm btn-outline" href="{{ p.github }}">GitHub</a>{% else %}<a class="btn btn-sm btn-outline" href="#" aria-disabled="true">GitHub — TBD</a>{% endif %}
    {% if p.docs and p.docs != '#' %}<a class="btn btn-sm btn-outline" href="{{ p.docs }}">Documentation</a>{% else %}<a class="btn btn-sm btn-outline" href="#">Docs — TBD</a>{% endif %}
    {% if p.demo and p.demo != '' %}<a class="btn btn-sm btn-outline" href="{{ p.demo | relative_url }}">Demo</a>{% endif %}
  </div>
</div>
{% endfor %}
</div>

<div class="section-tight reveal">
  <p class="mono" style="font-size:.8rem; color:var(--text-faint);">
    Add or edit projects in <code>_data/projects.yml</code>. Drop animation GIFs / simulation renders into
    <code>assets/img/projects/</code> using the filenames referenced there, and the placeholder blocks above
    will be replaced automatically once you swap in real <code>&lt;img&gt;</code> tags.
  </p>
</div>
