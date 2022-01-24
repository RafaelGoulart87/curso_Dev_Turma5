/*
6 - [REFATORAÇÃO] Dado um array de números, faça um programa que imprima
na tela somente os números positivos.
OBS: Para melhorar a resolução desse problema, crie funções que também
imprimem os números negativos, os pares, os ímpares e realize a contagem de
cada um deles.
Os valores de entrada serão:
Array;
Exemplo de Entrada:
[1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]
-----------------
[-5, -1467, 32, 28, 65, -2, -49, -63, 22, -13, 255 ]
*/
console.log('POSITIVOS')
const showNumbers = checkNumbers => {
    let [pair, odd, positive, negative] = [0, 0, 0, 0]
    for (let i = 0; i < checkNumbers.length; i++) {
        if (checkNumbers[i] > 0) {
            showPositives = checkNumbers[i]
            console.log(showPositives)
        }
        if (checkNumbers[i] % 2 === 0) {
            pair++
        }
        if (checkNumbers[i] % 2 !== 0) {
            odd++
        }
        if (checkNumbers[i] > 0) {
            positive++
        }
        if (checkNumbers[i] < 0) {
            negative++
        }
    }
    console.log(`${pair} valor(es) par(es)`)
    console.log(`${odd} valor(es) impar(es)`)
    console.log(`${positive} valor(es) positvo(s)`)
    console.log(`${negative} valor(es) negativo(s)`)
}
showNumbers([1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127])