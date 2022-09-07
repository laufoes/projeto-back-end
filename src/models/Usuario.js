import mongoose from "mongoose";

function validateEmail(email) {
    var regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    return regex.test(email);
};

const usuarioSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        cpf: { type: String, required: true},
        birthDate: { type: String, required: true},
        email: { type: String, required: true, validate: [validateEmail, 'Por favor insira um endereço de e-mail válido.'] },
        password: { type: String, required: true, minlength: 6 },
        address: { type: String, required: true },
        number: { type: String, required: true },
        complement: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
        zipCode: { type: Number, required: true }
    }
);

const usuarios = mongoose.model('usuarios', usuarioSchema);

export default usuarios;