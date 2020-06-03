import React, { useReducer } from "react";
import axios from "axios";

class UsersListPage extends React.Component {
  //pegar cada item do banco de dados, utilizando
  //a documentação do back-end
  state = {
    usersList: [],
  };

  fetchUsersList = () => {
    const axiosAuthorization = {
      headers: {
        Authorization: "tatiana-fischer-mello",
      },
    };

    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosAuthorization
      )
      .then((response) => {
        this.setState({ usersList: response.data });
      });
  };
  render() {
    return (
      <ul>
        {this.state.usersList.mao((user) => {
          return (
            <li>
              {user.name}
              <button onClick={() => this.UserDeletion(user.id)}>x</button>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default UsersListPage;
