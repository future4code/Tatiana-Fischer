//array dos valores

let listaValores = []

//armazenar valores do input - inputValor, selecionarTipo, inputDescricao.
function cadastrarDespesa() {
    
    event.preventDefault() //não atualizar automaticamente
    let inputValor = document.getElementById('inputValor').value
    let selecionarTipo = document.getElementById('selecionarTipo').value
    let inputDescricao = document.getElementById('inputDescricao').value

    
        let objetoDespesas = {
            valor: inputValor,
            tipo: selecionarTipo,
            descricao: inputDescricao
        }

            if (inputValor === 0 || inputDescricao === "" || selecionarTipo === "") {
                alert(`Preencha os campos em branco`)

            } 

        listaValores.push(objetoDespesas)
        console.log(listaValores)
 
        
        //limpar os inputs
       document.getElementById('inputValor').value = ""
       document.getElementById('inputDescricao').value = ""
       document.getElementById('selecionarTipo').value = ""
}
/*
function filtrar() {
    event.preventDefault() //não atualizar automaticamente
    let selecionarTipo2 = document.getElementById('iselecionarTipo2').value
    let valorMinimo = document.getElementById('valorMinimo').value
    let valorMáximo = document.getElementById('valorMáximo').value

        let objetoFiltrar = {
            tipo: selecionarTipo2,
            minimo: valorMinimo,
            maximo: valorMáximo
        }
            if (selecionarTipo2 === "" || valorMinimo === 0 || valorMáximo=== 0) {
                alert(`Preencha os campos em branco`)

            } 

        
        console.log(filtrar)
 
        
        //limpar os inputs
        let selecionarTipo2 = document.getElementById('iselecionarTipo2').value = ""
        let valorMinimo = document.getElementById('valorMinimo').value = ""
        let valorMáximo = document.getElementById('valorMáximo').value = ""
        
} 
*/