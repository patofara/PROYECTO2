// MODO NOCTURNO

let modoNocturno = document.getElementById("modoNocturno");
let logo = document.getElementById("logo")
let masNav = document.getElementById("masNav")
cambiarSrc(masNav, "../assets/CTA-crear-gifo-hover.svg", "../assets/button-crear-gifo.svg")

if (localStorage.getItem('favoritos')) {
    arrayFav = JSON.parse(localStorage.getItem('favoritos'))
}
else {
    var arrayFav = [];
}
function oscurecer() {
    let storageNoc = sessionStorage.getItem('dark-mode')
    if (storageNoc === "false") {
        document.body.classList.remove('dark');
        sessionStorage.setItem('dark-mode', true)
        closeExpansion.src = "../assets/close.svg"
        modoNocturno.innerHTML = "Modo Nocturno"
        hamburguesa.src = "../assets/close.svg"
        logo.src = "../assets/logo-mobile.svg"
        leftslider.src = "../assets/button-slider-left.svg"
        rightslider.src = "../assets/Button-Slider-right.svg"
        leftslider.addEventListener("mouseleave", () => leftslider.src = "../assets/button-slider-left.svg")
        rightslider.addEventListener("mouseleave", () => rightslider.src = "../assets/Button-Slider-right.svg")
    }

    else {
        document.body.classList.add('dark');
        closeExpansion.src = "../assets/close-modo-noct.svg"
        sessionStorage.setItem('dark-mode', false)
        hamburguesa.src = "../assets/close-modo-noct.svg"
        modoNocturno.innerHTML = "Modo Diurno";
        logo.src = "../assets/logo-mobile-modo-noct.svg"
        leftslider.src = "../assets/button-slider-left-md-noct.svg"
        rightslider.src = "../assets/button-slider-right-md-noct.svg"
        rightslider.addEventListener("mouseleave", () => rightslider.src = "../assets/button-slider-right-md-noct.svg")
        leftslider.addEventListener("mouseleave", () => leftslider.src = "../assets/button-slider-left-md-noct.svg")
    }
};
function storageDark() {
    if (storageNoc === "false") {
        document.body.classList.add('dark');
        modoNocturno.innerHTML = "Modo Diurno";
        logo.src = "../assets/logo-mobile-modo-noct.svg"
        hamburguesa.src = "../assets/burger-modo-noct.svg"
        leftslider.src = "../assets/button-slider-left-md-noct.svg"
        rightslider.src = "../assets/button-slider-right-md-noct.svg"
        rightslider.addEventListener("mouseleave", () => rightslider.src = "../assets/button-slider-right-md-noct.svg")
        leftslider.addEventListener("mouseleave", () => leftslider.src = "../assets/button-slider-left-md-noct.svg")
    }
    else {
        document.body.classList.remove('dark');
    }
}


// Menu Hamburugesa


let hamburguesa = document.getElementById("hamburguesa");
let listaHamb = document.getElementById("menuNav");
function burger() {
    listaHamb.classList.toggle('listHamb')
    //  
    if (hamburguesa.classList.contains('hamburguesa') && document.body.classList.contains('dark')) {
        hamburguesa.classList.remove('hamburguesa')
        hamburguesa.classList.add('burgerOn')
        hamburguesa.src = "../assets/close-modo-noct.svg"
        document.body.style = "overflow-y: hidden"
    }
    else if (hamburguesa.classList.contains('hamburguesa')) {
        hamburguesa.classList.remove('hamburguesa')
        hamburguesa.classList.add('burgerOn')
        hamburguesa.src = "../assets/close.svg"
        document.body.style = "overflow-y: hidden"
    }
    else if (hamburguesa.classList.contains('burgerOn') && document.body.classList.contains('dark')) {
        hamburguesa.classList.remove('burgerOn')
        hamburguesa.classList.add('hamburguesa')
        hamburguesa.src = "../assets/burger-modo-noct.svg"
        document.body.style = "overflow-y: auto"
    }
    else {
        hamburguesa.classList.remove('burgerOn')
        hamburguesa.classList.add('hamburguesa')
        hamburguesa.src = "../assets/burger.svg"
        document.body.style = "overflow-y: auto"
    }
};



