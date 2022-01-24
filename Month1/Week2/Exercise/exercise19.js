/*
19 - Crie um algoritmo que tem como entrada um array de strings e trata essas
string substituindo os números por letra de acordo com a tabela a seguir, além
disso, deve remover os espaços em branco no começo e fim da string, se
existirem.
Tabela:
1 : i
3 : e
4 : a
5 : s
0 : o
Exemplo entrada:
[' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt ']
Exemplo Saída:
[ 'helloworld', 'webdeveloper', 'otterwise', 'javascript' ]
*/

let array = [' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt ']

for (let i = 0; i < array.length; i++) {
    let word = ''
    for (let a = 0; a < array[i].length; a++) {
        letter = array[i][a]

        if (letter == '1') {
            letter = 'i'
        } else if (letter == '4') {
            letter = 'a'
        } else if (letter == '5') {
            letter = 's'
        } else if (letter == '0') {
            letter = 'o'
        } else if (letter == '3') {
            letter = 'e'
        } else if (letter == ' ') {
            letter = ''
        }
        word += letter
    }
    array[i] = word
}
console.log(array)