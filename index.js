//Fecha actual
const dateOptionsContainer = document.getElementById("date_options");
const selectedDateElement = document.getElementById("selected-date");
const calendarContainer = document.getElementById('calendar-container');
//fecha actual
const today = new Date();

function formatDate(date) { 
  const day = String(date.getDate()).padStart(2, '0'); 
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear(); 
  return `${day}-${month}-${year}`; 
}

function formatButtonDate(date) {
  const options = { day: "2-digit", month: "short" };
  return date.toLocaleDateString("es-ES", options).toUpperCase();
}

//fechas para los 4 dias
for (let i = 0; i < 4; i++) {
  const date = new Date();
  date.setDate(date.getDate() + i);

  //crear boton para cada fecha
  const dateBtn = document.createElement("button");
  dateBtn.textContent = formatButtonDate(date);
  dateBtn.addEventListener('click', function() {
    handleDateSelection(formatDate(date));
  });

  //Agregar boton al div option
  dateOptionsContainer.insertBefore(dateBtn, document.getElementById('open-calendar-btn'));
}

function handleDateSelection(dateStr) {
  //cerramos el calendario
  calendarContainer.classList.add('hidden');
  //mostramos fecha seleccionada
  selectedDateElement.innerHTML = `<strong>Fecha seleccionada: ${dateStr}</strong>`;
}

//mostrar y configurar calendario
document.getElementById('open-calendar-btn').addEventListener('click', function() {
  flatpickr('#calendar', {
      inline: true,
      minDate: "today",
      dateFormat: "d-m-Y",
      maxDate: new Date().fp_incr(30), // 30 días a partir de hoy
      onChange: function(selectedDates, dateStr, instance) {
        handleDateSelection(dateStr);
      }
  });
  calendarContainer.classList.toggle('hidden');
});
