# exercício 1

## Resposta: 0(n)

`const findFirstRecurringCharacter = (input: string): string | null => { const charHashMap: { [index: string]: boolean } = {}; for (const char of input) { if (charHashMap[char] === true) { return char; } charHashMap[char] = true; } return null; };`

# exercício 2

## Resposta: 0(n)

`
export const func = (
source: string,
comparison: string
): boolean => {
if (
comparison.length > source.length + 1 ||
comparison.length < source.length - 1
) {
return false;
}
let commonCharQuantity = 0;

for (const char of comparison) {
if (source !== comparison) {
commonCharQuantity++;
}
}
return (
commonCharQuantity <= source.length + 1 &&
commonCharQuantity >= source.length - 1
);
};
`

# exercício 3

## Resposta: 0(1)

`
export const replaceMatrixValue = (
matrix: number[][],
rowIndex: number,
columnIndex: number,
value: number
): void => {
if (
matrix[rowIndex] === undefined ||
matrix[rowIndex][columnindex] === undefined
) {
throw new Error("Fora do intervalo da matriz");
}

matrix[rowIndex][columnindex] = value;
};
`

# exercício 4

## Resposta: 0(n²)

//questão difícil
`function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean { for (let i = 0; i < listOfNumbers.length; i++) { if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) { return true; } } return false; }`

# exercício 5

## Resposta: 3,1 = 2, 4
