// MODO NOCTURNO
let storageNoc = sessionStorage.getItem('dark-mode')
let cuadrilla = document.getElementById("cuadrilla")
let sincontenido = document.getElementById("sinContenido")
storageDark()
modoNocturno.addEventListener("click", oscurecer)
  // // HAMBURGUESA 
  hamburguesa.addEventListener("click", burger)


  
  myGif=[]
async function inicio(){

await fetch("https://api.giphy.com/v1/gifs?api_key=2Yn9FN3BmE8DqIq2KEG6rApYylEX0ZdQ&ids=zgVqgmSOXLZGCmrSyd")
.then(resp => resp.json())
.then(resp => {
  console.log(resp);
  let array0 = resp.length
  for (let i = 0; i < array0; i++) {
    let element = resp.data[i].images.downsized.url;
    myGif.push(element)
    console.log(myGif);
}
}).then(()=>{
  nocontent();
  debugger
  renderizarImg()
  crearDiv();
})

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
    let elementurl = myGif[i]
    let elementDownload = myGif[i].embed_url
    let elementtitle = myGif[i].title
    expandir.src = "../assets/icon-max-normal.svg"
    descargar.src = "../assets/icon-download.svg"
    eliminar.src = "../assets/icon-trash-normal.svg"
    cambiarSrc(eliminar, "../assets/icon-trash-hover.svg", "../assets/icon-trash-normal.svg")
    eliminar.addEventListener("click", () => {
      if (myGif.includes(elementurl)) {
        let indice = myGif.indexOf(elementurl)
        myGif.splice(indice, 1)
        location.reload()
      }
      localStorage.setItem('favoritos', JSON.stringify(myGif))
    })
    cambiarSrc(expandir, "../assets/icon-max-hover.svg", "../assets/icon-max-normal.svg")
    expandir.addEventListener("click", () => {
      tituloTrending.setAttribute("hidden", "")
      expansion.removeAttribute("hidden")
      imagenExpandida.src = elementurl
    })
    cambiarSrc(descargar, "", "../assets/icon-download.svg")
    descargar.addEventListener("mouseover", () => {
      descargar.src = "../assets/icon-download-hover.svg"
      hrefneW.setAttribute("title", "Download " + elementtitle)
    })

    hrefneW.setAttribute("alt", elementDownload)
    hrefneW.addEventListener("click", () => {
      hrefneW.setAttribute("href", "")
      hrefneW.setAttribute("download", elementDownload)
    })
    hrefneW.appendChild(descargar)
    divOpciones.appendChild(expandir)
    divOpciones.appendChild(hrefneW)
    divOpciones.appendChild(eliminar)
    divOpciones.c.lassList.add("opciones")
    img.src = myGif[i]
    div.appendChild(img)
    div.c.lassList.add("divCuadrilla")
    div.appendChild(divOpciones)
    cuadrilla.appendChild(div)

  }
}
let u = 12
function renderizarImg() {
  if (myGif.length <= 12) {
    crearDiv(0, myGif.length)
  }
  else if (myGif.length > u) {

    crearDiv(0, 12)
    let verMas = document.createElement("button")
    verMas.c.lassList.add("boton")
    verMas.innerHTML = "Ver Todos"
    cuadrilla.appendChild(verMas)
    verMas.addEventListener("click", () => {
      cuadrilla.removeChild(verMas)
      crearDiv(u, myGif.length)
      u = u + 12
    })
  }
}
renderizarImg()

