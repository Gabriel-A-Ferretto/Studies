/*O operador de dispersão do JavaScript ( ...) nos permite copiar rapidamente 
todo ou parte de um array ou objeto existente para outro array ou objeto. */

// Spread Operatos pode sem usado em arrays e objetos (...)

let primeiros = [1, 2, 3];
let numerosAdd = [...primeiros, 4, 5, 6, 7];
console.table(numerosAdd);

//=========================================================================================

let pessoa = {
    nome: "Blbo Bolseiro",
    pessoa: "Hobbit",
    profissao: "Guerreiro"
};

let = novaMissao = {
    ...pessoa, // spread operator
    nomeLocal: "Ilha perdida",
    inimigo: "Sauron"
    
};

console.table(novaMissao);

// =========================================================================================

function novoUsuario(info){
    let dados = {
        ...info,
        sattus: "ATIVO",
        inicio: "23/03/2023",
        id: "900718"
    };

    console.log(dados);
}

novoUsuario({nome: "Micky", sobrenome: "Mouse", idade: 27, cargo: "DEV" });
