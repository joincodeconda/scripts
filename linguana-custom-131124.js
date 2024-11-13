document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("/tr")) {
    document.querySelectorAll("a").forEach((link) => {
      if (link.href.includes("app.medicasimple.com")) {
        link.href = link.href.replace(
          "app.medicasimple.com",
          "klinik.medicasimple.com"
        );
      }
    });
  }
});
