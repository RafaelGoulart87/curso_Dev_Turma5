import fs from "fs"

export const readCSV = (csvFile) => {
    return fs.readFileSync(csvFile, 'utf-8')
}
export const formatCSV = (csvReaded) => {
    const share = csvReaded.split(/\r?\n/)
    return (share.map(element => element.split(","))).splice(1, share.length)
}