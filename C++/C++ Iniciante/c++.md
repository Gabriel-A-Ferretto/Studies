# Estrutura de Programa C++

```cpp
#include <iostream>
```
*Um abeçalho é um arquivo que contem funções e comandos.*

*O comando **<** **iostream** **>** em C++ contém o **cout** comando que usamos para gerar texto. Por isso incluimos em nosso programa para usalo.*

<hr>

```cpp
#include <iostream>
using namespace std;
```
*Isso diz ao programa para usar o **std namespace**.  Precisamos fazer isso porque o **cout** comando faz parte do **std namespace**.*

*Um namespace é usado para organizar o código em grupos lógicos e dar-lhes nomes. Portanto, o **std namespace** faz parte do cabeçalho **<** **iostream** **>** , contendo o coutcomando.*

<hr>

### Apos o cabeçalho, você verá o seguinte código:

```cpp
int main() {

}
```
*Cada programa C++ tem um ponto de entrada, ou ponto de partida, que é uma função chamada **main** .*

```cpp
int main() {
  cout << "Hello Word!";
}
```
*As chaves **{ }** indicam o início e o fim de uma função, que também pode ser chamada de **corpo da função** . O código dentro dos colchetes indica o que a função faz quando executada.*
*Quando executarmos o código, o **cout** comando será executado.*

<hr>

*Para adicionar uma nova linha, você pode usar o comando **endl**, assim:*

```cpp
cout << "This is the first line" << endl;
```
*Isso adiciona uma nova linha após o primeiro texto. Você pode usar quantos **endl** comandos precisar.*

+ Observe que você pode usar os <<símbolos para separar saídas diferentes em uma única coutinstrução.

Por exemplo:
```cpp
cout << "One" << endl << "Two" << endl;
```
<hr>

