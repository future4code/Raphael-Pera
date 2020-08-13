import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';
import iconeExpandMore from './img/expand-more-black-24dp.svg';
import iconeExpandLess from './img/expand-less-black-24dp.svg';


const Formulario = styled.div`
  box-sizing: border-box;
  border: 1px solid rgb(100,100,100);
  background-color: white;
  padding: 10px 20px;
  width: 310px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 0 10px 0;
  position: fixed;
  top: 0;
`

const FormularioTitulo = styled.div`
  margin: 0 0 10px 0;
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
`

const InputField = styled.input`
  box-sizing: border-box;
  padding: 10px 5px;
  margin: 10px 0 0 0;
  width: 100%;
  border: 1px solid rgb(150,150,150);
`

const BotaoNovoPost = styled.button`
  box-sizing: border-box;
  padding: 8px 0;
  background-color: dodgerblue;
  color:white;
  width: 100%;
  border: 1px solid dodgerblue;
  margin: 10px 0 0 0;

  :hover {background-color: rgb(27, 118, 209);}
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario:'paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150',
      },

      {
        nomeUsuario:'bernardo',
        fotoUsuario:'https://picsum.photos/50/51',
        fotoPost:'https://picsum.photos/200/151',
      },

      {
        nomeUsuario:'raphaeloficial',
        fotoUsuario:'https://picsum.photos/50/52',
        fotoPost:'https://picsum.photos/200/152',
      },
    ],

    valorInputNome: 'nomeTESTE',
    valorInputFotoUser: 'https://picsum.photos/50/53',
    valorInputFotoPost: 'https://picsum.photos/200/153',

    postando: false,
  }


  onChangeInputNome = (event) => {
    this.setState({valorInputNome: event.target.value})
  }

  onChangeInputFotoUser = (event) => {
    this.setState({valorInputFotoUser: event.target.value})
  }

  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value})
  }

  onClickExpand = () => {
    this.setState({
      postando: !this.state.postando
    })
  }

  onClickPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUser,
      fotoPost: this.state.valorInputFotoPost,
    }
    const novaArrayPosts = [...this.state.posts, novoPost]
    this.setState({
      posts: novaArrayPosts,
      valorInputNome: '',
      valorInputFotoUser: '',
      valorInputFotoPost: '',
      postando: false,
    })
  }

  render() {
    let componenteNovoPost
    if (this.state.postando) {
      componenteNovoPost =
        (
          <Formulario>
              <FormularioTitulo>
                Novo post
                <img alt={'Icone'} src={iconeExpandLess} onClick={this.onClickExpand}/>
              </FormularioTitulo>
              
              {/* <p>(valores para teste - copie e cole nos campos)</p>
              <p><b>nome:</b> nomeTESTE</p>
              <p>fotoUser: https://picsum.photos/50/53</p>
              <p>fotoPost: https://picsum.photos/200/153</p> */}

              <InputField
                placeholder={'Nome'}
                value={this.state.valorInputNome}
                onChange={this.onChangeInputNome}
              />

              <InputField
                placeholder={'url foto usuário'}
                value={this.state.valorInputFotoUser}
                onChange={this.onChangeInputFotoUser}
              />
              <InputField
                placeholder={'url foto post'}
                value={this.state.valorInputFotoPost}
                onChange={this.onChangeInputFotoPost}
              />
              <BotaoNovoPost
                onClick={this.onClickPost}
              >
                Postar
              </BotaoNovoPost>
            </Formulario>
        )
      } else {
        componenteNovoPost =
        (
          <Formulario>
            <FormularioTitulo>
              Novo post
              <img alt={'Icone'} src={iconeExpandMore} onClick={this.onClickExpand}/>
            </FormularioTitulo>
          </Formulario>
        )
      }

    const listaPosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario = {post.nomeUsuario}
          fotoUsuario = {post.fotoUsuario}
          fotoPost = {post.fotoPost}
        />
      )
    })

    return (
      <div className={'app-container'}>
        {componenteNovoPost}
        {listaPosts}
      </div>
    );
  }
}

export default App;
