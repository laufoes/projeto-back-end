import express from 'express';
import db from './config/dbConnect.js';
import usuarios from './models/Usuario.js';

db.on("error", console.log.bind(console, "Erro de conexão."));
db.once("open", () => {
    console.log('A conexão com o banco foi feita com sucesso!');
})

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send('Página inicial do projeto back-end');
})

app.get("/api/v1/users", (req, res) => {
    res.status(200).json(usuarios)
})

app.post("/api/v1/users", (req, res) => {
    usuarios.push(req.body);
    res.status(201).send('O usuário foi cadastrado com sucesso')
})

export default app