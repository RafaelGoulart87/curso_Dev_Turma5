/*
10 - Calcule a média de consumo de combustível utilizada em uma viagem e o
tempo levado durante a viagem. Você deve imprimir no console esses dois
valores:
Os valores de entrada serão:
Distância percorrida na viagem em km;
Velocidade do automóvel em km/h;
Quantidade de combustível gasto em litros.
Exemplo de Entrada:
240
80
20
Exemplo de Saída:
Média de consumo: 12 km/l
Tempo da viagem: 3 horas
*/

const distaceKm = 240
const velocityKmh = 80
const fuel = 20
const meanConsuption = distaceKm / fuel
const time = distaceKm / velocityKmh

console.log('Média de consumo: ' + meanConsuption + ' km/L')
console.log('Tempo da viagem: ' + time + ' horas')