# SCOPE → determina a visibilidade de alguma variável no JavaScript.

## Block Statement

```js
    {
	    aqui é um bloco e posso
	    colocar qualquer código
    }

```

+ O  bloco também criará um novo escopo. Chamamos de **block scoped** .

## Global e Local

*→ O resultado será: **undefined**, está dizendo que a variável existe porem não tem um valor definido, o código reconhece que tem uma variável existe porque a palavra var é global, e então acontece uma coisa chamada **hoisting**(elevação).*

```js
    console.log("existe bloco" + x);

{
	var x = 0;
}

```

# LET e CONST

+ ### LET e CONST → São locais e só funcionam no escopo onde foi criada.

*A pilha de funções do programa acima se resume em:*

```js
    PRINCIPAL
	-> ola
		    * console.log();
	-> ola
    PRINCIPAL
	-> console.log()
    PRINCIPAL
```

*O armazenamento dessa pilha de chamada necessita de espaço na memória de computador que no caso é limitada a poucos **bytes**. Quando a pilha aumenta de tamanho e “estoura” teremos a mensagem **maximum call size exceeded** .*

```js
function galinha() {
	return ovo();
}

function ovo() {
	return galinha();
}

console.log(galinha() + "veio primeiro");
```