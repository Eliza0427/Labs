
const boton = document.getElementById("elBoton");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
  mensaje.classList.remove("d-none");
});

boton.addEventListener("click", function() {
    contenedor.innerHTML = `
        <div id="mensaje" class="alert alert-success d-none" role="alert" >
             "Alerta, alguien presionó el botón"         
 

            <button type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close">
                    
            </button>
        </div>
    `;
});