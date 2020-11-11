        // MODO NOCTURNO

let modoNocturno = document.getElementById("modoNocturno");
let logo = document.getElementById("logo")
modoNocturno.addEventListener("click", oscurecer)

function oscurecer (){
    let storageNoc = sessionStorage.getItem('dark-mode')
    document.body.classList.toggle('dark');
    if(storageNoc === "true"){
        sessionStorage.setItem('dark-mode', false)
        modoNocturno.innerHTML = "Modo Nocturno"
        logo.src = "/assets/logo-mobile.svg"
    }
    
    else{
        sessionStorage.setItem('dark-mode', true)
        modoNocturno.innerHTML = "Modo Diurno"; 
        logo.src = "/assets/logo-mobile-modo-noct.svg"
    }
};

  // // HAMBURGUESA 
  
  
let hamburguesa = document.getElementById("hamburguesa");
let listaHamb = document.getElementById("menuNav");
hamburguesa.addEventListener("click", burger)
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