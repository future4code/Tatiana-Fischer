import React, { useReducer } from "react";
import axios from "axios";

const axiosAuthorization = {
  headers: {
    Authorization: "tatiana-fischer-mello",
  },
};

class UsersListPage extends React.Component {
  //pegar cada item do banco de dados, utilizando
  //a documentação do back-end
  state = {
    usersList: [],
  };

  componentDidMount() {
    //toda vez que atualizar a página
    this.fetchUsersList();
  }

  fetchUsersList = () => {
    //PEGAR TODOS OS USUÁRIOS ATRAVÉS DO ID----------------
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosAuthorization
      )
      .then((response) => {
        this.setState({ usersList: response.data });
      });
  };
  //DELETAR USUÁRIO ---------------------------------------------
  userDeletion = (userId) => {
    //para deletar seguir a documentação
    axios
      .delete(
        //o link da documentação vai ser acrescentado do id do user mapeado na renderização
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        axiosAuthorization
      )
      .then(() => {
        alert(`O usuário foi deletado com sucesso `);
        this.fetchUsersList();
      })
      .catch((error) => {
        alert("ERRO AO APAGAR USUARIO");
      });
  };

  render() {
    return (
      <ul>
        {this.state.usersList.map((user) => {
          return (
            <li>
              {user.name}
              <button onClick={() => this.userDeletion(user.id)}>x</button>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default UsersListPage;
