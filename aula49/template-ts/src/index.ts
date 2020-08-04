import { User } from "./User";
import { Customer } from "./Customer";
import JSONFileManager from "./JSONFileManager";

// 1.Analise a classe User. Perceba quais propriedades são públicas e quais são
// privadas. Copie esse código para o seu exercício de hoje; crie uma instância
// dessa classe (dê o nome, email, etc que você quiser) e imprima, no terminal,
// o id, o nome e o email desse usuário

//receber os parâmetros no terminal
const newId: string = process.argv[2];
const newEmail: string = process.argv[3];
const newName: string = process.argv[4];
const newPassword: string = process.argv[5];

//criar uma instância
const newUser: User = new User(newId, newEmail, newName, newPassword);
console.log(newUser);

//a. Seria possível imprimir a senha (password) atrelada a essa instância? Sim
//a. Seria possível imprimir a senha (password) atrelada a essa instância? 1

//   Analise a Customer. Perceba quais propriedades são públicas e quais são
//   privadas. Copie esse código para o seu exercício de hoje e crie uma instância
//   dessa classe (com as informações que você quiser). Atente-se ao fato de que o
//   Customer é uma subclasse (ou classe filha) da classe User. Sabemos disso
//   porque há a palavra extends na declaração da classe Customer; e, em seu
//   construtor, foi usado o super.

//ab. Quantas vezes a mensagem "Chamando o construtor da classe User"
//foi impressa no terminal? Por quê?
const newCustomer = new Customer(
  "5",
  "tati2@TextTrack.com",
  "tati2",
  "1234",
  "master"
);
console.log(newCustomer);

// Agora, imprima todas as informações possíveis da instância que você criou:
// o id, o nome, o email, o valor total de compra (purchaseTotal) e o cartão de
// crédito (creditCard). Perceba que as propriedades públicas da classe pai (User)
// foram "herdadas" pela classe filha (Customer).
//a. Seria possível imprimir a senha (password) atrelada a essa instância?
//Por quê? sim
