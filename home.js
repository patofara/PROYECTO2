// MODO NOCTURNO
modoNocturno.addEventListener("click", oscurecer)
modoNocturno.addEventListener("click", oscurecerHome)
let lupa = document.getElementsByClassName("lupa")
let lupa2 = document.getElementsByClassName("lupa2")
let storageNoc = sessionStorage.getItem('dark-mode')
let lupaExtra = document.getElementsByClassName("lupaExtra")
storageDark();
oscurecerHome();

function oscurecerHome() {
  if (document.body.classList.contains('dark')) {
    lupa[0].src = "./assets/icon-search-mod-noc.svg"
    lupa2[0].src = "./assets/icon-search-mod-noc.svg"
    for (let i = 0; i < lupaExtra.length; i++) {
      lupaExtra[i].src = "./assets/icon-search-mod-noc.svg"
    }
  }
  else {
    lupa[0].src = "./assets/icon-search.svg"
    lupa2[0].src = "./assets/icon-search.svg"
    for (let i = 0; i < lupaExtra.length; i++) {
      lupaExtra[i].src = "./assets/icon-search.svg"
    }
  }
}






// // HAMBURGUESA 

hamburguesa.addEventListener("click", burger)


// BUSQUEDA


let search = document.getElementById("search")
let noResult = document.getElementById("noResult")





// PUSHEAR ARRAY DE IMAGENES BUSCADAS
let cantGifs = 0
function busqueda(valor, param1, num) {
  arrayBuscados = []
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=2Yn9FN3BmE8DqIq2KEG6rApYylEX0ZdQ&q=${valor}&limit=12&offset=${num}`)
    .then(resp => resp.json())
    .then(resp => {
      let array0 = resp.data
      cantGifs = resp.pagination.total_count
      if (array0.length == 0) {
        cajaSug.classList.remove("appear")
        noResult.removeAttribute("hidden")
        return
      }
      noResult.setAttribute("hidden", "")
      for (let i = 0; i < array0.length; i++) {
        let element = array0[i]
        arrayBuscados.push(element)
      }
      crearDiv(param1);
    })

    .catch(() => {
      cajaSug.classList.remove("appear")
      noResult.removeAttribute("hidden")
    })

}


// FUNCION DEL

search.addEventListener("keyup", buscador)
let cajaSug = document.getElementById("cajaSugerencias")


function buscador(e) {
  if (search.value != "" && e.keyCode !== 13) {
    search.style.border = "none"
    cajaSug.classList.add("appear")
    lupa2[0].classList.add("aparece")
    lupa[0].src = "./assets/close.svg"
    cajaSugerencias(search.value)
  }
  if (search.value != "" && e.keyCode !== 13 && document.body.classList.contains('dark')) {
    search.style.border = "none"
    cajaSug.classList.add("appear")
    lupa2[0].classList.add("aparece")
    lupa[0].src = "./assets/close-modo-noct.svg"
    cajaSugerencias(search.value)
    sectionBuscados.innerHTML = ""
  }
  if (e.keyCode === 13) {
    sectionBuscados.innerHTML = ""
    busqueda(search.value, search.value, 0)
    search.style.border = "1px solid #572EE5"
    cajaSug.classList.remove("appear")
  }
  if (e.keyCode === 27 || search.value == "") {
    search.style.border = "1px solid #572EE5"
    lupa[0].src = "./assets/icon-search.svg"
    search.value = ""
    cajaSug.classList.remove("appear")
    lupa2[0].classList.remove("aparece")
  }
  if (e.keyCode === 27 || search.value == "" && document.body.classList.contains('dark')) {
    search.style.border = "1px solid white"
    lupa[0].src = "./assets/icon-search-mod-noc.svg"
    search.value = ""
    cajaSug.classList.remove("appear")
    lupa2[0].classList.remove("aparece")

  }
}

// Funcion LUPA


lupa[0].addEventListener("click", () => {
  cajaSug.classList.remove("appear")
  lupa2[0].classList.remove("aparece")
  search.style.border = "1px solid #572EE5"
  lupa[0].src = "./assets/icon-search.svg"
  search.value = ""
})

//  EVENTO LI DE SUGERENCIAS

let textLiSug = document.getElementsByClassName("listaSug")
for (let i = 0; i < textLiSug.length; i++) {
  textLiSug[i].addEventListener("click", () => {
    sectionBuscados.innerHTML = ""
    busqueda(search.value, textLiSug[i].innerHTML, 0)
    cajaSug.classList.remove("appear")
    search.value = textLiSug[i].innerHTML
    search.style.border = "1px solid #572EE5"
  })
}

function cajaSugerencias(valor) {
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=2Yn9FN3BmE8DqIq2KEG6rApYylEX0ZdQ&q=${valor}&limit=4`)
    .then(resp => resp.json())
    .then(resp => {
      arraySugerencias = [];
      for (let i = 0; i < 4; i++) {
        let element = resp.data[i].title;
        arraySugerencias.push(element)
        textLiSug[i].textContent = arraySugerencias[i]
      }
    })
};

