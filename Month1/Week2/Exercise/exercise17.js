/*
17 - Dado o array de objetos a seguir, crie um algoritmo que imprimirá no
console se o user é dev ou não, conforme a saída esperada à seguir.
Importante: DEVE ser na mesma linha.
Entrada:
[
{ name: 'Marília', age: 26, job: 'Dev' },
{ name: 'Juca', age: 21, job: 'RH' },
{ name: 'Flávia', age: 30, job: 'Financeiro' },
{ name: 'Sérgio', age: 24, job: 'Dev' },
]
Saída esperada:
'Marília é dev. Juca não é dev. Flávia não é dev. Sérgio é dev.'
*/

const user = [
    { name: 'Marília', age: 26, job: 'Dev' },
    { name: 'Juca', age: 21, job: 'RH' },
    { name: 'Flávia', age: 30, job: 'Financeiro' },
    { name: 'Sérgio', age: 24, job: 'Dev' },
]

let result = ''

for (i = 0; i < user.length; i++) {
    result += `${user[i].name} ${user[i].job !== 'Dev' ? 'não':''}é dev`
    if (i !== user.length - 1) {
        result += ', '
    } else { result += '.' }
}
console.log(result)