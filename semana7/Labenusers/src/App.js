import React from "react";
import SignUpPage from "./components/SignUpPage";
import UsersListPage from "./components/UsersListPage";

class App extends React.Component {
  state = {
    currentPage: "signUp", //o estado começa em signUpPage, ou seja, começa na página de de cadastro do usuários
  };
  changePage = () => {
    if (this.state.currentPage === "signUp") {
      //ao clicar o botão "trocar página", se estiver no estato "signUp" muda para o estado userList, logo muda para a página de lista de usuários
      this.setState({ currentPage: "usersList" });
    } else {
      //se ao clicar no botão trocar de usuário estiver no estado userListPage, muda para o estado signUp, mudando a página para signUpPage
      this.setState({ currentPage: "signUp" });
    }
  };

  render() {
    //aqui somente o botão de trocar de página e a renderização condicional que vai chamar os componentes das páginas

    return (
      <div>
        <button onClick={this.changePage}>Trocar de tela</button>
        <div>
          {this.state.currentPage === "signUp" ? (
            <SignUpPage></SignUpPage>
          ) : (
            <UsersListPage></UsersListPage>
          )}
        </div>
      </div>
    );
  }
}

export default App;

/*AQUI EMBAIXO É COMO EU ESTAVA FAZENDO.
MAS PARA APRENDER A COMPONENTIZAR E USAR TUDO EM INGLÊS
REFIZ DA MESMA FORMA QUE O SÓTER:

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
*/
