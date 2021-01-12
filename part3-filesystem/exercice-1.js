const fs = require('fs')
const filename = process.argv.slice(2)[0]
const text = fs.readFileSync(filename, {encoding:'utf8'}); 
const lowerCaseText = text.toLowerCase()
console.log(lowerCaseText)
fs.writeFileSync(filename, lowerCaseText, {encoding:'utf8'})