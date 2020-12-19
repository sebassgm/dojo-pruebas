const correcto = "4325"
function breaker (num){
    
    let respuesta = ""
  
    if (correcto.includes(num,0)){
        respuesta = "XXXX"
        
    } else{
        let correctoSplit = correcto.split("")
        let numeros = num.split("")
        if (correcto.includes(numeros[0])){
            if(correctoSplit[0] == numeros[0]){
                respuesta = "X" + respuesta
            }else{
                respuesta = respuesta + "_"
            }
            
            
        }if (correcto.includes(numeros[1])){
            if(correctoSplit[1] == numeros[1]){
                respuesta = "X" + respuesta
            }else{
                respuesta = respuesta + "_"
            }

        }if (correcto.includes(numeros[2])){
            if(correctoSplit[2] == numeros[2]){
                respuesta = "X" + respuesta
            }else{
                respuesta = respuesta + "_"
            }
            
        }if (correcto.includes(numeros[3])){
            if(correctoSplit[3] == numeros[3]){
                respuesta = "X" + respuesta
            }else{
                respuesta = respuesta + "_"
            }
        }
    }
    return respuesta
}

module.exports = {breaker}