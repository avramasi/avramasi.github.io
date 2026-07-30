---
layout: page
title: Publications
eyebrow: Publications
description: >-
  Featured papers, each with a plain-language summary of why the result
  matters. Full publication list available on request or via Google Scholar.
---

<p class="reveal"><a href="{{ site.author.googlescholar }}">View full publication list on Google Scholar →</a></p>

<div class="grid" style="grid-template-columns: 1fr; gap: 2rem; margin-top: 1.5rem;">
{% for pub in site.data.publications %}
<div class="card pub-card reveal">
  <div class="placeholder">
    <div class="placeholder-tag">Placeholder</div>
    Cover / figure image
  </div>
  <div>
    <h3 style="margin-bottom:.2em;">{{ pub.title }}</h3>
    <div class="pub-meta">{{ pub.authors }} — {{ pub.venue }}</div>
    <div class="pub-citation">{{ pub.citation }}</div>
    <p class="pub-impact"><strong>Why it matters:</strong> {{ pub.impact }}</p>
    <div class="pub-links">
      {% if pub.doi and pub.doi != '#' %}<a href="{{ pub.doi }}">DOI</a>{% else %}<span class="mono" style="color:var(--text-faint);">DOI — TBD</span>{% endif %}
      {% if pub.pdf and pub.pdf != '#' %}<a href="{{ pub.pdf }}">PDF</a>{% endif %}
    </div>
  </div>
</div>
{% endfor %}
</div>

<div class="section-tight reveal">
  <p class="mono" style="font-size:.8rem; color:var(--text-faint);">
    Edit <code>_data/publications.yml</code> to add your real titles, authors, venues, DOIs, and cover images
    (place images in <code>assets/img/publications/</code>).
  </p>
</div>
