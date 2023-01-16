// Filter -> Filtra (filtra comparação e retorna um reseultado)

let palavras = ["Felix", "João", "Bob", "Jack", "Tom", "Alexa"];

let resultado = palavras.filter((item) => {
    return item.length <= 4;
})

console.log(resultado);