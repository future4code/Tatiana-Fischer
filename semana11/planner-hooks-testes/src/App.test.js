import React from "react";
import { render, fireEvent, wait, cleanup } from "@testing-library/react";
import App from "./App";
import axios from "axios";
import userEvent from "@testing-library/user-event";

afterEach(cleanup); //depois de cada teste desmonta a dom e nao aparece terminal

axios.get = jest.fn().mockResolvedValue({ data: [] });
axios.post = jest.fn().mockResolvedValue();

//testando criar tarefa

const criarTarefa = async () => {
  const utils = render(<App />);

  // Encontra o input pelo texto do placeholder
  const input = utils.getByLabelText(/Nova Tarefa:/i);
  const select = utils.getByLabelText(/Dia:/i);

  // Dispara um evento de "change" para o input. Passa o valor "tarefa teste" para entrar no input
  await userEvent.type(input, "teste");
  userEvent.selectOptions(select, "segunda");

  // Encontra o botão pelo texto "Adicionar". Aqui, usa regex para isso
  const botaoAdicionar = utils.getByText(/Criar Tarefa/i);

  // Clica no botão
  userEvent.click(botaoAdicionar);

  return utils;
};

//TESTES SOBRE A RENDERIZAÇÃO
describe("Renderização inicial", () => {
  //////Verifica se o input existe na renderizaçãp:
  test("Input existe na tela", () => {
    // Renderiza o App, e desestrutura o retorno pegando a função "getByPlaceholderText"
    const { getByPlaceholderText } = render(<App />);

    //encontrar o input pelo placrholder
    const input = getByPlaceholderText("Qual tarefa?");

    //verifica se o input está no documento
    expect(input).toBeInTheDocument();
  });

  //////Verifica se o select existe na renderização

  test("Select de dias da semana existe", () => {
    const { getByPlaceholderText } = render(<App />);

    //verifica se existe uma label com o texto "Dia:" no documento
    expect(getByPlaceholderText(/dia/i)).toBeInTheDocument();
  });

  /////Verificar se o botão existe na renderização

  test("Botão de 'nova tarefa' existe na tela", () => {
    const { getByText } = render(<App />);

    expect(getByText(/Criar Tarefa/)).toBeInTheDocument();
  });
});

describe("Criar uma tarefa", () => {
  test("quando o usuário digita, o texto aparece", async () => {
    const { getByPlaceholderText } = render(<App />);

    //Encontra o input pelo placeholder
    const input = getByPlaceholderText("Qual tarefa?");

    //disparar evento de 'change' para o input
    //Passa o valor 'TESTE - NOVA TAREFA' para entrar no input
    await userEvent.type(input, "TESTE - NOVA TAREFA");

    //verificar se o input possui o value de 'TESTE - NOVA TAREFA'
    expect(input).toHaveValue("TESTE - NOVA TAREFA");
  });

  // it("Criar tarefa ", async () => {
  //   axios.post = jest.fn().mockResolvedValue();

  //   const {
  //     getByPlaceholderText,
  //     getByText,
  //     getByTestId,
  //     queryByText,
  //     getByLabelText,
  //   } = render(<App />);

  //   const input = getByPlaceholderText(/Qual tarefa?/i);

  //   fireEvent.change(input, {
  //     target: {
  //       value: "teste",
  //     },
  //   });

  //   expect(input).toHaveValue("teste");

  //   const select = getByLabelText(/dia/i);

  //   userEvent.selectOptions(select, queryByText("terca").value);

  //   const button = getByText(/Criar Tarefa/i);
  //   fireEvent.click(button);
  //   console.log(select);
  //   expect(axios.post).toHaveBeenCalledWith(
  //     "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-tatiana",
  //     {
  //       text: "teste",
  //       day: "terca",
  //     }
  //   );
  //   await wait(() => expect(getByText("teste")).toBeInTheDocument());
  //   await wait(() => expect(input).toHaveValue(""));
  // });

  // test('quando o usuário digita e clica em "nova tarefa"', async () => {
  //   axios.post = jest.fn().mockResolvedValue();

  //   const {
  //     getByText,
  //     getByPlaceholderText,
  //     getByLabelText,
  //     queryByText,
  //   } = render(<App />);

  //   const input = getByPlaceholderText("Qual tarefa?");

  //   await userEvent.type(input, "TESTE - NOVA TAREFA");

  //   const select = getByLabelText(/Dia/i);
  //   userEvent.selectOptions(select, queryByText("segunda").value);

  //   const button = getByText(/Criar Tarefa/);

  //   userEvent.click(button);

  //   expect(axios.post).toHaveBeenCalleWith(
  //     "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-tatiana",
  //     {
  //       text: "atividade-teste",
  //       day: "segunda",
  //     }
  //   );

  //   await wait(() => {
  //     expect(getByText(/TESTE - NOVA TAREFA/)).toBeInTheDocument();
  //   });

  //   await wait(() => expect(input).toHaveValue(""));
  // });
});
