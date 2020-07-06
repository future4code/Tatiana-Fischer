import React, { useState, useEffect } from "react";

import "./App.css";
import Axios from "axios";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-tatiana";

const App = () => {
  //////////////estado lista tarefas
  const [tarefas, setTarefas] = useState([]);

  //////////////estado inicial para todos os inputs -name e value inicial
  const [form, setForm] = useState({
    inputTarefas: "",
    dia: "",
  });

  //////////////pegar valores do input
  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  //////////////Pegar tarefas da API:
  useEffect(() => {
    Axios.get(`${baseUrl}`)
      .then((response) => {
        setTarefas(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //////////////criar nova tarefa
  const criarTarefa = (event) => {
    event.preventDefault();
    const body = {
      text: form.inputTarefas,
      day: form.dia,
    };

    Axios.post(`${baseUrl}`, body)
      .then(() => {
        console.log("ok");
      })

      .catch((error) => {
        console.log(error);
      });

    setForm({
      inputTarefas: "",
      dia: "",
    });
    setTarefas([...tarefas, body]);
  };

  //////////////riscar e selecionar tarefa ---> NÃO FIZ AINDA!!!

  return (
    <div>
      <form onSubmit={criarTarefa} id="containerHeader" data-testid="form">
        <label>Nova tarefa:</label>
        <input
          onChange={onChangeInput}
          type="text"
          name="inputTarefas"
          value={form.inputTarefas}
          placeholder="Qual tarefa?"
          pattern="[A-Za-z]{3,30}"
          required
          title="No mínimo 3 e no máximo 30 carctéres."
        />
        <label data-testid={"label-dia"} htmlFor="dia">
          Dia:
        </label>
        <select
          name="dia"
          value={form.dia}
          onChange={onChangeInput}
          id={"dia"}
          required
          placeholder="dia"
        >
          <option value="">Escolha um dia da semana!</option>
          <option value="Segunda">Segunda</option>
          <option value="Terça">terça</option>
          <option value="Quarta">Quarta</option>
          <option value="Quinta">Quinta</option>
          <option value="Sexta">Sexta</option>
          <option value="Sábado">Sábado</option>
          <option value="Domingo">Domingo</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>

      <main>
        <section id="segunda">
          <ul className="listaTarefas">
            Segunda:
            {tarefas.map((tarefa, index) => {
              if (tarefa.day === "Segunda") {
                return (
                  <li data-testid={"item-tarefa"} key={index}>
                    {" "}
                    {tarefa.text}{" "}
                  </li>
                );
              }
            })}
          </ul>
        </section>
        <section id="terca">
          <ul className="listaTarefas">
            Terça:
            {tarefas.map((tarefa, index) => {
              if (tarefa.day === "Terça") {
                return (
                  <li data-testid={"item-tarefa"} key={index}>
                    {" "}
                    {tarefa.text}{" "}
                  </li>
                );
              }
            })}
          </ul>
        </section>
        <section id="quarta">
          <ul className="listaTarefas">
            Quarta:
            {tarefas.map((tarefa, index) => {
              if (tarefa.day === "Quarta") {
                return (
                  <li data-testid={"item-tarefa"} key={index}>
                    {" "}
                    {tarefa.text}{" "}
                  </li>
                );
              }
            })}
          </ul>
        </section>

        <section id="quinta">
          <ul className="listaTarefas">
            Quinta:
            {tarefas.map((tarefa, index) => {
              if (tarefa.day === "Quinta") {
                return (
                  <li data-testid={"item-tarefa"} key={index}>
                    {" "}
                    {tarefa.text}{" "}
                  </li>
                );
              }
            })}
          </ul>
        </section>
        <section id="sexta">
          <ul className="listaTarefas">
            Sexta:
            {tarefas.map((tarefa, index) => {
              if (tarefa.day === "Sexta") {
                return (
                  <li data-testid={"item-tarefa"} key={index}>
                    {" "}
                    {tarefa.text}{" "}
                  </li>
                );
              }
            })}
          </ul>
        </section>
        <section id="sabado">
          <ul className="listaTarefas">
            Sábado:
            {tarefas.map((tarefa, index) => {
              if (tarefa.day === "Sábado") {
                return (
                  <li data-testid={"item-tarefa"} key={index}>
                    {" "}
                    {tarefa.text}{" "}
                  </li>
                );
              }
            })}
          </ul>
        </section>

        <section id="domingo">
          <ul className="listaTarefas">
            Domingo:
            {tarefas.map((tarefa, index) => {
              if (tarefa.day === "Domingo") {
                return (
                  <li data-testid={"item-tarefa"} key={index}>
                    {" "}
                    {tarefa.text}{" "}
                  </li>
                );
              }
            })}
          </ul>
        </section>
      </main>
    </div>
  );
};
export default App;
