const dts = document.querySelectorAll("dt");

dts[0].classList.add("active");
dts[0].setAttribute("aria-expanded", "true");

dts.forEach((dt) => {
  dt.addEventListener("pointerdown", toggleFaq);
  dt.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFaq({ currentTarget: dt });
    }
  });
});

function toggleFaq(event) {
  const isActive = event.currentTarget.classList.toggle("active");
  event.currentTarget.setAttribute("aria-expanded", isActive);
}
