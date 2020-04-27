/*
// Exercicio 2 - escrita de codigo//

const nome = prompt("Qual é seu nome?")
console.log("1.Qual é seu nome?")
console.log("Resposta:", nome)

const idade = prompt("Qual é sua idade?")
console.log("2.Qual é sua idade?")
console.log("Resposta:", idade)

var altura = prompt("Qual a sua altura?")
console.log("3.Qual a sua altura?")
console.log("Resposta:", altura)

var cidade = prompt("Onde você mora?")
console.log("4.Onde você mora?")
console.log("Resposta:", cidade)

const signo = prompt("Qual o seu signo?")
console.log("5.Qual o seu signo?")
console.log("Resposta:", signo)

*/


// Exercicio 1 - escrita de codigo//

//exercício a//
var f = 77
var k = (f - 32)*5/9 + 273.15

var resultadoA = (f - 32)*5/9 + 273.15
console.log( resultadoA, "k")


//exercício b//

var c = 80
var f = c*9/5 + 32

var resultadoB = c*9/5 + 32
console.log( resultadoB, "ºF")


//exercicio c//

var c = 30

var f = c*9/5 + 32
var k = (f - 32)*5/9 + 273.15

let resultadoCf =  c*9/5 + 32
console.log(resultadoCf, "ºF")

var f = resultadoCf
var resultadoCk = (f - 32)*5/9 + 273.15
console.log(resultadoCk, "k")

//exercicio d//


var c = prompt("Valor em ºC")
var f = c*9/5 + 32
var k = (f - 32)*5/9 + 273.15

let resultadoLivreF =  c*9/5 + 32
console.log(resultadoLivreF, "ºF")

var f = resultadoLivreF
var resultadoLivreK = (f - 32)*5/9 + 273.15

console.log(resultadoLivreF, "ºF")
console.log(resultadoLivreK, "k")