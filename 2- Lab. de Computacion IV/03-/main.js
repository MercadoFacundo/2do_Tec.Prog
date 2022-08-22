import express from "express"

const app = express();

//Arreglo de tareas
let tareas = [
    { id: 1, descripcion: "tarea 1", lista: true},
    { id: 2, descripcion: "tarea 2", lista: true},
];
//para que el body pueda leer el contenido json
app.use(express.json());

//Mensaje de bienvenida
app.get("/", (req, res) => {
    res.send("API de tareas");
});
//tareas/:id/descripcion/:lista

//GET /tareas
app.get("/tareas", (req, res) => {
    res.send(tareas);
});
//GET /tareas/:id  - LEER
app.get("/tareas/:id", (req, res) => {
    const tarea = tareas.find((tarea) => tarea.id == req.params.id);//filter es para varios y find es para uno
    res.send(tarea ?? {});
});

//POST /tareas     -Va a traer el id mayor de todos  - CREAR
app.post("/tareas", (req, res) => {
    const maxId = tareas.reduce((prev, actual) => actual.id > prev.id ? actual: prev, tareas[0]).id;

//creo una nueva tarea, le creo una descripcion, una nueva lista, y lo pusheo
    const nuevaTarea = {
        id: maxId + 1,
        descripcion: req.body.descripcion,
        lista: req.body.lista,
    };

    tareas.push(nuevaTarea);

    res.send(nuevaTarea);
});

//PUT /tareas/:id    - ACTUALIZAR
app.put("/tareas/:id", (req, res) => {
    tareas.map((tarea) =>{
        if (tarea.id == req.params.id){
            tarea.descripcion = req.body.descripcion;
            tarea.lista = req.body.lista;
        } 
    });
    res.send("ok");
});
//DELETE /tareas/:id   - BORRAR
app.delete("/tareas/:id", (req, res) => {
    tareas = tareas.filter((tarea) => tarea.id != req.params.id);
    res.send("ok");
});

//EJECUTAR API
app.listen(3000, () => {
    console.log("API en funcionamiento")
});

//HACER LO MISMO CON PERSONAS