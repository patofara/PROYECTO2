        // MODO NOCTURNO

let modoNocturno = document.getElementById("modoNocturno");
let logo = document.getElementById("logo")

function oscurecer (){
    let storageNoc = sessionStorage.getItem('dark-mode')
    document.body.classList.toggle('dark');
    if(storageNoc === "true"){
        sessionStorage.setItem('dark-mode', false)
        modoNocturno.innerHTML = "Modo Nocturno"
        logo.src = "/assets/logo-mobile.svg"
        leftslider.src = "/assets/button-slider-left.svg"
        rightslider.src = "/assets/Button-Slider-right.svg"
        leftslider.addEventListener("mouseleave", () => leftslider.src = "/assets/button-slider-left.svg")
        rightslider.addEventListener("mouseleave", () => rightslider.src = "/assets/Button-Slider-right.svg")
    }
    
    else{
        sessionStorage.setItem('dark-mode', true)
        modoNocturno.innerHTML = "Modo Diurno"; 
        logo.src = "/assets/logo-mobile-modo-noct.svg"
        leftslider.src = "/assets/button-slider-left-md-noct.svg"
        rightslider.src = "/assets/button-slider-right-md-noct.svg"
        rightslider.addEventListener("mouseleave", () => rightslider.src = "/assets/button-slider-right-md-noct.svg")
        leftslider.addEventListener("mouseleave", () => leftslider.src = "/assets/button-slider-left-md-noct.svg")
    }
};



        // Menu Hamburugesa


let hamburguesa = document.getElementById("hamburguesa");
let listaHamb = document.getElementById("menuNav");
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



        // cambia de src con un mouseover y mouseleave


function cambiarSrc(elemento,src1,src2) {
    elemento.addEventListener("mouseover", () => {elemento.src = src1})
    elemento.addEventListener("mouseleave", () => {elemento.src = src2})
}

        // SLIDER TRENDING

        // let urlTrendings = fetch ("http://api.giphy.com/v1/gifs/trending?api_key=2Yn9FN3BmE8DqIq2KEG6rApYylEX0ZdQ&limit=12 ")
        // .then (param =>
        //     param.json()        
        // )
        // .then (param =>
        //     console.log(param)
        // )
let trending = fetch("http://api.giphy.com/v1/gifs/trending?api_key=2Yn9FN3BmE8DqIq2KEG6rApYylEX0ZdQ&limit=12")
.then(resp => resp.json())
.then(resp => { 
    for (let i = 0; i < 12; i++) {
        let element = resp.data[i].images.downsized.url;
        arrayTrending.push(element)
     }
     imagenslider.src = arrayTrending[0];
     imagenslider2.src = arrayTrending[1];
     imagenslider3.src = arrayTrending[2];

    });

    
arrayTrending = [];
var imagenslider = document.getElementById("imagenslider")
var imagenslider2 = document.getElementById("imagenslider2")
var imagenslider3 = document.getElementById("imagenslider3")



        // contador para el array del carrusel

var contImagenes = 0;

let leftslider = document.getElementById("leftslider")
cambiarSrc(leftslider, "/assets/button-slider-left-hover.svg", "/assets/button-slider-left.svg")

leftslider.addEventListener("click", function(){

    if(contImagenes > 0){
        contImagenes --;
        imagenslider.src = arrayTrending[contImagenes]
        imagenslider2.src = arrayTrending[contImagenes + 1]
        imagenslider3.src = arrayTrending[contImagenes + 2]  
        meGusta1.src = "/assets/icon-fav.svg";  
        h++;
    }
    else{

    }
});

let rightslider = document.getElementById("rightslider")
cambiarSrc(rightslider, "/assets/Button-Slider-right-hover.svg", "/assets/Button-Slider-right.svg")

rightslider.addEventListener("click", function(){
    if(contImagenes < (arrayTrending.length - 3)){
        imagenslider.src = arrayTrending[contImagenes + 1]
        imagenslider2.src = arrayTrending[contImagenes + 2]
        imagenslider3.src = arrayTrending[contImagenes + 3]
        contImagenes ++;
        meGusta1.src = "/assets/icon-fav.svg";
        h++;
    }
    else{

    }
});


        // Hover de los accesos de los Gifs

var h=1;
let meGusta1 = document.getElementById("meGusta1")
meGusta1.addEventListener("mouseover", () => {
     if (h % 2 != 0) {
         meGusta1.src = "/assets/icon-fav-hover.svg";
    }
    else{

    }
})
         
meGusta1.addEventListener("mouseleave", () => {
     if (h % 2 != 0) {
         meGusta1.src = "/assets/icon-fav.svg";
    }
    else{
        
    }
})
meGusta1.addEventListener("click", () => {
    
    h++;
    if (h % 2 == 0) {
    meGusta1.src = "/assets/icon-fav-active.svg";
    }
    else{
        meGusta1.src = "/assets/icon-fav-hover.svg";
    }
})

 let megusta2 = document.getElementById("meGusta2")
 cambiarSrc(megusta2, "/assets/icon-fav-hover.svg", "/assets/icon-fav.svg")
 let megusta3 = document.getElementById("meGusta3")
 cambiarSrc(megusta3, "/assets/icon-fav-hover.svg", "/assets/icon-fav.svg")
 let expandir1 = document.getElementById("expandir1")
 cambiarSrc(expandir1, "/assets/icon-max-hover.svg", "/assets/icon-max-normal.svg")
 let expandir2 = document.getElementById("expandir2")
 cambiarSrc(expandir2, "/assets/icon-max-hover.svg", "/assets/icon-max-normal.svg")
 let expandir3 = document.getElementById("expandir3")
 cambiarSrc(expandir3, "/assets/icon-max-hover.svg", "/assets/icon-max-normal.svg")
 let descargar1 = document.getElementById("descargar1")
 cambiarSrc(descargar1, "/assets/icon-download-hover.svg", "/assets/icon-download.svg")
 let descargar2 = document.getElementById("descargar2")
 cambiarSrc(descargar2, "/assets/icon-download-hover.svg", "/assets/icon-download.svg")
 let descargar3 = document.getElementById("descargar3")
 cambiarSrc(descargar3, "/assets/icon-download-hover.svg", "/assets/icon-download.svg")
        
 
        // Hover de las redes sociales


let facebook = document.getElementById("facebook")
cambiarSrc(facebook, "/assets/icon_facebook_hover.svg", "/assets/icon_facebook.svg")
let twitter = document.getElementById("twitter")
cambiarSrc(twitter, "/assets/icon-twitter-hover.svg", "/assets/icon-tw-normal.svg")
let instagram = document.getElementById("instagram")
cambiarSrc(instagram, "/assets/icon_instagram-hover.svg", "/assets/icon_instagram.svg")




