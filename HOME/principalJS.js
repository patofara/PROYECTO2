// // HAMBURGUESA 
let hamburguesa = document.getElementById("hamburguesa");
let listaHamb = document.getElementById("menuNav");
let masNav = document.getElementById("masNav")
hamburguesa.addEventListener("click", function() {
    if(hamburguesa.classList.contains("hamburguesa")){
        hamburguesa.src = "/assets/Button-close-hover-modo-noc.svg";
        hamburguesa.classList.remove('hamburguesa')
        hamburguesa.classList.add('burgerOn')
        listaHamb.classList.remove('noListHamb');
        listaHamb.classList.add('listHamb');
    }
    else{
        hamburguesa.classList.remove('burgerOn')
        hamburguesa.classList.add('hamburguesa')
        hamburguesa.src = "/assets/burger.svg"
        listaHamb.classList.remove('listHamb');
        listaHamb.classList.add('noListHamb');

    }
})

// MODO NOCTURNO


// !! menu hambruguesa blanco
// !! letras blancas
// fondo negro
let modoNocturno = document.getElementById("modoNocturno");
let letras = document.querySelectorAll('a,p,h1,h3');
let fondoSlider = document.getElementById("slider")
let logo = document.getElementById("logo")
modoNocturno.addEventListener("click", function(){
    document.body.classList.toggle('dark');
    fondoSlider.classList.toggle('dark')
    listaHamb.classList.toggle('dark')
    
    for (let i = 0; i < letras.length; i++) {
         letras[i].classList.toggle('white')
    }
    if(document.body.classList.contains('dark')){
    sessionStorage.setItem('dark-mode', 'true')
    modoNocturno.innerHTML = "Modo Diurno"; 
    logo.src = "/assets/logo-mobile-modo-noct.svg"
    hamburguesa.src = "/assets/Button-close-modo-noc.svg"
    leftslider.src = "/assets/button-slider-left-md-noct.svg"
    rightslider.src = "/assets/button-slider-right-md-noct.svg"

    }
   
    // else if(listaHamb.classList.contains('dark') && hamburguesa.classList.contains("hamburguesa")){
    // hamburguesa.src = "/assets/burger-modo-noct.svg";
    // leftslider.src = "/assets/button-slider-left.svg"
    // rightslider.src = "/assets/Button-Slider-right.svg" 
    // }
    
    else{
    sessionStorage.setItem('dark-mode','false')
    modoNocturno.innerHTML = "Modo Nocturno"
    logo.src = "/assets/logo-mobile.svg"
    hamburguesa.src = "/assets/Button-close-hover-modo-noc.svg";
    leftslider.src = "/assets/button-slider-left.svg"
    rightslider.src = "/assets/Button-Slider-right.svg"
    }
});



// Local storage

// // NO ANDAN LOS SLIDER CUANDO ESTO ESTA ACTIVADO
// if(sessionStorage.getItem('dark-mode') === 'true'){
//     modoNocturno.innerHTML = "Modo Diurno";
//     document.body.classList.toggle('dark');
//     fondoSlider.classList.toggle('dark')
//     listaHamb.classList.toggle('dark')
//     hamburguesa.src = "/assets/Button-close-modo-noc.svg"
//     leftslider.src = "/assets/button-slider-left-md-noct.svg"
//     rightslider.src = "/assets/button-slider-right-md-noct.svg"
//     logo.src = "/assets/logo-mobile-modo-noct.svg"
// }
// else{
//     logo.src = "/assets/logo-mobile.svg"
//     modoNocturno.innerHTML = "Modo Nocturno";
//     hamburguesa.src = "/assets/Button-close-hover-modo-noc.svg";
//     leftslider.src = "/assets/button-slider-left.svg"
//     rightslider.src = "/assets/Button-Slider-right.svg"
// };


// SLIDER PAGINA PRINCIPAL



arrayImagenes = ["/assets/image1.jpg", "/assets/image2.jpg", "/assets/image3.jpg"];
var contImagenes = 0;

let leftslider = document.getElementById("leftslider")
leftslider.addEventListener("mouseover", () => leftslider.src = "/assets/button-slider-left-hover.svg")
leftslider.addEventListener("mouseleave", () => leftslider.src = "/assets/button-slider-left.svg")

leftslider.addEventListener("click", function(){
    let imagenslider = document.getElementById("imagenslider")
    if(contImagenes > 0){
        imagenslider.src = arrayImagenes[contImagenes - 1]
        contImagenes --;
        
    }
    else{
        imagenslider.src = arrayImagenes[arrayImagenes.length - 1]

        contImagenes = arrayImagenes.length - 1;
    }
    
    
    
});

let rightslider = document.getElementById("rightslider")
rightslider.addEventListener("mouseover", () => rightslider.src = "/assets/Button-Slider-right-hover.svg")
rightslider.addEventListener("mouseleave", () => rightslider.src = "/assets/Button-Slider-right.svg")

rightslider.addEventListener("click", function(){
    if(contImagenes < (arrayImagenes.length - 1)){
        imagenslider.src = arrayImagenes[contImagenes + 1]
        contImagenes ++;
    }
    else{
        imagenslider.src = arrayImagenes[0]
        contImagenes = 0;
    }
});

