// MODO NOCTURNO
let storageNoc = sessionStorage.getItem('dark-mode')
let cuadrilla = document.getElementById("cuadrilla")
let sincontenido = document.getElementById("sinContenido")
storageDark()
modoNocturno.addEventListener("click", oscurecer)
  // // HAMBURGUESA 
  hamburguesa.addEventListener("click", burger)


if (localStorage.getItem('myGif')) {
    myGif = JSON.parse(localStorage.getItem('myGif'))
}
else {
    var myGif = [];
}
function inicio(){
arrayImg=[]
arrayObj = []
for (let i = 0; i < myGif.length; i++) {
let id = myGif[i]
fetch(`https://api.giphy.com/v1/gifs?api_key=2Yn9FN3BmE8DqIq2KEG6rApYylEX0ZdQ&ids=${id}`)
.then(resp => resp.json())
.then(resp => {
  let elementObj = resp.data[0]
  let elementImg = resp.data[0].images.downsized.url;
  arrayImg.push(elementImg)
  arrayObj.push(elementObj)
})
.then(()=>{
  nocontent();
  renderizarImg()
})

}

}
inicio();
function nocontent() {
  if (myGif != "") {
    sincontenido.setAttribute("hidden", "")
  }
}

function crearDiv(start, fin) {
  for (let i = start; i < fin; i++) {
    let img = document.createElement("img")
    let div = document.createElement("div")
    let divOpciones = document.createElement("div")
    let eliminar = document.createElement("img")
    let descargar = document.createElement("img")
    let expandir = document.createElement("img")
    let hrefneW = document.createElement("a")
    let elementurl = arrayImg[i]
    let elementDownload = arrayObj[i].embed_url
    let elementtitle = arrayObj[i].title
    expandir.src = "../assets/icon-max-normal.svg"
    descargar.src = "../assets/icon-download.svg"
    eliminar.src = "../assets/icon-trash-normal.svg"
    cambiarSrc(eliminar, "../assets/icon-trash-hover.svg", "../assets/icon-trash-normal.svg")
    eliminar.addEventListener("click", () => {
      if (arrayImg.includes(elementurl)) {
        let indice = arrayImg.indexOf(elementurl)
        console.log(elementurl);
        myGif.splice(indice, 1)
        location.reload()
      }
      localStorage.setItem('myGif', JSON.stringify(myGif))
    })
    cambiarSrc(expandir, "../assets/icon-max-hover.svg", "../assets/icon-max-normal.svg")
    expandir.addEventListener("click", () => {
      tituloTrending.setAttribute("hidden", "")
      expansion.removeAttribute("hidden")
      imagenExpandida.src = elementurl
    })
    expandir.addEventListener("click", () => {
      tituloTrending.setAttribute("hidden", "")
      main.style = "display : none"
      expansion.removeAttribute("hidden")
      imagenExpandida.src = elementurl
      tituloExpansion.innerHTML = elementtitle
      imgMAX()
    })
    img.addEventListener("click", () => {
      tituloTrending.setAttribute("hidden", "")
      expansion.removeAttribute("hidden")
      main.setAttribute("hidden" , "")
      imagenExpandida.src = elementurl
      tituloExpansion.innerHTML = elementtitle
      imgMAX()
    })
    hrefneW.setAttribute("alt", elementDownload)
    hrefneW.addEventListener("click", () => {
      descargarGifo(elementurl, elementtitle)
    })
    cambiarSrc(descargar, "../assets/icon-download-hover.svg", "../assets/icon-download.svg")

    hrefneW.setAttribute("alt", elementDownload)
    hrefneW.appendChild(descargar)
    divOpciones.appendChild(expandir)
    divOpciones.appendChild(hrefneW)
    divOpciones.appendChild(eliminar)
    divOpciones.classList.add("opciones")
    img.src = arrayImg[i]
    div.appendChild(img)
    div.classList.add("divCuadrilla")
    div.appendChild(divOpciones)
    cuadrilla.appendChild(div)

  }
}
let u = 12
function renderizarImg() {
  if (arrayImg.length <= 12) {
    crearDiv(0, arrayImg.length)
  }
  else if (arrayImg.length > u) {

    crearDiv(0, 12)
    let verMas = document.createElement("button")
    verMas.c.lassList.add("boton")
    verMas.innerHTML = "Ver Todos"
    cuadrilla.appendChild(verMas)
    verMas.addEventListener("click", () => {
      cuadrilla.removeChild(verMas)
      crearDiv(u, arrayImg.length)
      u = u + 12
    })
  }
}
// renderizarImg()

