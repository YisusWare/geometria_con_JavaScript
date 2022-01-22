const ladoCuadrado = 5;


function calcularPerimetroCuadrado(lado){
    return lado * 4
}

function calcularAreaCuadrado(lado){
    return Math.pow(lado,2)
}


let triangulo = {
    lado1: 3,
    lado2: 4,
    lado3: 5,
    
}

function calcularPerimetroTriangulo(a,b,c){
return parseFloat(a) + parseFloat(b) + parseFloat(c)
}

function calcularAngulo(a,b,c){
    return Math.acos(((Math.pow(c,2) + Math.pow(a,2) - Math.pow(b,2)) / (2 * c * a)))
}

function calcularAreaTriangulo(a,b,c){
    return ((c * a * Math.sin(calcularAngulo(a,b,c))) / 2 )
}

let radioCirculo = 5
const PI = Math.PI

function calcularPerimetroCirculo(radio){
    return 2 * PI * radio
}

function calcularAreaCirculo(radio){
    return PI * Math.pow(radio,2)
}

//interacción con el archivo HTML
function calcularMedidasCuadrado(){
   let lado = document.getElementById("cuadrado").value
   let resultado_cuadrado = document.getElementById("cuadrado_resultados")
   resultado_cuadrado.innerText = "Perimetro: " + calcularPerimetroCuadrado(lado) + "\nArea: " + calcularAreaCuadrado(lado)

   
   

}
