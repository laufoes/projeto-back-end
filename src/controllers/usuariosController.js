import usuarios from "../models/Usuario.js";

class usuarioController {

    static listarUsuarios = (req, res) => {
        usuarios.find((err, usuarios) => {
            res.status(200).json(usuarios)
        })
    }
}

export default usuarioController