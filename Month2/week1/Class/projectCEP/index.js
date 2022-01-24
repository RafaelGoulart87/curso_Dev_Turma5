/*
1. Crie uma função que gere uma lista de 20 CEP’s aleatórios. Dica: uma das faixas de CEP válidas vai de 29000000 a 29099999. 
Use essa informação para gerar os CEP’s dentro dessa faixa.
2. Crie um programa que recebe uma lista de CEP’s e devolve um arquivo JSON para cada CEP consultado com as informações de logradouro, 
bairro, localidade, uf e o CEP consultado.
Observação: escreva o arquivo apenas com ceps válidos e que tiveram retorno da api.
*/
import { getRandomArrayCEP, getInfoFromCEP, getRightListCEP } from "./cepHelpers.js";
import { saveToJason } from "./writeFile.js";

const main = async() => {
    const arrayCepWithouError = await (await getRightListCEP()).filter(element => element && element.cep)
    const finalArrayCEP = arrayCepWithouError.map(element => {
        const data = {
            logradouro: element.logradouro,
            bairro: element.bairro,
            localidade: element.bairro,
            uf: element.uf,
            cep: element.cep,
        }
        return data
    })
    if (finalArrayCEP.length > 0) {
        finalArrayCEP.forEach(element => {
            saveToJason(element, `${element.cep}.json`)
        });
    }
}
main()