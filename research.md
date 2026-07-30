---
layout: page
title: Research Vision
eyebrow: Research
description: >-
  Long-term goals connecting physics-based simulation, digital twins,
  ICME, multiscale modelling, scientific ML, and autonomous materials
  discovery.
---

## Long-term goals

<p class="reveal">PLACEHOLDER — replace this paragraph with your own 3–5 sentence statement of where your research programme is heading over the next 5–10 years. The section headers below give you a scaffold covering the themes you listed (digital twins, ICME, multiscale modelling, scientific ML, autonomous discovery) — write each as a short vision statement plus 2–3 concrete near-term steps.</p>

<div class="grid grid-2" style="margin-top:2rem;">

<div class="card reveal">
  <div class="card-icon">DT</div>
  <h3>Digital Twins of Materials Processing</h3>
  <p>PLACEHOLDER — describe your vision for coupling phase-field / CALPHAD simulation with in-situ process data to build predictive digital twins of heat treatment, solidification, or additive manufacturing.</p>
</div>

<div class="card reveal">
  <div class="card-icon">IC</div>
  <h3>Integrated Computational Materials Engineering (ICME)</h3>
  <p>PLACEHOLDER — describe how your microstructure-scale models plug into the broader ICME chain, from ab-initio inputs to component-scale performance prediction.</p>
</div>

<div class="card reveal">
  <div class="card-icon">MS</div>
  <h3>Multiscale Modelling</h3>
  <p>PLACEHOLDER — describe your approach to bridging DFT / atomistic, phase-field, and continuum scales, and the handoffs (e.g. GSFE surfaces into PFDD, CALPHAD free energies into phase-field).</p>
</div>

<div class="card reveal">
  <div class="card-icon">ML</div>
  <h3>Scientific Machine Learning</h3>
  <p>PLACEHOLDER — describe where ML surrogates, physics-informed models, or data-driven closures fit into your simulation pipeline, and what speed-up or new capability they unlock.</p>
</div>

<div class="card reveal">
  <div class="card-icon">AD</div>
  <h3>Autonomous Materials Discovery</h3>
  <p>PLACEHOLDER — describe your vision for closed-loop, ML-guided exploration of alloy/process design spaces, combining simulation, active learning, and (eventually) experimental feedback.</p>
</div>

<div class="card reveal">
  <div class="card-icon">→</div>
  <h3>What's next</h3>
  <p>PLACEHOLDER — one paragraph on the specific direction you want to pursue next (independent group, industry lab, specific grant/collaboration).</p>
</div>

</div>

---

## Research interests today

<div class="grid grid-4" style="margin-top:1.5rem;">
{% for r in site.data.research_interests %}
<div class="card reveal">
  <h3 style="font-size:1.05rem;">{{ r.title }}</h3>
  <p style="font-size:.88rem;">{{ r.summary }}</p>
</div>
{% endfor %}
</div>
