import { Client } from "./Client";

const client: Client = {
  name: "Tati",
  registrationNumber: 1,
  consumedEnergy: 30,

  calculateBill: () => {
    return 2;
  },
};

console.log(client);

//exercício 1
//a. name, registrationNumber, consumeEnergy
