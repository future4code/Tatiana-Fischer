function criarTarefa() {
    const input = document.querySelector("input")
    //forma de selecionar o que foi escrito no input

    const novaTarefa = input.value
    if (novaTarefa === "") {
        alert("Digite uma tarefa")
    }

    const diaEscolhido = document.querySelector("#selecionarDia")
    const dia = diaEscolhido.value

    let todasTarefas = document.querySelector("#" + dia + " .listaTarefas")
    todasTarefas.innerHTML += "<li>" + novaTarefa + "</li>"
    
//limpar:
    input.value = ""
}