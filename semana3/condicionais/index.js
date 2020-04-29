//Exercícios de interpretação de código

        //EXERCÍCIO 1
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)
if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

*/
/* --> RESPOSTAS: O comando realiza o teste a partir do resto da divisão do número por 2, 
se o resto for igual a 0, é par, se não, o número é ímpar.
Se o número for par recebe a mensangem que "Passou no teste". Se não for par, ou seja, é impar,
recebe a mensagem que "Não passou no teste" */



        //EXERCÍCIO 2
/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/

/* --> RESPOSTAS: 

a. O código a cima se chama Switch Case , ele serve como uma simplificação para as condicionais
(if...else), simplificando o caminho para tais condições.

b. A mensagem no console será "O preço da fruta  Maçã  é  R$  5".
c. O preço total seria R$ 24.55.

d."O preço da fruta  pêra  é  R$  5".
*/


        //EXERCÍCIO 3
/*
const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }

}
console.log(mensagem)
*/

/* --> RESPOSTAS: No console vai dar uma mensagem de erro: "Uncaught ReferenceError: mensagem is not defined..."
Isso acontece porque o comenado que imprimi a mensagem no console está fora do escopo pai das condicionais,
ou seja, está fora das chaves {} do blocos das condicionais.*/


//Exercícios de escrita de código:

        //EXERCÍCIO 4:
/*
        let numero1 = prompt("Digite o primeiro número.")
        let numero2 = prompt("Digite o segundo número?")
        let numero3 = prompt("Digite o último número?")
       
        
        let n1 = Number(numero1)
        let n2 = Number(numero2)
        let n3 = Number(numero3)

            if(n1 > n2 && n2 > n3) {
            console.log(n1, n2, n3)
            }

                   
            else if (n1 > n3 && n3 > n2) {
            console.log(n1, n3, n2)
           }
           else if(n2 > n1 && n1 > n3) {
            console.log(n2, n1, n3)
           }

           else if(n2 > n3 && n3 > n1) {
            console.log(n2, n3, n1)
           }

           else if(n3 > n1 && n1 > n2) {
            console.log(n3, n1, n2)
           }

           else if(n3 > n2 && n2 > n1) {
            console.log(n3, n2, n1)
           }

           else if(n1 === n2 && n2 === n3) {
            console.log("Digite pelo menos um número diferente")
           }
*/
       

    
/* --> RESPOSTAS:
a. Nesse programa, caso coloquem dois número iguais não irá aparecer nenhuma mensagem no console, 
pois estaria sem uma condição que prevesse números iguais.

b. Se os três número forem iguais, não aparece nenhuma mensagem no conole
já que não foi prevista a condição de serem iguais

b. */



//EXERCÍCIO 5:
/* --> RESPOSTA:
a. Link diagrama esquemático:
https://drive.google.com/file/d/1F0b60O9gwyqnwnwuhHP1BiH_2HCbeyd8/view?usp=sharing
*/

//b.diagrama:
let perguntaOssos = prompt("O animal escolhido possui ossos? sim ou não")


    if (perguntaOssos === "não") {
        console.log("É invertebrado")
    }
    
        else if (perguntaOssos === "sim") {
          console.log("É vertebrado")
          //pelos
          let perguntaPelos = prompt("O animal escolhido possui pelos? sim ou não")
                
                if (perguntaPelos === "sim") {
                  console.log("É mamífero") 
                  let perguntaRacional = prompt("O animal escolhido é racional? sim ou não") 

                  //racional
                    if (perguntaRacional === "sim") {
                        console.log("É humano") 
                    }

                    else if (perguntaRacional === "não") {
                      console.log("É não humano") 
                    }
                  }//racional
                
                
                else if (perguntaPelos === "não") {
                  console.log("Não é mamífero") 
                  let perguntaPenas = prompt("O animal escolhido tem penas? sim ou não")
                  //penas
                    if (perguntaPenas === "sim") {
                      console.log("É uma ave") 
                    }
                    else if (perguntaPenas === "não") {
                    let perguntaTerrestre = prompt("O animal escolhido é terrestre? sim ou não")
                    
                          //terrestre
                            if (perguntaTerrestre === "não") {
                                console.log("É um peixe") 
                            }

                            else if (perguntaTerrestre === "sim") {
                            let perguntaAquatico = prompt("O animal escolhido passa um tempo no ambiente aquático? sim ou não")

                                  //aquatico

                                  if (perguntaAquatico === "sim") {
                                    console.log("É um anfíbio") 
                                    }
                                  else if (perguntaAquatico === "não") {
                                      console.log("É um réptil") 
                                    }
                                  }//aquatico
                            

                    }//terrestre
          }//penas
}//pelos
