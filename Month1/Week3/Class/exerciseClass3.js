/*
3. Crie uma função que recebe um objeto usuário e imprime se ele é maior de idade, utilize os conhecimentos da aula para melhorar o código.

Exemplo Entrada:
{ name: ‘Juca’, idade: 28 }
*/

const user = { name: 'Rafael', idade: 34 }


const checkAge = ({ idade }) =>
    idade >= 18 ? 'Maior de idade.' : 'Menor de idade.'
console.log(checkAge(user))