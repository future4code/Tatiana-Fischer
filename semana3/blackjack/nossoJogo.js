// EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
  
console.log("Bem vindo ao jogo Blackjack!") 


   if(confirm("Quer iniciar uma nova rodada?")) {
   // o que fazer se o usuário clicar "ok"
      //usuário:
      const cartaUsuario1 = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
      const cartaUsuario2 = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
     
      //pontuação:
      let somaUsuario = (cartaUsuario1.valor + cartaUsuario2.valor)
      console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${somaUsuario} `)

      
      //computador
      const cartaComputador1 = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
      const cartaComputador2 = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
                  
      //pontuação
      let somaComputador = (cartaComputador1.valor + cartaComputador2.valor)
      console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${somaComputador} `)

      //resultado final

      if(somaUsuario > somaComputador) {
         console.log(`O usuário ganhou!`)
      } else if(somaComputador > somaUsuario) {
         console.log(`O computador ganhou!`)
      } else {
         console.log(`Empate!`)
      }
   
   } else {
       // o que fazer se o usuário clicar "cancelar"
         console.log("O jogo acabou")
      }

    

  