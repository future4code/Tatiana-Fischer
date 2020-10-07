"use strict";
// Input: "()[]{}"/Output: true
//Input: "(]"/Output: false
exports.__esModule = true;
exports.checkParentheses = void 0;
exports.checkParentheses = function (str) {
    var stack = [];
    var arrayStr = str.split("");
    for (var _i = 0, arrayStr_1 = arrayStr; _i < arrayStr_1.length; _i++) {
        var character = arrayStr_1[_i];
        if (character === "(" || character === "[" || character === "{") {
            stack.push(character);
        }
        else {
            var lastOpeningChar = stack.pop();
            if (!lastOpeningChar) {
                return false;
            }
            else if ((lastOpeningChar === "(" && character !== ")") ||
                (lastOpeningChar === "[" && character !== "]") ||
                (lastOpeningChar === "{" && character !== "}")) {
                return false;
            }
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
};
console.log(exports.checkParentheses("()[]{}")); //true
console.log(exports.checkParentheses("(]")); //false
