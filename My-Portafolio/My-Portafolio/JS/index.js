
const menubtn=document.getElementById("menubtn");
const modal=document.getElementById("modal");
const close_modal=document.getElementById("close_modal");

menubtn.addEventListener("click",()=>{
  modal.showModal();

})

close_modal.addEventListener("click",()=>{
     modal.close();
   })





   modal.addEventListener("click", (event)=>{
     if (event.target.tagName === "IMG") {
          modal.close();
     }
   
   }); 
    




//CAMBIO DE COLOR DE PANTALLA Y SUS ELEMENTOS 

const white_mode =document.getElementById("white_mode");
const body =document.querySelector("body");

load();

white_mode.addEventListener("click", (event)=>{
     body.classList.toggle("lightmode");
     store(body.classList.contains("lightmode"));
     
})









/*PREVIENE QUE CUANDO SE CAMBIE EL TEMA NO SE REINICIE */
function load() {
     const lightmode =localStorage.getItem("lightmode");

     if (!lightmode) {
          store("false");
     }else if (lightmode == "true"){
          body.classList.add("lightmode")
     }
}

function store(value) {
     localStorage.setItem("lightmode", value)
}









//AGREGAR ALERTA SI EL CORREO ES INVALIDO 
const correo =document.getElementById("correo");
const boton_error =document.getElementById("boton_error");
const error =document.getElementById("error");


boton_error.addEventListener("click",(event)=>{
     event.preventDefault();
     mifuncion_error(correo.value);
})

function mifuncion_error(emails) {
    let expReg =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;  

    
    
    if(expReg.test(emails) == true){
     correo.style.border="1px solid var(--verde)";
     error.style.display="none"; 
     correo.value ='';
    }
    else {
     error.style.display="block"; 
     correo.style.border="1px solid red";
    }


}



//MODALES SECCION DE PROYECTOS 


