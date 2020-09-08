//ENTRADAS DA FUNÇÃO

export enum LOCATION {
  EUA = "EUA",
  BRAZIL = "BRAZIL",
}

export enum NACIONALITY {
  BRAZILIAN = "BRAZILIAN",
  AMERICAN = "AMERICAN",
}

export interface User {
  name: string;
  age: number;
  nacionality: NACIONALITY;
}

export interface Casino {
  name: string;
  location: LOCATION;
}

//SAÍDAS DA FUNÇÃO

export interface Result {
  brazilians: ResultItem;
  americans: ResultItem;
}

export interface ResultItem {
  allowedEntry: string[];
  unallowedEntry: string[];
}
export function verifyAge(casinos: Casino, users: User[]): Result {
  const allowedEntry: User[] = [];
  const unallowedEntry: User[] = [];

  for (const user of users) {
    if (casinos.location === LOCATION.EUA) {
      if (user.age >= 21) {
        allowedEntry.push(user);
      } else {
        unallowedEntry.push(user);
      }
    } else if (casinos.location === LOCATION.BRAZIL) {
      if (user.age >= 18) {
        allowedEntry.push(user);
      } else {
        unallowedEntry.push(user);
      }
    }
  }

  return {
    brazilians: {
      allowedEntry: allowedEntry
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((u) => u.name),
      unallowedEntry: unallowedEntry
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((u) => u.name),
    },
    americans: {
      allowedEntry: allowedEntry
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((u) => u.name),
      unallowedEntry: unallowedEntry
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((u) => u.name),
    },
  };
}
