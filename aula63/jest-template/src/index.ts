// import { User, makePurchase } from "./ex1";
import { verifyAge, Casino, User, LOCATION, NACIONALITY } from "./ex3";

//exercício 1 e 2
// const tati: User = {
//   balance: 100,
//   name: "tati",
// };

// console.log(makePurchase(tati, 50));

//execício 3

const casino1: Casino = {
  location: LOCATION.BRAZIL,
  name: "Casino1",
};
const casino2: Casino = {
  location: LOCATION.EUA,
  name: "Casino2",
};
const users: User[] = [
  {
    name: "tati",
    age: 28,
    nacionality: NACIONALITY.BRAZILIAN,
  },

  {
    name: "joão",
    nacionality: NACIONALITY.AMERICAN,
    age: 15,
  },

  {
    name: "julia",
    nacionality: NACIONALITY.BRAZILIAN,
    age: 18,
  },
];
console.log(verifyAge(casino1, users));
