import express from "express"

const app = express();

//Arreglo de personas
let personas = [
    { id: 1, nombre: "Facundo", apellido: "Mercado", edad: 26, lista: true},
    { id: 2, nombre: "Pedro", apellido: "Manzur", edad: 31, lista: true},
    { id: 3, nombre: "Lucio", apellido: "Molina", edad: 47, lista: true},
    //{ id: 2, descripcion: "tarea 2", lista: true},
];
//para que el body pueda leer el contenido json
app.use(express.json());

//Mensaje de bienvenida
app.get("/", (req, res) => {
    res.send("API de personas");
});
//personas/:id/descripcion/:lista

//GET /personas
app.get("/personas", (req, res) => {
    res.send(personas);
});
//GET /personas/:id  - LEER
app.get("/personas/:id", (req, res) => {
    const persona = personas.find((persona) => persona.id == req.params.id);//filter es para varios y find es para uno
    res.send(persona ?? {});
});

//POST /personas     -Va a traer el id mayor de todos  - CREAR
app.post("/personas", (req, res) => {
    const maxId = personas.reduce((prev, actual) => actual.id > prev.id ? actual: prev, personas[0]).id;

//creo una nueva persona, le creo una descripcion, una nueva lista, y lo pusheo
    const nuevaPersona = {
        id: maxId + 1,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        lista: req.body.lista
    };

    personas.push(nuevaPersona);

    res.send(nuevaPersona);
});

//PUT /personas/:id    - ACTUALIZAR
app.put("/personas/:id", (req, res) => {
    personas.map((persona) =>{
        if (persona.id == req.params.id){
            persona.nombre = req.body.nombre;
            persona.apellido = req.body.apellido;
            persona.edad = req.body.edad;
            persona.lista = req.body.lista;
        } 
    });
    res.send("ok");
});
//DELETE /personas/:id   - BORRAR
app.delete("/personas/:id", (req, res) => {
    personas = personas.filter((persona) => persona.id != req.params.id);
    res.send("ok");
});

//EJECUTAR API
app.listen(3000, () => {
    console.log("API en funcionamiento")
});

//HACER LO MISMO CON PERSONAS