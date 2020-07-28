// Observe a função a seguir, escrita em JavaScript:

// function obterEstatisticas(numeros) {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// a. Quais são as entradas e saídas dessa função?
//entradas: numeros
//saídas: estatisticas

// Copie a função para um arquivo .ts e faça a tipagem
// desses parâmetros

let numeros: number[];

// b. Que outras variáveis compõem essa função?
// Explicite a tipagem de todas elas
let soma: number;
let estatisticas: {
  maior: number;
  menor: number;
  media: number;
};

// c. Crie um type para representar uma amostra de dados,
// isto é, um objeto com as chaves numeros e obterEstatisticas.
// Abaixo, temos um exemplo de objeto desse tipo, declarado
// em JavaScript:

// const amostraDeIdades = {

//     numeros: [21, 18, 65, 44, 15, 18],

//     obterEstatisticas: (numeros) => {...}
// }

type dados = {
  numeros: number[];
  obterEstatisticas: number[];
};

// Ao posicionar o cursor sobre o nome da variável ou
// função, a IDE normalmente exibe a tipagem que está
// sendo implicitamente atribuída a ela.
