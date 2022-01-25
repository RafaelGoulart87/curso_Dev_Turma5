import { readCSV, formatCSV } from "./csvHelpers.js"
import { csvToJson, saveToJason } from "./jsonHelpers.js"


const main = () => {
    const csvReaded = readCSV("listProducts.csv")
    const csvFormated = formatCSV(csvReaded)
    const jsonReady = csvToJson(csvFormated)
    saveToJason(jsonReady, "productsPriceList.json")
}
main()