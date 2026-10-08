const colores = ["green", "blue", "red"];
function cambiarColor() {
    let numero = Math.floor(Math.random() * 3);
    return colores[numero];
}
const titulos = document.querySelectorAll("h5");
titulos.forEach(function(titulo) {
    titulo.addEventListener("click", function() {
        titulo.style.color = cambiarColor();
    });
});