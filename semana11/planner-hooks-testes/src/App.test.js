import React from "react";
import { render, fireEvent, wait, getByText } from "@testing-library/react";
import App from "./App";
import axios from "axios";
import userEvent from "@testing-library/user-event";

axios.get = jest.fn().mockResolvedValue({ data: [] });
axios.post = jest.fn().mockResolvedValue();

//testando criar tarefa

const criarTarefa = async (text, day) => {
  const utils = render(<App />);

  const input = utils.getByLabelText(/Nova Tarefa:/i);
  const select = utils.getByLabelText(/Dia:/i);

  await userEvent.type(input, text);
  userEvent.selectOptions(select, [day].value);

  const botaoAdicionar = utils.getByText(/Criar Tarefa/i);

  userEvent.click(botaoAdicionar);

  return utils;
};