// cambia de src con un mouseover y mouseleave


function cambiarSrc(elemento, src1, src2) {
    elemento.addEventListener("mouseover", () => { elemento.src = src1 })
    elemento.addEventListener("mouseleave", () => { elemento.src = src2 })
}


arrayTrending = [];
arrayTrendingObj = [];
let trending = fetch("https://api.giphy.com/v1/gifs/trending?api_key=2Yn9FN3BmE8DqIq2KEG6rApYylEX0ZdQ&limit=12")
    .then(resp => resp.json())
    .then(resp => {
        for (let i = 0; i < 12; i++) {
            let objetos = resp.data[i]
            arrayTrendingObj.push(objetos)
            let element = resp.data[i].images.downsized.url;
            arrayTrending.push(element)
        }
        imagenslider1.src = arrayTrending[0];
        imagenslider2.src = arrayTrending[1];
        imagenslider3.src = arrayTrending[2];
        
    });
    

var imagenslider1 = document.getElementById("imagenslider1")
var imagenslider2 = document.getElementById("imagenslider2")
var imagenslider3 = document.getElementById("imagenslider3")



// contador para el array del carrusel

var contImagenes = 0;

let leftslider = document.getElementById("leftslider")
cambiarSrc(leftslider, "../assets/button-slider-left-hover.svg", "../assets/button-slider-left.svg")

leftslider.addEventListener("click", function () {

    if (contImagenes > 0) {
        contImagenes--;
        imagenslider1.src = arrayTrending[contImagenes]
        imagenslider2.src = arrayTrending[contImagenes + 1]
        imagenslider3.src = arrayTrending[contImagenes + 2]
        for (let i = 0; i < meGusta.length; i++) {
            let element1 = meGusta[i];
            element1.src = "../assets/icon-fav.svg"
            element1.addEventListener("mouseover", () => { element1.src = "../assets/icon-fav-hover.svg"; })
            element1.addEventListener("mouseleave", () => { element1.src = "../assets/icon-fav.svg"; })
        }
    }

});

let rightslider = document.getElementById("rightslider")
cambiarSrc(rightslider, "../assets/Button-Slider-right-hover.svg", "../assets/Button-Slider-right.svg")

rightslider.addEventListener("click", function () {
    if (contImagenes < (arrayTrending.length - 3)) {
        imagenslider1.src = arrayTrending[contImagenes + 1]
        imagenslider2.src = arrayTrending[contImagenes + 2]
        imagenslider3.src = arrayTrending[contImagenes + 3]
        contImagenes++;
        for (let i = 0; i < meGusta.length; i++) {
            let element1 = meGusta[i];
            element1.src = "../assets/icon-fav.svg"
            element1.addEventListener("mouseover", () => { element1.src = "../assets/icon-fav-hover.svg"; })
            element1.addEventListener("mouseleave", () => { element1.src = "../assets/icon-fav.svg"; })
        }
    }
});

// AGREGAR A FAV

