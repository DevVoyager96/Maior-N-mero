// # Maior-N-mero
// Atividade 01/07

/* Pergunte para o usuário um número, e retorne o maior número possível que pode ser feito com os algarismos por ele fornecidos.

Use o prompt para interagir com o usuário */


const prompt = require("prompt-sync")()

while(true) {

    let numero = prompt("Digite um número: ")

    if(isNaN(Number(numero))) {

        console.log("Número inválido")
    } else {
        numero = numero.split("")
    
        for(let i = 0; i < numero.length; i++) {
            for(let j = i + 1; j < numero.length; j++) {
                if(numero[i] < numero[j]) {
                    let aux = numero[i]
                    numero[i] = numero[j]
                    numero[j] = aux
                }
            }
        }
    
        console.log(numero.join(""))

    }

    
}