// CREAR DIV IMAGENES BUSCADAS 

let contBoton = 12
let sectionBuscados = document.getElementById("buscados")
function crearDiv(param1) {
  let headBuscados = document.createElement("h3")
  headBuscados.innerHTML = param1.toUpperCase();
  sectionBuscados.appendChild(headBuscados)
  for (let i = 0; i < 12; i++) {
    let divBuscados = document.createElement("div")
    let meGusta = document.createElement("img")
    let hrefneW = document.createElement("a")
    let descargar = document.createElement("img")
    let expandir = document.createElement("img")
    let divOpciones = document.createElement("div")
    let img = document.createElement("img")
    let elementurl = arrayBuscados[i].images.downsized.url;
    let elementDownload = arrayBuscados[i].embed_url
    let elementtitle = arrayBuscados[i].title
    cambiarSrc(meGusta, "./assets/icon-fav-hover.svg", "./assets/icon-fav.svg")
    meGusta.addEventListener("click", () => {
      if (arrayFav.includes(elementurl)) {
        meGusta.src = "./assets/icon-fav.svg"
        let indice = arrayFav.indexOf(elementurl)
        arrayFav.splice(indice, 1)
        meGusta.addEventListener("mouseover", () => { meGusta.src = "./assets/icon-fav-hover.svg"; })
        meGusta.addEventListener("mouseleave", () => { meGusta.src = "./assets/icon-fav.svg"; })
      }
      else {
        arrayFav.push(elementurl)
        meGusta.src = "./assets/icon-fav-active.svg"
        meGusta.addEventListener("mouseover", () => { meGusta.src = "./assets/icon-fav-active.svg"; })
        meGusta.addEventListener("mouseleave", () => { meGusta.src = "./assets/icon-fav-active.svg"; })
      }
      localStorage.setItem('favoritos', JSON.stringify(arrayFav))
    })
    cambiarSrc(expandir, "./assets/icon-max-hover.svg", "./assets/icon-max-normal.svg")
    expandir.addEventListener("click", () => {
      tituloTrending.setAttribute("hidden", "")
      expansion.removeAttribute("hidden")
      imagenExpandida.src = elementurl
      tituloExpansion.innerHTML = elementtitle
    })
    hrefneW.setAttribute("alt", elementDownload)
    hrefneW.addEventListener("click", () => {
      descargarGifo(elementurl, elementtitle)
    })
    cambiarSrc(descargar, "", "./assets/icon-download.svg")
    descargar.addEventListener("mouseover", () => {
      descargar.src = "./assets/icon-download-hover.svg"
      hrefneW.setAttribute("title", "Download " + elementtitle)
    })
    expandir.src = "./assets/icon-max-normal.svg"
    descargar.src = "./assets/icon-download.svg"
    meGusta.src = "./assets/icon-fav.svg"
    divOpciones.appendChild(expandir)
    hrefneW.appendChild(descargar)
    divOpciones.appendChild(hrefneW)
    divOpciones.appendChild(meGusta)
    divOpciones.classList.add("opciones")
    divBuscados.classList.add("divBuscados")
    img.classList.add("imgBuscadas")
    img.src = elementurl;
    divBuscados.appendChild(img)
    divBuscados.appendChild(divOpciones)
    sectionBuscados.appendChild(divBuscados)
  }
  let verMas = document.createElement("button")
  verMas.innerHTML = "Ver Mas"
  if (contBoton < cantGifs) {
    sectionBuscados.appendChild(verMas)
    verMas.addEventListener("click", () => {
      sectionBuscados.removeChild(verMas)
      busqueda(search.value, "", contBoton)

      contBoton += 12
    })
  }
}
