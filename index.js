const ladoCuadrado = 5;


function calcularPerimetroCuadrado(lado){
    return lado * 4
}

function calcularAreaCuadrado(lado){
    return Math.pow(lado,2)
}


function calcularPerimetroTriangulo(a,b,c){
return parseFloat(a) + parseFloat(b) + parseFloat(c)
}


function calcularAreaTriangulo(a,b,c){
    let s= (calcularPerimetroTriangulo(a,b,c)/2)

    return Math.sqrt(s * (s-a) * (s-b) * (s-c))
}


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

function calcularMedidasTriangulo(){
    let lado1 = document.getElementById("lado1").value
    let lado2 = document.getElementById("lado2").value
    let lado3 = document.getElementById("lado3").value
    let resultado_triangulo = document.getElementById("triangulo_resultados")
    
    if( !isNaN(calcularAreaTriangulo(lado1,lado2,lado3))){
        resultado_triangulo.innerText = "Perimetro: " + calcularPerimetroTriangulo(lado1,lado2,lado3) +
                                    "\nArea: " + calcularAreaTriangulo(lado1,lado2,lado3).toFixed(4)
    }
    else{
        resultado_triangulo.innerText = "Triangulo invalido"
    }
     
}

function calcularMedidasCirculo(){
    let radio = document.getElementById("radio").value
    let resultado_circulo = document.getElementById("circulo_resultados")
    resultado_circulo.innerText = "Perimetro: " + calcularPerimetroCirculo(radio).toFixed(4) + 
    "\nArea: " + calcularAreaCirculo(radio).toFixed(4)
}