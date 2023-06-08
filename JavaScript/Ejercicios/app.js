let opcion = 0, ciclo = 0;
Ejercicio5();
console.log('PROGRAMA DE MENUS');
while (ciclo==0){
alert("Menu Pricipal\n1. Ejercicio 1\n2. Ejercicio 2\n3. Ejercicio 3\n4. Ejercicio 4\n5. Salir\n");
opcion=parseInt(prompt('Digite la opcion'));
switch (opcion) {
    case 1:
        opcion1();
        break;
    case 2:
        opcion2();
        break;
    case 3:
        opcion3();
        break;
    case 4:
        opcion4();
        break;
    case 5:
        ciclo=1;
        console.log('Saliendo');
        break;
    default:
        console.log("Numero invalido.")
        break;
}
}






function opcion1(){
    var fibonacci = [0,1];
    let suma = 0;
    let suma1 = 0;
    let cont =2;
    n = parseInt(prompt("Digite la cantidad de numero Fibonacci que quiere consultar"));
    for (let i = 0; i < n; i++) {
        suma = fibonacci[i]+fibonacci[i+1];
        fibonacci[cont]=suma;
        cont=cont+1;
        suma = 0;
    }
    num = parseInt(prompt('Digite un numero: '))
    if (num in fibonacci){
        alert("El numero que usted ingreso es un numero fibonacci en la longitud de fibonacci que usted ingreso.");
    }
    else{
        alert("El numero no esta en la serie fibonacci");
    }
    console.log("Los numeros fibonacci son: ");
    for (const dato of fibonacci) {
        suma = suma + dato;
        console.log(dato);
        if (dato%2 != 0){
            suma1 = suma1 + dato;
        }
    }
    console.log("La suma de la serie de Fibonacci es: " + suma);
    console.log("La suma de los numeros impares de la serie de Fibonacci es: " + suma1);

}
function opcion2(){
let nAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos de los que desea ingresar su calificación: "))
cont = 1;
suma = 0;
media = 0;
alumnos = [];
for (let i = 0; i < nAlumnos; i++) {
    alumnos [i] = parseFloat(prompt("Digite la mota del alumno #"+cont));
    cont+=1;
}

for (const dato1 of alumnos) {
    suma = suma + dato1;
}
media = suma /nAlumnos;
menor  =Math.min(...alumnos);
mayor = Math.max(...alumnos);
console.log("La nota media es: " + media);
console.log("La nota mayor es: " + mayor);
console.log("La nota menor es: " + menor);


}
function opcion3(){
    suma1 = 0;
    suma2 = 0;
    suma3 = 0;
    intentos =3;
    while (intentos>0) {
        numero = parseInt(prompt("Digite un numero:"));
        if (numero%2 == 0 || numero%3 ==0|| numero%5 ==0 ) {
            if (numero%2 == 0) {
                suma1 = suma1 + numero
            }
            else if (numero%3 == 0) {
                suma2 = suma2 + numero
            }
            else if (numero%5 == 0) {
                suma3 = suma3 + numero
            }
        } else {
            alert("Acaba de perder un intento el numero ingresado no es múltiplo de 2,3 o 5.")
            intentos-=1;
        }
        
    }
    console.log("La suma total de numeros múltiplos de 2 es de: " + suma1);
    console.log("La suma total de numeros múltiplos de 3 es de: " + suma2);
    console.log("La suma total de numeros múltiplos de 5 es de: " + suma3);

}

function opcion4() {
    salario = parseFloat(prompt("Digite su salario mensual: "));
    antiguedad = parseInt(prompt("Digite su antigüedad en la empresa en años: "));
    let utilidad = 0;

    if (antiguedad<1 && antiguedad>0) {
        utilidad  =salario*0.05;
        alert('La utilidad de su salario de ' + salario + " es de: " + utilidad)
    } 
    else if (antiguedad>=1 && antiguedad<2) {
        utilidad  =salario*0.07;
        alert('La utilidad de su salario de ' + salario + " es de: " + utilidad)
    } 
    else if (antiguedad>=2 && antiguedad<5) {
        utilidad  =salario*0.1;
        alert('La utilidad de su salario de ' + salario + " es de: " + utilidad)
    } 
    else if (antiguedad>=5 && antiguedad<10) {
        utilidad  =salario*0.15;
        alert('La utilidad de su salario de ' + salario + " es de: " + utilidad)
    } 
    else if (antiguedad>=10) {
        utilidad  =salario*0.2;
        alert('La utilidad de su salario de ' + salario + " es de: " + utilidad)
    } 

}
function Ejercicio5() {
    var ant = 0, pos, num=1, cont=0, sumaImpar = 0, suma = 0;
    n = parseInt(prompt("Ingrese de que longitud quiere que sea la serie Fibonacci: "));
    nBuscar = parseInt(prompt("Ingrese el numero que desea buscar en la serie Fibonacci"))
    console.log(ant );
    console.log(num);
    
    for (let i = 0; i < n; i++) {
        pos = ant + num;
        ant = num;
        num = pos;
        console.log(pos);
        if (i ==0) {
             if (nBuscar != ant ||nBuscar != num) {
                cont+=2;
                suma = suma+ ant+pos;
                if(num%2!=0){
                    sumaImpar = sumaImpar + num;
                }
                    
        }
    }
    if (pos%2!=0) {
        sumaImpar = sumaImpar+pos;
    }
    if (nBuscar != pos) {
        cont = cont +1;
    }
    suma = suma+pos
}
if (cont == n+2) {
    alert("Su numero NO se encuentra en la secuencia fibonacci");
}
else{
    alert("Su numero se encuentra en la secuencia fibonacci");
}
alert("La suma de la serie fibonacci es: "+ suma);
alert("La suma de los numeros impares de la serie fibonacci es: "+ sumaImpar);

}