function suma(){
    while(true){
        let entrada1 = prompt("Ingresa el primer numero: ");
        let numero1 = Number(entrada1);
        if (isNaN(numero1)){
            alert("porfavor ingresa un numero");
            break
        }
        let entrada2 =  prompt("Ingresa el segundo numero: ");
        let numero2 = Number(entrada2);
        if (isNaN(numero2)) {
            alert("porfavor ingresa un numero");
            break
        }
        else{
            let resultado = numero1+numero2;
            alert("resultado = "+resultado);
            alert("Hasta la Proxima");
            break
        }
    }
}

function restar(){
    while(true){
        let entrada1 = prompt("Ingresa el primer numero: ");
        let numero1 = Number(entrada1);
        if (isNaN(numero1)){
            alert("porfavor ingresa un numero");
            break
        }
        let entrada2 =  prompt("Ingresa el segundo numero: ");
        let numero2 = Number(entrada2);
        if (isNaN(numero2)) {
            alert("porfavor ingresa un numero");
            break
        }
        else{
            let resultado = numero1-numero2;
            alert("resultado = "+resultado);
            alert("Hasta la Proxima");
            break
        }
    }
}

function multiplicar(){
    while(true){
        let entrada1 = prompt("Ingresa el primer numero: ");
        let numero1 = Number(entrada1);
        if (isNaN(numero1)){
            alert("porfavor ingresa un numero");
            break
        }
        let entrada2 =  prompt("Ingresa el segundo numero: ");
        let numero2 = Number(entrada2);
        if (isNaN(numero2)) {
            alert("porfavor ingresa un numero");
            break
        }
        else{
            let resultado = numero1*numero2;
            alert("resultado = "+resultado);
            alert("Hasta la Proxima");
            break
        }
    }
}

function dividir(){
    while(true){
        let entrada1 = prompt("Ingresa el primer numero: ");
        let numero1 = Number(entrada1);
        if (isNaN(numero1)){
            alert("porfavor ingresa un numero");
            break
        }
        let entrada2 =  prompt("Ingresa el segundo numero: ");
        let numero2 = Number(entrada2);
        if (isNaN(numero2) || numero2==0) {
            alert("porfavor ingresa un numero y no uses 0");
            break
        }
        else{
            let resultado = numero1/numero2;
            alert("resultado = "+resultado);
            alert("Hasta la Proxima");
            break
        }
    }
}