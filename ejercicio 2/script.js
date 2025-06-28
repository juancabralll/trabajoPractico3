const ingreso = document.getElementById("palabra");
const boton = document.getElementById("boton");

const lista = ["manzana", " banana", "pera", "durazno", "frutilla", "mango"];

boton.addEventListener("click", (e) => {
  e.preventDefault();

  respuesta.innerHTML = "";
  const ingresado = ingreso.value.trim().toLowerCase();
  advertencia.innerText = "";

  if (ingresado === "") {
    advertencia.innerText = "Ingresa una palabra";
    return;
  }

  console.log(respuesta);
  const palabraActual = ingreso.value.toLowerCase();
  console.log(palabraActual);
  console.log(lista);
  const listaFiltrada = lista.filter((palabra) => {
    return palabra.includes(palabraActual);
  });

  if (listaFiltrada.length === 0) {
    advertencia.innerText = "No hay palabras que coincidan";
    return;
  }
  console.log(listaFiltrada);

  listaFiltrada.forEach((palabra) => {
    const li = document.createElement("li");
    li.innerText = palabra;
    respuesta.appendChild(li);
  });
});
