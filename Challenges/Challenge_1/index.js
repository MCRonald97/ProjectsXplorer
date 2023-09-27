
const correo = document.querySelector("#correo");
const boton_error = document.querySelector("#boton_error");
const error = document.querySelector("#error");

boton_error.addEventListener("click", (event) => {
   event.preventDefault();
   mifuncion_error(correo.value);
});

function mifuncion_error(emails) {
   let expReg = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

   if (expReg.test(emails)) {
      correo.style.border = "1px solid #0AE98A";
      error.style.display = "none";
      correo.value = "";
   } else {
      error.style.display = "block";
      correo.style.border = "1px solid red";
   }
}