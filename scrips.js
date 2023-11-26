function validarPeso(peso){   
    if (peso < 0) {
        console.log("error: tu hijo flota")
        return 
    }
    let resultado; 
    if(peso <= 30){
        resultado = Holliday(peso)
    }
    else{
        resultado = SuperficieCorporal(peso)
    }
    return resultado

}

function Holliday(peso) {
    let resultado;
    if (peso <= 10) {
        resultado = peso * 100
        return resultado
    }
    if (peso <= 20) {
        resultado = 1000 + (peso - 10) * 50
        return resultado
    }
    if (peso <= 30) {
        resultado = 1500 + (peso - 20) * 20
        return resultado
    }
}
function SuperficieCorporal(peso){
     let resultado = ((peso * 4) + 7) / (peso + 90)
        return resultado 
}
let resultado = validarPeso(10)
console.log(resultado)