# Weather API (Node.js + Docker)

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

Build image:

docker build -t weather-api .

Run container:

docker run -p 3000:3000 weather-api

Test: 

http://localhost:3000/weather?city=Delhi
