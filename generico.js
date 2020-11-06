// MODO NOCTURNO

let modoNocturno = document.getElementById("modoNocturno");
let letras = document.querySelectorAll('a,p,h2,h1,h3');
let fondoSlider = document.getElementById("slider")
function oscurecer (){
    let logo = document.getElementById("logo")
    var storageNoc = sessionStorage.getItem('dark-mode')
    document.body.classList.toggle('dark');
    fondoSlider.classList.toggle('dark')
    listaHamb.classList.toggle('dark')
    
    if(storageNoc === "true"){
        sessionStorage.setItem('dark-mode','false')
        modoNocturno.innerHTML = "Modo Nocturno"
        logo.src = "/assets/logo-mobile.svg"
        leftslider.src = "/assets/button-slider-left.svg"
        rightslider.src = "/assets/Button-Slider-right.svg"
        leftslider.addEventListener("mouseleave", () => leftslider.src = "/assets/button-slider-left.svg")
        rightslider.addEventListener("mouseleave", () => rightslider.src = "/assets/Button-Slider-right.svg")
        for (let i = 0; i < letras.length; i++) {
            letras[i].classList.toggle('white')
        }
    }
    
    else{
        for (let i = 0; i < letras.length; i++) {
            letras[i].classList.toggle('white')
        }
        sessionStorage.setItem('dark-mode', true)
        modoNocturno.innerHTML = "Modo Diurno"; 
        logo.src = "/assets/logo-mobile-modo-noct.svg"
        leftslider.src = "/assets/button-slider-left-md-noct.svg"
        rightslider.src = "/assets/button-slider-right-md-noct.svg"
        rightslider.addEventListener("mouseleave", () => rightslider.src = "/assets/button-slider-right-md-noct.svg")
        leftslider.addEventListener("mouseleave", () => leftslider.src = "/assets/button-slider-left-md-noct.svg")
    }
};

let hamburguesa = document.getElementById("hamburguesa");
let listaHamb = document.getElementById("menuNav");
let masNav = document.getElementById("masNav")
function burger() {
    listaHamb.classList.toggle('listHamb')
        if(hamburguesa.classList.contains('hamburguesa')){
            hamburguesa.classList.remove('hamburguesa')
            hamburguesa.classList.add('burgerOn')
            hamburguesa.src = "/assets/Button-close-modo-noc.svg"
        }
        else{
            hamburguesa.classList.remove('burgerOn')
            hamburguesa.classList.add('hamburguesa')
            hamburguesa.src = "/assets/burger.svg"
        }
};

// SLIDER PAGINA PRINCIPAL


var imagenslider = document.getElementById("imagenslider")
var imagenslider2 = document.getElementById("imagenslider2")
var imagenslider3 = document.getElementById("imagenslider3")

arrayImagenes = ["/assets/image1.jpg", "/assets/image2.jpg", "/assets/image3.jpg", "/assets/image1.jpg", "/assets/image2.jpg", "/assets/image3.jpg"];

function renderizarSlider () {
    imagenslider.src = arrayImagenes[0];
    imagenslider2.src = arrayImagenes[1];
    imagenslider3.src = arrayImagenes[2];
}
renderizarSlider();

var contImagenes = 0;
let leftslider = document.getElementById("leftslider")
leftslider.addEventListener("mouseover", () => leftslider.src = "/assets/button-slider-left-hover.svg")
leftslider.addEventListener("mouseleave", () => leftslider.src = "/assets/button-slider-left.svg")

leftslider.addEventListener("click", function(){

    if(contImagenes > 0){
        contImagenes --;
        imagenslider.src = arrayImagenes[contImagenes]
        imagenslider2.src = arrayImagenes[contImagenes + 1]
        imagenslider3.src = arrayImagenes[contImagenes + 2]    
    }
    else{

    }
});

let rightslider = document.getElementById("rightslider")
rightslider.addEventListener("mouseover", () => rightslider.src = "/assets/Button-Slider-right-hover.svg")
rightslider.addEventListener("mouseleave", () => rightslider.src = "/assets/Button-Slider-right.svg")

rightslider.addEventListener("click", function(){
    if(contImagenes < (arrayImagenes.length - 3)){
        imagenslider.src = arrayImagenes[contImagenes + 1]
        imagenslider2.src = arrayImagenes[contImagenes + 2]
        imagenslider3.src = arrayImagenes[contImagenes + 3]
        contImagenes ++;
    }
    else{

    }
});

// imagenslider.addEventListener("mouseover", function(){
//     var miniDiv1 = document.createElement("div")
//     imagenslider.appendChild(miniDiv1)
// });
// // imagenslider.addEventListener("mouseleave", function(){
// //     let borrar = imagenslider.lastChild;
// //     imagenslider.removeChild(borrar)
// // });