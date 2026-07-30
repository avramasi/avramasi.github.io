// ---------------------------------------------------------------------
// Small, dependency-free finite-difference "phase-field-flavoured" toy
// simulations for the hero background and the /demos/ page. These are
// deliberately coarse (small grids, simple explicit schemes) — built for
// visual intuition in the browser, not research-grade accuracy.
// ---------------------------------------------------------------------
(function (global) {
  "use strict";

  function makeGrid(nx, ny, fill) {
    var g = new Float32Array(nx * ny);
    if (fill) for (var i = 0; i < g.length; i++) g[i] = fill(i);
    return g;
  }

  function idx(nx, x, y) {
    x = (x + nx) % nx;
    return x;
  }

  // periodic 2D laplacian (5-point stencil)
  function laplacian(f, out, nx, ny) {
    for (var y = 0; y < ny; y++) {
      var yu = (y - 1 + ny) % ny, yd = (y + 1) % ny;
      for (var x = 0; x < nx; x++) {
        var xl = (x - 1 + nx) % nx, xr = (x + 1) % nx;
        var c = f[y * nx + x];
        out[y * nx + x] =
          f[y * nx + xl] + f[y * nx + xr] + f[yu * nx + x] + f[yd * nx + x] - 4 * c;
      }
    }
  }

  /* ---------------- Diffusion (Fick's second law) ---------------- */
  function DiffusionSim(nx, ny, opts) {
    this.nx = nx; this.ny = ny;
    this.D = (opts && opts.D) || 0.18;
    var self = this;
    this.c = makeGrid(nx, ny, function (i) {
      var x = i % nx, y = Math.floor(i / nx);
      var dx = x - nx * 0.5, dy = y - ny * 0.5;
      return Math.exp(-(dx * dx + dy * dy) / (nx * 1.2));
    });
    this.tmp = new Float32Array(nx * ny);
  }
  DiffusionSim.prototype.step = function () {
    laplacian(this.c, this.tmp, this.nx, this.ny);
    for (var i = 0; i < this.c.length; i++) this.c[i] += this.D * this.tmp[i];
  };
  DiffusionSim.prototype.reset = function () { DiffusionSim.call(this, this.nx, this.ny, { D: this.D }); };

  /* ---------------- Cahn-Hilliard (spinodal decomposition) ---------------- */
  function CahnHilliardSim(nx, ny, opts) {
    this.nx = nx; this.ny = ny;
    this.M = (opts && opts.M) || 1.0;
    this.kappa = (opts && opts.kappa) || 0.6;
    this.dt = (opts && opts.dt) || 0.06;
    this.c = makeGrid(nx, ny, function () { return 0.02 * (Math.random() - 0.5) * 2 + 0.0; });
    this.mu = new Float32Array(nx * ny);
    this.lapC = new Float32Array(nx * ny);
    this.lapMu = new Float32Array(nx * ny);
  }
  CahnHilliardSim.prototype.step = function () {
    laplacian(this.c, this.lapC, this.nx, this.ny);
    for (var i = 0; i < this.c.length; i++) {
      var c = this.c[i];
      this.mu[i] = c * c * c - c - this.kappa * this.lapC[i];
    }
    laplacian(this.mu, this.lapMu, this.nx, this.ny);
    for (var j = 0; j < this.c.length; j++) {
      this.c[j] += this.dt * this.M * this.lapMu[j];
      if (this.c[j] > 1.4) this.c[j] = 1.4;
      if (this.c[j] < -1.4) this.c[j] = -1.4;
    }
  };
  CahnHilliardSim.prototype.reset = function () { CahnHilliardSim.call(this, this.nx, this.ny, { M: this.M, kappa: this.kappa, dt: this.dt }); };

  /* ---------------- Allen-Cahn (non-conserved order parameter) ---------------- */
  function AllenCahnSim(nx, ny, opts) {
    this.nx = nx; this.ny = ny;
    this.L = (opts && opts.L) || 1.0;
    this.kappa = (opts && opts.kappa) || 0.9;
    this.dt = (opts && opts.dt) || 0.08;
    var self = this;
    this.c = makeGrid(nx, ny, function () { return Math.random() > 0.5 ? 1 : -1; });
    this.lapC = new Float32Array(nx * ny);
  }
  AllenCahnSim.prototype.step = function () {
    laplacian(this.c, this.lapC, this.nx, this.ny);
    for (var i = 0; i < this.c.length; i++) {
      var c = this.c[i];
      var dfdc = c * c * c - c;
      this.c[i] += this.dt * this.L * (this.kappa * this.lapC[i] - dfdc);
    }
  };
  AllenCahnSim.prototype.reset = function () { AllenCahnSim.call(this, this.nx, this.ny, { L: this.L, kappa: this.kappa, dt: this.dt }); };

  /* ---------------- Grain growth (multi-phase-field, N order params) ---------------- */
  function GrainGrowthSim(nx, ny, opts) {
    this.nx = nx; this.ny = ny;
    this.n = (opts && opts.grains) || 10;
    this.dt = 0.12;
    this.kappa = 0.8;
    var nx_ = nx, ny_ = ny, n = this.n;
    // seed grains as nearest-neighbour Voronoi of random points, encoded as an
    // integer "grain id" field, then converted each step into a smooth field
    var seeds = [];
    for (var s = 0; s < n; s++) seeds.push([Math.random() * nx_, Math.random() * ny_]);
    this.grainId = new Int16Array(nx_ * ny_);
    for (var y = 0; y < ny_; y++) {
      for (var x = 0; x < nx_; x++) {
        var best = 0, bd = Infinity;
        for (var k = 0; k < n; k++) {
          var dx = x - seeds[k][0], dy = y - seeds[k][1];
          var d = dx * dx + dy * dy;
          if (d < bd) { bd = d; best = k; }
        }
        this.grainId[y * nx_ + x] = best;
      }
    }
    this.hueSeed = [];
    for (var h = 0; h < n; h++) this.hueSeed.push(Math.random());
  }
  // curvature-driven coarsening: a site flips to the majority grain id among
  // its neighbours with a small probability, approximating boundary motion
  // by mean curvature (cheap stand-in for a full multi-phase-field solve).
  GrainGrowthSim.prototype.step = function () {
    var nx = this.nx, ny = this.ny, g = this.grainId;
    var next = this.grainId.slice();
    for (var y = 0; y < ny; y++) {
      var yu = (y - 1 + ny) % ny, yd = (y + 1) % ny;
      for (var x = 0; x < nx; x++) {
        var xl = (x - 1 + nx) % nx, xr = (x + 1) % nx;
        var counts = {};
        var neighbours = [g[y * nx + xl], g[y * nx + xr], g[yu * nx + x], g[yd * nx + x]];
        var self = g[y * nx + x];
        var maxId = self, maxCount = 0;
        for (var i = 0; i < neighbours.length; i++) {
          var id = neighbours[i];
          counts[id] = (counts[id] || 0) + 1;
        }
        for (var key in counts) {
          if (counts[key] > maxCount) { maxCount = counts[key]; maxId = parseInt(key, 10); }
        }
        if (maxId !== self && maxCount >= 3) next[y * nx + x] = maxId;
      }
    }
    this.grainId = next;
  };
  GrainGrowthSim.prototype.reset = function () { GrainGrowthSim.call(this, this.nx, this.ny, { grains: this.n }); };

  /* ---------------- Renderers ---------------- */
  function renderScalarField(ctx, field, nx, ny, colorFn) {
    var imgData = ctx.createImageData(nx, ny);
    for (var i = 0; i < field.length; i++) {
      var rgb = colorFn(field[i]);
      imgData.data[i * 4] = rgb[0];
      imgData.data[i * 4 + 1] = rgb[1];
      imgData.data[i * 4 + 2] = rgb[2];
      imgData.data[i * 4 + 3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
  }

  function teal_amber(v) {
    // maps roughly [-1.4, 1.4] -> dark bg .. teal .. amber
    var t = (v + 1.4) / 2.8;
    t = Math.max(0, Math.min(1, t));
    var c1 = [8, 12, 20], c2 = [73, 212, 196], c3 = [240, 168, 104];
    var r, g, b;
    if (t < 0.5) {
      var k = t / 0.5;
      r = c1[0] + (c2[0] - c1[0]) * k;
      g = c1[1] + (c2[1] - c1[1]) * k;
      b = c1[2] + (c2[2] - c1[2]) * k;
    } else {
      var k2 = (t - 0.5) / 0.5;
      r = c2[0] + (c3[0] - c2[0]) * k2;
      g = c2[1] + (c3[1] - c2[1]) * k2;
      b = c2[2] + (c3[2] - c2[2]) * k2;
    }
    return [r | 0, g | 0, b | 0];
  }

  function grainColor(id, seedArr) {
    var h = seedArr[id % seedArr.length];
    var hue = (h * 360) % 360;
    // cheap HSL -> RGB
    var s = 0.55, l = 0.42;
    var c = (1 - Math.abs(2 * l - 1)) * s;
    var x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
    var m = l - c / 2;
    var r = 0, g = 0, b = 0;
    if (hue < 60) { r = c; g = x; } else if (hue < 120) { r = x; g = c; }
    else if (hue < 180) { g = c; b = x; } else if (hue < 240) { g = x; b = c; }
    else if (hue < 300) { r = x; b = c; } else { r = c; b = x; }
    return [((r + m) * 255) | 0, ((g + m) * 255) | 0, ((b + m) * 255) | 0];
  }

  global.PFSims = {
    DiffusionSim: DiffusionSim,
    CahnHilliardSim: CahnHilliardSim,
    AllenCahnSim: AllenCahnSim,
    GrainGrowthSim: GrainGrowthSim,
    renderScalarField: renderScalarField,
    teal_amber: teal_amber,
    grainColor: grainColor
  };
})(window);
