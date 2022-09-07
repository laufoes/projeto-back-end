import express from 'express';
import UsuarioController from '../controllers/usuariosController.js';

const router = express.Router();

router
    .get("/api/v1/users", UsuarioController.listarUsuarios)
    .get("/api/v1/users/busca", UsuarioController.listarUsuariosPorNome)
    .get("/api/v1/users/:id", UsuarioController.obterUsuarioPorId)
    .post("/api/v1/users", UsuarioController.cadastrarUsuario)
    .put("/api/v1/users/:id", UsuarioController.atualizarUsuario)
    .delete("/api/v1/users/:id", UsuarioController.deletarUsuario)

export default router;