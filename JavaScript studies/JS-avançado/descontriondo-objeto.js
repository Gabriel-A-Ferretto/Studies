let pessoa = {
    nome: "Blbo Bolseiro",
    pessoa: "Hobbit",
    profissao: "Guerreiro"
}

console.log(pessoa);
console.table(pessoa); // cria uma tabela
console.log(pessoa.profissao);

// Desconstruindo Objeto
const {nome, profissao} = pessoa;
console.log(nome, profissao);

