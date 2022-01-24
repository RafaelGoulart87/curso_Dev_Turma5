/*
23 - Crie uma função que recebe como argumento um valor em segundos,
calcula e retorne uma string formatada HH:MM:SS (horas:minutos:segundos) .
Exemplo de Entrada:
600
-----------------
33567
Exemplo de Saída:
0:10:0
-----------------
9:19:27
*/

function time(seconds) {
    hour = parseInt(seconds / 3600)
    seconds = seconds % 3600
    minutes = parseInt(seconds / 60)
    seconds = seconds % 60
    console.log(hour + ':' + minutes + ':' + seconds)
}
time(33567)