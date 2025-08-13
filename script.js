const dts = document.querySelectorAll("dt");
dts[0].classList.add("active");

dts.forEach((dt) => {
  dt.addEventListener("click", handleFaq);
});

function handleFaq(event) {
  event.currentTarget.classList.toggle("active");
}
