import React from 'react';




import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  
  flex-direction: column;
  text-align: center;
  background-color: rgb(255,255,255,0.8);
  height: 60vh;
  width: 80vw;
  margin: auto;
`;


class Final extends React.Component {

    render(){
  return (
    <Container>
          <h1>O FORMULÁRIO ACABOU</h1>
          <p>Muito obrigado por participar! Entraremos em contato!</p>
    </Container>
  );
}}

export default Final;