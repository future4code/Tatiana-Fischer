# logic-exercises

> > Lógica de Programação

Exercícios de lógica de programaçãp realizados no último módulo do bootcamp da [Labenu](https://labenu.com.br/)

Ferramentas e linguagens:

- Typescript
- Test/JEST

## Exercício 1 - Número Faltante:

<p>Implemente uma função que receba um array (ordenado ou não) com números de 1 a 100. Você sabe que, nesse array, está faltando apenas um número dentro desse intervalo. A sua função deve retornar o número faltante.</p>

<p> Há dois exemplos abaixo com o array ordenado para facilitar o entendimento da questão. Entretanto, não assuma que ele esteja ordenado para implementar a função! </p>
<ul>
  
<li> Para a entrada [1, 2, 3, ... , 45, 46, 48, 49, ... , 100], o retorno deve ser 47 </li>
<li> Para a entrada [1, 2, 3, ... , 69, 71, 72, ... , 100], o retorno deve ser 70 </li>

</ul>
<p>Além disso, faça, ao menos, dois testes automatizados da sua função.1.<p>

## Exercício 2 - indexOf:

- O objetivo desse challenge é te fazer pensar como um método que a gente usa bastante com strings: .indexOf. Escreva uma função que simule o seu comportamento (sem utilizar esse método na sua implementação), que receba uma string source e um caracter que se deseja encontrar nela query e devolva o index em que esse caracter aparece pela primeira vez

- Definição de <b>indexOf</b>: "O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente."

## Exercício 3 - Checa parênteses válidos:

Escreva uma função que recebe uma string que pode conter somente os seguintes caracteres: '(', ')', '[', ']', '{', '}' , e retorna true para uma string válida, e false para uma inválida.

- Uma string é válida se:

1. Parênteses (ou chaves, ou colchetes) abertos devem ser fechados pelo mesmo tipo de parênteses (ou chaves, ou colchetes).
2. Parênteses (ou chaves, ou colchetes) abertos devem ser fechados na mesma ordem que foram abertos.
   Obs. Uma string vazia é considerada **válida**.

- Exemplos:
  Input: "()"/Output: true
  Input: "()[]{}"/Output: true
  Input: "(]"/Output: false
  Input: "([)]"/Output: false
  Input: "{[]}"/Output: true

  obs.: "O método pop() remove o último elemento de um array e retorna aquele elemento".

## Exercício 4 - Maior prefixo comum:

Escreva uma função que receba um array de strings e retorne o maior prefixo comum entre todas as strings.
O prefixo é definido pelo começo até uma posição qualquer de uma string. Por exemplo, na string "arvore", "a" seria um prefixo, e "arvor" também.
Caso não exista um prefixo comum, retorne uma string vazia ("")
Seguem exemplos para melhor entendimento:

Input: ["flower","flow","flight"]/Output: "fl"
Input: ["dog","racecar","car"]/Output: ""
Input: ["coracao","cor","corona","coreia"]/Output: "cor"
