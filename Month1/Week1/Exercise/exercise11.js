/*
11 - Tendo como informação os três lados de um triângulo faça um programa
que imprima na tela se ele é EQUILÁTERO, ISÓSCELES ou ESCALENO.
OBS: Triângulo Equilátero → Possui os 3 lados iguais;
Triângulo Isósceles → Possui 2 lados iguais;
Triângulo Escaleno → Possui 3 lados diferentes.
Os valores de entrada serão:
Lado 1;
Lado 2;
Lado 3.
Exemplo de Entrada:
10
5
10
-----------------
2
1
5
Exemplo de Saída:
Triângulo Isósceles
-----------------
Triângulo Escaleno
*/

const side1 = 1
const side2 = 10
const side3 = 1

if (side1 === side2 && side1 === side3) {
    console.log('Triângulo Equilátero')
} else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
    console.log('Triângulo Escaleno')
} else {
    console.log('Triângulo Isóceles')
}