import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const third = document.querySelector("#tercer-numero");
const fourth = document.querySelector("#cuarto-numero");
const form = document.querySelector("#sumar-form");
const form2 = document.querySelector("#multiplicar-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#resultado-div2");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p> Resultado = " + sumar(firstNumber, secondNumber) + "</p>";
});


form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const thirdNumber = Number.parseInt(third.value);
  const fourthNumber = Number.parseInt(fourth.value);

  div2.innerHTML = "<p> Resultado = " + multiplicar(thirdNumber, fourthNumber) + "</p>";
});