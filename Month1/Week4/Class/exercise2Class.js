// 2. Através da string “Maria, Paulo, Moisés, Joel, Ana”, imprima todos os nomes um em cada linha no console

const names = 'Maria, Paulo, Moisés, Joel, Ana'
const splitNames = names.split(',')

for (let i = 0; i < splitNames.length; i++) {
    const element = splitNames[i]
    console.log(element.trim())
}