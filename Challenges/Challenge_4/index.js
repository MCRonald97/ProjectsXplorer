
document.addEventListener("DOMContentLoaded", function () {
    const firstcontainer = document.querySelector(".firstcontainer");
    const container = document.querySelector(".container");
    const name = document.getElementById("text");
    const form = document.getElementById("registro-form");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const modal = document.getElementById("modal");
    const modal_boton = document.querySelector(".modal_boton");

    // PRIMERA SECCION DE LA APP 
    const input_name = document.getElementById("input_name");
    const submit_name = document.getElementById("submit_name");
    const container__p = document.querySelector(".container__p");

   // FUNCION DE VALIDACION DE INGRESO DE NOMBRE
   
   submit_name.addEventListener("click", ()=> {
     let name_value = input_name.value;

     if (name_value === "") {
        alert("ingresa un nombre de lo contrario no puedes avanzar");
     }else{
        firstcontainer.style.display="none";
        container.style.display= "block";
        container__p.textContent = name_value;

     }

   });



    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        const namePattern = /^[a-zA-Z\s]+$/;
        
        const nameValue = name.value;
        const emailValue = email.value;
        const passwordValue = password.value;
        

        

        if (!namePattern.test(nameValue)) {
            alert("Debes ingresar un nombre válido.");
            return;
        }

        if (!emailPattern.test(emailValue)) {
            alert("Debes ingresar un email válido.");
            return;
        }
        
        if (!passwordPattern.test(passwordValue)) {
            alert("Debes crear una contraseña válida.");
            return;
        }
        
        if (emailPattern.test(emailValue) && passwordPattern.test(passwordValue)) {
            modal.showModal();
            email.value = "";
            password.value = "";
            name.value = "";
        }

        modal_boton.addEventListener("click", ()=>{
            modal.close();
            container.style.display="none";
            firstcontainer.style.display="block";
            input_name.value= "";
        })
    });
});



