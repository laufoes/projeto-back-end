import usuarios from "../models/Usuario.js";

class UsuarioController {

    static listarUsuarios = (req, res) => {
        const page  = req.query.page || 0;
        const usuariosPorPagina = 3;

        usuarios.find((err, usuarios) => {
            res.status(200).json(usuarios)
        })
        .sort({"id":1})
        .limit(usuariosPorPagina)
        .skip(page * usuariosPorPagina)
    }

    static listarUsuariosPorNome = (req, res) => {
        const name = req.query.name;

        usuarios.find({'name': {$regex: name}}, {}, (err, usuarios) => {
            if (usuarios.length == 0 || err) {
                res.status(404).send({ message: "Usuário não localizado." })
            } else { res.status(200).send(usuarios)}
        })
    }

    static obterUsuarioPorId = (req, res) => {
        const id = req.params.id;

        usuarios.findById(id, (err, usuarios) => {
            if(err) {
                res.status(404).send({message: `${err.message} - ID do usuário não localizado.`})
            } else {
                res.status(200).send(usuarios);
            }
        })
    }

    static cadastrarUsuario = (req, res) => {
        let usuario = new usuarios(req.body);

        usuario.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar novo usuário.`})
            } else {
                res.status(201).send(usuario.toJSON())
            }
        });
    }
    
    static atualizarUsuario = (req, res) => {
        const id = req.params.id;

        usuarios.findByIdAndUpdate(id, {$set: req.body}, {runValidators: true}, (err) => {
            if(err) {
                res.status(404).send({message: `${err.message} - Falha ao atualizar o uscuário ou ID não localizada.`})
            } else {
                res.status(200).send({message: 'O usuário foi atualizado com sucesso.'})
            }
        })
    }

    static deletarUsuario = (req, res) => {
        const id = req.params.id;

        usuarios.findByIdAndDelete(id, (err) => {
            if(err) {
                res.status(404).send({message: `${err.message} ID do usuário não localizado.`})
            } else {
                res.status(204).send({message: 'Usuário excluído com sucesso.'})
            }
        })
    }
}

export default UsuarioController