---
title: "Tutorial: Your First Cahn–Hilliard Solver in ~60 Lines"
topic: "Tutorials"
excerpt: "A minimal semi-implicit spectral Cahn–Hilliard solver you can run today, with notes on what to change first."
---

This is a placeholder tutorial outline — replace it with your own worked example and code.

**Suggested structure:**

1. **Set up the grid and initial condition.** A periodic 2D grid, random near-uniform composition
   with small noise — enough to seed spinodal decomposition.
2. **Discretise in Fourier space.** A semi-implicit spectral scheme treats the gradient-energy
   (linear, stiff) term implicitly and the nonlinear bulk term explicitly, which lets you take
   much larger time steps than a fully explicit finite-difference scheme.
3. **Time-step and visualise.** Step forward, periodically dump the composition field, and render
   it (exactly what the [interactive Cahn–Hilliard demo]({{ '/demos/#cahn-hilliard' | relative_url }})
   on this site does, in a much simplified/coarser form, directly in the browser).
4. **Sanity checks.** Free energy should monotonically decrease over time; total mass (mean
   composition) should stay constant to machine precision — if it doesn't, something is wrong with
   your scheme.

**PLACEHOLDER** — swap this outline for real code blocks (Python/NumPy or C) from your own
solver, plus a link to the full notebook/repository.
