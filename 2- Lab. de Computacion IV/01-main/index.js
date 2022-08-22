import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.send("Hola Get mundo");
});

app.post("/", (req, res) => {
    res.send("Hola POST mundo");
});

app.listen(3000, () => {
    console.log("API en funcionamiento")
});