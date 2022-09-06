import express from 'express';
import db from './config/dbConnect.js';

db.on("error", console.log.bind(console, "Erro de conexão."));
db.once("open", () => {
    console.log('A conexão com o banco foi feita com sucesso!');
})

const app = express();

app.use(express.json());

const users = [
    {
        id: 1, "name": "João Silva", "cpf": "908.415.400-20", "birthDate": "01/01/2000", "email": "joao.silva@compasso.com", "password": "swordfish", "address": "street A", "number": "A25", "complement": "house", "city": "São Paulo", "state": "SP", "country": "Brasil", "zipCode": "93950-000"
    }
]

app.get("/", (req, res) => {
    res.status(200).send('Página inicial do projeto back-end');
})

app.get("/api/v1/users", (req, res) => {
    res.status(200).json(users)
})

app.post("/api/v1/users", (req, res) => {
    users.push(req.body);
    res.status(201).send('O usuário foi cadastrado com sucesso')
})

export default app