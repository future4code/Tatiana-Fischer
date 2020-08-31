/********ex. 1 */

interface User {
  name: string;
  balance: number;
}

function makePurchase(user: User, value: number): User | undefined {
  if (user.balance >= value) {
    return {
      ...user,
      balance: user.balance - value,
    };
  }
  return undefined;
}
