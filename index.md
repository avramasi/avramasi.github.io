---
layout: default
title: Home
description: >-
  Arjun Varma R. — computational materials scientist specialising in
  phase-field modelling, CALPHAD-coupled simulation, and scientific
  machine learning for microstructure evolution.
---

<section class="hero">
  <canvas id="hero-canvas" class="hero-canvas" aria-hidden="true"></canvas>
  <div class="container">
    <div class="hero-content">
      <div class="hero-role mono">Computational Materials Scientist</div>
      <h1>Simulating how microstructure decides<br>whether a material <span class="accent">survives</span>.</h1>
      <p class="hero-lede">
        I build phase-field, CALPHAD-coupled, and scientific machine-learning models that
        predict how microstructures evolve -- from phase transformations, dislocations, and other defects such as grain boundaries 
         -- so that materials can be designed
        digitally before they're made physically.
      </p>
      <div class="cta-row">
        <a class="btn btn-primary" href="{{ '/projects/' | relative_url }}">Projects</a>
        <a class="btn btn-outline" href="{{ '/publications/' | relative_url }}">Publications</a>
        <a class="btn btn-outline" href="{{ '/cv/' | relative_url }}">CV</a>
        <a class="btn btn-outline" href="{{ '/contact/' | relative_url }}">Contact</a>
      </div>
      <div class="hero-affil">{{ site.author.affiliation }}</div>
    </div>
  </div>
</section>

<div class="container">{% include divider.html %}</div>

<section class="section">
  <div class="container">
    <div class="section-head reveal">
      <div class="eyebrow">Research Interests</div>
      <h2>Where physics-based simulation meets real materials problems</h2>
      <p>Multiscale modelling of microstructure evolution — from atomistic correlations to component-scale processing.</p>
    </div>
    <div class="grid grid-4">
      {% for r in site.data.research_interests %}
      <div class="card reveal">
        <div class="card-icon">{{ forloop.index }}</div>
        <h3>{{ r.title }}</h3>
        <p style="font-size:.9rem;">{{ r.summary }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<div class="container">{% include divider.html %}</div>

<section class="section-tight">
  <div class="container">
    <div class="grid grid-4">
      {% for m in site.data.metrics %}
      <div class="metric reveal">
        <div class="value">{{ m.value }}<span class="suffix">{{ m.suffix }}</span></div>
        <div class="label">{{ m.label }}</div>
      </div>
      {% endfor %}
    </div>
    <p class="mono" style="font-size:.75rem; color:var(--text-faint); margin-top:1rem;">
      PLACEHOLDER — update the numbers above in <code>_data/metrics.yml</code>.
    </p>
  </div>
</section>

<div class="container">{% include divider.html %}</div>

<section class="section">
  <div class="container two-col reveal">
    <div>
      <div class="eyebrow">About</div>
      <h2>From mechanical engineering to computational materials science</h2>
      <p>
        I am a mechanical engineer turned computational materials scientist, currently a
        CNRS postdoctoral researcher with the Microstructures &amp; Stresses group at
        Institut Jean Lamour, Nancy, working with Prof. Benoit Appolaire and Prof. Maeva
        Cottura on sharp-interface phase-field models of discontinuous precipitation.
      </p>
      <p>
        Prior to Nancy, I was a postdoc with Prof. Conrard Feugmo at the University of
        Waterloo, extending phase-field crystal models with three-point correlation
        functions for complex concentrated alloys. I completed my PhD in Metallurgical
        Engineering and Materials Science at IIT Bombay, studying the effect of
        dislocations on phase transformations, with additional work in phase-field
        dislocation dynamics and discrete dislocation dynamics (NUMODIS, Grenoble).
      </p>
      <a class="btn btn-outline" href="{{ '/research/' | relative_url }}">Read the full research vision →</a>
    </div>
    <div class="placeholder" style="aspect-ratio: 4/5;">
      <div class="placeholder-tag">Placeholder</div>
      Portrait photo<br>(replace with a current headshot)
    </div>
  </div>
</section>
