// MODO NOCTURNO
modoNocturno.addEventListener("click", oscurecer)
modoNocturno.addEventListener("click", oscurecerHome)
function oscurecerHome() {
  let lupaExtra = document.getElementsByClassName("lupaExtra")
    if (document.body.classList.contains('dark')) {
      lupa[0].src = "/assets/icon-search-mod-noc.svg"
      lupa2[0].src = "/assets/icon-search-mod-noc.svg"
      for (let i = 0; i < lupaExtra.length; i++) {
        lupaExtra[i].src = "/assets/icon-search-mod-noc.svg"
      }
    }
    else{
      lupa[0].src = "/assets/icon-search.svg"
      lupa2[0].src = "/assets/icon-search.svg"
      for (let i = 0; i < lupaExtra.length; i++) {
        lupaExtra[i].src = "/assets/icon-search.svg"
      }
    }
}




// // HAMBURGUESA 

hamburguesa.addEventListener("click", burger)


// BUSQUEDA


let search = document.getElementById("search")

search.addEventListener("keyup", (e)=>{
  if(e.keyCode === 13){
    
    busqueda(search.value)
  }
});





    // PUSHEAR ARRAY DE IMAGENES BUSCADAS
    
arrayBuscados = []
function busqueda (valor){
  fetch(`http://api.giphy.com/v1/gifs/search?api_key=2Yn9FN3BmE8DqIq2KEG6rApYylEX0ZdQ&q=${valor}&limit=12`)
  .then(resp => resp.json())
  .then(resp => {
    for (let i = 0; i < 12; i++) {
      let element = resp.data[i].images.downsized.url;
      arrayBuscados.push(element)
    }
    crearDiv();
  });
}

    // FUNCION DEL ENTER

search.addEventListener("keyup", buscador)
let listaSug = document.getElementById("cajaSugerencias")
let lupa2 = document.getElementsByClassName("lupa2")

function buscador (e){
  if (search.value != "") {
    search.style.border = "none"
    listaSug.classList.add("appear")
    lupa2[0].classList.add("aparece")
    lupa[0].src = "/assets/close.svg"
    cajaSugerencias(search.value)
  }
  if (search.value != "" && document.body.classList.contains('dark')) {
    search.style.border = "none"
    listaSug.classList.add("appear")
    lupa2[0].classList.add("aparece")
    lupa[0].src = "/assets/close-modo-noct.svg"
    cajaSugerencias(search.value)
  }
  if(e.keyCode === 27 || search.value == ""){
    search.style.border = "1px solid #572EE5"
    lupa[0].src = "/assets/icon-search.svg"
    search.value = ""
    listaSug.classList.remove("appear")
    lupa2[0].classList.remove("aparece")
  }
  if(e.keyCode === 27 || search.value == "" && document.body.classList.contains('dark')){
    search.style.border = "1px solid white"
    lupa[0].src = "/assets/icon-search-mod-noc.svg"
    search.value = ""
    listaSug.classList.remove("appear")
    lupa2[0].classList.remove("aparece")

  }
}

    // Funcion LUPA

let lupa = document.getElementsByClassName("lupa")
lupa[0].addEventListener("click", () => {
     listaSug.classList.remove("appear")
    lupa2[0].classList.remove("aparece")
    search.style.border = "1px solid #572EE5"
    lupa[0].src = "/assets/icon-search.svg"
    search.value = ""
  })
      
    // SUGERENCIAS

let sug1 = document.getElementById("sug1")
let sug2 = document.getElementById("sug2")
let sug3 = document.getElementById("sug3")
let sug4 = document.getElementById("sug4")
arraySugerencias = [];
function cajaSugerencias(valor){
  fetch(`http://api.giphy.com/v1/gifs/search?api_key=2Yn9FN3BmE8DqIq2KEG6rApYylEX0ZdQ&q=${valor}&limit=4`)
  .then(resp => resp.json())
  .then(resp => {
    arraySugerencias = [];
    for (let i = 0; i < 4; i++) {
      let element = resp.data[i].user.description;
      arraySugerencias.push(element)
      sug1.textContent = arraySugerencias[0]
      sug2.textContent = arraySugerencias[1]
      sug3.textContent = arraySugerencias[2]
      sug4.textContent = arraySugerencias[3]
      
    }
  })
};

    // CREAR DIV IMAGENES BUSCADAS 
    

let sectionBuscados = document.getElementById("buscados")

function crearDiv(){
  let headBuscados = document.createElement("h3")
  headBuscados.innerHTML = search.value.toUpperCase();
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
    divOpciones.appendChild(expandir)
    divOpciones.appendChild(descargar)
    divOpciones.appendChild(meGusta)
    divOpciones.classList.add("opciones")
    divBuscados.classList.add("divBuscados")
    img.classList.add("imgBuscadas")
    img.src = element;
    divBuscados.appendChild(img)
    divBuscados.appendChild(divOpciones)
    sectionBuscados.appendChild(divBuscados)
  }
  let verMas = document.createElement("button")
  verMas.innerHTML = "Ver Mas"
  sectionBuscados.appendChild(verMas)

  
}
