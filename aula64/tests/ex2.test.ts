//exercício 2, testando a função validateCharacter do exercicio 1
//a.
import { Character, validateCharacter } from "../src/ex1";

test("personagem com o nome vazio, retornar falso", () => {
  const sheep: Character = {
    name: "",
    attack: 50,
    defense: 1000,
    life: 1500,
  };

  const result = validateCharacter(sheep);

  expect(result).toBe(false);
});

//gabarito (mais sucinto, sem criar um personagem):
// test("Should return false for empty name", () => {
//     const result = validateCharacter({
//       name: "",
//       life: 1500,
//       strength: 300,
//       defense: 500,
//     });

//     expect(result).toBe(false);
//   });

//////////////////////////////////////////////////////////
//b.
test("vida igual a zero, retornar falso pq é undefined", () => {
  const result = validateCharacter({
    attack: 50,
    defense: 1000,
    life: 0,
    name: "sheep",
  });

  expect(result).toBe(false);
});
////////////////////////////////////////////////////////
//c.
test("ataque igual a 0, retornar falso pq é undefinded", () => {
  const result = validateCharacter({
    attack: 0,
    defense: 1500,
    life: 1500,
    name: "sheep",
  });
  expect(result).toBe(false);
});
/////////////////////////////////////////////////////////
//d.
test("defesa igual a 0, retornar falso pq é undefinded", () => {
  const result = validateCharacter({
    attack: 50,
    defense: 0,
    life: 1500,
    name: "sheep",
  });
  expect(result).toBe(false);
});
////////////////////////////////////////////////////////////
//e.
test("ataque com valor negativo, retornar falso", () => {
  const result = validateCharacter({
    attack: -50,
    defense: 100,
    life: 1500,
    name: "sheep",
  });
  expect(result).toBe(false);
});
////////////////////////////////////////////////////////////
//f.
test("defesa igual a 0, retornar falso", () => {
  const result = validateCharacter({
    attack: 0,
    defense: 0,
    life: 1500,
    name: "sheep",
  });
  expect(result).toBe(false);
});

//////////////////////////////////////////////////////////
//g.

test("todas as informações válidas, retornar true", () => {
  const result = validateCharacter({
    attack: 10,
    defense: 1000,
    life: 1500,
    name: "sheep",
  });
  expect(result).toBe(true);
});
