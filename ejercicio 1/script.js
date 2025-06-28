const boton = document.getElementById("boton");
const seleccionar = document.getElementById("TipoOperacion");
const numero2 = document.getElementById("ingreso2");

const validar = () => {
  const ingreso2 = parseFloat(document.getElementById("ingreso2").value);
  const operador = seleccionar.value;

  if (operador === "dividir" && ingreso2 === 0) {
    boton.disabled = true;
  } else {
    boton.disabled = false;
  }
};

seleccionar.addEventListener("change", validar);
numero2.addEventListener("keyup", validar);

boton.addEventListener("click", (e) => {
  e.preventDefault();
  const resultado = document.getElementById("resultado");
  const ingreso1 = parseFloat(document.getElementById("ingreso1").value);
  const ingreso2 = parseFloat(document.getElementById("ingreso2").value);
  console.log(ingreso1);
  console.log(ingreso2);
  let numero1 = ingreso1;
  let numero2 = ingreso2;
  let operacion = seleccionar.value;

  if (operacion === "sumar") {
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    resultado.innerHTML = numero1 + numero2;
    console.log(resultado);
  } else if (operacion === "restar") {
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    resultado.innerHTML = numero1 - numero2;
    console.log(resultado);
  } else if (operacion === "multiplicar") {
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    resultado.innerHTML = numero1 * numero2;
    console.log(resultado);
  } else if (operacion === "dividir") {
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    resultado.innerHTML = numero1 / numero2;
    console.log(resultado);
  }
});
