function imprimirTipoTransporte(metros){
    let tipo = getTipoTransporte(metros);
    document.getElementById('respuesta').innerText = tipo;
}

function getTipoTransporte(metros){
    if(metros >= 0 && metros < 1000){
        return "pie";
    }else if(metros >= 1000 && metros < 10000){
        return "bicicleta";
    }else if(metros >= 10000 && metros < 30000){
        return "colectivo";
    }else if(metros >= 30000 && metros < 100000){
        return "auto";
    }else if(metros >= 100000){
        return "avion";
    }else{
        return "no existe";
    }
}

function mayor(arrayNumeros){
    let mayor = 0;
    for(let i = 0; i <= arrayNumeros.length; i++){
        if(arrayNumeros[i] > mayor || mayor === 0){
            mayor = arrayNumeros[i];
        }
    }
    return mayor;
}