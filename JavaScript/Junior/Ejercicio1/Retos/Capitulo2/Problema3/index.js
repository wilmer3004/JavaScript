const  sumar = (num1,num2)=>{
     return parseInt(num1) + parseInt(num2);
}

const  restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}

const  dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}

const  multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}


alert("¿Que operación deseas realizar?")
operacion = prompt("1. suma, 2. resta, 3. division, 4. multiplicación");


if(operacion==1){
    let numero1 = prompt("Primer numero para sumar");
    let numero2 = prompt("Segundo numero para sumar");
    let resultado = sumar(numero1,numero2);
    alert(`Su resultado es: ${resultado}`);
}

else if(operacion==2 ){
    let numero1 = prompt("Primer numero para restar");
    let numero2 = prompt("Segundo numero para restar");
    let resultado = restar(numero1,numero2);
    alert(`Su resultado es: ${resultado}`);
}

else if(operacion==3 ){
    let numero1 = prompt("Primer numero para dividir");
    let numero2 = prompt("Segundo numero para dividir");
    let resultado = dividir(numero1,numero2);
    alert(`Su resultado es: ${resultado}`);
}

else if(operacion==4 ){
    let numero1 = prompt("Primer numero para multiplicar");
    let numero2 = prompt("Segundo numero para multiplicar");
    let resultado = multiplicar (numero1,numero2);
    alert(`Su resultado es: ${resultado}`);
}
else{
    alert("La operacion seleccionada no fue encontrada.")
}





