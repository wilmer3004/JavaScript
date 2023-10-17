
let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?");
    if(edad >= 18){   
        if(time >=2 && time <7 && free==false){
            alert("Podes pasar gratis por que sos la primera persona después de las 2AM")
            free = true
        } 
        else{
            alert(`son las ${time}:00Hs puedes pasar, pero antes tienes que pagar`)
        }
    }
    else{
        alert("Eres menor de edad");
    }
}


validarCliente(23)
validarCliente(24)
validarCliente(0.2)
validarCliente(0.6)
validarCliente(1)
validarCliente(2)
validarCliente(2.4)
validarCliente(3)






