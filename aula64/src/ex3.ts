import { Character, validateCharacter } from "./ex1";

export const performAttack = (attacker: Character, defender: Character) => {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.attack > defender.defense) {
    const oldLife = defender.life;
    const atackMenosDefesa = attacker.attack - defender.defense;
    const newLife = oldLife - atackMenosDefesa;
    console.log("nova vida:", newLife);
  } else {
    const newDefenseOfDefender = (defender.defense -= attacker.attack);
    console.log(
      "o defensor não perdeu vida, mas sua nova força diminuiu para",
      newDefenseOfDefender
    );
  }
};

// //b. inversão de depêndencia:
// export const performAttack = (
//   attacker: Character,
//   defender: Character,
//   validator: (input: Character) => boolean
// ) => {
//   if (!validator(attacker) || !validator(defender)) {
//     throw new Error("Invalid character");
//   }

//   if (attacker.attack > defender.defense) {
//     const oldLife = defender.life;
//     const atackMenosDefesa = attacker.attack - defender.defense;
//     const newLife = oldLife - atackMenosDefesa;
//     console.log("nova vida:", newLife);
//   } else {
//     const newDefenseOfDefender = (defender.defense -= attacker.attack);
//     console.log(
//       "o defensor não perdeu vida, mas sua nova força diminuiu para",
//       newDefenseOfDefender
//     );
//   }
// };
