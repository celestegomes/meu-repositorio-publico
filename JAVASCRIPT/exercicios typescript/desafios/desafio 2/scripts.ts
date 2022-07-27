interface pessoa{
    nome:string,
    idade:number,
    profissao:profissao
}

enum profissao {
    atriz,
    padeiro
}

let pessoa1 = {} as pessoa;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = profissao.atriz;

let pessoa2 = {} as pessoa;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = profissao.padeiro;

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
}