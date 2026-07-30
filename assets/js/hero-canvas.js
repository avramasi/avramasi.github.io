// ---------------------------------------------------------------------
// Animates the hero background: a low-resolution spinodal-decomposition
// (Cahn-Hilliard) pattern, upscaled and blurred via CSS for an ambient,
// on-topic backdrop rather than a generic gradient blob.
// ---------------------------------------------------------------------
(function () {
  "use strict";
  var canvas = document.getElementById("hero-canvas");
  if (!canvas || !window.PFSims) return;

  var NX = 90, NY = 60;
  canvas.width = NX;
  canvas.height = NY;
  var ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;

  var sim = new window.PFSims.CahnHilliardSim(NX, NY, { M: 1.0, kappa: 0.55, dt: 0.05 });

  var frame = 0;
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function draw() {
    window.PFSims.renderScalarField(ctx, sim.c, NX, NY, window.PFSims.teal_amber);
  }

  function loop() {
    frame++;
    if (frame % 2 === 0) sim.step();
    draw();
    if (!reduced) requestAnimationFrame(loop);
  }

  draw();
  if (!reduced) requestAnimationFrame(loop);
})();
