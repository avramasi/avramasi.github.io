---
layout: page
title: Software
eyebrow: Software
description: >-
  Research codes with documentation, tutorials, and benchmarks — built
  for reproducibility, not just publication figures.
---

<div class="grid grid-2">
{% for s in site.data.software %}
<div class="card software-card reveal">
  <span class="status-pill">{{ s.language }}</span>
  <h3 style="margin-top:.6em;">{{ s.name }}</h3>
  <p style="font-size:.92rem;">{{ s.tagline }}</p>
  <div class="software-links">
    {% if s.github and s.github != '#' %}<a class="btn btn-sm btn-outline" href="{{ s.github }}">GitHub</a>{% endif %}
    {% if s.docs and s.docs != '#' %}<a class="btn btn-sm btn-outline" href="{{ s.docs }}">Documentation</a>{% endif %}
    {% if s.tutorials and s.tutorials != '#' %}<a class="btn btn-sm btn-outline" href="{{ s.tutorials }}">Tutorials</a>{% endif %}
    {% if s.benchmarks and s.benchmarks != '#' %}<a class="btn btn-sm btn-outline" href="{{ s.benchmarks }}">Benchmarks</a>{% endif %}
  </div>
</div>
{% endfor %}
</div>

<div class="section-tight reveal">
  <p class="mono" style="font-size:.8rem; color:var(--text-faint);">
    Add packages in <code>_data/software.yml</code>. Consider linking each package's own GitHub README /
    ReadTheDocs / GitHub Pages benchmark page rather than duplicating that content here.
  </p>
</div>
