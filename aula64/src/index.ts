import { Character, validateCharacter } from "./ex1";
import { performAttack } from "./ex3";

// const sheep: Character = {
//   name: "ovelha da sorte",
//   life: 0,
//   defense: 1000,
//   attack: 50,
// };

// console.log(validateCharacter(sheep));

const atacando: Character = {
  attack: 60,
  defense: 100,
  life: 1000,
  name: "atacador",
};

const defendendo: Character = {
  attack: 100,
  defense: 100,
  life: 100,
  name: "defesa",
};

performAttack(atacando, defendendo);
