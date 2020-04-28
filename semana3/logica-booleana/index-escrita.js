
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



// Exercicio 3 - escrita de codigo//

/*
//prompt para colocar qualquer valor gasto de enrgia//
var quantidade = prompt("Energia gasta em quilowatt-hora?")
var kwatth = 0.05
var calculo = (quantidade*kwatth)
console.log("R$", calculo, "de energia gasta")
*/

//a - gastando 280Kwatt-h// 

var quantidade280 = 280
var calculo280 = (quantidade280*kwatth)
console.log(calculo280,"Kwatt-hora")



//b//

/*
//prompt para colocar qualquer valor de desconto//

var desconto = prompt("Porcentagem de desconto?")
var porcentagemDecimal = 1-(desconto/100)
var valorPromo = calculo*0.85
console.log("R$", valorPromo, "de energia gasta com desconto")
*/

//desconto de 15%// 
var valorPromo15 = calculo*0.85
console.log("R$", valorPromo15, "de energia gasta com desconto")


