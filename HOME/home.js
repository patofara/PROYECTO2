// MODO NOCTURNO
modoNocturno.addEventListener("click", oscurecer)
modoNocturno.addEventListener("click", oscurecerHome)
function oscurecerHome() {
  let lupaExtra = document.getElementsByClassName("lupaExtra")
    if (document.body.classList.contains('dark')) {
      lupa[0].src = "/assets/icon-search-mod-noc.svg"
      lupa2[0].src = "/assets/icon-search-mod-noc.svg"
      lupaExtra.forEach(element => {element.src = "/assets/icon-search-mod-noc.svg"});
    }
    else{
      lupa[0].src = "/assets/icon-search.svg"
      lupa2[0].src = "/assets/icon-search.svg"
      lupaExtra.forEach(element => {element.src = "/assets/icon-search.svg"});
    }
}




// // HAMBURGUESA 

hamburguesa.addEventListener("click", burger)


// BUSQUEDA


let search = document.getElementById("search")
let noResult = document.getElementById("noResult")
// search.addEventListener("keyup", (e)=>{

// });





    // PUSHEAR ARRAY DE IMAGENES BUSCADAS
    
function busqueda (valor, param1){
  arrayBuscados = []
  fetch(`http://api.giphy.com/v1/gifs/search?api_key=2Yn9FN3BmE8DqIq2KEG6rApYylEX0ZdQ&q=${valor}&limit=12`)
  .then(resp => resp.json())
  .then(resp => {
    for (let i = 0; i < 12; i++) {
      let element = resp.data[i].images.downsized.url;
      arrayBuscados.push(element)
    }
    crearDiv(param1);
  })
  .catch(() => {
    cajaSug.classList.remove("appear")
    noResult.removeAttribute("hidden")});

}


    // FUNCION DEL

search.addEventListener("keyup", buscador)
let cajaSug = document.getElementById("cajaSugerencias")
let lupa2 = document.getElementsByClassName("lupa2")

function buscador (e){
  if (search.value != "" && e.keyCode!== 13) {
    search.style.border = "none"
    cajaSug.classList.add("appear")
    lupa2[0].classList.add("aparece")
    lupa[0].src = "/assets/close.svg"
    cajaSugerencias(search.value)
  }
  if (search.value != "" && e.keyCode !== 13 && document.body.classList.contains('dark')) {
    search.style.border = "none"
    cajaSug.classList.add("appear")
    lupa2[0].classList.add("aparece")
    lupa[0].src = "/assets/close-modo-noct.svg"
    cajaSugerencias(search.value)
  }
  if (e.keyCode === 13 ) {
    
    busqueda(search.value, search.value)
    search.style.border = "1px solid #572EE5"
    cajaSug.classList.remove("appear")
  }
  if (e.keyCode === 13 && document.body.classList.contains('dark')) {
    busqueda(search.value, search.value)
    search.style.border = "1px solid white"
    cajaSug.classList.remove("appear")
  }
  if(e.keyCode === 27 || search.value == ""){
    search.style.border = "1px solid #572EE5"
    lupa[0].src = "/assets/icon-search.svg"
    search.value = ""
    cajaSug.classList.remove("appear")
    lupa2[0].classList.remove("aparece")
  }
  if(e.keyCode === 27 || search.value == "" && document.body.classList.contains('dark')){
    search.style.border = "1px solid white"
    lupa[0].src = "/assets/icon-search-mod-noc.svg"
    search.value = ""
    cajaSug.classList.remove("appear")
    lupa2[0].classList.remove("aparece")

  }
}

    // Funcion LUPA

let lupa = document.getElementsByClassName("lupa")
lupa[0].addEventListener("click", () => {
     cajaSug.classList.remove("appear")
    lupa2[0].classList.remove("aparece")
    search.style.border = "1px solid #572EE5"
    lupa[0].src = "/assets/icon-search.svg"
    search.value = ""
  })
      
    //  EVENTO LI DE SUGERENCIAS

let textLiSug = document.getElementsByClassName("listaSug")
for (let i = 0; i < textLiSug.length; i++) {
    textLiSug[i].addEventListener("click", () => {
    busqueda(search.value, textLiSug[i].innerHTML )
    cajaSug.classList.remove("appear")
    search.value = textLiSug[i].innerHTML
    search.style.border = "1px solid #572EE5"
    })
}
function cajaSugerencias(valor){
  fetch(`http://api.giphy.com/v1/gifs/search?api_key=2Yn9FN3BmE8DqIq2KEG6rApYylEX0ZdQ&q=${valor}&limit=4`)
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
    

    
let sectionBuscados = document.getElementById("buscados")
// arrayFav = [1,2,3,4]
// localStorage.setItem("favoritos", JSON.stringify(arrayFav))

function crearDiv(param1){
  let headBuscados = document.createElement("h3")
  headBuscados.innerHTML = param1.toUpperCase();
  sectionBuscados.appendChild(headBuscados)
  for (let i = 0; i < 12; i++) {
    let divBuscados = document.createElement("div")
    let meGusta = document.createElement("img")
    let descargar = document.createElement("img")
    let expandir = document.createElement("img")
    let divOpciones = document.createElement("div")
    let img = document.createElement("img")
    let element = arrayBuscados[i];
    expandir.src= "/assets/icon-max-normal.svg"
    descargar.src= "/assets/icon-download.svg"
    meGusta.src = "/assets/icon-fav.svg"
    expandir.classList.add("expandir")
    divOpciones.appendChild(expandir)
    descargar.classList.add("descargar")
    divOpciones.appendChild(descargar)
    meGusta.classList.add("meGusta")
    divOpciones.appendChild(meGusta)
    divOpciones.classList.add("opciones")
    divBuscados.classList.add("divBuscados")
    img.classList.add("imgBuscadas")
    img.src = element;
    divBuscados.appendChild(img)
    divBuscados.appendChild(divOpciones)
    sectionBuscados.appendChild(divBuscados)
  }
  accionOpciones()
  let verMas = document.createElement("button")
  verMas.innerHTML = "Ver Mas"
  sectionBuscados.appendChild(verMas)
  verMas.addEventListener("click", () =>{
    sectionBuscados.removeChild(verMas)
    busqueda(search.value, "")

  })

  
}
