import mongoose from "mongoose";
import validaEmail from "../helpers/validacaoEmail.js";
import validaCPF from "../helpers/validacaoCPF.js";

const usuarioSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: [true, 'O nome é obrigatório.'], validate: [/[A-Za-z]/, 'Favor inserir um nome válido.'] },
        cpf: { type: String, required: [true, 'O CPF é obrigatório.'], validate: [validaCPF, 'Favor inserir CPF válido.'] },
        birthDate: { type: String, required: [true, 'A data de nascimento é obrigatória.'], max: "09/09/2004"},
        email: { type: String, required: [true, 'O endereço de e-mail é obrigatório.'], validate: [validaEmail, 'Por favor insira um endereço de e-mail válido.'] },
        password: { type: String, required: [true, 'A senha é obrigatória.'], minlength: 6 },
        address: { type: String, required: [true, 'O endereço é obrigatória.'] },
        number: { type: String, required: [true, 'O telefone é obrigatório.'] },
        complement: { type: String, required: [true, 'O complemento é obrigatório.'] },
        city: { type: String, required: [true, 'A cidade é obrigatória.'] },
        state: { type: String, required: [true, 'O estado é obrigatório.'] },
        country: { type: String, required: [true, 'O país é obrigatório.'] },
        zipCode: { type: String, required: [true, 'O CEP é obrigatório.'], validate: [/^[0-9]*$/, 'Favor inserir apenas números.'], minlength: 8, maxlength: 8 }
    },
    {
        versionKey: false
    }
);

const usuarios = mongoose.model('usuarios', usuarioSchema);

export default usuarios;