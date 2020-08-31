test("Testing balance greater than value", () => {
  const user: User = {
    name: "Tati",
    balance: 100,
  };

  const result = makePurchase(user, 50);

  expect(result).toEqual({
    ...user,
    balance: 50,
  });
});

test("Testing balance greater than value", () => {
  const user: User = {
    name: "Tati",
    balance: 50,
  };

  const result = makePurchase(user, 50);

  expect(result).toEqual({
    ...user,
    balance: 0,
  });
});

test("Testing balance greater than value", () => {
  const user: User = {
    name: "Tati",
    balance: 30,
  };

  const result = makePurchase(user, 50);

  expect(result).toEqual(undefined);
});
