//Exercícios de interpretação de código:
/*
1. Foi criada uma função para converter
um valor de dolar para reais.
Essa função tem como parâmetro o valor em dolar. 
Portanto, foi criada uma variável constante com o valor 
da cotação do dólar, que será informado pelo usuário. 
A função vai retornar (guardar) o valor do parâmetro em dolar multiplicada pela
cotação informada pelo usuário.
Fora da função foi criada uma nova variável
nomeada de meu dinheiro onde foi informado
o parâmetro (valor em dolar) de 100 dolares.
Vai aparecer no console o valor de 100 dolares
convertida em reais, esse valor será multiplicado
pelo valor informado da cotação do dólar.
*/

/*
2. Foi criada uma função para calcular o valor
final de um investimento, multiplicando o valor
investido pela taxa de rendimento. 
Criou-se uma função chamada investe dinheiro
em que recebeu dois parâmetros de tipo de investimento
e o seu valor. Criou-se uma variável sem valor
inicial, a qual vai variar conforme o investimento
escolhido. Foi usado o switch case, em que mostra opções
fixas (cases) para cada investimento. No caso,
foi informado na variável novo montante que o
tipo de investimento escolhido foi "ações", portanto
a função vai ir testando os cases até encontrar
um case chamado "ações", quando encontrar vai 
calcular o valor fornecido na const novo montante
multiplicado pelo rendimento que é de 1.1. Como
tem o break a função para de testar e coloca
o valor obtido após o investimento (nesse caso vai
ser de 165) no return. Com o console log, esse
valor vai aparecer no console. O mesmo
ocorrendo com o segundo montante, em que
serão testado no switch até ser encontrado
o case "tesouro direto", no caso, esse case
não vai ser encontrado, portanto se encaixará
no default, o que vai gerar uma mensagem de alerta
escrita que "o tipo de investimento informado
é incorreto".
*/
/*
3. No caso, foi criada uma array chamada de numeros em que
forneceu alguns números dentro de []. Foram criada mais duas arrays
vazias que serão preenchidas conforme o for..of usado.
Por isso, o for...of está pegando uma variavel denominada numero
de dentro da array numeros, se esse numero for par ele será empurrado
para dentro da array1 e se não, se for ímpar, será empurrado para dentro
da array2. No final, vai aparecer no console a quantidade de números da
array numero (14), a quantidade de numeros pares (6) e a quantidade de numeros ímpares (8)
*/

/*
4. Foi criada uma array denominada de numeros, com alguns numeros dentro da colchetes.
Foram criadas duas variáveis, a variável numero 1 foi atribuido o valor infinito,
essa variável é considerada maior que todas as outras. Para variável numero2
foi atribuido o valor 0. Foi usado o for...it para pegar uma variável numero
de dentro da array numeros. Se esse numero for menor que a variável numero1,
ou seja, menor que infinito, ao numero1 será atribuido o valor do numero. Portanto,
no console.log(numero1) vai aparecer todos os numeros da array numeros, já que todos
os numeros são menores que infinito. Se o numero for maior que o numero2, ou seja,
maior que 0, ao numero2 será atribuido o valor do numero, no exemplo, todos os
números positivos são maiores que 0, são esses números que irão aparecer no
console.log(numero2)
*/

//Exercícios de Lógica de Programação:
/*
1.

2.
a)false
b)true
c)true
d)false
e)false
*/
/*
3.
Não, este código não funcionará, por que o i sempre será 0, fazendo com que a 
multiplicação por 2 sempre dê como reposta zero. Pode-se usar, para simplificar 
o laço, o "for", em que i inicia na posição 0, tem a condição de continuação
i <= N, e o incremento de +1 (i++).
Corrigiria pedindo para o usuário, atravé do prompt, indique um número (N):


   let N = prompt("escolha um número")
    for (let i=0 ; i <= N; i++) {
        if(i % 2 === 0) {
                      
            console.log(i)
    }
}
*/
/*
4.
 function tipoTriangulo (a,b,c) {
     if(a === b && b === c) {
         console.log(`O triângulo é EQUILÁTERO`)
     } else if(a === b && b !== c || b === c && a !== c || a === c && c !== b) {
         console.log(`O triângulo é ISÓCELES`)
     } else {
         console.log(`o triângulo é ESCALENO`)
     }

        
}
const resultado = tipoTriangulo(5,5,6) 
*/
/*5.

function escolheMaiorNumero (numero1, numero2) {
    if(numero1 > numero2) {
        console.log(`O maior é: ${numero1}`)
    } else if(numero2 > numero1) {
        console.log(`O maior é: ${numero2}`)
    } else {
        console.log(`Os dois número são iguais: ${numero1} e ${numero2}`)
    }
}

function dizerSeDivisivel (numero1, numero2){
    if(numero1 % numero2 === 0) {
        console.log(`${numero1} é divisível por ${numero2}`)
    } else {
        console.log(`${numero1} não é divisível por ${numero2}`)
    }
    if(numero2 % numero1 === 0) {
        console.log(`${numero2} é divisível por ${numero1}`)
    } else { 
        console.log(`${numero2} não é divisível por ${numero1}`)
    }
}

function subtrairNumeros (numero1, numero2){
    if(numero1 >= numero2) {
        let resultadoN1Maior = numero1 - numero2
        console.log(`A diferença entre eles é ${resultadoN1Maior}`)
    } else if (numero2 > numero1) {
        let resultadoN2Maior = numero2 - numero1
        console.log(`A diferença entre eles é ${resultadoN2Maior}`)
    }
}
let resultado2 = escolheMaiorNumero(15,30)
let resultado1 = dizerSeDivisivel(15,30)
let resultado3 = subtrairNumeros(15,30)
*/
//Exercícios de Funções:
/*
1 e 2.

function escolherNumero() {
    let array = [-1, 0, 1, 2, 3, 100]
    array.sort(function(a,b){//sort: organiza por ordem crescente, mas em forma de string: 0,1,-1,100,2,3
        return a-b //organiza para a ordem crescente numeral: -1,0,1,2,3,100
    })
    let segundoMaiorEMenor = array.length -2//
    console.log(`O segundo menor é ${array[1]} e o segundo maior é ${array[segundoMaiorEMenor]}`)//o segundo menor estará
   
}//outra forma que pensei era fazer um novo array com o push ordenando em ordem crescente e pegando os numeros
//conforme a posição. 


let alertHello  = function() {
 
   alert("Hello Future4") 
    escolherNumero()
}
 
alertHello()
*/