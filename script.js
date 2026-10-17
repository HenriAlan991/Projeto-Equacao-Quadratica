function calcular(a,b,c){
    const delta = (b**2) - (4 * a * c)

    if (delta > 0){
        let x1 = ((-b) + (delta**0.5)) / (2*a)
        let x2 = ((-b) - (delta**0.5)) / (2*a)

        let resultado = [x1,x2]
        return resultado
        
    }
}

let resultado = calcular(1,2,3)

let x_um = resultado[0]
let x_dois = resultado[1]

console.log(x_um, x_dois)
