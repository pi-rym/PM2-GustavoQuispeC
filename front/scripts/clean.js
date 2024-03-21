document.querySelector(".limpiar").addEventListener("click", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe

  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.value = "";
  });
});
