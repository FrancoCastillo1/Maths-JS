const matrices = [{type:"3x3",matriz:[8,2,3,2,3,2,45,4,84],numberFilas:3,numberColumnas:3},{type:"1x3",matriz:[8,2,3]},{type:"2x3",matriz:[8,2,3,2,3,2,]},{type:"3x2",matriz:[8,2,3,2,3,2,]},{type:"3x3",matriz:[8,2,2,5,3,2,25,6,84],numberFilas:3,numberColumnas:3}]

function operacionAritmetica(matrizUno,matrizDos,op){
    const arrayOperacion = []
    console.log("estas",matrizDos,matrizUno)
    for(let i =0;i<matrizUno.length;i++){
        const oepracion = op == "+"?matrizUno[i] + matrizDos[i]
        : matrizUno[i] - matrizDos[i]

        arrayOperacion.push(oepracion)
    }
    return arrayOperacion
}

function aritmeticaMatrices(matricesAOperar,op){
    const corroborrarTypes  = matricesAOperar.reduce((acumm,item) =>{
    if(acumm === " ")return acumm = item.type
    if(acumm !== item.type) return acumm = false
    return acumm
    }," ")

    if(!corroborrarTypes) return "Para una suma las matrices deben medir lo mismo"

    const operarTodaMatriz = matricesAOperar.reduce((acumm,item,i) =>{
        const matriz = item.matriz
        const sumarIndex = i + 1
        const matrizAOperarC = matricesAOperar[sumarIndex]
        if(!matrizAOperarC) return acumm;
        const matrizNext = matrizAOperarC.matriz
        const verQueOperar = acumm.length === 0?matriz:acumm

        const operacionFinalizada =  operacionAritmetica(verQueOperar,matrizNext,op)
        acumm.push(...operacionFinalizada)
        return acumm
    },[])

    return operarTodaMatriz
}

function diagonalMayor(matrizP){
    const {matriz,numberColumnas,numberFilas} = matrizP
    let numberFilasV = matrizP.numberFilas+ 1
    if(numberFilas !== numberColumnas) return "No son iguales"
    const arrayDiagonal = []
    for(let i =0;i<matriz.length;i+=numberFilasV){
        console.log("value i",i)
        const element = matriz[i]
        arrayDiagonal.push(element)
    }
    return arrayDiagonal
}

function diagonalMenor(matrizP){
    const {matriz,numberColumnas,numberFilas} = matrizP
    let numberFilasV = matrizP.numberFilas - 1
    if(numberFilas !== numberColumnas) return "No son iguales"
    const arrayDiagonalMenor = []
    for(let i =numberFilasV;i<matriz.length;i+=numberFilasV){
        const element = matriz[i]
        arrayDiagonalMenor.push(element)
    }
    arrayDiagonalMenor.pop() 
    return arrayDiagonalMenor
}

function calcularTriangulos(matrizP){
    const {numberFilas} = matrizP
    const calcularTrianguloSuperior = operacionParaCalcularTriangulos(matrizP,1,numberFilas,"-")
    const calcularTrianguloInferior = operacionParaCalcularTriangulos(matrizP,numberFilas,0,"+")
    
    const text = `Triangulo supeior :${calcularTrianguloSuperior}, Triangulo Inferior:${calcularTrianguloInferior}, diagonalM:${iagonal}, diagonalME:${dM}`

    return text
}
function operacionParaCalcularTriangulos(matrizP,startIte,startIndex,op){
    const {numberFilas,matriz} = matrizP
    let ite = startIte
    let esTriangulo = true
    let sumatoriaI = op == "+"?numberFilas - 1:numberFilas + 1
    
    for(let i =startIndex;i<matriz.length;i+=sumatoriaI){
        for(let j =ite;j>0;j--){
            const operationJ = op == "+"?i + j:i -j
            const elementAEvaluar = matriz[operationJ]
            console.log("este",elementAEvaluar)
            if(elementAEvaluar !== 0){
                esTriangulo = false
                break;
            }
        }
        if(!esTriangulo) break;
    }
    return esTriangulo
}

console.log(calcularTriangulos(matrices[0]))