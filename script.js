// Seleciona todos as perguntas
const dts = document.querySelectorAll("dt");

// Deixa o primeiro item aberto por padrão
dts[0].classList.add("active");

// Adiciona o evento de click/touch as perguntas
dts.forEach((dt) => {
  dt.addEventListener("pointerdown", handleFaq);
});

// Adiciona a classe "active" ao elemento alvo
function handleFaq(event) {
  event.currentTarget.classList.toggle("active");
}
