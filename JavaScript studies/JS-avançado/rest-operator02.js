function sorteador(...numeros){
 console.log(numeros);

 const numeroGerado = Math.floor(Math.random() * numeros.length); 
 console.log(numeros[numeroGerado]);
}

sorteador(1, 3, 5, 7, 9, 11, 2, 4, 6, 8, 10);


