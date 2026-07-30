---
title: "Where Scientific ML Actually Helps in Materials Simulation"
topic: "Scientific ML"
excerpt: "Surrogate models, ML-accelerated CALPHAD fitting, and physics-informed closures — and where they don't help."
---

"Scientific ML" covers a lot of ground, and it's worth being precise about which flavour is doing
what in a materials-simulation pipeline.

**Surrogate models** replace an expensive forward solve (a full phase-field run, say) with a
cheap trained approximation — useful when you need to explore a large parameter space (alloy
composition, processing schedule) and can afford to spend compute upfront generating training
data.

**ML-accelerated free-energy fitting** speeds up the CALPHAD assessment process itself, or fits
smooth, differentiable surrogates to existing databases so they're cheaper to evaluate inside an
inner simulation loop.

**Physics-informed / hybrid closures** don't replace the physics solver at all — they learn a
correction term (e.g. an unresolved sub-grid contribution) while the governing PDE is still solved
explicitly. This tends to generalise better than a pure black-box surrogate, at the cost of being
harder to set up.

**Where it doesn't help (yet):** extrapolation outside the training distribution is still the
Achilles' heel of most of these approaches — exactly the regime where materials discovery is
often most interesting. Active-learning loops that flag when the model is out of its depth are an
active area, not a solved problem.

**PLACEHOLDER** — replace this with a concrete write-up of your own ML surrogate project (see the
[Projects page]({{ '/projects/' | relative_url }})), including training data size, architecture,
and speed-up achieved versus the full solver.
