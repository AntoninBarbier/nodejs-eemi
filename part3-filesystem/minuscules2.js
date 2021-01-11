const fs = require('fs')

const filename = process.argv.slice(2)[0]

fs.readFile(filename, 'utf8', (err, text) => {
    if(err) console.log(err)
    const lowerCaseText = text.toLowerCase()
    console.log(lowerCaseText)
    fs.writeFile(filename, lowerCaseText, 'utf8', (err) => {
        if(err) console.log(err)
        console.log('Fichier modifié')
    })
}); 
