# Weather API (Node.js + Docker)

Simple Express API that returns weather information.

## Run locally

npm install

node index.js

open: http://localhost:3000/weather?city=Delhi

## Run with Docker

Build image:

docker build -t weather-api .

Run container:

docker run -p 3000:3000 weather-api

Test: 

http://localhost:3000/weather?city=Delhi
