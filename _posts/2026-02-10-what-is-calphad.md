---
title: "What CALPHAD Actually Gives You (and What It Doesn't)"
topic: "CALPHAD"
excerpt: "A practical primer on CALPHAD databases, why phase-field modellers rely on them, and where their limits are."
---

CALPHAD — CALculation of PHAse Diagrams — is a semi-empirical framework for building
thermodynamic databases of multicomponent alloys. Instead of solving quantum mechanics for
every composition, CALPHAD fits parametric free-energy models (sublattice models, Redlich–Kister
polynomials, etc.) to a mix of experimental data and first-principles results, then interpolates
and extrapolates across composition and temperature.

**Why phase-field modellers care.** A phase-field simulation needs a free-energy functional. For
a toy binary system you can write one down by hand (a double-well polynomial, say). For a real
Fe–Cr–Ni–Mo steel, you don't want to hand-fit that — you want the free energy that already
reproduces the experimentally known phase diagram. That's exactly what a CALPHAD database gives
you, and formalisms like the KKS (Kim–Kim–Suzuki) model exist specifically to plug CALPHAD free
energies into a phase-field framework without breaking the diffuse-interface formulation.

**Where it breaks down.** CALPHAD databases are only as good as their assessed composition/
temperature range — extrapolate outside it and you can get physically implausible free-energy
curvatures. They also don't natively carry gradient-energy or interfacial information; that has
to come from elsewhere (typically fit to experimental interfacial energies or estimated from
atomistic calculations).

**PLACEHOLDER** — this post is a starting scaffold. Expand it with a worked example from your own
Fe–Cr CALPHAD-coupled Cahn–Hilliard demo, including a plot of the assessed free-energy curve.
