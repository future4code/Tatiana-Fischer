import React from 'react';


import Etapa1 from './Components/Etapa1/Etapa1';
import Etapa2 from './Components/Etapa2/Etapa2';
import Etapa3 from './Components/Etapa3/Etapa3';
import Final from './Components/Final/Final';

import styled from 'styled-components';

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Botao = styled.button`
  margin: auto;
  width: 100px;
  padding: 10px;
 
  
`




class App extends React.Component {

  state = {
    etapa: 1,
    
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
        

        case 2:
          return <Etapa2 />
        
          

          case 3:
            return <Etapa3 />
        
           

            case 4:
              return <Final />
        
              
    
      default:
        break;
    }
  }
 
  irParaProximaEtapa = () => {
    if(this.state.etapa) {
      this.setState({ etapa: this.state.etapa + 1 })
      
    }
  }
  render() {
  const desaparecerBotao = this.state.etapa === 4 ? ('') : ( <Botao onClick={this.irParaProximaEtapa}>
    Próxima Etapa 
    </Botao>)
  
  return (
  
/*   
    <Etapa1/>
    <hr></hr>
    <Etapa2/>
    <hr></hr>
    <Etapa3/>
    <hr></hr>
    <Final/> 
    */
   
   <ContainerApp>
     {this.renderizaEtapa()}
     { desaparecerBotao }
    
  </ContainerApp>
  );
}}

export default App;