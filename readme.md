# Partie 3 - Filesystem

## Lancer les exercices

Lancer les lignes de commandes suivantes pour exécuter les programmes:

Exercice 1 `node exercice-1.js textfile.txt`  
Exercice 2 `node exercice-2.js textfile.txt`  
Exercice 3 `node exercice-3.js textfile.txt`  
Exercice 4 `node exercice-4.js textfile.txt`  
Exercice 5 `node exercice-5.js textfile.txt`  

# Partie 1 - Chatbot

## Run server:

    npm i
    npm run start

## API endpoints:

    localhost:3000/hello (GET)
    localhost:3000/chat (POST)

## CURL commands to test the API

    curl http://localhost:3000/
    curl http://localhost:3000/hello?nom=Sasha
    curl http://localhost:3000/hello?nom=Michel
    curl http://localhost:3000/hello
    curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"ville\"}" http://localhost:3000/chat
    curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"météo\"}" http://localhost:3000/chat

