(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

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

  // Limitamos la longitud del input year ingresado a 4 dígitos
  inputYear.addEventListener("input", function () {
    if (this.value.length > 4) {
      this.value = this.value.slice(0, 4);
    }
  });
})();
