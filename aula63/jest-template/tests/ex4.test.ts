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

test("Um usuário brasileiro, dois americanos = 19 anos, estabelecimento EUA", () => {
  const brazilianUser: User[] = [
    {
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
      name: "lala",
    },
  ];

  const americanUser: User[] = [
    {
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
      name: "lulu",
    },
    {
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
      name: "lele",
    },
  ];

  const americanCasino: Casino = {
    location: LOCATION.EUA,
    name: "EUA Casino",
  };

  const result = verifyAge(americanCasino, brazilianUser);

  expect(result.brazilians.unallowedEntry).toEqual(["lala"]);
  expect(result.americans.unallowedEntry).toEqual(["lulu", "lele"]);
});

///////////////////////////////////////////////////////////////////////////////////////

// test ("Dois usuários brasileiros, = 19 anos. Dois americanos = 21 anos, estabelecimento EUA", () => {

//})
