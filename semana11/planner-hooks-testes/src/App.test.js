import React from "react";
import { render, fireEvent, wait, getByText } from "@testing-library/react";
import App from "./App";
import axios from "axios";
import userEvent from "@testing-library/user-event";

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

    ////verificar se o select com os dias renderiza
    test("Select com dias existe na tela", () => {
      const { getByPlaceholderText } = render(<App />);
    });
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

  test('quando o usuário digita e clica em "nova tarefa"', async () => {
    axios.post = jest.fn().mockResolvedValue("post-api");

    const { getByText, getByPlaceholderText } = render(<App />);

    const input = getByPlaceholderText("Qual tarefa?");

    await userEvent.type(input, "TESTE - NOVA TAREFA");

    const button = getByText(/Criar Tarefa/);

    userEvent.click(button);

    expect(axios.post).toHaveBeenCalledTimes(1);

    await wait(() => {
      expect(getByText(/TESTE - NOVA TAREFA/)).toBeInTheDocument();
    });
  });
});
