"use strict";
//entrada: array, um caracter e uma string
//saída: se esse numero estuver no array -> retorna o index que ele está
//se esse número não está no array -> retorna -1
exports.__esModule = true;
exports.indexOfClone = void 0;
exports.indexOfClone = function (source, query, mainIndex, sourceIndex, queryIndex) {
    if (mainIndex === void 0) { mainIndex = 0; }
    if (sourceIndex === void 0) { sourceIndex = 0; }
    if (queryIndex === void 0) { queryIndex = 0; }
    if (sourceIndex > source.length) {
        return -1;
    }
    if (queryIndex >= query.length) {
        return -1;
    }
    if (source[sourceIndex] === query[queryIndex]) {
        return exports.indexOfClone(source, query, mainIndex, sourceIndex + 1, queryIndex + 1);
    }
    else {
        return exports.indexOfClone(source, query, mainIndex + 1, mainIndex + 1, 0);
    }
};
