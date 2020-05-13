import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'//componente

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario' //componente

class Post extends React.Component {//metodo constructor
  state = {//estado inicial, antes de serem executadas as funções
    curtido: false, //4 propriedades são inicializadas
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
  }//sendo usada quando se clica no coração de curtidas, nesse caso salva no console

  onClickComentario = () => {//sendo usada quando clicar no botão + para  escrever um comentário
    this.setState({
      comentando: !this.state.comentando//não entendi o !
    })
    console.log('Clicou + comentário!')//TESTE
   }

  aoEnviarComentario = () => {//ao clicar o botão enviar comentário
    this.setState({
      comentando: false, 
      numeroComentarios: this.state.numeroComentarios + 1 //registra a soma de mais um comentário
    })
    console.log('Comentou!')//teste - botão enviar comentário
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida} //informações que são chamdas no componente pai, aqui aparecem como props
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post