// Find -> serve para buscar algo

let listagem = [5, 3, "Jose", 2, "Matheus"]

let busca = listagem.find((item) => {

    if(item === "Jose"){
        return console.log("ITEM ENCONTRADO COM SUCESSO") // Buscando item se Jose estiver e listagem ele retorna o valor e caso não tenha retorna undefined
    }

    
})

console.log(busca);