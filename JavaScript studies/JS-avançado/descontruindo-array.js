let nomes = ["Luzia", "Jorge", "Duglas"];
console.table(nomes);

// Desconstruindo o array
let {0:Luzia, 2:Douglas} = nomes;
console.log(Luzia, Douglas);

// Outra forma de desconstruir um array
let [primeiroNome, segundoPrimeiroNome,segundoNome] = nomes;
console.log(primeiroNome, segundoNome);


