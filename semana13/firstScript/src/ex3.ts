// Considere que você esteja implementando
// uma rede social composta por posts de usuários.
// Cada um dos posts possui: um autor e um texto.
// Observe o seguinte array de posts:

// const posts = [
//     {
//       autor: "Alvo Dumbledore",
//       texto: "Não vale a pena viver sonhando e se esquecer de viver"
//     },
//     {
//       autor: "Severo Snape",
//       texto: "Menos 10 pontos para Grifinória!"
//     },
//     {
//       autor: "Hermione Granger",
//       texto: "É levi-ô-sa, não levio-sá!"
//     },
//     {
//       autor: "Dobby",
//       texto: "Dobby é um elfo livre!"
//     },
//     {
//       autor: "Lord Voldemort",
//       texto: "Avada Kedavra!"
//     }
//   ]

//   a) Copie o código acima para um arquivo .ts.
//   Depois, crie um type para representar um post e
//   utilize-o para fazer a tipagem do array posts.

type post = {
  autor: string;
  texto: string;
};

const alvo: post = {
  autor: "Alvo Dumbledore",
  texto: "Não vale a pena viver sonhando e se esquecer de viver",
};

const severo: post = {
  autor: "Severo Snape",
  texto: "Menos 10 pontos para Grifinória!",
};
const hermione: post = {
  autor: "Hermione Granger",
  texto: "É levi-ô-sa, não levio-sá!",
};
const dobby: post = {
  autor: "Dobby",
  texto: "Dobby é um elfo livre!",
};
const Lord: post = {
  autor: "Lord Voldemort",
  texto: "Avada Kedavra!",
};

//   Dica: Lembre-se da variável de tipo do typescript,
//   que é uma descrição estrutural do comportamento de
//   um objeto. Ou seja, o type define as propriedades e
//   tipos que o objeto deve ter.

//   type person = {
//     name: string,
//     age: number
//     }

//     const astrodev: person = {
//     name: "Astrodev",
//     age: 30
//     }

//    type person = {
// name: string,
// age: number
// }

// const astrodev: person = {
// name: "Astrodev",
// age: 30
// }

// b) Observe abaixo a função buscarPostsPorAutor(),
// escrita em JavasScript:

// function buscarPostsPorAutor(posts, autorInformado) {
//     return posts.filter(
//       (post) => {
//         return post.autor === autorInformado
//       }
//     )
//   }

//   Quais são as entradas e saídas dessa função?
//entradas: posts, autorInformado
//saídas: post.autor === autorInformado
//   Copie a função para o mesmo arquivo .ts do array
//   de posts e faça a tipagem necessária
