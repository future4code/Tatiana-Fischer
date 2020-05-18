import React from 'react';




import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;


class Etapa1 extends React.Component {

    render(){
  return (
    <Container>
          <form>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <p>1.Qual o seu nome?</p>
            <input></input>
            <p>2.Qual sua idade?</p>
            <input></input>
            <p>3. Qual seu email?</p>
            <input></input>
            <p>4.Qual a sua escolaridade?</p>
            <select>
                <option>Ensino Médio Incompleto</option>
                <option>Ensino Médio Completo</option>
                <option>Ensino Superior Incompleto</option>
                <option>Ensino Superior Completo</option>
            </select>
         </form>
    </Container>
  );
}}

export default Etapa1;