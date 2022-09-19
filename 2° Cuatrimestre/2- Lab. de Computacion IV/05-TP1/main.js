import express from "express";
import { db } from "./db.js";
import { personasRouter } from "./routers/personas.router.js";

// Configurar Express
const app = express();
app.use(express.json());

// Routers
app.use("/personas", personasRouter);

// Mensaje de bienvenida
app.get("/", (req, res) => {
    res.send("API de personas");
  });


// Ejecutar API
app.listen(4000, async () => {
    try {
      await db.authenticate();
      console.log("Conexion a base de datos exitosa");
    } catch (error) {
      console.error("No se pudo conectar a la base de datos:", error);
    }
    console.log("API en funcionamiento");
  });