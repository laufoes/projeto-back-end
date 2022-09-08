const validaIdade = (birthDate) => {
    const dataAtual = new Date();
    const dataNascimento = new Date(birthDate);
    const idadeUsuario = Math.floor(((dataAtual - dataNascimento) / 31536000000));

    if(idadeUsuario >= 18) {
        return true;
    } else {
        return false;
    }
}

export default validaIdade