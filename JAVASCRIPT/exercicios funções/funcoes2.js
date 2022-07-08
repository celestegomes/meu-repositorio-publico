function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const joana = {
    nome: Joana,
    idade: 15,
};
const paulo = {
    nome: Paulo,
    idade: 27,
};
const magdalena = {
    nome: Magdalena,
    idade: 64,
};