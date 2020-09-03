import { Character, validateCharacter } from "./ex1";

const sheep: Character = {
  name: "ovelha da sorte",
  life: 0,
  defense: 1000,
  attack: 50,
};

console.log(validateCharacter(sheep));
