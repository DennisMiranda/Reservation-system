//Fecha actual
const dateOptionsContainer = document.getElementById("date_options");

//fecha actual
const today = new Date();

function formatDate(date) {
  const options = { day: "2-digit", month: "short" };

  return date.toLocaleDateString("es-ES", options).toUpperCase();
}

//fechas para los 7 dias
for (let i = 0; i < 6; i++) {
  const date = new Date();
  date.setDate(date.getDate() + i);

  //crear boton para cada fecha
  const dateBtn = document.createElement("button");
  dateBtn.textContent = formatDate(date);

  //Agregar boton al div option
  dateOptionsContainer.appendChild(dateBtn);
}
