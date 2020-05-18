import React from 'react';





import styled from 'styled-components';

const Container = styled.div`
   display: flex;
  justify-content: center;
  text-align: center;
 
`;


class Etapa2 extends React.Component {

    render(){
  return (
    <Container>
      <form>
       <h1>ETAPA 2 - INFORMAÇÕES DE ENSINO SUPERIOR</h1>
       <p> Qual curso?</p>
       <input></input>
       <p> Qual a unidade de ensino?</p>
       <input></input>
     </form>
    </Container>
  );
}}

export default Etapa2;
