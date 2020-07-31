//1.Vamos começar fazendo uma função nomeada simples que retorne todos os
// assinantes da nossa aplicação. Ela deve ser assíncrona, porque utiliza o async
// para fazer a comunicação com o banco de dados. Além disso, por ora, inidique que
// ela vai retornar um array de "qualquer coisa".
//1.a. Qual endpoint você deve utilizar para isso?
/////GET /subscribers/all - https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers/all
//1.b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
/////const main: () => Promise<any> = async (): Promise<any>
//c. Implemente uma função nomeada que faça o que foi pedido.

import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

async function getUsers(): Promise<any[]> {
  const users = await axios.get(`${baseUrl}/subscribers/all`);

  return users.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
}

getUsers().then((res) => {
  console.log(res);
});
// const main: () => Promise<any> = async (): Promise<any> => {

//     try {
//         const users = await axios.get(`${baseUrls}`)
//     }
// }
