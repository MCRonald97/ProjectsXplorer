
//NAVEGADOR OPCIONES XELA,PETEN,PUERTO_BARRIOS Y CAYALA. 
const navxela = document.querySelector(".nav__opciones--xela");
const navpeten = document.querySelector(".nav__opciones--peten");
const navpuerto = document.querySelector(".nav__opciones--puerto");
const navcayala = document.querySelector(".nav__opciones--cayala");


//CONTENEDORES DE LUGARES XELA,PETEN,PUERTO_BARRIOS Y CAYALA. 
const ctrxela = document.querySelector(".ctr-place--xela");
const ctrpeten = document.querySelector(".ctr-place--Peten");
const ctrpuerto = document.querySelector(".ctr-place--puerto");
const ctrcayala = document.querySelector(".ctr-place--cayala");


//FUNCIONES CLICK PARA MOSTRAR CADA LUGAR.
navxela.addEventListener("click", () => {
  ctrpeten.style.display = "none";
  ctrxela.style.display = "block";
  ctrpuerto.style.display = "none";
  ctrcayala.style.display = "none";
  navpeten.style.backgroundColor = "#121417";
  navxela.style.backgroundColor = "#252d37";
  navpuerto.style.backgroundColor = "#121417";
  navcayala.style.backgroundColor = "#121417";
});


navpeten.addEventListener("click", () => {
  ctrpeten.style.display = "block";
  ctrxela.style.display = "none";
  ctrpuerto.style.display = "none";
  ctrcayala.style.display = "none";
  navpeten.style.backgroundColor = "#252d37";
  navxela.style.backgroundColor = "#121417";
  navpuerto.style.backgroundColor = "#121417";
  navcayala.style.backgroundColor = "#121417";
});


navpuerto.addEventListener("click", () => {
  ctrpeten.style.display = "none";
  ctrxela.style.display = "none";
  ctrcayala.style.display = "none";
  ctrpuerto.style.display = "block";
  navpeten.style.backgroundColor = "#121417";
  navxela.style.backgroundColor = "#121417";
  navpuerto.style.backgroundColor = "#252d37";
  navcayala.style.backgroundColor = "#121417";
});

navcayala.addEventListener("click", () => {
  ctrpeten.style.display = "none";
  ctrxela.style.display = "none";
  ctrpuerto.style.display = "none";
  ctrcayala.style.display = "block";
  navpeten.style.backgroundColor = "#121417";
  navxela.style.backgroundColor = "#121417";
  navpuerto.style.backgroundColor = "#121417";
  navcayala.style.backgroundColor = "#252d37";
});





//REALIZANDO UNA FUNCION PARA CADA ELEMENTO QUE SE SELECCIONE FUNCIONE 


const ctrlugares__selecciones__img__xela = document.querySelectorAll(".ctr-lugares__selecciones__img__xela");



//CONTENEDORES QUE DEBEN DESAPARECER O APARECER AL REALIZAR EL CLICK 
const ctrplacedescription = document.querySelector(".ctr-place--description");

const container__pregunta = document.querySelector(".container__pregunta");

const nav = document.querySelector(".nav");

const ctrplace = document.querySelector(".ctr-place");

const footer = document.querySelector(".footer");


//BOTONES DE REGRESO PARA CADA LUGAR SELECCIONADO
const ctrplacedescription__button__xela = document.querySelector(".ctr-place--description__button__xela");



ctrlugares__selecciones__img__xela.forEach(element => {
  element.addEventListener("click", () => {
    ctrplacedescription.style.display = "block";
    container__pregunta.style.display = "none";
    nav.style.display = "none";
    ctrplace.style.display = "none";
    footer.style.display = "none";
  })
});

ctrplacedescription__button__xela.addEventListener("click", () => {
  ctrplacedescription.style.display = "none";
  container__pregunta.style.display = "block";
  nav.style.display = "flex";
  ctrplace.style.display = "block";
  footer.style.display = "flex";

});



/*AGREGANDO FUNCIONES A LOS CORAZONES PARA FAVORITOS*/

const corazones = document.querySelectorAll(".ctr-lugares__selecciones__hijo__button");

const favoritos = document.querySelector("#favoritos");

corazones.forEach(corazon => {
    corazon.addEventListener("click", () => {
        corazon.classList.toggle("corazon");
        
        if (corazon.classList.contains("corazon")) {
            alert("se ha agregado a la seccion de favoritos");
            addtask();
            
        } else {
          
        }
    });
});




let addtask = () => {
  favoritos.innerHTML += `    
    <div data-aos="fade-up" class="ctr-place__selecciones peten">
      <img class="ctr-lugares__selecciones__img" src="IMG/Tikal.jpg" alt="">
      <div class="ctr-lugares__selecciones__hijo">
        <p class="ctr-lugares__selecciones__hijo__txt">Tikal, Peten <span>4.99</span></p>
        <button class="ctr-lugares__selecciones__hijo__button">
          <img src="IMG/heart.svg" alt="">
        </button>
        <!-- Agrega el botón de "Eliminar" -->
        <button class="eliminar-favorito">Eliminar</button>
      </div>
    </div>`;
};

// Agrega un evento de clic para eliminar elementos favoritos
favoritos.addEventListener("click", (event) => {
  if (event.target.classList.contains("eliminar-favorito")) {
    // Si se hace clic en el botón de eliminar dentro de la sección de favoritos
    // Obtén el elemento padre (el elemento favorito) y elimínalo
    let favoriteItem = event.target.parentElement;
    deleteFavorite(favoriteItem);
  }
});

// Esta función eliminará un elemento favorito
let deleteFavorite = (element) => {
  element.remove();
};






const btnfavoritos = document.querySelector(".footer__btn--favoritos");

const ctrfavoritos = document.querySelector(".ctr-favoritos");

btnfavoritos.addEventListener("click", () => {
  ctrfavoritos.style.display = "block";
  container__pregunta.style.display = "none";
  nav.style.display = "none";
  ctrplace.style.display = "none";

})

