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

