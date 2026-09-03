---
layout: default
title: Home
description: >-
  Arjun Varma R. — computational materials scientist specialising in
  deformation induced microstructure evolution and scientific
  machine learning for microstructure evolution.
---

<section class="hero">
  <canvas id="hero-canvas" class="hero-canvas" aria-hidden="true"></canvas>
  <div class="container">
    <div class="hero-content">
      <div class="hero-role mono">Computational Materials Scientist</div>
      <h1>Simulating how microstructure decides<br>whether a material <span class="accent">survives</span>.</h1>
      <p class="hero-lede">
        I build compputational models at the meso- and micro-scale that
        predict how microstructures evolve -- from phase transformations, dislocations, and other defects such as grain boundaries 
         -- with an ultimate goal of designing materials digitally before they're made physically.
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
        I am a computational materials scientist and mechanical engineer working at the
        intersection of <strong>phase-field modelling, microstructure evolution, and
        multiscale materials modelling</strong>. I am currently a CNRS postdoctoral
        researcher in the Microstructures &amp; Stresses group at Institut Jean Lamour,
        Nancy, where I work with Prof. Benoit Appolaire and Prof. Maeva Cottura on
        <strong>sharp-interface phase-field models for discontinuous precipitation</strong>.
      </p>

      <p>
        My research has evolved across several scales of materials modelling. During my
        postdoctoral work at the University of Waterloo with Prof. Conrard Feugmo, I
        developed <strong>phase-field crystal models for binary systems</strong>,
        explicitly describing the evolution of individual atomic density fields. During
        my PhD in Metallurgical Engineering and Materials Science at IIT Bombay, I
        investigated the <strong>coupling between dislocations and phase
        transformations</strong>, complemented by work on
        <strong>phase-field dislocation dynamics and discrete dislocation dynamics</strong>,
        including developments within the NUMODIS framework at Grenoble.
      </p>

      <p>
        Together, these experiences have shaped my research around a common objective:
        <strong>developing physically grounded computational models that connect
        atomic-scale mechanisms to the evolution of microstructure and material
        properties across larger length and time scales.</strong>
      </p>

      <a class="btn btn-outline" href="{{ '/research/' | relative_url }}">
        Read the full research vision →
      </a>
    </div>

    <div class="about-photo">
      <img
        src="{{ '/assets/img/gallery/profile.jpg' | relative_url }}"
        alt="Portrait of Arjun Varma"
      >
    </div>

  </div>
</section>
