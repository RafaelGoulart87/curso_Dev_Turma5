/*
10 - [REFATORAÇÃO] Dado a lista de compras a seguir, faça um programa que
imprime no console o valor total. Atenção, o valor de cada item é unitário.
Exemplo de Entrada:
[
{ nome: 'maçã', quantidade: 2, valor: 0.5},
{ nome: 'alface', quantidade: 1, valor: 1.73},
{ nome: 'Água 5L', quantidade: 2, valor: 5.99},
{ nome: 'Pão Francês', quantidade: 8, valor: 0.63}
]
Exemplo de Saída:
R$ 19.75
*/

const averagePrice = price => {
    let result = 0
    for (i = 0; i < price.length; i++) {
        value = (price[i].valor * price[i].quantidade)
        result += value
    }
    console.log(`Valor total: R$ ${result}`)
}
averagePrice([
    { nome: 'maçã', quantidade: 2, valor: 0.5 },
    { nome: 'alface', quantidade: 1, valor: 1.73 },
    { nome: 'Água 5L', quantidade: 2, valor: 5.99 },
    { nome: 'Pão Francês', quantidade: 8, valor: 0.63 }
])