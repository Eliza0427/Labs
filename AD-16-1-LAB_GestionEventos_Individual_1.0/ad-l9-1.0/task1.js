const letra = document.querySelector("#text");
const boton =document.querySelector("#jsstyle");


boton.addEventListener("click",() =>{
    letra.textContent = "Nuevo texto";
    letra.style.color = "red";
    letra.style.fontSize = "30px";
    letra.style.fontFamily = "Impact";

});