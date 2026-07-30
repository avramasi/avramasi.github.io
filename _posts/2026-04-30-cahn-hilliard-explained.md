---
title: "The Cahn–Hilliard Equation, Piece by Piece"
topic: "Cahn–Hilliard"
excerpt: "Breaking the Cahn–Hilliard equation into its physical ingredients: a chemical potential, a mobility, and a gradient penalty."
---

The Cahn–Hilliard equation describes how a conserved field — typically composition — evolves to
lower the total free energy of a system:

`∂c/∂t = ∇·(M ∇μ)`, with `μ = f'(c) − κ∇²c`

Three ingredients matter here:

1. **`f(c)`, the bulk free-energy density.** For a system prone to phase separation, this is a
   double-well function of composition. Its derivative, `f'(c)`, drives concentration away from
   the unstable region between the wells — this is what causes spinodal decomposition.
2. **`κ∇²c`, the gradient energy term.** This penalises sharp concentration gradients, which is
   what keeps the interface diffuse-but-finite rather than infinitely sharp or infinitely smeared.
   `κ` sets the interfacial energy and width.
3. **`M`, the mobility.** This sets the kinetics — how fast the system can actually move
   composition around, as opposed to how much it "wants" to.

Because composition is conserved, mass can only move by flux — hence the extra Laplacian on the
right-hand side compared to the (non-conserved) Allen–Cahn equation. That single difference is
why Cahn–Hilliard microstructures coarsen so much more slowly than Allen–Cahn ones: material has
to diffuse to redistribute, not just locally flip.

Try it live on the [interactive Cahn–Hilliard demo]({{ '/demos/#cahn-hilliard' | relative_url }}) —
watch a near-uniform composition field spontaneously unmix into teal- and amber-rich domains.

**PLACEHOLDER** — add a short derivation or numerical-scheme note (e.g. semi-implicit spectral
time-stepping) specific to your own solver.
