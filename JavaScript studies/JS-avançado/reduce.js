// Reduce -> busca reduzir um array

let numeros = [5, 3, 2, 7];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} - total até o momento`);
    console.log(`${numero} - valor atual`);
    console.log(`${indice} - indice atual`);
    console.log(`${original} - array original`);
    console.log("=========================================================");

    return acumulador += numero; // pegando sempre o numero e somando com o resultado
})

console.log(`TOTAL DO REDUCE ${total}`);