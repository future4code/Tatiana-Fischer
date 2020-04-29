//Exercícios de interpretação de código
//EXERCÍCIO 1

/*Respostas: 
a. Está fazendo um loop, em que a variável começa em 0,
e vai sofrendo um acrescimento até chegar na condição de ser menor que 15.

b. O valor que aparece no console é de 105.*/


//EXERCÍCIO 2
/*Respostas:
a. O comando .push é responsável pro acrescrntar valores a nova lista (empurrar os valores).

b. No console aparece a nova lista que será: 
0: 10
1: 15
2: 25
3: 30
length: 4

c. Com a variável numero = 3, daria a seguinte lista: (6) [12, 15, 18, 21, 27, 30]
Com variável numero = 4: [12]
*/

//Exercícios de escrita de código
//EXERCÍCIO 3

//a.
let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maxNumeroAtual = array[0]
let minNumeroAtual = array[0]

for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNumeroAtual) 
        maxNumeroAtual = array[i]
}        
    

for (let i = 0; i < array.length; i++) {
if (array[i] < minNumeroAtual) 
        minNumeroAtual = array[i]
        
}
 
    
    


console.log("O maior número é " + maxNumeroAtual + " e o menor é "+ minNumeroAtual)

//c.



