/*
1. Crie variáveis para armazenar algumas informações de cadastro de um estudante, são elas: nome, sobrenome, dia do nascimento, 
mês do nascimento, ano do nascimento, primeira nota e segunda nota. A partir dessas informações, você deve mostrar um relatório na tela da seguinte 
forma: Nome Completo, Idade, Data de Nascimento e Média:

Exemplo de Saída:
Nome Completo: João Pedro Bretanha
Idade: 29
Data de Nascimento: 11/04/1992
Média: 8
*/


let firstName = 'Rafael '
let secondName = 'Goulart'
let birthday = 10
let birthMonth = 01
let birthYear = 1987
let age = 2021 - birthYear
let firstnote = 10
let secondnote = 8
let mean = (firstnote + secondnote) / 2

console.log('Nome completo: ' + firstName + secondName)
console.log('Data de nascimento: ' + birthday + '/' + birthMonth + '/' + birthYear)
console.log('Idade: ' + age)
console.log('Média: ' + mean)