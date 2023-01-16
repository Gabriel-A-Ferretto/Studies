// Funções anonimas

/*
    Escrita:

    ( ) => { }

    1- Os parênteses, que é por onde a função recebe os argumentos (assim como nas funções tradicionais)
    2- "seta" => - responsavel pelo nome "arrow"
    3- W as chaves: o bloco de código que representa o corpo da função
*/

function somar(a, b){
    let total = a + b;
    return console.log(total);
}

somar(20, 10);

console.log("===================================================================================================================");

let subtrair = (valor1, valor2) => {
    let total =  valor1 - valor2;
    if(valor1 > valor2){
        console.log(total);

    } else if(valor1 < valor2){
        let devToatal = valor1 - valor2;
        console.log(`Voce esta devendo ${devToatal}`);

    } else if(valor1 == valor2 ){
        let zerado = valor1 - valor1;
        console.log(`Suas contas estão zeradas ${zerado}`)
    }
}

subtrair(30, 30);

console.log("==================================================================================================================");

let numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]

numbers.map((item) => {
    console.log(item);
})

