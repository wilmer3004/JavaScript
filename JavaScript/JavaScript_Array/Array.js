// Ejercicio 1
function solicitarNum() {
    var n;
n = parseInt(prompt("Ingrese la cantidad de numeros que desea digitar:"));
var numero =[];
for (let i=0; i<n;i++){
    numero[i]=parseInt(prompt("Ingrese un numero:"));
}
for ( let j=0;j<n;j++ ){
    console.log(numero[j]);
}
}


// ---------------------------------------------------------------------------

// Ejercicio 2
function notas() {
    var n;
n = parseInt(prompt("Ingrese la cantidad de estudiantes de los cuales desea desea digitar su nota:"));
notas = [];
cont=0;
suma = 0;
for (let i=0;i<n;i++){
    cont+=1;
    notas1=parseInt(prompt(`Ingrese la nota # ${cont} de 1 a 10: `));
    
    if (notas1<=10 && notas1>0) {
        notas[i]=notas1;
        suma = suma + notas[i];
    }
    else{
        alert("Ingreso un dato no valido")
        i--;
        cont--;
    }
    
}
promedio = 0;
promedio = suma / n;
console.log(notas);
console.log(`El promedio de las ${cont} notas es de: ${promedio} `);
}


// -----------------------------------------------------------------------------------------

// Ejercicio 3
function sum_array_reverse() {
    numero1 = [];
    numero2 = [];
    resultado = [];
    var n = parseInt(prompt("Ingrese la cantidad de numeros que desea ingresar: "));
    
    for (let i=0;i<n;i++){
        numero1[i] = parseInt(prompt("Ingrese un numero: "));
        numero2[i]=numero1[i];
    }
    
    numero3 =numero2.reverse() ;
    console.log(numero1)
    console.log(numero2);
    
    for (let j=0;j<n;j++){
        resultado[j]=numero1[j]+numero3[j];
    }
    
    for (let x =0; x<n;x++){
        console.log(`La suma de ${numero1[x]} + ${numero2[x]} es: ${resultado[x]}`)
    }  
}


// -----------------------------------------------------------------------------------------

// Ejercicio 4
function positive_negative() {
    var n = parseInt(prompt("Ingrese la cantidad de numeros que desea ingresar: "));
numeros = [];
negativo=[];
positivo = [];
for (i=0;i<n;i++){
    numeros[i] = parseInt(prompt("Ingrese un numero: "));
}
for (j=0;j<n;j++){
    if (numeros[j]<0){
        negativo.push(numeros[j]);
    }
    else if (numeros[j]>0){
        positivo.push(numeros[j]);
    }
}
console.log(numeros);
console.log(negativo);
console.log(positivo);

for(i=0;i<numeros.length;i++){
    for (j=0;j<numeros.length;j++){
        if (positivo[j]<positivo[j+1] ){
            positive = positivo[j];
            positivo[j] = positivo[j+1];
            positivo[j+1]=positive;
        }
        if ((negativo[j]>negativo[j+1] )){
            negative = negativo[j];
            negativo[j] = negativo[j+1];
            negativo[j+1]=negative;
        }
    }
}
console.log("Numeros Ordenados: ");
console.log(negativo);
console.log(positivo);
}



// -----------------------------------------------------------------------------------------

// Ejercicio 5
function search_data() {
    numeros =[];
var n = parseInt(prompt("Ingrese la cantidad de numeros que desea ingresar: "));
for (i=0;i<n;i++){
    numeros[i] = parseInt(prompt("Ingrese un numero: "));
}
cont = 0;
numero=parseInt(prompt("Ingrese el numero que desea consultar: "));

for (i=0;i<n;i++){
    if (numeros[i]==numero){
        cont+=1;
    }
}
alert(`El numero que quiso buscar es ${numero} y esta repetido ${cont} veces.`)


}

// Menu

res = parseInt(prompt(`¿Desea usar nuestro programa?
1. si
2.no.
`));

while (res == 1) {
    condi = parseInt(prompt(`
Elija la opcion que desea ejecutar de nuestro programa:
1. Capturar numeros y mostrarlos.
2. Solicitar n notas y sacar su promedio.
3. Sumar un vector con otro al revés.
4. Organizar numeros positivos y negativos ingresados.
5. Ingresar y buscar datos ingresados.
6. Salir.
`));
switch (condi) {
    case 1:
        solicitarNum();
        break;
    case 2:
        notas();
        break;
    case 3:
        sum_array_reverse();
        break;
    case 4:
        positive_negative();
        break;
    case 5:
        search_data();
        break;
     case 6:
        res =2;
        break;
    default:
        alert("¡ERROR! Ingreso un valor no valido.")
        break;
}
}

alert("¡Gracias por usar nuestro programa!")




