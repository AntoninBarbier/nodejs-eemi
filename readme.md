# Lancer les exercices

Partie 3 - Filesystem

Lancer les lignes de commandes suivantes pour exécuter les programmes:

Exercice 1 `node minuscules.js`
Exercice 2 `node minuscules2.js`
Exercice 3 `node callback.js`
Exercice 4 `node promesses.js`
Exercice 5 `node async-await.js`

# Run server:

    npm i
    npm run start

# API endpoints:

    localhost:3000/hello (GET)
    localhost:3000/chat (POST)

# CURL commands to test the API

    curl http://localhost:3000/
    curl http://localhost:3000/hello?nom=Sasha
    curl http://localhost:3000/hello?nom=Michel
    curl http://localhost:3000/hello
    curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"ville\"}" http://localhost:3000/chat
    curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"météo\"}" http://localhost:3000/chat

