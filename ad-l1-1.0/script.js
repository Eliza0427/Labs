// Selecciona el primer elemento <h1> en el documento
const primerTitulo = document.querySelector('h1');

// Cambia su contenido a "Adiós"
primerTitulo.textContent = 'Adiós';

document.getElementById("rojo").style.color = "OrangeRed";  

// Seleccionar el encabezado
const Encabezado = document.getElementById("Encabezado");

// Añadir el evento click
Encabezado.addEventListener("click", function() {
    Encabezado.style.color = "brown"; // 
});
