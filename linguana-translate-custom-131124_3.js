window.addEventListener("load", function () {
  if (window.location.pathname.includes("/tr")) {
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1 && node.tagName === "A") {
            console.log("node", node);
            const link = node;
            if (link.href.includes("app.medicasimple.com")) {
              console.log("node includes app.medicasimple.com");
              link.href = link.href.replace(
                "app.medicasimple.com",
                "klinik.medicasimple.com"
              );
            }
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    document.querySelectorAll("a").forEach((link) => {
      console.log("link", link);
      if (link.href.includes("app.medicasimple.com")) {
        console.log("link includes app.medicasimple.com");
        link.href = link.href.replace(
          "app.medicasimple.com",
          "klinik.medicasimple.com"
        );
      }
    });
  }
});
