import UserAccount from "./UserAccount";
import JSONFileManager from "./JSONFileManager";

const fileManager: JSONFileManager = new JSONFileManager("data.json");

//ler a base de dados
const users = fileManager.readDatabase();

//receber os parâmetros no terminal
const newcpf: string = process.argv[2];
const newname: string = process.argv[3];
const newage: number = Number(process.argv[4]);
const newbalance: number = Number(process.argv[5]);
const newtransactions: number = Number(process.argv[6]);

//criar uma instância

const newUser: UserAccount = new UserAccount(
  newcpf,
  newname,
  newage,
  newbalance,
  newtransactions
);

//adicionar e salvar no array de users
users.push(newUser);
fileManager.writeToDatabase(users);
