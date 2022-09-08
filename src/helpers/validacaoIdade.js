const validaIdade = (birthDate) => {
    let dataNascimento = new Date(birthDate);
    let dataAtual = new Date();
    let anos = dataAtual - dataNascimento;
    let idade = Math.floor(anos/31557600000);
    return idade > 17;
}
export default validaIdade