const fs = require('fs')

const filename = process.argv.slice(2)[0]

fs.readFile(filename, 'utf8', (err, text) => {
    if(err) {
        console.err('Erreurr: ', err)
    } else {
        console.log('Contenu du fichier: ', text)
        const lowerCaseText = text.toLowerCase()
        fs.writeFile(filename, lowerCaseText, 'utf8', (err) => {
            if(err) {
                console.err('Erreur: ', err)
            } else {
                console.log('Texte du fichier passé en minuscules:', lowerCaseText)
            }
        })
    }
}); 
