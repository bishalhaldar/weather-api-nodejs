# Weather API (Node.js + Docker)

[![Docker
Hub](https://img.shields.io/badge/Docker%20Hub-weather--api-blue?logo=docker)](https://hub.docker.com/r/bishalhaldar/weather-api)

A simple Express API that returns weather information for a given city.

---

## Tech Stack

- Node.js
- Express.js
- Docker

---

## Prerequisites

Make sure you have installed: 

- Node.js (v16 or later)
- npm
- Docker (optional, if running with container)

---

## Installation

Clone the repository:

git clone https://github.com/bishalhaldar/weather-api-nodejs.git

Go into the project folder:

cd weather-api-nodejs

install dependencies:

npm install

---

## Running locally

Start the server:

node index.js

Test endpoint:

http://localhost:3000/weather?city=Delhi

---

## Example JSON Response

Request:

/weather?city=Delhi

Response:

``` JSON
{
  "city":"Delhi",
  "temp":"dummy data"
}
```

---

## Runing with Docker

Build image locally:

docker build -t weather-api .

Pull image for Docker Hub:

docker pull bishalhaldar/weather-api

Run container:

docker run -p 3000:3000 bishalhaldar/weather-api

Test: 

http://localhost:3000/weather?city=Delhi

