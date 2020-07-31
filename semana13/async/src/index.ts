import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

//Exercício 1.Vamos começar fazendo uma função nomeada simples que retorne todos os
// assinantes da nossa aplicação. Ela deve ser assíncrona, porque utiliza o async
// para fazer a comunicação com o banco de dados. Além disso, por ora, inidique que
// ela vai retornar um array de "qualquer coisa".
//1.a. Qual endpoint você deve utilizar para isso?
/////GET /subscribers/all - https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers/all
//1.b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
/////const main: () => Promise<any> = async (): Promise<any>
//c. Implemente uma função nomeada que faça o que foi pedido.

// async function getUsers(): Promise<any[]> {
//   const users = await axios.get(`${baseUrl}/subscribers/all`);

//  return users.data;

// getUsers().then((res) => {
//   console.log(res);
// });
//------------------------------------------------------------------------------
//Exercício 2
// Agora, para treinar um pouco da sintaxe, reescreva a função
// do exercício 1 utilizando arrow function.
// a. Explique, com suas palavras, a diferença da sintaxe de uma função
// nomeada assíncrona e uma arrow function assíncrona
/////A diferença entre as duas é que a função nomeada assíncrona é escrita diretamente, inicia com a palavra async e logo
// já vem o nome da função e o tipo dela. Enquanto que a arrow function primeiro se cria uma variável e atribui a essa
// variável uma arrow function do tipo qualquer.
//b. Implemente a função solicitada, usando arrow function:

// const getUsers = async (): Promise<any> => {
//   const users = await axios.get(`${baseUrl}/subscribers/all`);

//   return users.data;
// };

// getUsers().then((res) => {
//   console.log(res);
// });

//------------------------------------------------------------------------------

// Exercício 3
// Agora, vamos melhorar um pouco a nossa função, criando uma tipagem que
// represente os assinantes da nossa aplicação. No nosso caso, eles possuem um id,
// name e email, como indicado abaixo:
// type User = {
// 	id: string;
// 	name: string;
// 	email: string;
// }

// a. Se apenas trocarmos o retorno da função para: Promise<User[]> ,
// teremos algum erro de tipagem?
///Acredito que da certo fazendo essa troca.

// b. Na aula, comentamos que sempre fazemos um mapeamento do resultado de
// uma Promise, caso seja inidicado que ela retorne um Promise<any>. Explique com
// as suas palavras o porquê de fazermos isso:
////// O mapeamente serve para podermos organizar os dados da nossa maneira, sendo possível
////// renomeá-los e e modelarmos como o array será retornado.

// c. Reimplemente a função, corretamente.

const getUsers = async (): Promise<any> => {
  const users = await axios.get(`${baseUrl}/subscribers/all`);

  return users.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

getUsers().then((res) => {
  console.log(res);
});

//---------------------------------------------------------------------------

// Exercício 4
// Vamos continuar as nossas funcionalidades da API. Crie uma função que
// permita criar uma nova notícia.
// a. Qual é o tipo dessa função? Por quê?
////FUnção do tipo assíncrona, pois vai retornar uma promessa.
// b. Implemente a função solicitada

async function createNew(
  title: string,
  content: string,
  date: string
): Promise<void> {
  try {
    await axios.put(`${baseUrl}/news`, {
      title,
      content,
      date: Date.now(),
    });
  } catch (error) {
    console.log(error.message);
  }
}

createNew("NOVIDADE", "super novidade!", "30/07/2020");
