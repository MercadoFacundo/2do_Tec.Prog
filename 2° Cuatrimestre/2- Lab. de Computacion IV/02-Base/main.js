import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.send("Hola GET mundo");
});

app.listen(3000, () => {
    console.log("API en funcionamiento")
});