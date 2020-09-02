import { User, NACIONALITY, Casino, LOCATION, verifyAge } from "../src/ex3";

test("Usuário brasileiro >= 18 anos, estabelecimento Brasil", () => {
  const brazilianUser: User[] = [
    {
      age: 18,
      nacionality: NACIONALITY.BRAZILIAN,
      name: "lala",
    },
  ];

  const brazilCasino: Casino = {
    location: LOCATION.BRAZIL,
    name: "Brazil Casino",
  };

  const result = verifyAge(brazilCasino, brazilianUser);

  expect(result.brazilians.allowedEntry).toEqual(["lala"]);
});
/////////////////////////////////////////////////////////////////////////////////
test("Usuário americano >= 18 anos, estabelecimento Brasil", () => {
  const americanUser: User = {
    age: 18,
    nacionality: NACIONALITY.AMERICAN,
    name: "lala",
  };

  const brazilCasino: Casino = {
    location: LOCATION.BRAZIL,
    name: "Brazil Casino",
  };

  const result = verifyAge(brazilCasino, [americanUser]);

  expect(result.americans.allowedEntry).toEqual(["lala"]);
});

//////////////////////////////////////////////////////////////////////////////////////

test("Dois usuários brasileiros, dois americanos = 19 anos, estabelecimento EUA", () => {
  const brazilianUser: User = {
    name: "BR",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const americanUser: User = {
    name: "EUA",
    age: 19,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casinoEUA: Casino = {
    name: "Casino EUA",
    location: LOCATION.EUA,
  };

  const result = verifyAge(casinoEUA, [
    brazilianUser,
    brazilianUser,
    americanUser,
    americanUser,
  ]);
  expect(result.brazilians.unallowedEntry).toEqual(["BR", "BR"]);
  expect(result.americans.unallowedEntry).toEqual(["EUA", "EUA"]);
});

///////////////////////////////////////////////////////////////////////////////////////

test("Dois usuários brasileiros, = 19 anos. Dois americanos = 21 anos, estabelecimento EUA", () => {
  const brazilianUser: User = {
    name: "BR",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const americanUser: User = {
    name: "EUA",
    age: 21,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casinoEUA: Casino = {
    name: "Casino EUA",
    location: LOCATION.EUA,
  };

  const result = verifyAge(casinoEUA, [
    brazilianUser,
    brazilianUser,
    americanUser,
    americanUser,
  ]);
  expect(result.americans.allowedEntry).toEqual(["EUA", "EUA"]);
  expect(result.brazilians.unallowedEntry).toEqual(["BR", "BR"]);
});
