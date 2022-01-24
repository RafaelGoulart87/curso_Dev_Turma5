/*
22 - Pegue um valor de entrada e calcule o menor número de notas possíveis
(cédulas) no qual o valor pode ser decomposto. As notas consideradas são de
100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas
necessárias.
*/

function money(note) {
    note100 = parseInt(note / 100)
    note = note % 100
    console.log(note100 + ' notas de R$ 100,00')
    note50 = parseInt(note / 50)
    note = note % 50
    console.log(note50 + ' notas de R$ 50,00')
    note20 = parseInt(note / 20)
    note = note % 20
    console.log(note20 + ' notas de R$ 20,00')
    note10 = parseInt(note / 10)
    note = note % 10
    console.log(note10 + ' notas de R$ 10,00')
    note5 = parseInt(note / 5)
    note = note % 5
    console.log(note5 + ' notas de R$ 5,00')
    note2 = parseInt(note / 2)
    note = note % 2
    console.log(note2 + ' notas de R$ 2,00')
    note1 = parseInt(note / 1)
    note = note % 1
    console.log(note1 + ' notas de R$ 1,00')
}
money(576)