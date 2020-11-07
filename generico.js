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

// SLIDER TRENDING


arrayTrending = [];
let trending = "http://api.giphy.com/v1/gifs/trending?api_key=2Yn9FN3BmE8DqIq2KEG6rApYylEX0ZdQ&limit=10"
fetch(trending)
.then(resp => resp.json())
.then(resp => {
    console.log(resp);
    for (let i = 0; i < 10; i++) {
        let element = resp.data[i].images.downsized.url;
        arrayTrending.push(element)
     }
     imagenslider.src = arrayTrending[0];
     imagenslider2.src = arrayTrending[1];
     imagenslider3.src = arrayTrending[2];

    });


var imagenslider = document.getElementById("imagenslider")
var imagenslider2 = document.getElementById("imagenslider2")
var imagenslider3 = document.getElementById("imagenslider3")


var contImagenes = 0;
let leftslider = document.getElementById("leftslider")
leftslider.addEventListener("mouseover", () => leftslider.src = "/assets/button-slider-left-hover.svg")
leftslider.addEventListener("mouseleave", () => leftslider.src = "/assets/button-slider-left.svg")

leftslider.addEventListener("click", function(){

    if(contImagenes > 0){
        contImagenes --;
        imagenslider.src = arrayTrending[contImagenes]
        imagenslider2.src = arrayTrending[contImagenes + 1]
        imagenslider3.src = arrayTrending[contImagenes + 2]    
    }
    else{

    }
});

let rightslider = document.getElementById("rightslider")
rightslider.addEventListener("mouseover", () => rightslider.src = "/assets/Button-Slider-right-hover.svg")
rightslider.addEventListener("mouseleave", () => rightslider.src = "/assets/Button-Slider-right.svg")

rightslider.addEventListener("click", function(){
    if(contImagenes < (arrayTrending.length - 3)){
        imagenslider.src = arrayTrending[contImagenes + 1]
        imagenslider2.src = arrayTrending[contImagenes + 2]
        imagenslider3.src = arrayTrending[contImagenes + 3]
        contImagenes ++;
    }
    else{

    }
});

    


