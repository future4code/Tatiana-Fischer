import React from 'react';






import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;


class Etapa3 extends React.Component {

    render(){
  return (
    <Container>
          <form>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <p>5.Por que você não terminou um curso de graduação?</p>
            <input></input>
            
            <p>6. Você fez algum curso complementar?</p>
            <select>
                <option>Curso técnico</option>
                <option>Curso de inglês</option>
                <option>Não fiz curso complementar</option>
                
            </select>
         </form>
    </Container>
  );
}}

export default Etapa3;