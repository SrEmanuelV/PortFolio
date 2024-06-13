document.getElementById("menuAdaptive").addEventListener("click", function() {
    var modal = document.getElementById("modal-menu");
    modal.style.display = "flex"; // Muestra el menú adaptativo
});

function closeModal() {
    var modal = document.getElementById("modal-menu");
    modal.style.display = "none";
    // Restablecer cualquier estilo adicional aplicado dinámicamente al abrir el modal
    modal.style.width = ""; // Restablecer el ancho
    modal.style.height = ""; // Restablecer la altura
    // Otros estilos que necesiten ser restablecidos
}
