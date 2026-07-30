// ---------------------------------------------------------------------
// Powers the browser-based simulations on /demos/. Each demo block in
// the page markup has a canvas + play/pause/reset controls; this script
// looks them up by data-demo attribute and drives the right simulation.
// ---------------------------------------------------------------------
(function () {
  "use strict";
  if (!window.PFSims) return;

  var configs = {
    "diffusion": { Sim: window.PFSims.DiffusionSim, args: { D: 0.18 }, color: window.PFSims.teal_amber, nx: 80, ny: 80 },
    "cahn-hilliard": { Sim: window.PFSims.CahnHilliardSim, args: { M: 1.0, kappa: 0.55, dt: 0.05 }, color: window.PFSims.teal_amber, nx: 90, ny: 90 },
    "allen-cahn": { Sim: window.PFSims.AllenCahnSim, args: { L: 1.0, kappa: 0.85, dt: 0.08 }, color: window.PFSims.teal_amber, nx: 90, ny: 90 },
    "grain-growth": { Sim: window.PFSims.GrainGrowthSim, args: { grains: 14 }, color: null, nx: 90, ny: 90 }
  };

  function initDemo(block) {
    var key = block.getAttribute("data-demo");
    var cfg = configs[key];
    if (!cfg) return;

    var canvas = block.querySelector("canvas");
    var playBtn = block.querySelector("[data-action='play']");
    var resetBtn = block.querySelector("[data-action='reset']");
    var speedInput = block.querySelector("[data-control='speed']");

    canvas.width = cfg.nx;
    canvas.height = cfg.ny;
    var ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    var sim = new cfg.Sim(cfg.nx, cfg.ny, cfg.args);
    var playing = true;
    var speed = speedInput ? parseInt(speedInput.value, 10) : 2;

    function render() {
      if (key === "grain-growth") {
        var imgData = ctx.createImageData(cfg.nx, cfg.ny);
        for (var i = 0; i < sim.grainId.length; i++) {
          var rgb = window.PFSims.grainColor(sim.grainId[i], sim.hueSeed);
          imgData.data[i * 4] = rgb[0];
          imgData.data[i * 4 + 1] = rgb[1];
          imgData.data[i * 4 + 2] = rgb[2];
          imgData.data[i * 4 + 3] = 255;
        }
        ctx.putImageData(imgData, 0, 0);
      } else {
        window.PFSims.renderScalarField(ctx, sim.c, cfg.nx, cfg.ny, cfg.color);
      }
    }

    function loop() {
      if (playing) {
        for (var s = 0; s < speed; s++) sim.step();
        render();
      }
      requestAnimationFrame(loop);
    }

    render();
    requestAnimationFrame(loop);

    if (playBtn) {
      playBtn.addEventListener("click", function () {
        playing = !playing;
        playBtn.textContent = playing ? "Pause" : "Play";
      });
    }
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        sim.reset();
        render();
      });
    }
    if (speedInput) {
      speedInput.addEventListener("input", function () {
        speed = parseInt(speedInput.value, 10);
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-demo]").forEach(initDemo);
  });
})();
