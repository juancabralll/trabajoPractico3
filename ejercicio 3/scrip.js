const lista = document.getElementById("lista");
const api = fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
  res.json()
);

api.then((data) => {
  data.filter((tarea) => {
    if (tarea.completed) {
      const li = document.createElement("li");
      li.innerHTML = tarea.title;
      lista.appendChild(li);
    }
  });
});
