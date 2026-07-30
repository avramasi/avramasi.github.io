// ---------------------------------------------------------------------
// Theme toggle, mobile nav, and scroll-reveal animations.
// No external dependencies — plain DOM APIs only.
// ---------------------------------------------------------------------
(function () {
  "use strict";

  /* Theme toggle ------------------------------------------------------ */
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var iconDark = document.getElementById("theme-icon-dark");
  var iconLight = document.getElementById("theme-icon-light");

  function syncIcons() {
    var theme = root.getAttribute("data-theme");
    if (!iconDark || !iconLight) return;
    iconDark.style.display = theme === "light" ? "block" : "none";
    iconLight.style.display = theme === "light" ? "none" : "block";
  }
  syncIcons();

  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") || "dark";
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      syncIcons();
    });
  }

  /* Mobile nav ---------------------------------------------------------- */
  var navToggle = document.getElementById("nav-toggle");
  var navLinks = document.getElementById("nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { navLinks.classList.remove("open"); });
    });
  }

  /* Scroll reveal -------------------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }
})();
