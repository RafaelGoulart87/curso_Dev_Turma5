/*
17 - Faça um programa que receberá a hora inicial e a hora final de um jogo. A
seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um
dia e terminar em outro, tendo uma duração máxima de 24 horas.
Ex: Início: 22 - Término: 06 - Tempo de Duração: 8 horas
*/

function game(startOfTheGame, gameOver) {
    let duration = gameOver - startOfTheGame
    if (duration < 0) {
        console.log(duration += 24)
    } else if (duration === 0) {
        console.log(duration = 24)
    } else {
        console.log(duration)
    }
}
game(20, 20)