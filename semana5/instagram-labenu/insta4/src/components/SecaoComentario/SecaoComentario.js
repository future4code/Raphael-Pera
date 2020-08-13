import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		inputValue: "",
	}

	onChangeComentario = (event) => {
		this.setState({ inputValue: event.target.value })
		console.log(`Comentario > inputValue: ${this.state.inputValue}`)
	}

	render() {
		return (
			<div className={'comment-container'}>
				<input
					className={'input-comentario'}
					placeholder={'Comentário...'}
					value={this.state.inputValue}
					onChange={this.onChangeComentario}
				/>
				<button onClick={this.props.aoEnviar} className={`comment-btn`}>
					Enviar
				</button>
			</div>
		)
	}
}
