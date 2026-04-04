const express = require("express");
const axios = require("axios");

const app = express();

app.get("/weather", async (req, res) => {
    const city = req.query.city || "London";
    res.json({ city, temp: "dummy data" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});