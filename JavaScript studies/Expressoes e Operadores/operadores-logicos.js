let idade = 17;
let entradaPermitida = 18;

if(idade >= entradaPermitida){
    console.log("Entrar");
} else {
    console.log("Proibido Entrar");
}

// OR
console.log(false || false); // false
console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true

//AND
console.log(false && false); // false
console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true

// 2+ e Misto
console.log(false && false && true); // false
console.log(false || false || true); // true
console.log(false ||(false && true)); // false

// NOT
console.log(!true); // false
console.log(!false); // true

// Resultado de uma expreção (comparação) e boolean
console.log(23 < 24 && "A" == "A"); // true