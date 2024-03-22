const conversionMeses = {
    1: 'enero',
    2: 'febrero',
    3: 'marzo',
    4: 'abril',
    5: 'mayo',
    6: 'junio',
    7: 'julio',
    8: 'agosto',
    9: 'septiembre',
    10: 'octubre',
    11: 'noviembre',
    12: 'diciembre'
};

const meses31Dias = ['enero', 'marzo', 'mayo', 'julio', 'agosto', 'octubre', 'diciembre'];

const año = 365
const mesesEnElAño = 12
const mesesCon31Dias = 7

function buscarJuegos(arrrayABuscar,arrayZelda){
    const juegosNoExistentes = []
    const juegosEncontados = []
    for(let i =0;i<arrrayABuscar.length;i++){
        const juego = arrrayABuscar[i]
        const buscarJuego = arrayZelda.find(item => item.title === juego)
        if(!buscarJuego){
            juegosNoExistentes.push(juego)  
            continue;
        } 
        juegosEncontados.push(buscarJuego)
    }
    return [juegosEncontados,juegosNoExistentes]
}

function sumarDias(inicio,final){
    let sumarDia = 0
    for(let i =inicio;i<=final;i++){
        const convertirMes = conversionMeses[i]
        const saberSiTiene31Dias = meses31Dias.find(item => item == convertirMes)
        if(saberSiTiene31Dias) sumarDia++
    }
    return sumarDia
}

function compararDias(meses,año,dia,dia2,mes,mes2){
    console.log(mes,mes2)
    const diasCompletos = meses * 30

    const sumar31AñoCompleto = mesesCon31Dias * año
    const diasPrimerMesSumar =  sumarDias(mes,12)
    const sumarDiasDel2doMes = sumarDias(0,mes2)

    const sumarDiasC = diasCompletos + sumar31AñoCompleto +diasPrimerMesSumar + sumarDiasDel2doMes

    const diasDesdeLosJuegos = sumarDiasC - dia - dia2 

    return diasDesdeLosJuegos
}

function compararFechas(juegosOrdenados){
    const compararJuegos = []
    for(let i =0;i<juegosOrdenados.length;i++){
        const {año,dia,mes,title} = juegosOrdenados[i]
        if(i === juegosOrdenados.length - 1) break;
        const {año:año2,dia:dia2,mes:mes2,title:titulo2} = juegosOrdenados[i + 1]


        const diferenciaAño = año2 - año
        const añosTotales = diferenciaAño - 2

        const dieferenciaMeses = mes2 > mes?mes2 - mes:mes - mes2
        
        const aproximarMeses = diferenciaAño * mesesEnElAño

        const mesesDesdeElPrimerJuego = mes2 > mes? aproximarMeses + dieferenciaMeses: aproximarMeses - dieferenciaMeses

        const compararLosDias = compararDias(mesesDesdeElPrimerJuego,añosTotales,dia,dia2,mes,mes2)
        
        const obj = {juegoInicio:title,juegosAComparar:titulo2,añosEntreEllos:diferenciaAño,mesesEntreEllos:mesesDesdeElPrimerJuego,diasEntreEllos:compararLosDias}

        compararJuegos.push(obj)
    }

    return compararJuegos
}

function ordenarJuegos(juegos){
    const juegosOrdenadosAño = juegos.sort((itemA,itemB)=> itemA.año - itemB.año)
    const compararFechasC = compararFechas(juegosOrdenadosAño)
    return compararFechasC
}

function zelda(arrayJuegos){
    const infoZelda = [{title:"The Legend of Zelda:Tears of the Kingdom",año:2023,mes:5,dia:12
    },{title:"The Legend of Zelda: Link's Awakening",año:2019,mes:9,dia:20
    },{title:"The Legend of Zelda: Breath of the Wild",mes:3,dia:3,año:2017}]

    const buscarJuegosC = buscarJuegos(arrayJuegos,infoZelda) 

    const juegosAComparar = buscarJuegosC[0]
    const juegosNoEncontrados = buscarJuegosC[1]

    const juegosOrdenados = ordenarJuegos(juegosAComparar)

    return [juegosOrdenados,juegosNoEncontrados]
    
}
const juegoUno = "The Legend of Zelda:Tears of the Kingdom"
const juegoDos = "The Legend of Zelda: Link's Awakening"

const array = [juegoUno,juegoDos]

const zeldaC = zelda(array)
console.log(zeldaC)