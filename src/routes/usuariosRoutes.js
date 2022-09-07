import express from 'express';
import UsuarioController from '../controllers/usuariosController.js';

const router = express.Router();

router
    .get("/api/v1/users", UsuarioController.listarUsuarios)

export default router;