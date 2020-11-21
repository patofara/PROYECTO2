// MODO NOCTURNO
let storageNoc = sessionStorage.getItem('dark-mode')
storageDark()
modoNocturno.addEventListener("click", oscurecer)


  // // HAMBURGUESA 
hamburguesa.addEventListener("click", burger)

console.log(arrayFav);
let cuadrilla = document.getElementById("cuadrilla")
let sincontenido = document.getElementById("sinContenido")
function nocontent(){
  if(arrayFav != ""){
    sincontenido.setAttribute("hidden", "")
  }
}
nocontent();

function renderizarImg() {
  if(arrayFav.length <= 12){
    for (let i = 0; i < arrayFav.length; i++) {
      let img = document.createElement("img")
      let div = document.createElement("div")
      img.src = arrayFav[i]
      div.appendChild(img)
      cuadrilla.appendChild(div)
    }
  }

  else{
    for (let i = 0; i < 12; i++) {
      let img = document.createElement("img")
      let div = document.createElement("div")
      img.src = arrayFav[i]
      div.appendChild(img)
      cuadrilla.appendChild(div)
    }
    let verMas = document.createElement("button")
    verMas.innerHTML = "Ver Mas"
    boton.appendChild(verMas)
    // boton.addEventListener("click", ()=>{
    //   for (let i = u; i =u+12; i++) {
    //     let img = document.createElement("img")
    //     let div = document.createElement("div")
    //     img.src = arrayFav[i]
    //     div.appendChild(img)
    //     cuadrilla.appendChild(div)
    //   }
    // u=u+12
    // })

  }
}
renderizarImg();

let u = 13