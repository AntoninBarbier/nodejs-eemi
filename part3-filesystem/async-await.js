const fs = require('fs')

const filename = process.argv.slice(2)[0]

const lireFichier = async () => {
    try {
        const res = await fs.promises.readFile(filename, 'utf8')
        const text = res.toLowerCase()
        await fs.promises.writeFile(filename, text, 'utf8')
    } catch(err) {
        console.error(err)
    }
}

lireFichier()