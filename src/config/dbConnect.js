import mongoose from "mongoose";

mongoose.connect('mongodb+srv://compasso:compasso123@projeto-backend.xfntvok.mongodb.net/Projeto-backend?');

let db = mongoose.connection;

export default db;