import { User, NACIONALITY, Casino, LOCATION, verifyAge } from "../src/ex3";

test("usuário brasileiro, pode entrar no casino Brasil", () => {
  const brazilianUser: User = {
    nacionality: NACIONALITY.BRAZILIAN,
    age: 19,
    name: "brasileiro",
  };

  const casinoBR: Casino = {
    location: LOCATION.BRAZIL,
    name: "cassino BR",
  };

  const result = verifyAge(casinoBR, [brazilianUser]);
  // Verifique que o tamanho do array allowed da
  // propriedade brasilians tenha tamanho menor do que 2 e maior do que 0
  expect(result.brazilians.allowedEntry.length).toBeGreaterThan(0);
  expect(result.brazilians.allowedEntry.length).toBeLessThan(2);
});

////////////////////////////////////////////////////

test("usuário americano, pode entrar no casino Brasil", () => {
  const americanUser: User = {
    nacionality: NACIONALITY.AMERICAN,
    age: 19,
    name: "americano",
  };

  const casinoBR: Casino = {
    location: LOCATION.BRAZIL,
    name: "cassino BR",
  };

  const result = verifyAge(casinoBR, [americanUser]);
  // Verifique que o tamanho do array unallowed da propriedade
  // americans tenha tamanho igual a 0.
  expect(result.americans.unallowedEntry.length).toBe(0);
});

//////////////////////////////////////////////////////

test("usuários brasileiros com 19 anos, e americanos com 21 anos, estabelecimento EUA", () => {
  const brazilianUser: User = {
    nacionality: NACIONALITY.BRAZILIAN,
    age: 19,
    name: "brasileiro",
  };
  const americanUser: User = {
    nacionality: NACIONALITY.AMERICAN,
    age: 21,
    name: "americano",
  };

  const casinoEUA: Casino = {
    location: LOCATION.EUA,
    name: "cassino EUA",
  };

  const result = verifyAge(casinoEUA, [
    brazilianUser,
    brazilianUser,
    americanUser,
    americanUser,
  ]);
  // Verifique que o tamanho do array unallowed da propriedade
  // brasilians tenha tamanho maior do que 1. Verifique que o tamanho
  // do array unallowed da propriedade americans tenha tamanho menor do
  // que 1. Verifique que o tamanho do array allowed da propriedade americans
  // tenha tamanho igual a 2.
  expect(result.americans.unallowedEntry.length).toBeLessThan(1);
  expect(result.brazilians.unallowedEntry.length).toBeGreaterThan(1);
  expect(result.americans.allowedEntry.length).toBe(2);
});
