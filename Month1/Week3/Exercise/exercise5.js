/*
5 - [REFATORAÇÃO] Crie um algoritmo que tem como entrada um número e
imprime a sua tabuada do 1 ao 10.
OBS: Para melhorar a resolução desse problema, monte um código que aceite
um segundo valor e irá imprimir a tabuada de 1 até esse valor.
*/
const tableOfNumber = (number) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number*i}`)
    }
}
tableOfNumber(5)