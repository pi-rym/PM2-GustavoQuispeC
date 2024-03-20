(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });

  var inputYear = document.getElementById("year");

  // Limitamos la longitud del valor ingresado a 4 dígitos
  inputYear.addEventListener("input", function () {
    if (this.value.length > 4) {
      this.value = this.value.slice(0, 4);
    }
  });
})();
