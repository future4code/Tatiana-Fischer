import * as fs from "fs";

const name: string = process.argv[2];
const age: number = Number(process.argv[3]);

console.log(age);
console.log(name);

type person = {
  name: string;
};

function createPerson(name: string): person {
  return { name: name };
}

const myPerson2 = createPerson("Tati");

console.log(myPerson2);
