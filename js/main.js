/* Static-site interactions; no WordPress runtime required. */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      var selector = link.getAttribute("href");
      if (!selector || selector === "#") return;
      var target = document.querySelector(selector);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
  document.querySelectorAll('a[href="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) { event.preventDefault(); });
  });
});
