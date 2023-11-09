const generalContainer = document.querySelectorAll(".ser_generales");
const refServiciosLinks = document.querySelectorAll(".ref_servicios");

refServiciosLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    generalContainer[index].classList.toggle("activado");
  });
});

// Obtener todos los elementos con la clase "btn-close"
const closeButtons = document.querySelectorAll(".btn-close");

// Agregar un evento de clic a cada botón de cerrar
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Obtener el elemento padre del botón
    const parentElement = button.parentNode;

    // Alternar la clase "activado" en el elemento padre
    parentElement.classList.toggle("activado");
  });
});

// Obtener todos los elementos con la clase "btn-close"
const closeButton = document.querySelectorAll(".btn-closed");

// Agregar un evento de clic a cada botón de cerrar
closeButton.forEach((button) => {
  button.addEventListener("click", () => {
    // Obtener el elemento padre del botón
    const parentElement = button.parentNode;

    // Alternar la clase "activo" en el elemento padre
    parentElement.classList.toggle("activo");
  });
});

// Obtener todos los elementos con la clase "btn-close"
const closButtons = document.querySelectorAll(".btn-closee");

// Agregar un evento de clic a cada botón de cerrar
closButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Obtener el elemento padre del botón
    const parentElement = button.parentNode;

    // Alternar la clase "active" en el elemento padre
    parentElement.classList.toggle("active");
  });
});

const salvavidasContainer = document.querySelectorAll(".ser_salvavidas");
const refSalva = document.querySelectorAll(".ref_salvavidas");

refSalva.forEach((link, index) => {
  link.addEventListener("click", () => {
    salvavidasContainer[index].classList.toggle("activo");
  });
});

const gestionContainer = document.querySelector(".ser_gestion");
const refGestion = document.querySelector(".ref_gestion");

refGestion.addEventListener("click", () => {
  gestionContainer.classList.toggle("active");
});
