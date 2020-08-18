import React from 'react'
import styled from 'styled-components'
import { PerguntaAberta } from '../PerguntaAberta/PerguntaAberta'
import { PerguntaFechada } from '../PerguntaFechada/PerguntaFechada'


const EtapaBox = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
`

const ContinuarBtn = styled.button`
    width: 100px;
    padding: 3px 0;
`

export class Etapa1 extends React.Component {
    state = {
        completo: false,
        inputNomeValue:'',
        inputIdadeValue:'',
        inputEmailValue:'',
        selectValue:'',

        verificaNome: false,
        verificaidade: false,
        verificaEmail: false,
        verificaSelect: false,
    }

    onChangeNome = (event) => {this.setState({inputNomeValue: event.target.value})}

    onChangeIdade = (event) => {
        if (Number(event.target.value) || event.target.value === ''){
            this.setState({inputIdadeValue: event.target.value})
        }
    }

    onChangeEmail = (event) => {this.setState({inputEmailValue: event.target.value})}

    onChangeSelect = (event) => {this.setState({selectValue: event.target.value})}

    verificaForm = () => {
        this.state.inputNomeValue === '' ? this.setState({verificaNome: true}) : this.setState({verificaNome: false})
        this.state.inputIdadeValue === '' ? this.setState({verificaIdade: true}) : this.setState({verificaIdade: false})
        this.state.inputEmailValue === '' ? this.setState({verificaEmail: true}) : this.setState({verificaEmail: false})
        this.state.selectValue === '' ? this.setState({verificaSelect: true}) : this.setState({verificaSelect: false})

        if (
            this.state.inputNomeValue !== '' &&
            this.state.inputIdadeValue !== '' &&
            this.state.inputEmailValue !== '' &&
            this.state.selectValue !== '' &&
            this.state.selectValue !== '(selecione uma opção)'
           ){
               this.setState({completo: true})

               if ( this.state.selectValue === 'Ensino Superior Completo' ||
                    this.state.selectValue === 'Ensino Superior Incompleto'){
                    
                    this.props.verificaEtapa2(true)
                } else {
                    this.props.verificaEtapa3(true)
                }
        } else {
            alert('Você deve preencher todas as perguntas obrigatórias antes de continuar')
        }
    }

    render() {


        return(
            <EtapaBox>
                <PerguntaAberta
                    pergunta={'Nome'}
                    onChangeFunc={this.onChangeNome}
                    valor={this.state.inputNomeValue}
                    verifica = {this.state.verificaNome}
                />

                <PerguntaAberta
                    pergunta={'Idade'}
                    onChangeFunc={this.onChangeIdade}
                    valor={this.state.inputIdadeValue}
                    verifica = {this.state.verificaIdade}
                />

                <PerguntaAberta
                    pergunta={'Email'}
                    onChangeFunc={this.onChangeEmail}
                    valor={this.state.inputEmailValue}
                    verifica = {this.state.verificaEmail}
                />

                <PerguntaFechada
                    onChangeFunc={this.onChangeSelect}
                    pergunta={'Qual o grau de escolaridade?'}
                    opcoes={[
                        '(selecione uma opção)',
                        'Ensino Médio Incompleto',
                        'Ensino Médio Completo',
                        'Ensino Superior Incompleto',
                        'Ensino Superior Completo',
                    ]}
                    verifica = {this.state.verificaSelect}
                />
                <ContinuarBtn onClick={this.verificaForm} >Continuar</ContinuarBtn>
            </EtapaBox>
        )
    }
}