import React from 'react'
import './SecaoShare.css'
import { IconeComContador } from '../IconeComContador/IconeComContador'
import iconeFacebook from '../../img/icone-facebook-48px.svg'
import iconeInstagram from '../../img/icone-instagram-48px.svg'
import iconeTwitter from '../../img/icone-twitter-48px.png'


export class SecaoShare extends React.Component {
    state = {
        inputValue: '',
    }

    onChangeComentario = (event) => {
        this.setState({inputValue: event.target.value,})
        console.log(`Share > inputValue: ${this.state.inputValue}`)
    }

    render() {
        return (
            <div className={'share-container'}>
                <input
                    className={'share-input'}
                    placeholder={'Compartilhe seu comentário...'}
                    value={this.state.inputValue}
                    onChange={this.onChangeComentario}
                />
                <div className={'share-icons'}>
                    <IconeComContador
                        icone={iconeFacebook}
                        iconeClasse={'icone-share'}
                        onClickIcone={this.props.clickFacebook}
                        valorContador={''}
                    />
                    <IconeComContador
                        icone={iconeInstagram}
                        iconeClasse={'icone-share'}
                        onClickIcone={this.props.clickInstagram}
                        valorContador={''}
                    />
                    <IconeComContador
                        icone={iconeTwitter}
                        iconeClasse={'icone-share'}
                        onClickIcone={this.props.clickTwitter}
                        valorContador={''}
                    />
                </div>
            </div>
        )
    }
}