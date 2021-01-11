const fs = require('fs')

const filename = process.argv.slice(2)[0]

function lireFichier(filename) {
    fs.promises.readFile(filename, { encoding: 'utf8' })
    .then((text) => { 
        writeToFile(text) 
    }).catch((err) => {
        console.error(err);
    })
} 

function writeToFile(text) {
    text = text.toLowerCase()
    fs.promises.writeFile(filename, text)
    .then(() => {
        console.log('Fichier modifié')
    }).catch((err) => {
        console.error(err);
    })
}

lireFichier(filename)