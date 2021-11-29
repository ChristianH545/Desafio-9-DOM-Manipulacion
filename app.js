/* ------Objeto, Propiedad y Metodo ------ */
class Monedas {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  formula1(valorPesos, valorDolar) {
    let resultadoA = valorPesos / valorDolar;
    return resultadoA;
  }
  formula2(valorPesos, valorEuro) {
    let resultadoB = valorPesos / valorEuro;
    return resultadoB;
  }
  formula3(valorEuros, valorPesos) {
    let resultadoC = valorEuros * valorPesos;
    return resultadoC;
  }
  formula4(valorDolar, valorPesos) {
    let resultadoD = valorDolar * valorPesos;
    return resultadoD;
  }
}
/* ------manipulacion del DOM  ------ */
function Input1() {
  let inputPesosDolar1 = document.querySelector(".conversion1");
  let inputResultadoConversion1 = document.querySelector(".calculando1");
  let butttonResultado1 = document.querySelector(".button1");

  butttonResultado1.addEventListener("click", () => {
    let monedas = new Monedas();
    let valorPesos = inputPesosDolar1.value;
    let valorDolar = dolarHoy.precio;
    let conversion = monedas.formula1(valorPesos, valorDolar);

    inputResultadoConversion1.value = `${conversion.toFixed(2)} Dolares`;
  });
}
function Input2() {
  let inputPesosEuros2 = document.querySelector(".conversion2");
  let inputResultadoConversion2 = document.querySelector(".calculando2");
  let butttonResultado2 = document.querySelector(".button2");

  butttonResultado2.addEventListener("click", () => {
    let monedas = new Monedas();
    let valorPesos = inputPesosEuros2.value;
    let valorEuros = euroHoy.precio;
    let conversion = monedas.formula2(valorPesos, valorEuros);

    inputResultadoConversion2.value = `${conversion.toFixed(2)} Euros `;
  });
}
function Input3() {
  let inputEurosPesos3 = document.querySelector(".conversion3");
  let inputResultadoConversion3 = document.querySelector(".calculando3");
  let butttonResultado3 = document.querySelector(".button3");

  butttonResultado3.addEventListener("click", () => {
    let monedas = new Monedas();
    let valorPesos = inputEurosPesos3.value;
    let valorEuros = euroHoy.precio;
    let conversion = monedas.formula3(valorPesos, valorEuros);

    inputResultadoConversion3.value = `${conversion.toFixed(2)} Pesos-Ars`;
  });
}
function Input4() {
  let inputDolarPesos4 = document.querySelector(".conversion4");
  let inputResultadoConversion4 = document.querySelector(".calculando4");
  let butttonResultado4 = document.querySelector(".button4");

  butttonResultado4.addEventListener("click", () => {
    let monedas = new Monedas();
    let valorPesos = inputDolarPesos4.value;
    let valorDolar = dolarHoy.precio;
    let conversion = monedas.formula4(valorPesos, valorDolar);

    inputResultadoConversion4.value = `${conversion.toFixed(2)} Pesos-Ars`;
  });
}
/* ------variables de mis objetos ------ */
const dolarHoy = new Monedas("Dolar Hoy: ", 201);
const euroHoy = new Monedas("Euro Hoy: ", 231);

/* ------ Array  de divisas ------ */

const divisas = [];

/* ------ Recorrido del Array  y inyectar al html nombre y precio el dolar y euro hoy ------ */

divisas.push(dolarHoy, euroHoy);
for (let Monedas of divisas) {
  const monedas = document.createElement("div");
  document.body.appendChild(monedas);
  monedas.innerHTML = `${Monedas.nombre} ${Monedas.precio}`;
}

/* ------ Function Manipulacion del DOM  ------ */
Input1();
Input2();
Input3();
Input4();