let slider = document.getElementById("slider")
let tituloExpansion = document.getElementById("tituloExpansion")
let favExpansion = document.getElementById("favExpansion")
let closeExpansion = document.getElementById("closeExpansion")
let hrefExpansion = document.getElementById("hrefExpansion")
let meGusta = document.getElementsByClassName("meGusta")
let expandir = document.getElementsByClassName("expandir")
let descargar = document.getElementsByClassName("descargar")
let href = document.getElementsByClassName("href")
let main = document.getElementById("main")
let tituloTrending = document.getElementById("tituloTrending")
let expansion = document.getElementById("expansion")
let imagenExpandida = document.getElementById("imagenExpandida")
let imgTrending = document.getElementsByClassName("imgTrending")
function accionMeGusta() {
    for (let i = 0; i < meGusta.length; i++) {
        // AGREGAR IMG A FAVORITOS

        let element1 = meGusta[i]
        element1.addEventListener("mouseover", () => { element1.src = "../assets/icon-fav-hover.svg"; })
        element1.addEventListener("mouseleave", () => { element1.src = "../assets/icon-fav.svg"; })
        element1.addEventListener("click", () => {
            let indexElement = window["imagenslider" + (i + 1)].src
            if (arrayFav.includes(indexElement)) {
                element1.src = "../assets/icon-fav.svg"
                let indice = arrayFav.indexOf(indexElement)
                arrayFav.splice(indice, 1)
                element1.addEventListener("mouseover", () => { element1.src = "../assets/icon-fav-hover.svg"; })
                element1.addEventListener("mouseleave", () => { element1.src = "../assets/icon-fav.svg"; })
            }
            else {
                arrayFav.push(indexElement)
                element1.src = "../assets/icon-fav-active.svg"
                element1.addEventListener("mouseover", () => { element1.src = "../assets/icon-fav-active.svg"; })
                element1.addEventListener("mouseleave", () => { element1.src = "../assets/icon-fav-active.svg"; })
            }
            localStorage.setItem('favoritos', JSON.stringify(arrayFav))
        })

        // EXPANDIR IMAGENES 

        let element2 = expandir[i]
        cambiarSrc(element2, "../assets/icon-max-hover.svg", "../assets/icon-max-normal.svg")
        element2.addEventListener("click", () => {
            let indexElement = window["imagenslider" + (i + 1)].src
            main.setAttribute("hidden", "")
            tituloTrending.setAttribute("hidden", "")
            element2.setAttribute("id", "expandir" + i)
            expansion.removeAttribute("hidden")
            imagenExpandida.src = indexElement
            sectionBuscados.style = "display : none"
            imgMAX()
            tituloExpansion.innerHTML = arrayTrendingObj[i].title
        })
        // CLICK PARA EXPANDIR EN MOBILE
        let imgMaxMob = imgTrending[i]
        imgMaxMob.addEventListener("click", () => {
            let indexElement = window["imagenslider" + (i + 1)].src
            main.setAttribute("hidden", "")
            tituloTrending.setAttribute("hidden", "")
            element2.setAttribute("id", "expandir" + i)
            expansion.removeAttribute("hidden")
            imagenExpandida.src = indexElement
            imgMAX()
        })

        // DESCARGAR IMAGENES

        let element3 = descargar[i]
        let element3url = href[i]
        element3url.setAttribute("title", "Descargar Gif")
        element3url.addEventListener("click", () => {
            descargarGifo(window["imagenslider" + (i + 1)].src, "Trending Gif")
        })
        cambiarSrc(element3, "../assets/icon-download-hover.svg", "../assets/icon-download.svg")
    }
}
async function descargarGifo(url, titulo) {

    //create new a element
    let a = document.createElement('a');
    let response = await fetch(url);
    let file = await response.blob();
    a.download = titulo;
    a.href = window.URL.createObjectURL(file);

    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');

    a.click();
}

accionMeGusta() 

function imgMAX() {
    if (document.body.classList.contains('dark')){
        closeExpansion.src = "../assets/close-modo-noct.svg"
    }
    favExpansion.src = "../assets/icon-fav.svg"
    let indexElement = imagenExpandida.src
    

    closeExpansion.addEventListener("click", () => {
        main.removeAttribute("hidden")
        expansion.setAttribute("hidden", "")
        sectionBuscados.style = "display: flex;"
        main.style= "display: block;"
        slider.style = "display block;"
    })
    favExpansion.addEventListener("click", () => {
        if (arrayFav.includes(indexElement)) {
            let indice = arrayFav.indexOf(indexElement)
            arrayFav.splice(indice, 1)
            favExpansion.src = "../assets/icon-fav.svg"
        }
        else {
            arrayFav.push(indexElement)
            favExpansion.src = "../assets/iconFavActivo.svg"
        }
        localStorage.setItem('favoritos', JSON.stringify(arrayFav))
    })
    hrefExpansion.addEventListener("click", ()=>{
        descargarGifo(indexElement, "Trending Gif")
     })
}



// Hover de las redes sociales


let facebook = document.getElementById("facebook")
cambiarSrc(facebook, "../assets/icon_facebook_hover.svg", "../assets/icon_facebook.svg")
let twitter = document.getElementById("twitter")
cambiarSrc(twitter, "../assets/icon-twitter-hover.svg", "../assets/icon-tw-normal.svg")
let instagram = document.getElementById("instagram")
cambiarSrc(instagram, "../assets/icon_instagram-hover.svg", "../assets/icon_instagram.svg")




