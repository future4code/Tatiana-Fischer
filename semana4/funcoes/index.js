//Exercício de interpretação
//EXERCÍCIO 1
/*
        const minhaFuncao = (quantidade) => {
            const array = []
            for(let i = 0; i < 2; i+=2) {
                    for(let j = 0; j < i; j++) {
                        array.push(j)
                    }
            }
            return array

        }

        //console.log(minhaFuncao(2));
        //console.log(minhaFuncao(5));
        //console.log(minhaFuncao(8));
*/
    //RESPOSTAS:
     //a. O resultado será []
     //b. O resultado será []
     //c. O resultado será []


//EXERCÍCIO 2
    /*    let arrayDeNomes = [5 , 6, 7, 8, 9, 10, 11];

        const funcao = (lista, nome) => {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i] === nome) {
            return i;
            }
        }
        };

        console.log(funcao(arrayDeNomes, 5));//0
        console.log(funcao(arrayDeNomes, 7));//2
        console.log(funcao(arrayDeNomes, 33));//undefined
    */
    //RESPOSTAS:
     //a. 0 , 2 e undefined
     //b. sim, funcionaria, pois as funções aceitam number e string, o que é importa é a posição do elemento.

//EXERCÍCIO 3:
/*function minhaFuncao(array) {
    let resultadoA = 0;
    let resultadoB = 1;
    let arrayFinal = [];
  
    for (let numero of array) {
      resultadoA += numero;
      resultadoB *= numero;
    }
  
    arrayFinal.push(resultadoA);
    arrayFinal.push(resultadoB);
    return arrayFinal;
  }
        
  console.log(metodo([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

  //Essa função é responsável por criar uma nova array, em que terão doi números,
  //um deles é o resultadoA e o outro resultadoB. O resultadoA começa em zero
  //e sempre somo com o número fornecido na array (um número de cada vez). 
  //O resultaB começa no número 1, e sempre é multiplicado pelo número fornecido na array.
  //Por exemplo, se o array iniciar por
*/
