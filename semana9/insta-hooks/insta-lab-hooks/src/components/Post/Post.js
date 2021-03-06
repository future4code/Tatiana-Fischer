import React, { useState } from "react";

import {
  PostContainer,
  PostHeader,
  UserPhoto,
  PostPhoto,
  PostFooter,
  CommentContainer,
} from "./styles";

import IconeComContador from "../IconeComContador/IconeComContador";
import SecaoComentario from "../SecaoComentario/SecaoComentario";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";

const Post = (props) => {
  const [curtido, setCurtido] = useState(false);
  // Dentro do array, primeiro, vem a variável curtido, que vai guardar
  // o valor do estado inicial. Depois, em segundo, vem a função que será
  // usada para mudar o valor de curtido, quando quisermos. Ela equivale à
  // função this.setState para a propriedade curtido do estado.
  // Além disso, o valor que é passado dentro do Hook useState (false)
  // representa o valor do Estado Inicial.

  const [numeroCurtidas, setNumeroCurtidas] = useState(0);

  const [comentando, setComentando] = useState(false);

  const [numeroComentarios, setNumeroComentarios] = useState(0);

  const [comentarios, setComentarios] = useState([]);

  // Como se trata de uma função, e não mais de um método, é necessário
  // mudar a sintaxe de método para função.
  // Ou seja, basicamente, colocar uma const antes do onClickCurtida.
  const onClickCurtida = () => {
    // verifica se, no estado, cutido é true ou false
    // Na condicional, devem ser retirados todos os "this.state" que existem.

    // Primeiro, no if, no lugar de this.state.curtido, deve vir apenas curtido,
    // ou o nome da variável que guarda o estado na declaração do useState

    // No lugar do this.setState, devem ser chamadas as respectivas funções
    // que mudam o valor de suas propriedades do estado. Ou seja, aqui,
    // chamariamos a função setCurtido() e setNumeroCurtidas(). E como parâmetro
    // delas, passariamos os valores que queremos mudar:
    if (curtido) {
      // se for true, entra nesse caso, e o estado é modificado de acordo com esses comandos:
      setCurtido(!curtido);
      setNumeroCurtidas(numeroCurtidas - 1);
    } else {
      // se for false, entra nesse caso, e o estado é modificado de acordo com esses comandos:
      setCurtido(!curtido);
      setNumeroCurtidas(numeroCurtidas + 1);
    }
  };

  const onClickComentario = () => {
    setComentando(!comentando);
  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario];

    setComentarios(listaDeComentarios);
    setComentando(false);
    setNumeroComentarios(numeroComentarios + 1);
  };

  const iconeCurtida = curtido ? iconeCoracaoPreto : iconeCoracaoBranco;

  const caixaDeComentario = comentando ? (
    <SecaoComentario enviarComentario={enviarComentario} />
  ) : (
    comentarios.map((comentario) => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      );
    })
  );
  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={"Imagem do usuario"} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={"Imagem do post"} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  );
};

export default Post;
