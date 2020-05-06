/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
//boas-vindas:
console.log("Bem vindo ao jogo Blackjack!") 


let cartaUsuario1 = comprarCarta()
let cartaUsuario2 = comprarCarta()
let cartaUsuario3 = comprarCarta()
let cartaUsuario4 = comprarCarta()
let cartaUsuario5 = comprarCarta()

let cartaComputador1 = comprarCarta()
let cartaComputador2 = comprarCarta()
let cartaComputador3 = comprarCarta()
let cartaComputador4 = comprarCarta()
let cartaComputador5 = comprarCarta()

//local para armazenar usuário:
arrayUsuarioValor = []
arrayUsuarioTexto = []


//local para armazenar computador:
arrayPcValor = []
arrayPcTexto = []
arrayPcValor.push(comprarCarta())
arrayPcTexto.push(comprarCarta())

//início do jogo:

if(confirm("Quer iniciar uma nova rodada?")) {
   // o que fazer se o usuário clicar "ok"
      //usuário:
         const cartaUsuario1 = comprarCarta(); 
         arrayUsuarioValor.push(comprarCarta())
         arrayUsuarioTexto.push(comprarCarta())
         
         const cartaUsuario2 = comprarCarta();
         arrayUsuarioValor.push(comprarCarta())
         arrayUsuarioTexto.push(comprarCarta())


            //regra dos "A" duplos:

            if (cartaUsuario1 === "A" && cartaUsuario2 == "A") {

               cartaUsuario1 = cartaUsuario3
               cartaUsuario2 = cartaUsuario4
            }

         if(confirm(`Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto}
         . A carta revelada do computador é ${cartaComputador1.texto}. Deseja comprar mais uma carta?`)) {
          
            if(confirm(`Suas cartas são ${cartaUsuario1},${cartaUsuario2},${cartaUsuario4}.
            Deseja comprar mais uma carta?`))
           
            //computador
            if (cartaComputador1 === "A" && cartaComputador2 == "A") {
             cartaComputador1 = cartaComputador3
               cartaComputador2 = cartaComputador4
      }
      


}


