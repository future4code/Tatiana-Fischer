//Exercício1-nterpretação de código:
const bool1 = true
const bool2 = false
const bool3 = !bool2 //true

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado) //a.  false

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado) //b.  false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) //c.  true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado) //d.  false

console.log("e. ", typeof resultado) //e.  boolean

/* Exercício2 -interpretação de código:
a. "Arrays são maneiras de se guardar e acessar
mais de uma informação ao mesmo tempo em uma mesma variavrl. 
Para acessar o valor: [i]
let array = [i,i,i]
array = [i]

b. A primeira index de um array é array[0].

c. Para se determinar o tamanho de uma array (número de elementos)
se usa o comando  array.length. 

*/
//exercicio 2, d:
let array
console.log('I. ', array) //I.  undefined

array = null
console.log('II. ', array) //II.  null


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length) //III.  11

let i = 0
console.log('IV. ', array[i], " e ", array[i+1]) //IV.  3  e  4

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor) //V.  19  e  9

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i]) //VI.  3

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC) //VII.  1


/* Exercicio 2 - escrita de codigo*/

const nome = prompt("1.Qual é seu nome?")
const respostaNome ="Tatiana"
console.log(nome)
console.log("Resposta:", respostaNome)

let idade = prompt("2.Qual a sua idade?")
const respostaIdade ="28"
console.log(idade)
console.log("Resposta:", respostaIdade)


const cidade = prompt("3.Qual cidade vocês nasceu?")
const respostaCidade ="Uruguaiana"
console.log(cidade)
console.log("Resposta:", respostaCidade)

let altura = prompt("4.Qual a sua altura?")
const respostaAltura ="1.6"
console.log(altura)
console.log("Resposta:", respostaAltura)


const signo = prompt("5.Qual é o seu signo?") 
const respostaSigno ="Libra"
console.log(signo)
console.log("Resposta:", respostaSigno)



