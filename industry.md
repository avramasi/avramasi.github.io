---
layout: page
title: Industry Applications
eyebrow: Industry
description: >-
  How phase-field, CALPHAD, and scientific ML simulation translate into
  industrial impact — across batteries, steel, additive manufacturing,
  hydrogen, and AI-accelerated materials engineering.
---

<p class="reveal">Each application area below follows the same structure: the industrial <strong>problem</strong>, the simulation <strong>method</strong> I bring to it, and the resulting <strong>industrial benefit</strong>. Details marked PLACEHOLDER should be replaced with your own case studies, metrics, or collaborations.</p>

{% for ind in site.data.industry %}
<div class="industry-block reveal" id="{{ ind.slug }}">
  <div class="industry-head">
    <div class="card-icon">{{ forloop.index }}</div>
    <div>
      <h2 style="margin-bottom:.2em;">{{ ind.title }}</h2>
      <p style="margin:0; font-size:.95rem;">{{ ind.teaser }}</p>
    </div>
  </div>
  <div class="industry-steps">
    <div class="industry-step">
      <span class="step-label">Problem</span>
      <p style="margin:0; font-size:.92rem;">{{ ind.problem }}</p>
    </div>
    <div class="industry-step">
      <span class="step-label">Method</span>
      <p style="margin:0; font-size:.92rem;">{{ ind.method }}</p>
    </div>
    <div class="industry-step">
      <span class="step-label">Industrial benefit</span>
      <p style="margin:0; font-size:.92rem;">{{ ind.benefit }}</p>
    </div>
  </div>
</div>
{% endfor %}

<div class="section-tight reveal">
  <p class="mono" style="font-size:.8rem; color:var(--text-faint);">
    Edit these sections in <code>_data/industry.yml</code> — add real project outcomes, client names (with permission), and metrics as they become available.
  </p>
</div>
