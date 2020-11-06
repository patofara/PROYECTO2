// MODO NOCTURNO
modoNocturno.addEventListener("click", oscurecer)


  // // HAMBURGUESA 
hamburguesa.addEventListener("click", burger)

let divGifos = document.getElementsByClassName("opciones")
console.log(divGifos);
divGifos.addEventListener("mouseover", () => { 
  divGifos[0].classList.toggle("opciones")
  // for (let i = 0; i < divGifos.length; i++) {
  //   let element = array[i];
  //   element.classList.toggle('block')
    
  // }
})