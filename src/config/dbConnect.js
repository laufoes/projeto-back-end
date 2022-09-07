import mongoose from "mongoose";

mongoose.connect('mongodb+srv://compasso:compasso123@projeto-backend.xfntvok.mongodb.net/Projeto-Backend');

let db = mongoose.connection;

export default db;