import express from 'express';
import UsuarioController from '../controllers/usuariosController.js';

const router = express.Router();

router
    .get("/api/v1/users", UsuarioController.listarUsuarios)
    .post("/api/v1/users", UsuarioController.cadastrarUsuario)
    .put("/api/v1/users/:id", UsuarioController.atualizarUsuario)

export default router;