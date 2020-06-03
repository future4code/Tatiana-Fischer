import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    usuarios: [],
    inputNome: "",
    inputEmail: "",
  };

  componentDidMount = () => {
    this.criarUsuario();
  };
  //lista usuarios
  buscarUsuarios = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "tatiana-fischer-mello",
          },
        }
      )

      .then((resposta) => {
        //alert("Usuários cadastrados");
        console.log(resposta);
        this.setState({ usuarios: resposta.data.result.list });
      })
      .catch((erro) => {
        //alert("Não há usuários cadastrados");
        console.log(erro);
      });
  };

  criarUsuario = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };
    //requisição
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "tatiana-fischer-mello",
          },
        }
      )
      .then((resposta) => {
        //alert("Usuário cadastrado com sucesso");
        console.log(resposta);
        //this.setState({ inputNome: "" });
        //this.pegaUsuarios();
      })
      .catch((erro) => {
        //alert("Impossível criar o usuário");
        console.log(erro);
      });
    console.log(body);
  };

  onChangeInputNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };
  paginaLista = () => {
    return (
      <div>
        {this.state.usuarios.map((usuario) => {
          return <p key={usuario.id}>{this.usuario.name}</p>;
        })}
      </div>
    );
  };
  render() {
    return (
      <div>
        <div>
          <label>Nome:</label>
          <input
            value={this.state.inputNome}
            onChange={this.onChangeInputNome}
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input
            value={this.state.inputEmail}
            onChange={this.onChangeInputEmail}
          />
        </div>
        <div>
          <button onClick={this.criarUsuario}>Salvar</button>
        </div>
        <button onClick={this.paginaLista}>Ir para página de lista</button>
      </div>
    );
  }
}

export default App;
