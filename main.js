const sucesso = document.querySelector(".sucesso");
const falha = document.querySelector(".falha");
const botao = document.querySelector("button");
const form = document.querySelector("form");
let numA = document.getElementById("numA");
let numB = document.getElementById("numB");


form.addEventListener("submit", function (e) {
  e.preventDefault();
  numA.value = "";
  numB.value = "";
});

botao.addEventListener("click", function () {
  if (numB.value > numA.value) {
    sucesso.style.display = "block";
    falha.style.display = "none";
  } else {
    falha.style.display = "block";
    sucesso.style.display = "none";
  }
});
