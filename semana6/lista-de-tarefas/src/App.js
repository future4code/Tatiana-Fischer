import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
  
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  
`

class App extends React.Component {
    state = {
        tarefas: [
       // {
         // id: Date.now(),//gera um id para cada tarefa
         // texto: '',
         // completa: false, //indica se a tarefa está completa
        //}, 
        
      ],
      inputValue: '',
      filter: ''
    };

  componentDidUpdate() {

  };

  componentDidMount() {

  };

  onChangeInput = (event) => { 
    this.setState({ inputValue: event.target.value})
  }

  criaTarefa = () => {//onclick
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    } 
    const novaListaTarefas = [...this.state.tarefas, novaTarefa];
    
     this.setState({ tarefas: novaListaTarefas});
     this.state.inputValue = "";
  }

  selectTarefa = (id) => {//passar por todos ids da array, quando for igual o id do on click esse vai ter que riscar. if tarefa.id === id, tarefa.id = true, colocar em um novo array e dar um set state
  
   const listaTarefasCompletas = this.state.tarefas.map((tarefa, index, array) => {
     if(id === tarefa.id) {
       const tarefasCompletas = {

        ...tarefa,
        completa: !tarefa.completa
       
       }
       console.log(tarefasCompletas)
       return tarefasCompletas
     } else {
       return tarefa
     }
  })

  this.setState({tarefas: listaTarefasCompletas})
  }

  onChangeFilter = (event) => {
    this.setState({ filter: event.target.value})
  }

  render() {
    console.log(this.state.tarefas)
    const listaFiltrada = this.state.tarefas
      .filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa//se estiver como pendente retorna como false o elemento completa
          case 'completas':
            return tarefa.completa//se estiver como completa, retorna como true o completa
          default:
            return true
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
               
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}//() => (serve para que nao clique direto, antes leia o vazio e depois rosee)
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
