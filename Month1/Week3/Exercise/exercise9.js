/*
9 - [REFATORAÇÃO] Dado um array de números, faça um programa que encontre
o menor elemento deste array e sua posição. Mostre as informações
encontradas no console.
OBS: Para melhorar a resolução desse problema, monte um programa que
também consegue retornar qual o maior valor e qual a sua posição.
Exemplo de Entrada:
[1,2,3,4,-5,6,7,8,9,10]
Exemplo de Saída:
Menor valor: -5
Posição: 4
*/
const showBiggerSmallerNumber = numbersArray => {
    let [biggerNumber, smallerNumber] = [numbersArray[0], numbersArray[0]]
    let [positionBigger, positionSmalller] = [0, 0]

    for (let i = 0; i < numbersArray.length; i++) {

        if (numbersArray[i] < smallerNumber) {
            smallerNumber = numbersArray[i]
            positionSmalller = i
        }
        if (numbersArray[i] > biggerNumber) {
            biggerNumber = numbersArray[i]
            positionBigger = i
        }
    }
    console.log(`Menor número: ${smallerNumber}, posição no array: ${positionSmalller}`)
    console.log(`Maior número: ${biggerNumber}, posição no array: ${positionBigger}\n`)
}
showBiggerSmallerNumber([1, 2, 3, 4, -5, 6, 7, 8, 9, 10])
showBiggerSmallerNumber([1, 22, 3, 4, -5, 6, 7, -8, 9, 10])