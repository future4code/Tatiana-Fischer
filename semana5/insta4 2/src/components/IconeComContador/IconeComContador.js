import React from 'react'
import './IconeComContador.css'

export function IconeComContador(props) {
	return <div className={'icon-container'}>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</div>
}
//esse componente respresenta o simbolo do coração e o simbolo de + dos comentários
//além disso é aqui que ocorrem a função onclick ao apertar tais simbolos
//e é aqui que vai iniciar a soma das curtidas e comentários também.