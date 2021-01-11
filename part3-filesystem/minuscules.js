// J'importe la librairie fs pour pouvoir manipuler des fichiers
const fs = require('fs')

// J'indique le fichier dans lequel se trouve mon texte à récupérer. Un petit fichier .txt avec une phrase
// à l'intérieur genre ("Je m'appelle Machin") fait très bien l'affaire.
// Vous devez créer ce fichier à part, en faisant clic droit, "Nouveau fichier", et en l'appelant nomquevousvoulez.txt
const filename = process.argv.slice(2)[0]

// Je lis le contenu de ce fichier avec la fonction que me fournit fs.
// Il faut préciser l'encodage en utf8, sinon ça sort des trucs chelou
const text = fs.readFileSync(filename, {encoding:'utf8'}); 
// Maintenant ma variable text contient bien le texte présent dans mon fichier, et on veut transformer ce texte pour qu'il ne
// contienne que des minuscules. On utilise la fonction adéquate, toLowerCase()
const lowerCaseText = text.toLowerCase()
// On l'affiche dans la console pour vérifier qu'on a bien notre texte tout en minuscule.
console.log(lowerCaseText)
// On écrit notre texte en minuscule dans le fichier pour remplacer l'original.
fs.writeFileSync(filename, lowerCaseText, {encoding:'utf8'})