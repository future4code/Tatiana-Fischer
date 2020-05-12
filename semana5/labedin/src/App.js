import React from 'react'; 
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import euFoto from './imagens/euppp.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Sobre</h2>
        <CardGrande 
          imagem={ euFoto }
          nome="Tatiana Fagundes Fischer" 
          descricao="Olá, meu nome é Tatiana, sou advogada apaixonada por meio ambiente e sustentabilidade, inovação e tecnologia!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454731_960_720.png" 
          titulo="Email:"
          texto="tatiana.fischer@acad.pucrs.br"
        />
      </div>
        
          
      <div className="page-section-container">
        <CardPequeno
          imagem="https://cdn.pixabay.com/photo/2016/10/08/18/35/the-location-of-the-1724293_960_720.png" 
          titulo="Endereço:"
          texto="Rua Condado da Paz, 123, Bairro Floresta"
        />
      </div>
          
        

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>        
        
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eab0c8d3b34bcc0f12f3ddc_avatar_labenu_branco.png" 
          nome="Desenvolvedora Web" 
          descricao="Bootcamp pela Labenu - [abr/2019 - hoje]" 
        />
        
        <CardGrande 
          imagem="https://s.oab.org.br/imagens/marcas-oab/oab/positiva/fb/cfoab-300x300.png" 
          nome="Advogada, OAB nºxxxxx" 
          descricao="Formada pela PUCRS em 2018 - [out/2018 - hoje]" 
        />

          <CardGrande 
          imagem="https://storage.googleapis.com/atados-v3/user-uploaded/images-large/c4410f60-95c3-4aee-90fb-5e89cee4fc39.png" 
          nome="Instituto Lixo Zero Brasil" 
          descricao="Embaixadora Lixo Zero - organizei o evento Semana Lixo Zero Porto Alegre/2019" 
        />

        <CardGrande 
          imagem="https://pbs.twimg.com/profile_images/1121497311715241984/5x-0FoHR_400x400.png" 
          nome="Posto Escola Ajuris" 
          descricao="Exerci, voluntariamente, as funções de conciliadora e de juíza leiga - [ago/2018 - ago/2019]" 
        />

      
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
         <a href="https://www.linkedin.com/in/tatiana-fagundes-fischer-0353301a7/">
           <ImagemButton 
          imagem="https://cdn.pixabay.com/photo/2016/11/18/11/16/social-1834011_960_720.png" 
          texto="Linkedin"
          
        /> </a>   
         
        <a href="https://github.com/TatianaFischer">
        <ImagemButton 
          imagem="https://cdn.pixabay.com/photo/2017/08/05/11/24/logo-2582757_960_720.png" 
          texto="Git Hub" 
        /></a>       
      </div>
     
    </div>
  );
}

export default App;
