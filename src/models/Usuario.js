import mongoose from "mongoose";

const validaEmail = (email) => {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email)
}

const usuarioSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        cpf: { type: String, required: true, minlength: 11, maxlength: 11 },
        birthDate: { type: Date, required: true, max: '01-01-2004'},
        email: { type: String, required: true, validate: [validaEmail, 'Por favor insira um endereço de e-mail válido.'] },
        password: { type: String, required: true, minlength: 6 },
        address: { type: String, required: true },
        number: { type: String, required: true },
        complement: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
        zipCode: { type: String, required: true, minlength: 8, maxlength: 8 }
    },
    {
        versionKey: false
    }
);

const usuarios = mongoose.model('usuarios', usuarioSchema);

export default usuarios;