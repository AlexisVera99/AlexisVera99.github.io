let calculadora = document.getElementById("peso");
const CALCULAR = document.getElementById( "calcular" );
const ERROR = document.getElementById ( "error" );
const FLU = document.getElementById ( "flu" );
const MAN = document.getElementById ("man");

calcular.addEventListener("click", () => {
    const DATO = document.getElementById("peso").value;
    console.log("piojo")
    if( DATO > 0){
        ERROR.style.display = "none";
    if(DATO <= 30){   
        let flujo = holliday(DATO);
        let mantenimiento = flujo + flujo/2;
        FLU.innerHTML = flujo + " cc/hr";
        MAN.innerHTML = "m+m/2" + mantenimiento + "cc/hr";
    }else{    
        let volumenDiario = superficieCorporal(DATO);
        FLU.style.display = (1500 * volumenDiario) + "cc/hr";
        MAN.style.display = (2000 * volumenDiario) + "cc/hr";
     } 
        ERROR.style.display = 'block';   
        FLU.style.display = "block";
        MAN.style.display = "block";
    }else {
        MAN.style.display = "none";
        FLU.style.display = "none";
    }
})
function holliday(peso){
    if(peso <= 10){
       let resultado =  peso*100;
       return resultado;
    }
    if(peso <= 20 ){
        let resultado = (1000 + (peso - 10) * 50);
        return resultado;
    }
    if(peso <= 30){
        let resultado = (1500 + (peso - 20) * 20);
        return resultado;
    }
console.log(resultado)
}
function superficieCorporal(peso){
    let resultado = (((peso * 4) + 7) / (peso + 90));
    return resultado ;
}


