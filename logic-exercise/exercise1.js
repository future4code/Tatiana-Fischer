"use strict";
//Entrada: array de 1 a 100 faltando um número
//saída o número faltante
//Ex.: [1, 2, 3, 4,  ... , 45, 46, 48, 49, ... , 100], retorna 47
exports.__esModule = true;
exports.whichMissingNumber = void 0;
exports.whichMissingNumber = function (arr) {
  var expectedSum = 5050;
  var sum = 0;
  for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var num = arr_1[_i];
    sum += num;
  }
  return expectedSum - sum;
};
