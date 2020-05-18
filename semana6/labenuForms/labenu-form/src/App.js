import React from 'react';


import Etapa1 from './Components/Etapa1/Etapa1';
import Etapa2 from './Components/Etapa2/Etapa2';
import Etapa3 from './Components/Etapa3/Etapa3';
import Final from './Components/Final/Final';





class App extends React.Component {

  render(){
  return (
  <div>
    <Etapa1/>
    <hr></hr>
    <Etapa2/>
    <hr></hr>
    <Etapa3/>
    <hr></hr>
    <Final/>

    <button>Próxima</button>
  </div>
  );
}}

export default App;