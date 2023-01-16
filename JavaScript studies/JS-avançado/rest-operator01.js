// Rest-operator

/*
A ideia é imagine que tenha uma lista de convidados mas não sabe quantos são nesse caso usamos Rest-operator, assim não precisamos 
ficar adcionando um por um 
*/
function convidados(...nomes){ // Recebendo todos os convidados e tranto como uma lista [ ]
  console.log("Seja Bem Vindo Todos Convidados");
  console.log(nomes);
}

convidados("Maria", "Jose", "Pedro", "Nicolas", "Jorge", "Clovis", "Rodrigo");
