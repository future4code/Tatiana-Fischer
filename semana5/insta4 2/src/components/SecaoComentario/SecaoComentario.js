import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {

	}

	onChangeComentario() {
		console.log()
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.onClickComentario}//se deixar '' não vai dar pra preencher
				onChange={this.onChangeComentario}
			/>
			
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
