const correcto = "4325"
function breaker(num) {

    let respuesta = ""
    let correctoSplit = correcto.split("")
    let numeros = num.split("")

    for (let i = 0; i < 4; i++) {
        if (correcto.includes(numeros[i])) {
            if (correctoSplit[i] == numeros[i]) {
                respuesta = "X" + respuesta
            } else {
                respuesta = respuesta + "_"
            }
        }
    }
    return respuesta
}

module.exports = { breaker }