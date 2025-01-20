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


function botonesCantidad(presionar) {
  var cantidadAdults = document.getElementById('adults');
  var valorAdults = parseInt(cantidadAdults.value);
  var cantidad = document.getElementById('children');
  var valorChildren = parseInt(cantidad.value);

  if (presionar === 'addChildren' && valorChildren < cantidad.max) {
      cantidad.value = valorChildren + 1;
  } else if (presionar === 'subtractChildren' && valorChildren > cantidad.min) {
      cantidad.value = valorChildren - 1;
  }else if (presionar === 'addAdults' && valorAdults < cantidadAdults.max) {
    cantidadAdults.value = valorAdults + 1;
  } else if (presionar === 'subtractAdults' && valorAdults > cantidadAdults.min) { 
    cantidadAdults.value = valorAdults - 1;
  } 
  return;
}