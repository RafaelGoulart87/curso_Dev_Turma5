/*
6. Crie uma função que conte quantas palavras existem na frase que
for passada como parâmetro(dica: utilizem o método split de string)
*/

function counter(words, counterWords) {
    words = (words.split(' '))
    for (let i = 0; i < words.length; i++) {
        counterWords = words.length
    }
    console.log(counterWords)
}
counter('Sou aluno da Otterwise.')