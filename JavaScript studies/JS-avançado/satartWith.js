/* startsWith -> essa função verifica se tem o primeiro nome de uma variavel ou começo de palavras dentro 
de uma variável ela também só retorna dois valores no caso booleanos verdadeiro ou falso (true ou false) */ 
let superMercado = "Super-Mercado Fartura";

/* No primeiro caso foi verdadeiro(true) ja no segundo foi falso sedo que a função só consegue 
pegar as primeiras palavras ou letras de uma variável, no caso da segunda tentamos pegar o começo 
da palavra "Fartura" que remete a "Fartura" no nosso caso e então o valor retornado é falso(false). 
"  */
console.log(superMercado.startsWith("Super")); // true

console.log(superMercado.startsWith("Fartura")); // false


/* endsWith ->  já para saber sobre o final de uma variável usamos o endsWith da mesma que o startsWith e includes ambos
retornam valores boleanos verdeiro ou falso (true ou false) */
console.log(superMercado.endsWith("Fartura")); // true