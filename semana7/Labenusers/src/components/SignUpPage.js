import React from "react";
import axios from "axios";

class SignUpPage extends React.Component {
  state = {
    inputName: "",
    inputEmail: "",
  };

  addNameChange = (event) => {
    //Sóter chamou esse event de handleNameChange
    const newNameValue = event.target.value;

    this.setState({ inputName: newNameValue });
  };

  addEmailChange = (event) => {
    //Sóter chamou esse event de handleEmailChange
    const newEmailValue = event.target.value;

    this.setState({ inputEmail: newEmailValue });
  };

  createNewUser = () => {
    //utiliza os dados da documentação
    //feita pelo back-end POST createUser

    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    const axiosAuthorization = {
      //fez separado pois vai ser utilizada mais de uma vez através dessa variável
      headers: {
        Authorization: "tatiana-fischer-mello",
      },
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        axiosAuthorization
      )
      .then((response) => {
        alert(`Usuário ${this.state.inputName} foi cadastrado com sucesso`);

        this.setState({ inputName: "", inputEmail: "" });
      })
      .catch((error) => {
        alert("Erro ao criar o usuário, verifique seus dados!");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={this.state.inputName}
          onChange={this.addNameChange}
        />

        <label>E-mail:</label>
        <input
          type="email"
          value={this.state.inputEmail}
          onChange={this.addEmailChange}
        />

        <button onClick={this.createNewUser}>Criar Usuário</button>
      </div>
    );
  }
}
export default SignUpPage;
