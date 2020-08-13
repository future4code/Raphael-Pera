import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeBookEmpty from '../../img/bookmark_empty.svg'
import iconeBookFull from '../../img/bookmark_full.svg'
import iconeShare from '../../img/share-black-24dp.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import { SecaoShare } from '../SecaoShare/SecaoShare'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhando: false,
    shareComent: ``,
  }

  onClickCurtida = () => {
    let numeroCurtidasTemp
    let consoleMsg = ""

    if (!this.state.curtido) {
      numeroCurtidasTemp = this.state.numeroCurtidas + 1
      consoleMsg = 'Curtiu! :)'
    } else {
      numeroCurtidasTemp = this.state.numeroCurtidas - 1
      consoleMsg = 'Descurtiu! :('
    }

    console.log(consoleMsg, this.props.nomeUsuario)
    this.setState({
      numeroCurtidas: numeroCurtidasTemp, curtido: !this.state.curtido
    })
  }

  onClickBookmark = () => {
    this.setState({
      salvo: !this.state.salvo
    })
    console.log(`Salvo = ${!this.state.salvo} (${this.props.nomeUsuario})`)
  }

  onClickShare = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  onShareComentario = (event) => {
    this.setState({shareComent: event.target.value,})
    console.log(`Share > inputValue (posts.js): ${this.state.shareComent}`)
  }

  onClickFacebook = () => {
    console.log(`Post compartilhado no Facebook com a mensagem: ${this.state.shareComent}`)
    this.setState({compartilhando: false, shareComent:``})
  }

  onClickInstagram = () => {
    console.log(`Post compartilhado no Instagram com a mensagem: ${this.state.shareComent}`)
    this.setState({compartilhando: false, shareComent:``})
  }

  onClickTwitter = () => {
    console.log(`Post compartilhado no Twitter com a mensagem: ${this.state.shareComent}`)
    this.setState({compartilhando: false, shareComent:``})
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
    console.log(`Comentário enviado para "${this.props.nomeUsuario}"`)
  }


  render() {
    let iconeCurtida
    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeBook
    if(this.state.salvo) {
      iconeBook = iconeBookFull
    } else {
      iconeBook = iconeBookEmpty
    }

    let componenteComentario
    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteShare
    if (this.state.compartilhando) {
      componenteShare = 
        <SecaoShare
          aoEnviar={this.onShareComentario}
          clickFacebook ={this.onClickFacebook}
          clickInstagram ={this.onClickInstagram}
          clickTwitter ={this.onClickTwitter}
          inputValue = {this.state.shareComent}
        />
    }

    return (
      <div className={'post-container'}>
        <div className={'post-header'}>
          <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
          <p>{this.props.nomeUsuario}</p>
        </div>

        <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

        <div className={'post-footer'}>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={iconeBook}
            onClickIcone={this.onClickBookmark}
            valorContador={''}
          />

          <IconeComContador
            icone={iconeShare}
            onClickIcone={this.onClickShare}
            valorContador={''}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </div>
        {componenteComentario}
        {componenteShare}
      </div>
    )
  }
}

export default Post