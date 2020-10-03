const express = require('express')
const bodyParser = require('body-parser')

let app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.text({defaultCharset: 'utf-8'}))

var port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Bonjour'))

app.get('/hello', (req, res) => {
    if(req.query.nom) {
        res.send(`Bonjour, ${req.query.nom} !`)
    } else {
        res.send('Quel est votre nom ?')
    }
})

app.post('/chat', (req, res) => {
    if(req.body.msg === 'ville') {
        console.log('Nous sommes à Paris')
        res.send('Nous sommes à Paris')
    } else if(req.body.msg === 'météo') {
        console.log('Il fait beau')
        res.send('Il fait beau')
    }
})

app.listen(port, () => { console.log(`Server started on http://localhost:${port}`) })