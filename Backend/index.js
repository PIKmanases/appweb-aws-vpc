const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 5000;

//configuración
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

let estudiantes = [
    { nombre: "Estudiante 1" },
    { nombre: "Estudiante 1" },
    { nombre: "Estudiante 1" },
]

app.get('/', (req, res) => {
    try{
        res.status(200).json({msj: "todo ok" });
    }catch (error){
        console.log("A internal error server");
        res.status(500).send("A internal error server");
    }
});

app.listen(PORT, ()=>{
    console.log(`Backen is listening on http://localhost:${PORT}`);
});
