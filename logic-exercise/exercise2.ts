//entrada: array, um caracter e uma string
//saída: se esse numero estuver no array -> retorna o index que ele está
//se esse número não está no array -> retorna -1

export const indexOfClone = (
  source: string,
  query: any,
  mainIndex: number = 0,
  sourceIndex: number = 0,
  queryIndex: number = 0
): number => {
  if (sourceIndex > source.length) {
    return -1;
  }

  if (queryIndex >= query.length) {
    return -1;
  }

  if (source[sourceIndex] === query[queryIndex]) {
    return indexOfClone(
      source,
      query,
      mainIndex,
      sourceIndex + 1,
      queryIndex + 1
    );
  } else {
    return indexOfClone(source, query, mainIndex + 1, mainIndex + 1, 0);
  }
};
