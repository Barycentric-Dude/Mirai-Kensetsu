document.querySelectorAll(".hotspot").forEach((hotspot) => {
  hotspot.addEventListener("click", (event) => {
    if (hotspot.getAttribute("href") === "#") {
      event.preventDefault();
    }
  });
});
