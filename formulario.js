const email = document.getElementById("email");
const nombre = document.getElementById("nombre");
const whatsapp = document.getElementById("whatsapp");


email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
  } else {
    email.setCustomValidity("");
    console.log(email);
  }
});

nombre.addEventListener("input", function (event) {
    if (nombre) {
        console.log(nombre);
    } else {
      nombre.setCustomValidity("se esperaba un nombre");
      console.log(nombre);
    }
  });

  whatsapp.addEventListener("input", function (event) {
    if (whatsapp) {
        console.log(whatsapp);
    } else {
      whatsapp.setCustomValidity("se esperaba un telefono");
      console.log(whastapp);
    }
  });
