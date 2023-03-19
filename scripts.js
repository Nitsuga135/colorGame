document.addEventListener('DOMContentLoaded', () => {
	window.addEventListener('load', () => {

//querys

let cuadrados = document.querySelectorAll(".square")
let colorGanador = document.getElementById("colorDisplay")
let mensaje = document.getElementById("message")
let titulo = document.querySelector(".titulo")

//botones
let resetButton = document.getElementById("reset")
let hardButton = document.getElementById("hardButton")
let easyButton = document.getElementById("easyButton")

//variables globales
let pickedColor;
let cantidad = 6;
let mode = "hard"


//JUEGO
reset()


//eventos de clicks y dar atributos
function reset(){
let listaColores= generateRandomColor(mode)

for (let i=0; i<cuadrados.length; i++){
    
    cuadrados[i].style.backgroundColor=(listaColores[i]) 
    pickColor();
    
    cuadrados[i].addEventListener("click", function(){
        let clickedColor= this.style.backgroundColor
       
        if (pickedColor == clickedColor){
            let ganaste= "¡Correcto!"
            titulo.style.color=(pickedColor)
            changeColor(clickedColor);
            
            mensaje.textContent=ganaste
            resetButton.textContent = "Jugar Nuevamente"
            
        }
        else if (pickedColor!= clickedColor){
            let perdiste = "Intentalo nuevamente"
            
            mensaje.textContent = perdiste
            this.style.backgroundColor="transparent";
            this.style.borderColor="transparent"
        }
        
    })
}
       resetearVariables();
}


function changeColor(clickedColor){
    for(let i=0; i < cuadrados.length; i++){
        cuadrados[i].style.backgroundColor = (clickedColor);
        cuadrados[i].style.borderColor="black"
        
    }
}
function randomizar(){

    let red;
    let green;
    let blue;
    
    for(let i = 0; i < 3; i++){

        if(i == 0){
            
            red = Math.floor( Math.random() * 256);
        }else if(i == 1){
            green = Math.floor( Math.random() * 256);
        }else if(i == 2){
            blue = Math.floor( Math.random() * 256);
        }
         
    }
    let colorin=`rgb(${red},${green},${blue})`
    
    return colorin;
    
}
function pickColor(){
    arreglo = Math.floor( Math.random() * cantidad);
    pickedColor = cuadrados[arreglo].style.backgroundColor
   
}
function generateRandomColor(mode){
    
    let arreglo = [];
    if(mode=="easy"){
        cantidad = 3;
        for(let i = 0; i<cantidad; i++){
            arreglo.push(randomizar());
        } for(let i = 3; i<(cantidad + 3); i++){
            cuadrados[i].style.display = "none"
        }
    
        
    }
    else if(mode=="hard"){
        cantidad = 6;
        for(let i = 0; i<cantidad; i++){
            arreglo.push(randomizar());
        }for(let i = 3; i<(cantidad); i++){
            cuadrados[i].style.display = "block"
        }
    
    }
    return arreglo;
}


//bottones

resetButton.addEventListener("click", function(){
    reset()
    

})
function resetearVariables(){// se encarga de resetear todas las posibles variables al usar el boton reset
    colorGanador.textContent = pickedColor
    colorGanador.style.color = (pickedColor)
    titulo.style.color = "#fff"
    resetButton.textContent = "Nuevos Colores"
    mensaje.textContent = "";
}
//botones easy hard

//easy

easyButton.addEventListener("click", function(){

   
    if(mode == "hard"){
        easyButton.classList.add("selected")
        hardButton.classList.remove("selected")
        mode = "easy"
        reset()
    }
})

//hard
hardButton.addEventListener("click", function(){

    if(mode == "easy"){

        hardButton.classList.add("selected")
        easyButton.classList.remove("selected")
        mode = "hard"
        reset()
    }
})



})
})