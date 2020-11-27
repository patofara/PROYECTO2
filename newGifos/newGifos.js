let masNav = document.getElementById("masNav")

masNav.src = "../assets/CTA-crear-gifo-active.svg"     
      // MODO NOCTURNO

let modoNocturno = document.getElementById("modoNocturno");
let logo = document.getElementById("logo")
modoNocturno.addEventListener("click", oscurecer)
let boton = document.getElementById("boton")
let paso1 = document.getElementById("paso1")
let paso2 = document.getElementById("paso2")
let paso3 = document.getElementById("paso3")
let titulo = document.getElementById("titulo")
let parrafo = document.getElementById("parrafo")

function oscurecer (){
    let storageNoc = sessionStorage.getItem('dark-mode')
    document.body.classList.toggle('dark');
    if(storageNoc === "false"){
        sessionStorage.setItem('dark-mode', true)
        modoNocturno.innerHTML = "Modo Nocturno"
        logo.src = "../assets/logo-mobile.svg"
        paso1.src = "../assets/paso-a-paso.svg"
        paso2.src = "../assets/pasoApaso2.svg"
        paso3.src = "../assets/pasoApaso3.svg"
    }
    
    else{
        sessionStorage.setItem('dark-mode',false)
        modoNocturno.innerHTML = "Modo Diurno"; 
        logo.src = "../assets/logo-mobile-modo-noct.svg"
        paso1.src = "../assets/paso-a-paso-mod-noc.svg"
        paso2.src = "../assets/paso-a-paso-mod-noc2.svg"
        paso3.src = "../assets/paso-a-paso-mod-noc3.svg"
    }
};
function storageDark() {
    let storageNoc = sessionStorage.getItem('dark-mode')
    if (storageNoc === "false") {
        document.body.classList.toggle('dark');
        modoNocturno.innerHTML = "Modo Diurno"; 
        logo.src = "../assets/logo-mobile-modo-noct.svg"
        paso1.src = "../assets/paso-a-paso-mod-noc.svg"
        paso2.src = "../assets/paso-a-paso-mod-noc2.svg"
        paso3.src = "../assets/paso-a-paso-mod-noc3.svg"
    }
    else {
        document.body.classList.remove('dark');
    }
}
storageDark()


  // // HAMBURGUESA 
  
  
let hamburguesa = document.getElementById("hamburguesa");
let listaHamb = document.getElementById("menuNav");
hamburguesa.addEventListener("click", burger)
function burger() {
    listaHamb.classList.toggle('listHamb')
        if(hamburguesa.classList.contains('hamburguesa')){
            hamburguesa.classList.remove('hamburguesa')
            hamburguesa.classList.add('burgerOn')
            hamburguesa.src = "../assets/Button-close-modo-noc.svg"
        }
        else{
            hamburguesa.classList.remove('burgerOn')
            hamburguesa.classList.add('hamburguesa')
            hamburguesa.src = "../assets/burger.svg"
        }
};

function cambiarSrc(elemento, src1, src2) {
    elemento.addEventListener("mouseover", () => { elemento.src = src1 })
    elemento.addEventListener("mouseleave", () => { elemento.src = src2 })
}

let facebook = document.getElementById("facebook")
cambiarSrc(facebook, "../assets/icon_facebook_hover.svg", "../assets/icon_facebook.svg")
let twitter = document.getElementById("twitter")
cambiarSrc(twitter, "../assets/icon-twitter-hover.svg", "../assets/icon-tw-normal.svg")
let instagram = document.getElementById("instagram")
cambiarSrc(instagram, "../assets/icon_instagram-hover.svg", "../assets/icon_instagram.svg")


let video = document.getElementById("video")
var contador = 0
boton.addEventListener("click", () => {
    if (contador == 0) {
        paso1.src = "../assets/paso-a-paso-hover.svg"
        paso3.src = "../assets/pasoApaso3.svg"
        titulo.innerHTML = "¿Nos das acceso a tu cámara?"
        parrafo.innerHTML = "El acceso a tu camara será válido sólo por el tiempo en el que estés creando el GIFO."
    }
    else if (contador == 1) {
        captureCamera((camera) => {
            video.srcObject = camera;
    
            video.play();
    
    
            recorder = RecordRTC(camera, {
                type: 'gif',
                frameRate: 1,
                quality: 10,
                width: 360,
                hidden: 240,
                onGifRecordingStarted: function() {
                    console.log('grabacion iniciada')
                },
            });
        });
        paso1.src = "../assets/paso-a-paso.svg"
        paso2.src = "../assets/pasoApasoHover2.svg"
        boton.innerHTML = "GRABAR"
    }
    else if (contador == 2 ) {
        recorder.startRecording();
        boton.innerHTML = "FINALIZAR"
        paso2.src = "../assets/pasoApaso2.svg"
        paso3.src = "../assets/pasoApasoHover3.svg"
        
    }
    else if(contador == 3){
        boton.innerHTML = "Subir Gif"
        recorder.stopRecording(stopRecordingCallback);
        
    }
    else if(contador == 4){
        video.play();
        contador=-1
        boton.innerHTML = "Volver a grabar"
        fetch("https://upload.giphy.com/v1/gifs?api_key=2Yn9FN3BmE8DqIq2KEG6rApYylEX0ZdQ", 
        {
            method: 'POST',
            body: form
        })
        .then(res => res.json())
        .then(res => {
    
    
            console.log("fin del envio!!", res);
        })
        .catch(err => {
            console.log("error.!!!", err);
        })
    
    }
    contador++
})

newGifos= []

let form;
var recorder;
function captureCamera(callback) {
    navigator.mediaDevices.getUserMedia({ 
        audio: false, 
        video: {
            height: { max: 480 }
        }
    }).then(function(camera) {
        callback(camera);
    }).catch(function(error) {
        alert('Unable to capture your camera. Please check console logs.');
        console.error(error);
    });
}

function stopRecordingCallback() {
    
    
    // video.src = video.srcObject
    video.muted = false;
    video.volume = 1;
    let blob = recorder.getBlob();
    video.src = URL.createObjectURL(blob);
    
    
    form = new FormData();
    form.append('file', blob, 'myGif.gif');
    console.log("ESTE ES EL FILE!!!!", form.get('file'));
    
    recorder.destroy();
    recorder = null;
}

































// function record(stream){
//     video.srcObject = stream
//     video.onplay()
// }
// recorder = RecordRTC(stream, {
//   type: 'gif',
//   frameRate: 1,
//   quality: 10,
//   width: 360,
//   hidden: 240,
//   onGifRecordingStarted: function() {
//    console.log('started')
//  },
// });
function record(stream){
    video.srcObject = stream
     recorder = RecordRTC(stream, {
        type: 'gif',
        frameRate: 1,
        quality: 10,
        width: 360,
        hidden: 240,
        onGifRecordingStarted: function() {
        console.log('started')
        }
    });
    // recorder.onstart();
    recorder.stop = () =>{
        alert("termino")
        let blob = new Blob(newGifos,{type:"video/webm"}); 
        let url = window.URL.createObjectURL(blob)
        newGifos.push(url)
        console.log(video_recorder.webm);
    }
    boton.addEventListener("click", () => {
        if (contador == 1 ){
        recorder.stop()
        contador = 1
        boton.innerHTML = "VOLVER A GRABAR"
    }})
    
}


