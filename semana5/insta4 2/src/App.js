import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import style from 'styled-components'

const Formulario = style.div`
width: 22%;
display:flex;
flex-direction:column;
`
const Botão = style.button`
color: "blue";
border: none,
`


class App extends React.Component {

  state = {
    posts: [
      {
          nomeUsuario: 'paulinha',
          fotoUsuario: 'https://picsum.photos/50/50',
          fotoPost: 'https://picsum.photos/200/150'
      },
      {
          nomeUsuario:'caio',
          fotoUsuario: 'https://picsum.photos/50/55',
          fotoPost: 'https://picsum.photos/200/158' 
      },
      {
        nomeUsuario:'amanda',
        fotoUsuario:'https://picsum.photos/50/58',
        fotoPost:'https://picsum.photos/200/155'
      }
    ],

    valorInputNome: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };
  adicionarPost = () => {
    
    const novoPost = {
      nome: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };
    const novoPosts = [...this.state.posts, novoPost];//nome diferente

    this.setState({ posts: novoPosts, valorInputNome:"",valorInputFotoUsuario:"", valorInputFotoPost:""});


  };

  onChangeInputNome = event => {
    this.setState({ valorInputNome: event.target.value })
  };

  onChangeInputFotoUsuario = event => {
    this.setState({ valorInputFotoUsuario: event.target.value})
  };

  onChangeInputFotoPost = event => {
    this.setState({ valorInputFotoPost: event.target.value})
  };



  render() {
    const listaDePosts = this.state.posts.map(post => {
    return (
        <Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
        />      
    );

  });

  return (
    <div className={'app-container'}>
        <Formulario>
        <div>{listaDePosts}</div>
        
         <input        
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"usuário"}
          />

          <input
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"foto perfil"}
          
          />

          <input
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}//sem state
          placeholder={"foto post"}
          
          />
   
      
      <Botão><button onClick={this.adicionarPost}>Postar</button></Botão>
      </Formulario>
    </div>
  )

 
  }
}

export default App;
