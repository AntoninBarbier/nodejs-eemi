if (nb > 0) {
    console.log("positif");
} else if (nb < 0) {
    console.log("négatif");
}

function sum(nb1, nb2) {
    return nb1 + nb2;
}

console.log(poidsFichier('background.jpg'))

const express = require('express');
const app = express()
const port = process.env.PORT || 6060;

app.get('/multiplie', (req, res) => {
    res.send(parseInt(req.query.a) * parseInt(req.query.b));
})

app.listen(port, () => { console.log(`Server started on http://localhost:${port}`)});