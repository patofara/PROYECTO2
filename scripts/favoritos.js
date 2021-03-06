let storageNoc = sessionStorage.getItem('dark-mode')
let cuadrilla = document.getElementById("cuadrilla")
let sincontenido = document.getElementById("sinContenido")
storageDark()
  
  // MODO NOCTURNO
modoNocturno.addEventListener("click", oscurecer)


   // HAMBURGUESA 
hamburguesa.addEventListener("click", burger)

  // SI NO EXISTE EL ARRAY MUESTRA UNA IMAGEN
function nocontent() {
  if (arrayFav != "") {
    sincontenido.setAttribute("hidden", "")
  }
}
nocontent();

  // CREAR DIVS
function crearDiv(start, fin) {
  for (let i = start; i < fin; i++) {
    let img = document.createElement("img")
    let div = document.createElement("div")
    let divOpciones = document.createElement("div")
    let eliminar = document.createElement("img")
    let descargar = document.createElement("img")
    let expandir = document.createElement("img")
    let hrefneW = document.createElement("a")
    let elementurl = arrayFav[i]
    let elementDownload = arrayFav[i].embed_url
    let elementtitle = arrayFav[i].title
    expandir.src = "./assets/icon-max-normal.svg"
    descargar.src = "./assets/icon-download.svg"
    eliminar.src = "./assets/icon-trash-normal.svg"
    cambiarSrc(eliminar, "./assets/icon-trash-hover.svg", "./assets/icon-trash-normal.svg")
    eliminar.addEventListener("click", () => {
      if (arrayFav.includes(elementurl)) {
        let indice = arrayFav.indexOf(elementurl)
        arrayFav.splice(indice, 1)
        location.reload()
      }
      localStorage.setItem('favoritos', JSON.stringify(arrayFav))
    })
    cambiarSrc(expandir, "./assets/icon-max-hover.svg", "./assets/icon-max-normal.svg")
    expandir.addEventListener("click", () => {
      tituloTrending.setAttribute("hidden", "")
      expansion.removeAttribute("hidden")
      imagenExpandida.src = elementurl
    })
    expandir.addEventListener("click", () => {
      tituloTrending.setAttribute("hidden", "")
      expansion.removeAttribute("hidden")
      imagenExpandida.src = elementurl
      main.style = "display : none"
      tituloExpansion.innerHTML = ""
      imgMAX()
    })
    img.addEventListener("click", () => {
      tituloTrending.setAttribute("hidden", "")
      expansion.removeAttribute("hidden")
      main.setAttribute("hidden", "")
      imagenExpandida.src = elementurl
      tituloExpansion.innerHTML = ""
      imgMAX()
    })
    hrefneW.setAttribute("alt", elementDownload)
    hrefneW.addEventListener("click", () => {
      descargarGifo(elementurl, "Gif")
    })
    cambiarSrc(descargar, "./assets/icon-download-hover.svg", "./assets/icon-download.svg")
    hrefneW.appendChild(descargar)
    divOpciones.appendChild(expandir)
    divOpciones.appendChild(hrefneW)
    divOpciones.appendChild(eliminar)
    divOpciones.classList.add("opciones")
    img.src = arrayFav[i]
    div.appendChild(img)
    div.classList.add("divCuadrilla")
    div.appendChild(divOpciones)
    cuadrilla.appendChild(div)

  }
}

    // RENDERIZA IMAGENES AL ABRIR SECCION
let u = 12
function renderizarImg() {
  if (arrayFav.length <= 12) {
    crearDiv(0, arrayFav.length)
  }
  else if (arrayFav.length > u) {

    crearDiv(0, 12)
    let verMas = document.createElement("button")
    verMas.classList.add("boton")
    verMas.innerHTML = "Ver Todos"
    cuadrilla.appendChild(verMas)
    verMas.addEventListener("click", () => {
      cuadrilla.removeChild(verMas)
      crearDiv(u, arrayFav.length)
      u = u + 12
    })
  }
}
renderizarImg()

