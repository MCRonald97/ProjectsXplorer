//TODO: COLECCION DE CONTENEDORES

let firstcontainer = document.querySelector(".firstcontainer");
let secondcontainer = document.querySelector(".secondcontainer");
let thirdcontainer = document.querySelector(".thirdcontainer");
let resultadofinal = document.querySelector(".resultadofinal");
//TODO: fin DE CONTENEDORES






let carbuttons__boton = document.querySelectorAll(".carbuttons__boton");
let buttonone = document.querySelector(".buttonone");

//FIXME:BOTON SIGUIENTE 1*/
let btnpositivosiguiente1 = document.querySelector(".btnpositivosiguiente1");

let btnnegativosiguiente1 = document.querySelector(".btnnegativosiguiente1");
//FIXME:BOTON SIGUIENTE 1*/




//FIXME:INICIO DE ALERTAS POR RESPUESTA*/
let resultadopositivo1 = document.querySelector(".resultadopositivo1");
let resultadonegativo1 = document.querySelector(".resultadonegativo1");

//FIXME:FIN DE ALERTAS POR RESPUESTA*/


let calculo = document.querySelector(".calculo");
let puntos = 0;
let selectedCar = ' ';

carbuttons__boton.forEach(button => {
    button.addEventListener("click", event => {
        selectedCar = event.target.innerText;
        buttonone.style.backgroundColor = "#fb7413";
    })
})

buttonone.addEventListener("click", () => {
    if (selectedCar === " ") {
        alert("selecciona una respuesta");

    } else if (selectedCar === "Ferrari") {
        puntos += 1;
        resultadopositivo1.style.display = "flex";
        firstcontainer.style.display = "none";
      
        
    } else {
        resultadonegativo1.style.display = "flex";
        firstcontainer.style.display = "none";
        
    }
    calculo.textContent = puntos;
});


btnpositivosiguiente1.addEventListener("click", () => {
    secondcontainer.style.display = "block";
    resultadopositivo1.style.display = "none";

})
resultadonegativo1.addEventListener("click", () => {
    secondcontainer.style.display = "block";
    resultadonegativo1.style.display = "none";
})







/*SEGUNDO ALGORITMO*/

//FIXME:INICIO DE ALERTAS POR RESPUESTA*/
let resultadopositivo2 = document.querySelector(".resultadopositivo2");
let resultadonegativo2 = document.querySelector(".resultadonegativo2");
//FIXME:FIN DE ALERTAS POR RESPUESTA*/




//FIXME:BOTON SIGUIENTE 2*/
let btnpositivosiguiente2 = document.querySelector(".btnpositivosiguiente2");

let btnnegativosiguiente2 = document.querySelector(".btnnegativosiguiente2");
//FIXME:BOTON SIGUIENTE 2*/



let carbuttons__boton2 = document.querySelectorAll(".carbuttons__boton2");

let buttontwo = document.querySelector(".buttontwo");

let selectedCar2 = ' ';

carbuttons__boton2.forEach(button => {
    button.addEventListener("click", event => {
        selectedCar2 = event.target.innerText;
        buttontwo.style.backgroundColor = "#fb7413";
    });
});

buttontwo.addEventListener("click", () => {
    if (selectedCar2 === " ") {
        alert("selecciona una respuesta");
    } else if (selectedCar === "Mercedes-benz") {
        puntos += 1;
        resultadopositivo2.style.display = "flex";
        secondcontainer.style.display = "none";
    } else {
       
        resultadonegativo2.style.display = "flex";
        secondcontainer.style.display = "none";
    }
    calculo.textContent = puntos;
});

btnpositivosiguiente2.addEventListener("click", () => {
    thirdcontainer.style.display = "block";
    resultadopositivo2.style.display = "none";
});

btnnegativosiguiente2.addEventListener("click", () => {
    thirdcontainer.style.display = "block";
    resultadonegativo2.style.display = "none";
})








/*TERCER ALGORITMO*/


//FIXME:INICIO DE ALERTAS POR RESPUESTA*/
let resultadopositivo3 = document.querySelector(".resultadopositivo3");
let resultadonegativo3 = document.querySelector(".resultadonegativo3");
//FIXME:FIN DE ALERTAS POR RESPUESTA*/


//FIXME:BOTON SIGUIENTE 2*/
let btnpositivosiguiente3 = document.querySelector(".btnpositivosiguiente3");

let btnnegativosiguiente3 = document.querySelector(".btnnegativosiguiente3");
//FIXME:BOTON SIGUIENTE 2*/


btnpositivosiguiente3.addEventListener("click", () => {
    resultadofinal.style.display = "flex";
    resultadopositivo3.style.display = "none";
});

btnnegativosiguiente3.addEventListener("click", () => {
    resultadofinal.style.display = "flex";
    resultadonegativo3.style.display = "none";
})




const carbuttons__boton3 = document.querySelectorAll(".carbuttons__boton3");

let buttonthree = document.querySelector(".buttonthree");


let selectedCar3 = ' ';

carbuttons__boton3.forEach(button => {
    button.addEventListener("click", event => {
        selectedCar3 = event.target.innerText;
        buttonthree.style.backgroundColor = "#fb7413";
    });
});

buttonthree.addEventListener('click', () => {
    if (selectedCar3 === " ") {
        alert("debes seleccionar una respuesta");
    } else if (selectedCar3 === "Tesla") {
        puntos += 1;
        resultadopositivo3.style.display = "flex";
        thirdcontainer.style.display = "none";
    } else {
        
        resultadonegativo3.style.display = "flex";
        thirdcontainer.style.display = "none";
    }
    calculo.textContent = puntos;
})

/*RESULTADO FINAL*/

const resultadofinalbtn = document.querySelector(".resultadofinalbtn");




resultadofinal.addEventListener("click", () => {
    resultadofinal.style.display = "none";
})