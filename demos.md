---
layout: page
title: Interactive Demonstrations
eyebrow: Demos
description: >-
  Small, browser-based simulations — running live, right here, with no
  install. Coarse toy models for intuition, not research-grade solvers.
---

<div class="demo-block reveal" data-demo="diffusion">
  <div class="demo-head">
    <div>
      <span class="status-pill">Fick's Second Law</span>
      <h3 style="margin-top:.5em;">Diffusion</h3>
    </div>
    <p>A concentration spike relaxes outward under Fickian diffusion, <code>∂c/∂t = D∇²c</code>.</p>
  </div>
  <div class="demo-stage">
    <div class="demo-canvas-wrap"><canvas></canvas></div>
    <div class="demo-controls">
      <div>
        <label for="speed-diffusion">Simulation speed</label>
        <input type="range" id="speed-diffusion" data-control="speed" min="1" max="6" value="2">
      </div>
      <button class="btn btn-outline btn-sm" data-action="play">Pause</button>
      <button class="btn btn-outline btn-sm" data-action="reset">Reset</button>
    </div>
  </div>
</div>

<div class="demo-block reveal" data-demo="cahn-hilliard">
  <div class="demo-head">
    <div>
      <span class="status-pill">Spinodal Decomposition</span>
      <h3 style="margin-top:.5em;">Cahn–Hilliard</h3>
    </div>
    <p>A conserved order parameter unmixes spontaneously, coarsening into teal/amber-rich domains.</p>
  </div>
  <div class="demo-stage">
    <div class="demo-canvas-wrap"><canvas></canvas></div>
    <div class="demo-controls">
      <div>
        <label for="speed-ch">Simulation speed</label>
        <input type="range" id="speed-ch" data-control="speed" min="1" max="6" value="2">
      </div>
      <button class="btn btn-outline btn-sm" data-action="play">Pause</button>
      <button class="btn btn-outline btn-sm" data-action="reset">Reset</button>
    </div>
  </div>
</div>

<div class="demo-block reveal" data-demo="allen-cahn">
  <div class="demo-head">
    <div>
      <span class="status-pill">Non-Conserved Order Parameter</span>
      <h3 style="margin-top:.5em;">Allen–Cahn</h3>
    </div>
    <p>Domains of +1/−1 order parameter coarsen to minimise interfacial energy — no conservation constraint.</p>
  </div>
  <div class="demo-stage">
    <div class="demo-canvas-wrap"><canvas></canvas></div>
    <div class="demo-controls">
      <div>
        <label for="speed-ac">Simulation speed</label>
        <input type="range" id="speed-ac" data-control="speed" min="1" max="6" value="2">
      </div>
      <button class="btn btn-outline btn-sm" data-action="play">Pause</button>
      <button class="btn btn-outline btn-sm" data-action="reset">Reset</button>
    </div>
  </div>
</div>

<div class="demo-block reveal" data-demo="grain-growth">
  <div class="demo-head">
    <div>
      <span class="status-pill">Curvature-Driven Coarsening</span>
      <h3 style="margin-top:.5em;">Grain Growth</h3>
    </div>
    <p>A Voronoi grain structure coarsens as boundaries move toward their centre of curvature.</p>
  </div>
  <div class="demo-stage">
    <div class="demo-canvas-wrap"><canvas></canvas></div>
    <div class="demo-controls">
      <div>
        <label for="speed-gg">Simulation speed</label>
        <input type="range" id="speed-gg" data-control="speed" min="1" max="6" value="1">
      </div>
      <button class="btn btn-outline btn-sm" data-action="play">Pause</button>
      <button class="btn btn-outline btn-sm" data-action="reset">Reset</button>
    </div>
  </div>
</div>

<p class="mono reveal" style="font-size:.8rem; color:var(--text-faint);">
  These run entirely client-side (plain JS + Canvas, no WebAssembly required) on coarse grids for
  responsiveness. Source in <code>assets/js/simulations.js</code> and <code>assets/js/demos.js</code> —
  swap in your real solvers/WASM builds for research-grade versions if you'd like.
</p>
