document.querySelector(".limpiar").addEventListener("click", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe

  // Selecciona todos los campos de entrada del formulario
  const inputs = document.querySelectorAll("input");

  // Recorre cada campo de entrada y establece su valor en una cadena vacía
  inputs.forEach((input) => {
    input.value = "";
  });
});
