// o que fazer se o usuário clicar "ok"
if(confirm("Quer iniciar uma nova rodada?")) {
   
    //usuário:
         const cartaUsuario1 = comprarCarta() // Sorteia uma carta. Por exemplo, o rei de ouros
         const cartaUsuario2 = comprarCarta() // Sorteia uma carta. Por exemplo, o rei de ouros
   
         //armazenar cartas sorteadas:
         cartasSorteadasUsuario = []
         cartasSorteadasUsuario.push(comprarCarta())
   
       
         
         //Regra do A duplo:
         const sortearOutraUsuario = comprarCarta()
         if (cartaUsuario1 === "A" && cartaUsuario2 === "A") {
            cartaUsuario1 = sortearOutraUsuario
            cartaUsuario2 = sortearOutraUsuario
         }
   
    
   //computador
         const cartaComputador1 = comprarCarta() // Sorteia uma carta. Por exemplo, o rei de ouros
         const cartaComputador2 = comprarCarta() // Sorteia uma carta. Por exemplo, o rei de ouros
   
         //armazenar cartas sorteadas:
         cartasSorteadasComputador = []
         cartasSorteadasComputador.push(comprarCarta())
                            
          //Regra do A duplo:
          const sortearOutraPC = comprarCarta()
            if (cartaComputador1 === "A" && cartaComputador2 === "A") {
               cartaComputador1 = sortearOutraPC
               cartaComputador2 = sortearOutraPC
            }
               
            
            
   //primeira carta do computador é revelada, a segunda é oculta:
               let i = 0
               let menssagem = (confirm(`Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto}
                  . A carta revelada do computador é ${cartaComputador1.texto}. Deseja comprar mais uma carta?`)) 
               {//se comprar outra carta:                              
                     //cartasSorteadasUsuario = []
                     //cartasSorteadasUsuario.push(comprarCarta())
                                    
                                    for(let i = 1;  i === 21; i++ ) {
   
                                       somaProgressiva = i
                                       
                                      
                                       if(somaProgressiva < 21){
   
   
                                       }
                                       
                                       
   
                                       
                                    
              
               //se não comprar nova carta
                  else {  //pontuação
                     let somaUsuario = (cartaUsuario1.valor + cartaUsuario2.valor)
                     console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${somaUsuario} `)
                      
                     let somaComputador = (cartaComputador1.valor + cartaComputador2.valor)
                       console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${somaComputador} `) 
                            
   
                     //resultado final
   
                     if(somaUsuario > somaComputador) {
                        console.log(`O usuário ganhou!`)
                     }  else if(somaComputador > somaUsuario) {
                           console.log(`O computador ganhou!`)
                        }  else {
                              console.log(`Empate!`) 
                           }
                  }
    // o que fazer se o usuário clicar "cancelar"   
   }
      else {
            console.log("O jogo acabou")
      }
    