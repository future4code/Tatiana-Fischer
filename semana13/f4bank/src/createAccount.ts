//Criem um tipo para representar uma conta para o usuário

import moment from "moment";
import * as fs from "fs";

type user = {
  name: string;
  cpf: number;
  birthday: moment.Moment;
};

const archiveName: string = process.argv[2];
const newUserName: string = process.argv[3];
const newUserCpf: number = Number(process.argv[4]);
const newUserBirthday: string = process.argv[5];

const bufferArchive: Buffer = fs.readFileSync(archiveName);
const textArchive: Account = bufferArchive;
const usersList: Account[] = textArchive ? JSON.parse(textArchive) : [];

function createAccount(
  newUserName: string,
  newUserCpf: number,
  newUserBirthday: string
): void {
  try {
    const cpfNumber = Number(newUserCpf);
    const birthdayNumber = moment(newUserBirthday, "DD/MM/YYYY");

    usersList.push({
      name: newUserName,
      cpf: cpfNumber,
      birthday: birthdayNumber,
    });

    const updateAccountList = JSON.stringify(usersList, null, 2);
    fs.appendFileSync("./data/json", updateAccountList);
    console.log("Conta criada com sucesso");
  } catch (error) {
    console.log("Erro ao ler a base de dados: " + error.message);
  }
}

createAccount(data.json, newUserName, newUserCpf, newUserBirthday);
