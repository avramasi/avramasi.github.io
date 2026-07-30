---
layout: page
title: Contact
eyebrow: Contact
description: >-
  Reach out — sorted by what you're reaching out about.
---

<div class="grid grid-4 reveal">
  <div class="card contact-track">
    <div class="card-icon">C</div>
    <h3 style="font-size:1.05rem;">Collaboration</h3>
    <p style="font-size:.88rem;">Joint research, co-authored papers, shared simulation codes.</p>
    <a href="mailto:{{ site.author.email }}?subject=Collaboration%20inquiry">Email about collaboration →</a>
  </div>
  <div class="card contact-track">
    <div class="card-icon">$</div>
    <h3 style="font-size:1.05rem;">Consulting</h3>
    <p style="font-size:.88rem;">Industry projects — simulation, microstructure analysis, feasibility studies.</p>
    <a href="mailto:{{ site.author.email }}?subject=Consulting%20inquiry">Email about consulting →</a>
  </div>
  <div class="card contact-track">
    <div class="card-icon">R</div>
    <h3 style="font-size:1.05rem;">Recruitment</h3>
    <p style="font-size:.88rem;">Faculty, R&amp;D, or postdoctoral opportunities. See the recruiter overview page.</p>
    <a href="{{ '/for-recruiters/' | relative_url }}">Go to recruiter page →</a>
  </div>
  <div class="card contact-track">
    <div class="card-icon">A</div>
    <h3 style="font-size:1.05rem;">Academic</h3>
    <p style="font-size:.88rem;">Questions about publications, code, thesis material, or invited talks.</p>
    <a href="mailto:{{ site.author.email }}?subject=Academic%20inquiry">Email an academic inquiry →</a>
  </div>
</div>

<div class="section reveal">
  <div class="section-head">
    <h2>Or send a message directly</h2>
    <p>PLACEHOLDER — this form needs a form-handling backend to actually deliver mail, since GitHub Pages only serves static files. Free options: <a href="https://formspree.io">Formspree</a>, <a href="https://www.staticforms.xyz/">Static Forms</a>, or Netlify Forms (if you migrate hosting). Replace <code>action="#"</code> below with your endpoint.</p>
  </div>
  <form class="contact-form" action="#" method="POST" style="max-width: 640px;">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div>
      <label for="reason">Reason for contact</label>
      <select id="reason" name="reason">
        <option>Collaboration</option>
        <option>Consulting</option>
        <option>Recruitment</option>
        <option>Academic</option>
        <option>Other</option>
      </select>
    </div>
    <div>
      <label for="message">Message</label>
      <textarea id="message" name="message" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary" style="justify-self:start;">Send message</button>
  </form>
</div>

<div class="section-tight reveal">
  <h3>Elsewhere</h3>
  <div class="tag-row">
    <a class="tag" href="{{ site.author.github }}">GitHub</a>
    <a class="tag" href="{{ site.author.linkedin }}">LinkedIn</a>
    <a class="tag" href="{{ site.author.googlescholar }}">Google Scholar</a>
    <a class="tag" href="{{ site.author.orcid }}">ORCID</a>
    <a class="tag" href="{{ site.author.twitter }}">X / Twitter</a>
  </div>
</div>
