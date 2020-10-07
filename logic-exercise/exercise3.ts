// Input: "()[]{}"/Output: true
//Input: "(]"/Output: false

export const checkParentheses = (str: string): any => {
  const stack = [];
  const arrayStr = str.split("");

  for (let character of arrayStr) {
    if (character === "(" || character === "[" || character === "{") {
      stack.push(character);
    } else {
      const lastOpeningChar = stack.pop();
      if (!lastOpeningChar) {
        return false;
      } else if (
        (lastOpeningChar === "(" && character !== ")") ||
        (lastOpeningChar === "[" && character !== "]") ||
        (lastOpeningChar === "{" && character !== "}")
      ) {
        return false;
      }
    }
  }

  if (stack.length > 0) {
    return false;
  }
  return true;
};
console.log(checkParentheses("()[]{}")); //true
console.log(checkParentheses("(]")); //false
