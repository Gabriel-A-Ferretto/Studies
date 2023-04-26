#include <stdio.h> // /usr/include/stdio.h
/*
Em C, a diretiva #include é usada para incluir arquivos de cabeçalho (header files) em um programa.
Ao incluir o arquivo de cabeçalho stdio.h, você está informando ao compilador que o programa usará a função 
printf e que o compilador deve procurar a definição dessa função no arquivo de biblioteca padrão libc.a ou libc.so 
durante a compilação.
A diretiva #include é uma das diretivas de pré-processador em C, que são usadas
 para processar o código fonte antes da compilação real. 
*/

/* int -> inteiro (dependendo da aquitetura)
   main -> é o nome da função 
   void -> argumento da função (parametros)
   return -> retorna um inteiro, que no caso retorna 0
 */
int main(void) {
    printf("Hello Word\n");
    return 0; // se dermos um -> "echo $?" vamos conseguir ver o retorno
    // sobre o 0 significa sucesso e 1 algo diferente disso
}

