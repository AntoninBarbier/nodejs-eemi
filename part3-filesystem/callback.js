const fs = require('fs')

function lireFichier(filename, writeToFile) {
    fs.readFile(filename, 'utf8', (err, text) => {
        if(err) {
            writeToFile(err)
        } else {
            writeToFile(null, text)
        }
    }); 
}

function writeToFile(err, text) {
    if(err) {
        console.log("Lecture échouée. Impossible d'écrire dans le fichier:", err)
    } else {
        const lowerCaseText = text.toLowerCase()
        fs.writeFile(filename, lowerCaseText, (err) => {
            if(err) console.log(err)
            console.log('Fichier modifié')
        })
    }
}

const filename = process.argv.slice(2)[0]
lireFichier(filename, writeToFile)

