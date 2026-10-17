function calcular(a,b,c){
    const delta = (b**2) - (4 * a * c)

    if (delta > 0){
        let x1 = ((-b) + (delta**0.5)) / (2*a)
        let x2 = ((-b) - (delta**0.5)) / (2*a)

        let resultado = [x1,x2]
        return resultado
    }

    else if(delta == 0){
        let x = ((-b) + (delta**0.5)) / (2*a)

        let resultado = [x]
        return resultado
    }
    else if(delta < 0){
        let status = `Esta equação não possui raízes reais!`
        let resultado = [status]
        return resultado
    }
}

let resultado = calcular(0,1,2)

if (resultado.length == 2){
    let x1 = resultado[0]
    let x2 = resultado[1]
    console.log(x1, x2)
}
else if(resultado.length == 1){
    resultado = resultado[0]

    if(typeof resultado == `number`){
    let x = resultado
    console.log(x)}
    else{
        console.log(resultado)

    }
}
