import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import App from "./App";

//teste 1 - input e botão adicionar
test("testando o input, o botão adicionar post, botão curtir e botão deletar", async () => {
  //preparação
  const { getByPlaceholderText, getByText, getByTestId } = render(<App />);
  ///ao escrever algo no input e apertar adicionar aparecerá na tela:
  const inputPost = getByPlaceholderText(/Novo Post/i);
  const botaoAdicionar = getByText(/Adicionar/i);

  //execução
  fireEvent.change(inputPost, { target: { value: "Hello World" } });
  fireEvent.click(botaoAdicionar);

  //validação

  const post = getByTestId(/inputUsuario/i);

  expect(post).toHaveTextContent("Hello World");

  //preparação - testando botão curtir, se aprtar curtir aparecerá texto decurtit
  const botaoCurtir = getByText(/Curtir/i);

  //execução
  fireEvent.click(botaoCurtir);

  //verificação botão curtir

  expect(botaoCurtir).toHaveTextContent("Descurtir");

  //preparação botão apagar
  const botaoApagar = getByText(/Apagar/i);

  //execução botão apagar
  fireEvent.click(botaoApagar);

  //verificação botao apagar:

  wait(() => {
    expect(post).toBeNull();
  });
});
