export interface Character {
  name: string;
  life: number;
  defense: number;
  attack: number;
}

export const validateCharacter = (input: Character): boolean => {
  if (
    !input.name ||
    input.life === undefined ||
    input.defense === undefined ||
    input.attack === undefined
  ) {
    return false;
  }

  if (input.life <= 0 || input.attack <= 0 || input.defense <= 0) {
    return false;
  }
  return true;
};
