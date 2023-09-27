/*Seleccionamos el boton submit*/
const claim = document.getElementById("claim");

/*Seleccionamos cada imput por su orden*/
const first_name = document.getElementById("first_name");

const last_name = document.getElementById("last_name");

const email = document.getElementById("email");

const password = document.getElementById("password");




/*Seleccionamos cada alerta */

const alert_name = document.querySelector(".alert_name");

const alert_lastname = document.querySelector(".alert_lastname");

const alert_email = document.querySelector(".alert_email");

const alert_password = document.querySelector(".alert_password");
/*Realizamos la funcionalidad*/

claim.addEventListener("click", (event) => {
    event.preventDefault();

    validateEmpty(first_name.value);
    validateEmpty2(last_name.value);
    validate_email(email.value);
    validate_password(password.value);

   

    // Validamos cada campo y aumentamos z si es válido.
    if (validateEmpty(first_name.value)) {
        z++;
    }

    if (validateEmpty2(last_name.value)) {
        z++;
    }

    if (validate_email(email.value)) {
        z++;
    }

    if (validate_password(password.value)) {
        z++;
    }

    // Si todos los campos son válidos (z llega a 4), mostramos la alerta de éxito.
    if (z === 4) {
        alert("Se ha registrado correctamente.");
    }



});

let z = 0;

function validateEmpty(valueInput) {
    if (valueInput.length == 0) {
        show_error();
    } else {
        eliminate_error();
    }
}
function validateEmpty2(value_lastname) {
    if (value_lastname.length == 0) {
        show_error2();
    } else {
        eliminate_error2();
    }
}
function show_error() {
    alert_name.style.display = "flex";
    first_name.style.border = "1px solid #ff7a7a";
}
function eliminate_error() {
    alert_name.style.display = "none";
    first_name.style.border = "1px solid #38cc8c";
    z++;
}
function show_error2() {
    alert_lastname.style.display = "flex";
    last_name.style.border = "1px solid #ff7a7a";
}
function eliminate_error2() {
    alert_lastname.style.display = "none";
    last_name.style.border = "1px solid #38cc8c";
    z++;
}



function validate_email(emailvalue) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(emailvalue)) {
        email.style.border = "1px solid #ff7a7a";
        alert_email.style.display = "flex";

    } else {
        email.style.border = "1px solid #38cc8c";
        alert_email.style.display = "none";
        z++;
    }

}

function validate_password(passwordvalue) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passwordRegex.test(passwordvalue) == true) {
        password.style.border = "1px solid #38cc8c";
        alert_password.style.display = "none";
        z++;

    } else {
        password.style.border = "1px solid #ff7a7a";
        alert_password.style.display = "flex";
    }

}

